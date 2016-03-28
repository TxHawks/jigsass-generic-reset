# JigSass Generic Reset
[![NPM version][npm-image]][npm-url]  [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]   

 > A minimal and considered CSS reset

The JigSass reset is meant to compliment `jigsass-generic-normalize` (though it does not depend
on it), and removes margins paddings and font-sizes from selected element, as well as sets the 
default global `box-sizing` to `border-box`.

## Installation

Using npm:

```sh
npm i -S jigsass-generic-reset
```

## Usage
```scss
@import 'path/to/jigsass-generic-reset/scss/index';
```

Like all other JigSass modules, all css output is opt-in, and needs to be explicitly `@includ`ed. 
Simply importing it will not affect your generated css.


**License:** MIT



[npm-image]: https://badge.fury.io/js/jigsass-generic-reset.svg
[npm-url]: https://npmjs.org/package/jigsass-generic-reset

[travis-image]: https://travis-ci.org/TxHawks/jigsass-generic-reset.svg?branch=master
[travis-url]: https://travis-ci.org/TxHawks/jigsass-generic-reset
[daviddm-image]: https://david-dm.org/TxHawks/jigsass-generic-reset.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/TxHawks/jigsass-generic-reset
