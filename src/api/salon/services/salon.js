'use strict';

/**
 * salon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::salon.salon');
