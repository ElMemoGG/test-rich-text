import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import ReactHtmlParser from 'react-html-parser';
import convert from 'htmr';


class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    const html = '<p>Test <strong>editor</strong> with simple text 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
        <h3>Preview:</h3>
        {/*ReactHtmlParser(draftToHtml(convertToRaw(editorState.getCurrentContent())))*/}
        {convert(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
      </div>
    );
  }
}

export default EditorConvertToHTML;