import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsColumn extends Schema.Component {
  collectionName: 'components_elements_columns';
  info: {
    displayName: 'Column';
    icon: 'arrowRight';
  };
  attributes: {
    text: Attribute.String;
    media: Attribute.Media;
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

export interface LayoutNavigation extends Schema.Component {
  collectionName: 'components_layout_navigations';
  info: {
    displayName: 'Navigatie';
    icon: 'search';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'link.link', true>;
    logo: Attribute.Media;
    socialLinks: Attribute.Component<'link.social-link', true>;
    logoFooter: Attribute.Media;
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
    favicon: Attribute.Media;
    email: Attribute.Email;
    googleMapsLink: Attribute.Text;
    address: Attribute.String;
    city: Attribute.String;
    phone: Attribute.Component<'elements.phone'>;
    zipCode: Attribute.String;
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
    icon: Attribute.Media;
    iconPosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'right'>;
  };
}

export interface LinkSocialLink extends Schema.Component {
  collectionName: 'components_link_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsGallery extends Schema.Component {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media;
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

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    posters: Attribute.Media;
    titles: Attribute.JSON;
    size: Attribute.Enumeration<['small', 'large']> &
      Attribute.Required &
      Attribute.DefaultTo<'large'>;
    typed: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
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
    media: Attribute.Media;
    float: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    actions: Attribute.Component<'link.link', true>;
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
    media: Attribute.Media;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.column': ElementsColumn;
      'elements.key-value': ElementsKeyValue;
      'elements.phone': ElementsPhone;
      'elements.row': ElementsRow;
      'layout.colors': LayoutColors;
      'layout.meta': LayoutMeta;
      'layout.navigation': LayoutNavigation;
      'layout.personaldata': LayoutPersonaldata;
      'link.button': LinkButton;
      'link.link': LinkLink;
      'link.social-link': LinkSocialLink;
      'sections.gallery': SectionsGallery;
      'sections.grid': SectionsGrid;
      'sections.hero': SectionsHero;
      'sections.media-float': SectionsMediaFloat;
      'sections.storyline-float': SectionsStorylineFloat;
      'sections.textarea': SectionsTextarea;
    }
  }
}
