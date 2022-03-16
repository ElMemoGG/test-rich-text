import React, {Component} from 'react';
import RichTextEditor from 'react-rte';
import {PropTypes} from 'prop-types'
import convert from 'htmr';
class MyStatefulEditor extends Component {
    constructor(props){
        super(props);
        console.log(this)
        /* this.handleText = this.handleText(this)  */
    }
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
      console.log(value.toString('html'))
    }
  };

  render () {
    /* console.log(this.state.value.toString('html')) */
    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'}
      ],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Normal', style: 'unstyled'},
        {label: 'Heading Large', style: 'header-one'},
        {label: 'Heading Medium', style: 'header-two'},
        {label: 'Heading Small', style: 'header-three'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
      ]
    };
    return (
        <>
      <RichTextEditor
        rootStyle={{height: 'auto', minHeight: '200px'}}
        value={this.state.value}
        onChange={this.onChange}
        toolbarConfig={toolbarConfig}
      />
      <button  onClick={()=> this.props.handleText(this.state.value.toString('html')) }> presioname </button>
      </>
    );
  }
}

export default MyStatefulEditor;