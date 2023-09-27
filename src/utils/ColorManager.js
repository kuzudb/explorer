import randomcolor from "randomcolor";

class ColorManager {
  constructor() {
    this.colorPalette = [
      "#4e79a7",
      "#f28e2c",
      "#e15759",
      "#76b7b2",
      "#59a14f",
      "#edc949",
      "#af7aa1",
      "#ff9da7",
      "#9c755f",
    ];
    this.nullColor = "#d9d9d9";
    this.colors = {};
  }
  getColor(id) {
    if (!id) {
      return this.nullColor;
    }
    if (this.colors[id]) {
      return this.colors[id];
    }
    let color = this.colorPalette.pop();
    if (!color) {
      color = randomcolor({luminosity: 'light', hue: 'random'});
    }
    this.colors[id] = color;
    return color;
  }
  addColor(id, color) {
    this.colors[id] = color;
    const colorPaletteIndex = this.colorPalette.indexOf(color);
    if (colorPaletteIndex === -1) {
      return;
    }
    this.colorPalette.splice(colorPaletteIndex, 1);
  }
}

const instance = new ColorManager();
export default instance;
