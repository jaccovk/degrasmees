import type { Struct, Schema } from '@strapi/strapi';

export interface SectionsTextarea extends Struct.ComponentSchema {
  collectionName: 'components_sections_textareas';
  info: {
    displayName: 'Textarea';
    icon: 'file';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
  };
}

export interface SectionsStorylineFloat extends Struct.ComponentSchema {
  collectionName: 'components_sections_storyline_floats';
  info: {
    displayName: 'StorylineFloat';
    icon: 'grid';
    description: '';
  };
  attributes: {
    year: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1999>;
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    float: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    media: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SectionsMediaFloat extends Struct.ComponentSchema {
  collectionName: 'components_sections_media_floats';
  info: {
    displayName: 'MediaFloat';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    media: Schema.Attribute.Media<'images' | 'videos', true>;
    float: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    actions: Schema.Attribute.Component<'link.link', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    posters: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    titles: Schema.Attribute.JSON;
    size: Schema.Attribute.Enumeration<['small', 'large']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'large'>;
    typed: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_grids';
  info: {
    displayName: 'Grid';
    icon: 'apps';
  };
  attributes: {
    rows: Schema.Attribute.Component<'elements.row', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    title: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SectionsFormSelector extends Struct.ComponentSchema {
  collectionName: 'components_sections_form_selectors';
  info: {
    displayName: 'Form Selector';
    icon: 'file';
  };
  attributes: {
    form: Schema.Attribute.Relation<
      'oneToOne',
      'api::form-builder.form-builder'
    >;
  };
}

export interface LinkSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_link_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    iconPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
  };
}

export interface LinkButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface LayoutPersonaldata extends Struct.ComponentSchema {
  collectionName: 'components_layout_personaldata';
  info: {
    displayName: 'Persoonlijke gegevens';
    icon: 'information';
    description: '';
  };
  attributes: {
    fullName: Schema.Attribute.String;
    favicon: Schema.Attribute.Media<'images'>;
    email: Schema.Attribute.Email;
    googleMapsLink: Schema.Attribute.Text;
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    phone: Schema.Attribute.Component<'elements.phone', false>;
    zipCode: Schema.Attribute.String;
  };
}

export interface LayoutNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigations';
  info: {
    displayName: 'Navigatie';
    icon: 'search';
    description: '';
  };
  attributes: {
    links: Schema.Attribute.Component<'link.link', true>;
    logo: Schema.Attribute.Media<'images'>;
    socialLinks: Schema.Attribute.Component<'link.social-link', true>;
    logoFooter: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutMeta extends Struct.ComponentSchema {
  collectionName: 'components_layout_metas';
  info: {
    displayName: 'meta';
    icon: 'cast';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
  };
}

export interface LayoutColors extends Struct.ComponentSchema {
  collectionName: 'components_layout_colors';
  info: {
    displayName: 'colors';
    icon: 'sun';
    description: '';
  };
  attributes: {
    primary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
    secondary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
    textPrimary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Schema.Attribute.DefaultTo<'#000'>;
    textSecondary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Schema.Attribute.DefaultTo<'#fff'>;
    backgroundPrimary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Schema.Attribute.DefaultTo<'#111'>;
    backgroundSecondary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Schema.Attribute.DefaultTo<'#fff'>;
    tertiary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
  };
}

export interface FormUploadfield extends Struct.ComponentSchema {
  collectionName: 'components_form_uploadfields';
  info: {
    displayName: 'Uploadfield';
    icon: 'picture';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    help: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    placeholder: Schema.Attribute.Media<'images'>;
  };
}

export interface FormTextfield extends Struct.ComponentSchema {
  collectionName: 'components_form_textfields';
  info: {
    displayName: 'Textfield';
    icon: 'file';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    help: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormTextareafield extends Struct.ComponentSchema {
  collectionName: 'components_form_textareafields';
  info: {
    displayName: 'Textareafield';
    icon: 'file';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    help: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormTelephonefield extends Struct.ComponentSchema {
  collectionName: 'components_form_telephonefields';
  info: {
    displayName: 'Telephonefield';
    icon: 'phone';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    help: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
  };
}

export interface FormEmailfield extends Struct.ComponentSchema {
  collectionName: 'components_form_emailfields';
  info: {
    displayName: 'Emailfield';
    icon: 'user';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    help: Schema.Attribute.String;
  };
}

export interface ElementsRow extends Struct.ComponentSchema {
  collectionName: 'components_elements_rows';
  info: {
    displayName: 'Row';
    icon: 'arrowRight';
  };
  attributes: {
    columns: Schema.Attribute.Component<'elements.column', true>;
  };
}

export interface ElementsPhone extends Struct.ComponentSchema {
  collectionName: 'components_elements_phones';
  info: {
    displayName: 'Phone';
    icon: 'phone';
  };
  attributes: {
    number: Schema.Attribute.String;
    link: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<612345678>;
  };
}

export interface ElementsKeyValue extends Struct.ComponentSchema {
  collectionName: 'components_elements_key_values';
  info: {
    displayName: 'Key Value';
    icon: 'bulletList';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Text;
  };
}

export interface ElementsColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_columns';
  info: {
    displayName: 'Column';
    icon: 'arrowRight';
  };
  attributes: {
    text: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.textarea': SectionsTextarea;
      'sections.storyline-float': SectionsStorylineFloat;
      'sections.media-float': SectionsMediaFloat;
      'sections.hero': SectionsHero;
      'sections.grid': SectionsGrid;
      'sections.gallery': SectionsGallery;
      'sections.form-selector': SectionsFormSelector;
      'link.social-link': LinkSocialLink;
      'link.link': LinkLink;
      'link.button': LinkButton;
      'layout.personaldata': LayoutPersonaldata;
      'layout.navigation': LayoutNavigation;
      'layout.meta': LayoutMeta;
      'layout.colors': LayoutColors;
      'form.uploadfield': FormUploadfield;
      'form.textfield': FormTextfield;
      'form.textareafield': FormTextareafield;
      'form.telephonefield': FormTelephonefield;
      'form.emailfield': FormEmailfield;
      'elements.row': ElementsRow;
      'elements.phone': ElementsPhone;
      'elements.key-value': ElementsKeyValue;
      'elements.column': ElementsColumn;
    }
  }
}
