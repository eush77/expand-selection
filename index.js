'use strict';

var rangeLookup = require('range-lookup');


module.exports = function (query, opts) {
  query = query.toString();
  var selection = window.getSelection();

  if (opts && opts.clear) {
    selection.removeAllRanges();
  }

  rangeLookup(selection.toString())
    .forEach(selection.addRange.bind(selection));

  return selection;
};
