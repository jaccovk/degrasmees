import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkSocialLink extends Schema.Component {
  collectionName: 'components_link_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'>;
    iconPosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'right'>;
  };
}

export interface LinkButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface SectionsTextarea extends Schema.Component {
  collectionName: 'components_sections_textareas';
  info: {
    displayName: 'Textarea';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface SectionsStorylineFloat extends Schema.Component {
  collectionName: 'components_sections_storyline_floats';
  info: {
    displayName: 'StorylineFloat';
    icon: 'grid';
    description: '';
  };
  attributes: {
    year: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1999>;
    title: Attribute.String;
    content: Attribute.RichText;
    float: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    media: Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SectionsMediaFloat extends Schema.Component {
  collectionName: 'components_sections_media_floats';
  info: {
    displayName: 'MediaFloat';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    media: Attribute.Media<'images' | 'videos', true>;
    float: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    actions: Attribute.Component<'link.link', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    posters: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    titles: Attribute.JSON;
    size: Attribute.Enumeration<['small', 'large']> &
      Attribute.Required &
      Attribute.DefaultTo<'large'>;
    typed: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface SectionsGrid extends Schema.Component {
  collectionName: 'components_sections_grids';
  info: {
    displayName: 'Grid';
    icon: 'apps';
  };
  attributes: {
    rows: Attribute.Component<'elements.row', true>;
    title: Attribute.String;
  };
}

export interface SectionsGallery extends Schema.Component {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SectionsFormSelector extends Schema.Component {
  collectionName: 'components_sections_form_selectors';
  info: {
    displayName: 'Form Selector';
    icon: 'file';
  };
  attributes: {
    form: Attribute.Relation<
      'sections.form-selector',
      'oneToOne',
      'api::form-builder.form-builder'
    >;
  };
}

export interface LayoutPersonaldata extends Schema.Component {
  collectionName: 'components_layout_personaldata';
  info: {
    displayName: 'Persoonlijke gegevens';
    icon: 'information';
    description: '';
  };
  attributes: {
    fullName: Attribute.String;
    favicon: Attribute.Media<'images'>;
    email: Attribute.Email;
    googleMapsLink: Attribute.Text;
    address: Attribute.String;
    city: Attribute.String;
    phone: Attribute.Component<'elements.phone'>;
    zipCode: Attribute.String;
  };
}

export interface LayoutNavigation extends Schema.Component {
  collectionName: 'components_layout_navigations';
  info: {
    displayName: 'Navigatie';
    icon: 'search';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'link.link', true>;
    logo: Attribute.Media<'images'>;
    socialLinks: Attribute.Component<'link.social-link', true>;
    logoFooter: Attribute.Media<'images'>;
  };
}

export interface LayoutMeta extends Schema.Component {
  collectionName: 'components_layout_metas';
  info: {
    displayName: 'meta';
    icon: 'cast';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
  };
}

export interface LayoutColors extends Schema.Component {
  collectionName: 'components_layout_colors';
  info: {
    displayName: 'colors';
    icon: 'sun';
    description: '';
  };
  attributes: {
    primary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#ccc'>;
    secondary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#ccc'>;
    textPrimary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#000'>;
    textSecondary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#fff'>;
    backgroundPrimary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#111'>;
    backgroundSecondary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#fff'>;
    tertiary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#ccc'>;
  };
}

export interface FormUploadfield extends Schema.Component {
  collectionName: 'components_form_uploadfields';
  info: {
    displayName: 'Uploadfield';
    icon: 'picture';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    help: Attribute.String;
    required: Attribute.Boolean;
    placeholder: Attribute.Media<'images'>;
  };
}

export interface FormTextfield extends Schema.Component {
  collectionName: 'components_form_textfields';
  info: {
    displayName: 'Textfield';
    icon: 'file';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    help: Attribute.String;
    required: Attribute.Boolean;
  };
}

export interface FormTextareafield extends Schema.Component {
  collectionName: 'components_form_textareafields';
  info: {
    displayName: 'Textareafield';
    icon: 'file';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    help: Attribute.String;
    required: Attribute.Boolean;
  };
}

export interface FormTelephonefield extends Schema.Component {
  collectionName: 'components_form_telephonefields';
  info: {
    displayName: 'Telephonefield';
    icon: 'phone';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    help: Attribute.String;
    required: Attribute.Boolean;
  };
}

export interface FormFormSelector extends Schema.Component {
  collectionName: 'components_form_form_selectors';
  info: {
    displayName: 'Form Selector';
    icon: 'file';
  };
  attributes: {
    form: Attribute.Relation<
      'form.form-selector',
      'oneToOne',
      'api::form-builder.form-builder'
    >;
  };
}

export interface FormEmailfield extends Schema.Component {
  collectionName: 'components_form_emailfields';
  info: {
    displayName: 'Emailfield';
    icon: 'user';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    required: Attribute.Boolean;
    help: Attribute.String;
  };
}

export interface ElementsRow extends Schema.Component {
  collectionName: 'components_elements_rows';
  info: {
    displayName: 'Row';
    icon: 'arrowRight';
  };
  attributes: {
    columns: Attribute.Component<'elements.column', true>;
  };
}

export interface ElementsPhone extends Schema.Component {
  collectionName: 'components_elements_phones';
  info: {
    displayName: 'Phone';
    icon: 'phone';
  };
  attributes: {
    number: Attribute.String;
    link: Attribute.Integer & Attribute.DefaultTo<612345678>;
  };
}

export interface ElementsKeyValue extends Schema.Component {
  collectionName: 'components_elements_key_values';
  info: {
    displayName: 'Key Value';
    icon: 'bulletList';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    value: Attribute.Text;
  };
}

export interface ElementsColumn extends Schema.Component {
  collectionName: 'components_elements_columns';
  info: {
    displayName: 'Column';
    icon: 'arrowRight';
  };
  attributes: {
    text: Attribute.String;
    media: Attribute.Media<'images' | 'videos', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.social-link': LinkSocialLink;
      'link.link': LinkLink;
      'link.button': LinkButton;
      'sections.textarea': SectionsTextarea;
      'sections.storyline-float': SectionsStorylineFloat;
      'sections.media-float': SectionsMediaFloat;
      'sections.hero': SectionsHero;
      'sections.grid': SectionsGrid;
      'sections.gallery': SectionsGallery;
      'sections.form-selector': SectionsFormSelector;
      'layout.personaldata': LayoutPersonaldata;
      'layout.navigation': LayoutNavigation;
      'layout.meta': LayoutMeta;
      'layout.colors': LayoutColors;
      'form.uploadfield': FormUploadfield;
      'form.textfield': FormTextfield;
      'form.textareafield': FormTextareafield;
      'form.telephonefield': FormTelephonefield;
      'form.form-selector': FormFormSelector;
      'form.emailfield': FormEmailfield;
      'elements.row': ElementsRow;
      'elements.phone': ElementsPhone;
      'elements.key-value': ElementsKeyValue;
      'elements.column': ElementsColumn;
    }
  }
}
