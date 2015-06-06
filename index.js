'use strict';

var rangeLookup = require('range-lookup');


module.exports = function (query, opts) {
  var selection = window.getSelection();

  if (!arguments.length ||
      (typeof query == 'object' && !(query instanceof Selection))) {
    opts = query;
    query = selection;
  }

  query = query.toString();

  if (opts && opts.clear) {
    selection.removeAllRanges();
  }

  rangeLookup(query)
    .forEach(selection.addRange.bind(selection));

  return selection;
};
