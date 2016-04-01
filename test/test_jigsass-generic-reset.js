'use strict';

/* global assert, fs, path, Sassaby,  */

describe('jigsass-generic-reset', () => {
  const file = path.resolve(__dirname, 'helpers/importer.scss');
  const sassaby = new Sassaby(file);

  describe('jigsass-reset-box-sizing [Mixin]', () => {
    it('Creates expected styles', () => {
      sassaby.standaloneMixin('jigsass-reset-box-sizing')
        .called()
        .equals('html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}');
    });

    it('Only creates styles once', () => {
      sassaby.standaloneMixin('_jig-noop')
        .calledWithBlock(
          '@include jigsass-reset-box-sizing;' +
          '.foo {bar:baz}' +
          '@include jigsass-reset-box-sizing;'
        )
        .equals('html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.foo{bar:baz}');
    });

    it('Does not create styles in silent mode', () => {
      sassaby.standaloneMixin('_jig-noop')
        .calledWithBlock(
          '$jigsass-silent: true !global;' +
          '@include jigsass-reset-box-sizing;'
        )
        .equals('');
    });
  });

  describe('jigsass-reset-box-model [Mixin]', () => {
    it('Creates expected styles', () => {
      sassaby.standaloneMixin('jigsass-reset-box-model')
        .called()
        .equals('* body,* iframe,* h1,* h2,* h3,* h4,* h5,* h6,* p,* blockquote,* pre,* dl,* dd,* ol,* ul,* fieldset,* form,* label,* legend,* table,* caption,* th,* td,* figure,* hr{margin:0;padding:0}');
    });
  });

  describe('jigsass-reset-headlines [Mixin]', () => {
    it('Creates expected styles', () => {
      sassaby.standaloneMixin('jigsass-reset-headlines')
        .called()
        .equals('* h1,* h2,* h3,* h4,* h5,* h6{font-size:100%}');
    });
  });

  describe('jigsass-reset-tables [Mixin]', () => {
    it('Creates expected styles', () => {
      sassaby.standaloneMixin('jigsass-reset-tables')
        .called()
        .equals('* table{border-collapse: collapse; border-spacing: 0}');
    });
  });

  describe('jigsass-reset [Mixin]', () => {
    it('Creates expected styles', () => {
      sassaby.standaloneMixin('jigsass-reset')
        .called()
        .equals('html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}* body,* iframe,* h1,* h2,* h3,* h4,* h5,* h6,* p,* blockquote,* pre,* dl,* dd,* ol,* ul,* fieldset,* form,* label,* legend,* table,* caption,* th,* td,* figure,* hr{margin:0;padding:0}* h1,* h2,* h3,* h4,* h5,* h6{font-size:100%}* table{border-collapse:collapse;border-spacing: 0}');
    });
  });
});
