import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutColors extends Schema.Component {
  collectionName: 'components_layout_colors';
  info: {
    displayName: 'colors';
    icon: 'sun';
  };
  attributes: {
    primary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#999'>;
    secondary: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 7;
      }> &
      Attribute.DefaultTo<'#999'>;
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
      'layout.colors': LayoutColors;
      'layout.meta': LayoutMeta;
      'layout.navigation': LayoutNavigation;
      'layout.personaldata': LayoutPersonaldata;
      'link.button': LinkButton;
      'link.link': LinkLink;
      'link.social-link': LinkSocialLink;
      'sections.hero': SectionsHero;
      'sections.media-float': SectionsMediaFloat;
      'sections.storyline-float': SectionsStorylineFloat;
      'sections.textarea': SectionsTextarea;
    }
  }
}
