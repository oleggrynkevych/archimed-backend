'use strict';

/**
 * ethics-code service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ethics-code.ethics-code');
