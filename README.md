[![npm](https://nodei.co/npm/expand-selection.png)](https://nodei.co/npm/expand-selection/)

# expand-selection

[![Dependency Status][david-badge]][david]

Add matching text to the current DOM [selection].

[selection]: https://developer.mozilla.org/en-US/docs/Web/API/Selection

[david]: https://david-dm.org/eush77/expand-selection
[david-badge]: https://david-dm.org/eush77/expand-selection.png

## API

### `expandSelection(string, [opts])`

### `expandSelection([selection], [opts])`

Searches document for `string` or `selection.toString()` and selects matching ranges.

`selection` defaults to `window.getSelection()`.

Returns [Selection] object.

#### `opts.clear`

Clears current selection before updating. Defaults to `false`.

#### `opts.ignoreCase`

Whether to ignore case while attempting a match in a string. Defaults to `false`.

## Install

```
npm install expand-selection
```

## License

MIT
