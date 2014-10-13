var cloneWithProps = require('react-bootstrap/utils/cloneWithProps'), // @see https://github.com/facebook/react/issues/1906
    React = require('react');

var Fileprompt = module.exports = React.createClass({
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
    };

    input.addEventListener('change', changeHandler);
    input.click();
  },
  render: function() {
    var props = {};
    props.onClick = this.clickHandler;
    return cloneWithProps(React.Children.only(this.props.children), props);
  }
});
