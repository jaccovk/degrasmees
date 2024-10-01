'use strict';

/**
 * form-builder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::form-builder.form-builder');
