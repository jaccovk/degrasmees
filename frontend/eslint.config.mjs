import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import prettier from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"

export default [
  ...nextCoreWebVitals,
  prettier,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 120,
          singleQuote: false,
          trailingComma: "es5",
          semi: false,
          tabWidth: 2,
        },
      ],
      indent: ["error", 2, { SwitchCase: 1 }],
    },
  },
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
]
