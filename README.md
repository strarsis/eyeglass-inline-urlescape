# eyeglass-inline-urlescape
Sass eyeglass module for URL-escaping strings

[![david](https://david-dm.org/strarsis/eyeglass-inline-urlescape.svg)](https://david-dm.org/strarsis/eyeglass-inline-urlescape)

[![NPM](https://nodei.co/npm/eyeglass-inline-urlescape.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eyeglass-inline-urlescape/)

SVG files / background image
-----------------------------
The [eyeglass-inline-svg](https://github.com/strarsis/eyeglass-inline-svg) module provides helpers to directly inline SVG files, you may want to use it instead, this module is used internally by it.
<br>
<br>
<br>


Installation
------------
````
npm install --save-dev eyeglass-inline-urlescape
````


Usage
-----
````
@import 'file-text';
@import 'inline-urlescape';

$text: inline-urlescape(file-text('./loremipsum.txt'));
````


Arguments
---------
### input string
String to URL-escape.
