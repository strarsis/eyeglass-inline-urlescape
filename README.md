# eyeglass-inline-urlescape
Sass eyeglass module for URL-escaping strings


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


SVG files / background image
------------
An SVG file string can be URL-escaped using this module to be used as data URI in a background image declaration.
The eyeglass-inline-svg module contains additional helper for convenience.
