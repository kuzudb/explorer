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
}

const g6Utils = new G6Utils();
export default g6Utils;
