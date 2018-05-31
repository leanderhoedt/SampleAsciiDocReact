import React, { Component } from 'react';
import './App.css';
import 'asciidoctor.js/dist/css/asciidoctor.css';
let asciidoctor = require('asciidoctor.js')();
import index from '!asciidoc-loader!./index.adoc';

class App extends Component {
  render() {

    let converted = asciidoctor.convert(index, { safe: 'safe'});
    return (
      <div className="App">
        <div
          ref={(root) => { this.root = root; }}
          dangerouslySetInnerHTML={{ __html: converted }} />
      </div>
    );
  }
}

export default App;
