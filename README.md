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

Please check the [documentation](https://txhawks.github.io/jigsass-generic-reset/) for more 
details on the available mixins and their use.

## Development

It is a best practice for JigSass modules to *not* automatically generate css on `@import`, but 
rather have to user explicitly enable the generation of specific styles from the module.

Contributions in the form of pull-requests, issues, bug reports, etc. are welcome.
Please feel free to fork, hack or modify JigSass Generic Reset in any way you see fit.

#### Writing documentation

Good documentation is crucial for scalability and maintainability. When contributing,
please do make sure that all Sass functionality (functions, mixins, 
variables and placeholder selectors) is well documented.

Documentation is auto-generated using [SassDoc](http://sassdoc.com/)

#### Running tests
`gulp lint` will, well, lint the contents scss files in the `scss` directory.

`gulp test` with run module's test using Mocha and Sassaby.

`gulp tdd` will watch both the Sass files and the test specs for changes, and will
run tests automatically upon them.

#### Writing tests

JigSass Generic Reset tests are written using [Sassaby](https://github.com/ryanbahniuk/sassaby)
and Mocha. Spec files are located in the `test` directory.

Mocha allows us to place a call to `before()` in the root of any test file and it 
will be run once, before all the other tests in every `test_*.js` file. 
We can also `require()` files and assign them to the global object to make them 
available to all `test_*.js` files. 

jigsass-generic-reset uses a file called `helper.js` can be used to set up mocha 
globals requires and `before()`.

In addition to Sassaby's testing functions, jigsass-generic-reset makes a few Sass
functions available to the test suite, for use inside Sassaby tests:

<dl>
  <dt>jig-var-equals($value, $var) -> {boolean}<dt>
  <dd>
		Check if a variable equals a value.<br />
		<strong>$value</strong> {*}: A value to compare the value of $var to.<br />
		<strong>$var</strong> {*}: The variable to test<br />
	</dd>
  <dt>jig-var-type-is($type, $var) -> {boolean}<dt>
  <dd>
		Check if a variable is of a certain type.<br />
		<strong>$type</strong> {string}: A type to compare with the type of $var.<br />
		<strong>$var</strong> {*}: The variable to test<br />
	</dd>
  <dt>jig-map-key-equals($value, $map, $keys...) -> {boolean}<dt>
  <dd>
		Check if a map's key is assigned a cerain value.<br />
		<strong>$value</strong> {*}:  A value to compare the value of a key in $map with.<br />
		<strong>$map</strong> {map}: The map to test.<br />
		<strong>$keys... </strong> {arglist}: A recursive chain of keys.<br />
	</dd>
  <dt>jig-map-key-type-is($type, $map, keys...) -> {boolean}<dt>
  <dd>
		Check if a map's key is of a certain type<br />
		<strong>$type</strong> {string}: A type to compare with the type of $var.<br />
		<strong>$map</strong> {map}: The map to test.<br />
		<strong>$keys... </strong> {arglist}: A recursive chain of keys.<br />
	</dd>
</dl>


## File structure
```bash
┬ ./
│
├─┬ scss/ 
│ └─ index.scss # The module's importable file.
│
├── sassdoc/    # Generated documentation 
│               # of the module's sass features
└─┬─ test/
  │
  ├─┬ helpers/
  │ │
  │ ├── importer.scss       # Used for easilty importing tested scss files
  │ │
  │ └── _test_helpers.scss  # JigSass's assertion helpers,
  │                         # for use inside Sassaby tests.
  │                         
  ├── helper.js              # Used for defining global `before()`
  │                          # functions and requiring modules.
  │                         
  └── test_jigsass-generic-reset  # Specs. Mocha will automatically 
                             # run all javascript files located
                             # in the `test` directory.
```

**License:** MIT



[npm-image]: https://badge.fury.io/js/jigsass-generic-reset.svg
[npm-url]: https://npmjs.org/package/jigsass-generic-reset

[travis-image]: https://travis-ci.org/TxHawks/jigsass-generic-reset.svg?branch=master
[travis-url]: https://travis-ci.org/TxHawks/jigsass-generic-reset
[daviddm-image]: https://david-dm.org/TxHawks/jigsass-generic-reset.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/TxHawks/jigsass-generic-reset
