react-fileprompt
================

A wrapper component for creating buttons / links / whatever clickable that propmt for files

Installation
------------

`npm install react-fileprompt`

Usage
-----

```js
var FilePrompt = require('react-fileprompt')
    React = require('react');

var filesSelected = function(files) {
  // files is an instance of FileList
  for (var i = 0; i < files.length; i++) {
    console.log(files[i].name);
  }
};

React.renderComponent(<FilePrompt onFilesSelected={filesSelected}><button>Click me to prompt for files</button></FilePrompt>, document.body);
```

You can set `multiple` prop for `FilePrompt` to prompt for multiple files.

Author
------

Niklas Närhinen <niklas@narhinen.net>

License
-------

The MIT license
