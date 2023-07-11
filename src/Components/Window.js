import React, { Component, createRef } from "react";

import { EditorView, basicSetup } from "codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

export default class Window extends Component {
  constructor(props) {
    super();
    this.html = createRef();
    this.css = createRef();
  }

  componentDidMount() {
    let htmlEditor = new EditorView({
      extensions: [basicSetup, html()],
      parent: this.html.current,
    });

    let cssEditor = new EditorView({
      extensions: [basicSetup, css()],
      parent: this.css.current,
    });
  }

  render() {
    const { name } = this.props;
    return (
      <div className="window">
        <header className="header flex container">
          <div className="control-bar flex">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
          <h2 className="name">{name}</h2>
        </header>
        <main ref={this[name]}></main>
      </div>
    );
  }
}
