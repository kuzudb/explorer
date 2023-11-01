class PlaceholderContentWidget {
  static ID = "editor.widget.placeholderHint";

  constructor(placeholder, editor) {
    this.placeholder = placeholder;
    this.editor = editor;
    // register a listener for editor code changes
    editor.onDidChangeModelContent(() => this.onDidChangeModelContent());
    // ensure that on initial load the placeholder is shown
    this.onDidChangeModelContent();
  }

  onDidChangeModelContent() {
    if (this.editor.getValue() === "") {
      this.editor.addContentWidget(this);
    } else {
      this.editor.removeContentWidget(this);
    }
  }

  getId() {
    return PlaceholderContentWidget.ID;
  }

  getDomNode() {
    if (!this.domNode) {
      this.domNode = document.createElement("div");
      this.domNode.style.width = "max-content";
      this.domNode.textContent = this.placeholder;
      this.domNode.style.fontStyle = "italic";
      this.domNode.style.color = "#6c757d";
      this.domNode.style.pointerEvents = "none";
      this.editor.applyFontInfo(this.domNode);
    }

    return this.domNode;
  }

  getPosition() {
    const monaco = window.Monaco;
    if (!monaco) {
      return {
        position: { lineNumber: 1, column: 1 },
        preference: [1],
      };
    }
    return {
      position: { lineNumber: 1, column: 1 },
      preference: [monaco.editor.ContentWidgetPositionPreference.EXACT],
    };
  }

  dispose() {
    this.editor.removeContentWidget(this);
  }
}

export default PlaceholderContentWidget;
