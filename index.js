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
  opts = opts || {};

  if (opts.clear) {
    selection.removeAllRanges();
  }

  rangeLookup(query, { ignoreCase: opts.ignoreCase })
    .forEach(selection.addRange.bind(selection));

  return selection;
};
