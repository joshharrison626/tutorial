/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

'use strict';

const isTextPath = require('is-text-path');
const path = require('path');

module.exports = {

  /** Standard configuration options **/

  /**
   * Paths to stylesheets. Can refer to modules.
   */
  stylesheets: [
    'foundation-sites/dist/css/foundation.css',
    'font-awesome/css/font-awesome.css',
    'highlight.js/styles/solarized-light.css',
    './css/style.css',
    './css/taop.css',
    './css/a11y.css',
  ],

  /**
   * This map allows you to automatically assign layouts based on file
   * extension.
   */
  defaultLayouts: {
    '.html.md': 'HTMLExercise',
  },

  /**
   * Files matching these patterns are copied verbatim into the "out" directory.
   */
  assets: [
    './statics/**/*',
  ],

  /**
   * List of plugins to load. Plugins provide layouts, content type converters,
   * or other extensions to the exerslide or webpack config.
   *
   * A list of module names (exerslide-plugin-* can be omitted) or paths.
   */
  plugins: [
    'bulletlist-layout',
    'center-layout',
    'column-layout',
    'html-converter',
    'markdown-converter',
  ],

  /** Advanced configuration options **/

  /**
   * Absolute path to save the built presentation.
   */
  out: path.join(__dirname, './docs'),

  /**
   * File path patterns used to watch slides for changes while creating the
   * presentation.
   */
  slidePaths: [
    './slides/*',
    './slides/*/*',
  ],

  /**
   * A function with which you can filter and reorder the file paths matched by
   * the patterns in "slidePaths".
   */
  processSlides(paths) {
    return paths.filter(isTextPath).sort();
  },
};
