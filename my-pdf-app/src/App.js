
import React, { Component } from 'react';
import './App.css';
import PDFViewer from './components/PDFViewer/PDFViewer';
import PDFJSBackend from './backends/pdfjs';
import WebviewerBackend from './backends/webviewer';

class App extends Component {

  constructor() {
    super();
    this.myViewer = React.createRef();
  }

  onButtonClick = () => {
    this.myViewer.current.rotate('clockwise');
    console.log(this.myViewer.current.backend.viewer.instance.searchTextFull('Cisco'))
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.onButtonClick}>Rotate Clockwise</button>

        {/* <PDFViewer ref={this.myViewer} backend={WebviewerBackend} src='/myPDF.pdf'/> */}
        <PDFViewer backend={PDFJSBackend} src='/myPDF.pdf#pagemode=thumbs&search="Cisco"'/>

      </div>
    );
  }
}

export default App;