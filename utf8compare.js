/*!
 * UTF8compare
 *   version 1.0.1
 *   http://github.com/silverbucket/utf8compare
 *
 * Developed and Maintained by:
 *   Nick Jennings <nick@silverbucket.net> 2014
 *
 * utf8compare is released under the LGPL (see LICENSE).
 *
 */

(function () {

  var alpha = function (alphabet, dir, caseSensitive) {
    dir = dir || 1;

    function compareLetters(a, b) {
      var ia = alphabet.indexOf(a);
      var ib = alphabet.indexOf(b);
      if (ia === -1 || ib === -1) {
        if (ib !== -1)
          return a > 'a';
        if (ia !== -1)
          return 'a' > b;
        return a > b;
      }
      return ia > ib;
    }

    return function (a, b) {
      var pos = 0;
      var min = Math.min(a.length, b.length);
      caseSensitive = caseSensitive || false;
      if (!caseSensitive) {
        a = a.toLowerCase();
        b = b.toLowerCase();
      }
      while (a.charAt(pos) === b.charAt(pos) && pos < min) { pos++; }
      return compareLetters(a.charAt(pos), b.charAt(pos)) ? dir : -dir;
    };
  };

  function assert(bCondition, sErrorMessage) {
    if (!bCondition) {
      throw new Error(sErrorMessage);
    }
  }

  var dict = {
    'de': ' -/aäbcdefghijklmnoöpqrsßtuüvwxyz'
  };

  function init(lang) {
    return alpha(dict[lang]);
  }

  if (typeof window === 'object') {
    window.UTF8Compare = init;
  } else if (typeof (define) === 'function' && define.amd) {
    define([], function () { return init; });
  } else {
    try {
      module.exports = init;
    } catch (e) {}
  }

})();
