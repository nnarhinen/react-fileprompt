var React = require('react');

var Fileprompt = React.createClass({
  clickHandler: function(ev) {
    ev.preventDefault();
    var self = this,
        input = document.createElement('input'),
        changeHandler;

    input.type = 'file';
    if (this.props.multiple) input.multiple = true;

    changeHandler = function() {
      self.props.onFilesSelected &&
        self.props.onFilesSelected(input.files);
      input.removeEventListener('change', changeHandler);
      document.body.removeChild(input);
    };
    input.style.display = 'none';
    document.body.appendChild(input);

    input.addEventListener('change', changeHandler);
    input.click();
  },
  render: function() {
    var props = {};
    props.onClick = this.clickHandler;
    return React.cloneElement(React.Children.only(this.props.children), props);
  }
});

module.exports = Fileprompt;
