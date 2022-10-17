class RgbaColor {
  constructor(red, green, blue, alpha = 1) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  get rgba(){
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }
}

let pracRgbaColor = new RgbaColor(200, 200, 200);
console.log(pracRgbaColor);
console.log(pracRgbaColor.rgba);
