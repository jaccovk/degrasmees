import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_columns';
  info: {
    displayName: 'Column';
    icon: 'arrowRight';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos', true>;
    text: Schema.Attribute.String;
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

export interface ElementsOption extends Struct.ComponentSchema {
  collectionName: 'components_elements_options';
  info: {
    displayName: 'Option';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPhone extends Struct.ComponentSchema {
  collectionName: 'components_elements_phones';
  info: {
    displayName: 'Phone';
    icon: 'phone';
  };
  attributes: {
    link: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<612345678>;
    number: Schema.Attribute.String;
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

export interface FormChipInputField extends Struct.ComponentSchema {
  collectionName: 'components_form_chip_input_fields';
  info: {
    displayName: 'Chip Input Field';
    icon: 'bulletList';
  };
  attributes: {
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    max: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<2>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface FormDatefield extends Struct.ComponentSchema {
  collectionName: 'components_form_datefields';
  info: {
    displayName: 'Datefield';
    icon: 'calendar';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    max: Schema.Attribute.Date;
    min: Schema.Attribute.Date;
    minAge: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['half', 'full']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'full'>;
    type: Schema.Attribute.Enumeration<['date', 'birthdate']> &
      Schema.Attribute.DefaultTo<'date'>;
  };
}

export interface FormEmailfield extends Struct.ComponentSchema {
  collectionName: 'components_form_emailfields';
  info: {
    description: '';
    displayName: 'Emailfield';
    icon: 'user';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['half', 'full']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'full'>;
    validator: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'>;
  };
}

export interface FormPillGroupField extends Struct.ComponentSchema {
  collectionName: 'components_form_pill_group_fields';
  info: {
    displayName: 'Pill Group Field';
    icon: 'oneToMany';
  };
  attributes: {
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'elements.option', true>;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface FormSectionDivider extends Struct.ComponentSchema {
  collectionName: 'components_form_section_dividers';
  info: {
    displayName: 'Section Divider';
    icon: 'minus';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface FormSelectfield extends Struct.ComponentSchema {
  collectionName: 'components_form_selectfields';
  info: {
    displayName: 'Selectfield';
    icon: 'bulletList';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'elements.option', true>;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['half', 'full']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'full'>;
  };
}

export interface FormTelephonefield extends Struct.ComponentSchema {
  collectionName: 'components_form_telephonefields';
  info: {
    description: '';
    displayName: 'Telephonefield';
    icon: 'phone';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['half', 'full']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'full'>;
    validator: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'[\\+ ]?\\d[\\d ]{7,}'>;
  };
}

export interface FormTextareafield extends Struct.ComponentSchema {
  collectionName: 'components_form_textareafields';
  info: {
    displayName: 'Textareafield';
    icon: 'file';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rows: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    validator: Schema.Attribute.String;
  };
}

export interface FormTextfield extends Struct.ComponentSchema {
  collectionName: 'components_form_textfields';
  info: {
    description: '';
    displayName: 'Textfield';
    icon: 'file';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['half', 'full']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'full'>;
    validator: Schema.Attribute.String;
  };
}

export interface FormUploadfield extends Struct.ComponentSchema {
  collectionName: 'components_form_uploadfields';
  info: {
    description: '';
    displayName: 'Uploadfield';
    icon: 'picture';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    error: Schema.Attribute.String;
    help: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.Media<'images'>;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['half', 'full']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'full'>;
    validator: Schema.Attribute.String;
  };
}

export interface LayoutColors extends Struct.ComponentSchema {
  collectionName: 'components_layout_colors';
  info: {
    description: '';
    displayName: 'colors';
    icon: 'sun';
  };
  attributes: {
    backgroundPrimary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#111'>;
    backgroundSecondary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#fff'>;
    primary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
    primaryHover: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
    secondary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
    secondaryHover: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
    tertiary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
    tertiaryHover: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#ccc'>;
    textPrimary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#000'>;
    textSecondary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'#fff'>;
  };
}

export interface LayoutMeta extends Struct.ComponentSchema {
  collectionName: 'components_layout_metas';
  info: {
    description: '';
    displayName: 'meta';
    icon: 'cast';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface LayoutNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigations';
  info: {
    description: '';
    displayName: 'Navigatie';
    icon: 'search';
  };
  attributes: {
    links: Schema.Attribute.Component<'link.link', true>;
    logo: Schema.Attribute.Media<'images'>;
    logoFooter: Schema.Attribute.Media<'images'>;
    socialLinks: Schema.Attribute.Component<'link.social-link', true>;
  };
}

export interface LayoutPersonaldata extends Struct.ComponentSchema {
  collectionName: 'components_layout_personaldata';
  info: {
    description: '';
    displayName: 'Persoonlijke gegevens';
    icon: 'information';
  };
  attributes: {
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    favicon: Schema.Attribute.Media<'images'>;
    fullName: Schema.Attribute.String;
    googleMapsLink: Schema.Attribute.Text;
    phone: Schema.Attribute.Component<'elements.phone', false>;
    zipCode: Schema.Attribute.String;
  };
}

export interface LinkButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    iconPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    newTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinkSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_link_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
    icon: 'twitter';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionsGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos', true>;
    title: Schema.Attribute.String;
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

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'dashboard';
  };
  attributes: {
    posters: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    size: Schema.Attribute.Enumeration<['small', 'large']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'large'>;
    titles: Schema.Attribute.JSON;
    typed: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsLatestContentTypes extends Struct.ComponentSchema {
  collectionName: 'components_sections_latest_content_types';
  info: {
    displayName: 'LatestContentTypes';
    icon: 'bulletList';
  };
  attributes: {
    displayComponent: Schema.Attribute.Enumeration<['Grid']> &
      Schema.Attribute.Required;
    limit: Schema.Attribute.Integer;
    selectedContentType: Schema.Attribute.Enumeration<['life-chapters']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMediaFloat extends Struct.ComponentSchema {
  collectionName: 'components_sections_media_floats';
  info: {
    description: '';
    displayName: 'MediaFloat';
    icon: 'picture';
  };
  attributes: {
    actions: Schema.Attribute.Component<'link.link', true>;
    content: Schema.Attribute.Blocks;
    float: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    media: Schema.Attribute.Media<'images' | 'videos', true>;
    mediaFit: Schema.Attribute.Enumeration<['contain', 'cover']> &
      Schema.Attribute.DefaultTo<'contain'>;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsStorylineFloat extends Struct.ComponentSchema {
  collectionName: 'components_sections_storyline_floats';
  info: {
    description: '';
    displayName: 'StorylineFloat';
    icon: 'grid';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    float: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    media: Schema.Attribute.Media<'images' | 'videos', true>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1999>;
  };
}

export interface SectionsTextarea extends Struct.ComponentSchema {
  collectionName: 'components_sections_textareas';
  info: {
    displayName: 'Textarea';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'elements.column': ElementsColumn;
      'elements.key-value': ElementsKeyValue;
      'elements.option': ElementsOption;
      'elements.phone': ElementsPhone;
      'elements.row': ElementsRow;
      'form.chip-input-field': FormChipInputField;
      'form.datefield': FormDatefield;
      'form.emailfield': FormEmailfield;
      'form.pill-group-field': FormPillGroupField;
      'form.section-divider': FormSectionDivider;
      'form.selectfield': FormSelectfield;
      'form.telephonefield': FormTelephonefield;
      'form.textareafield': FormTextareafield;
      'form.textfield': FormTextfield;
      'form.uploadfield': FormUploadfield;
      'layout.colors': LayoutColors;
      'layout.meta': LayoutMeta;
      'layout.navigation': LayoutNavigation;
      'layout.personaldata': LayoutPersonaldata;
      'link.button': LinkButton;
      'link.link': LinkLink;
      'link.social-link': LinkSocialLink;
      'sections.form-selector': SectionsFormSelector;
      'sections.gallery': SectionsGallery;
      'sections.grid': SectionsGrid;
      'sections.hero': SectionsHero;
      'sections.latest-content-types': SectionsLatestContentTypes;
      'sections.media-float': SectionsMediaFloat;
      'sections.storyline-float': SectionsStorylineFloat;
      'sections.textarea': SectionsTextarea;
    }
  }
}
