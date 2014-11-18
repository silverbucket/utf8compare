utf8compare
===========

compare 2 utf8 strings for easy sorting of different languages. currently only german is supported, but it's easy to add other languages (see `dict` var in source)

`npm install utf8compare`

```javascript
   var UTF8Compare = require('utf8compare')('de');

   searchData = searchData.sort(function (a, b) {
    var r = UTF8Compare(a[1], b[1]);
    return r;
  });

```
