class RgbaColor:
  def __init__(self, red, green, blue, alpha = 1):
    self.red = red
    self.green = green
    self.blue = blue
    self.alpha = alpha
  @property
  def rgba(self):
    return 'rgba({}, {}, {}, {})'.format(self.red, self.green, self.blue, self.alpha)

pracRgbaColor = RgbaColor(200, 200, 200)
print(pracRgbaColor.__dict__)
print(pracRgbaColor.rgba)
