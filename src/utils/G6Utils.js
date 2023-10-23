class G6Utils {
  constructor() {
    this.delta = 0.05; // used for zooming, copied from G6
    this.zoomSensitivity = 2; // used for zooming, copied from G6
  }

  // Toolbar actions copied from https://github.com/antvis/G6/blob/abca3c0845182c636b43163257f9439aa3d7e738/packages/plugin/src/toolBar/
  // This ensures the same behavior as the original toolbar in G6 while
  // allowing us to customize the position and style of the toolbar.
  zoomIn(graph) {
    if (!graph) {
      return;
    }
    const currentZoom = graph.getZoom();
    const ratioOut = 1 / (1 - this.delta * this.zoomSensitivity);
    const maxZoom = graph.get("maxZoom");
    if (ratioOut * currentZoom > maxZoom) {
      return;
    }
    graph.zoomTo(currentZoom * ratioOut);
  }

  zoomOut(graph) {
    if (!graph) {
      return;
    }
    const currentZoom = graph.getZoom();
    const ratioIn = 1 - this.delta * this.zoomSensitivity;
    const minZoom = graph.get("minZoom");
    if (ratioIn * currentZoom < minZoom) {
      return;
    }
    graph.zoomTo(currentZoom * ratioIn);
  }

  fitToView(graph) {
    if (!graph) {
      return;
    }
    graph.fitView([20, 20]);
  }

  actualSize(graph) {
    if (!graph) {
      return;
    }
    graph.zoomTo(1);
  }

  // This function is copied from http://g6-v3-2.antv.vision/en/examples/shape/label
  fittingString = (str, maxWidth, fontSize) => {
    const calcStrLen = (str) => {
      let len = 0;
      for (let i = 0; i < str.length; ++i) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
          len += 1;
        } else {
          len += 2;
        }
      }
      return len;
    };
    const fontWidth = fontSize * 1.3;
    maxWidth = maxWidth * 2;
    const width = calcStrLen(str) * fontWidth;
    const ellipsis = "…";
    if (width > maxWidth) {
      const actualLen = Math.floor((maxWidth - 10) / fontWidth);
      const result = str.substring(0, actualLen) + ellipsis;
      return result;
    }
    return str;
  };
}

const g6Utils = new G6Utils();
export default g6Utils;
