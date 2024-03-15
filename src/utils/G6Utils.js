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

  calcStrLen(str) {
    let len = 0;
    for (let i = 0; i < str.length; ++i) {
      if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
        len += 1;
      } else {
        len += 2;
      }
    }
    return len;
  }

  calcTextWidth(str, fontSize) {
    const fontWidth = fontSize * 1.3;
    return this.calcStrLen(str) * fontWidth;
  }

  // This function is copied from http://g6-v3-2.antv.vision/en/examples/shape/label
  fittingString(str, maxWidth, fontSize) {
    maxWidth = maxWidth * 2;
    const fontWidth = fontSize * 1.3;
    const width = this.calcTextWidth(str, fontSize);
    const ellipsis = "…";
    if (width > maxWidth) {
      const actualLen = Math.floor((maxWidth - 10) / fontWidth);
      const result = str.substring(0, actualLen) + ellipsis;
      return result;
    }
    return str;
  }

  shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    R = Math.round(R);
    G = Math.round(G);
    B = Math.round(B);

    let RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
    let GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
    let BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
  }
}

const g6Utils = new G6Utils();
export default g6Utils;
