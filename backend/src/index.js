'use strict'

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({strapi}) {
    try {
      // console.log(result) // TODO
      const sharp = require('sharp')

      // Hulpfunctie om streams om te zetten naar een bewerkbare buffer
      async function streamToBuffer(stream) {
        const chunks = []
        return new Promise((resolve, reject) => {
          stream.on('data', (chunk) => chunks.push(chunk))
          stream.on('error', (err) => reject(err))
          stream.on('end', () => resolve(Buffer.concat(chunks)))
        })
      }

      if (sharp) {
        sharp.cache(false)
        strapi.db.lifecycles.subscribe({
          models: ['plugin::upload.file'],
          async beforeCreate(event) {
            const {data} = event.params

            // Alleen afbeeldingen verwerken (geen PDF/Zip)
            if (data.mime && data.mime.startsWith('image/')) {
              try {
                // Haal de buffer van het geüploade bestand op
                const buffer = data.getStream
                  ? await streamToBuffer(data.getStream())
                  : data.buffer
                console.log("buffer data", buffer)

                if (!buffer) return

                // Verklein de afbeelding naar max 1920px breedte
                const resizedBuffer = await sharp(buffer)
                  .resize(1920, null, {withoutEnlargement: true}) // Nooit vergroten
                  .toBuffer()
                console.log(resizedBuffer)

                // Overschrijf de data voor Strapi
                const metadata = await sharp(resizedBuffer).metadata()
                data.buffer = resizedBuffer
                data.size = resizedBuffer.length / 1024 // Grootte in KB
                data.width = metadata.width
                data.height = metadata.height
                console.log('size', data.size)
                console.log('metadata', metadata)

                console.log(`Afbeelding verkleind: ${data.name} nu ${Math.round(data.size)} KB`)
              } catch (err) {
                console.error('Fout bij verkleinen afbeelding:', err)
              }
            }
          },
        })
      }
    } catch (error) {
      console.log(error)
    }
  },
}
