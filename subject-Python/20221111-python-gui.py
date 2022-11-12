from tkinter import *

basic_data_dict = {
  "title_name" : "HTML maker",
  "window_width" : 300,
  "window_height": 300,
  "resizable_x" : True,
  "resizable_y" : True,
}

class Resizable:
  def __init__(self, width, height):
      self.width = width,
      self.height = height,
  @property
  def size(self):
      set_tuple = self.width + self.height
      return set_tuple

test = Resizable(100, 200)

print(test.size)
print(type(test.size[0]))
print(type(str(test.size[1])))

window = Tk()
window.title(basic_data_dict["title_name"])

geometry_value = Resizable(basic_data_dict["window_width"], basic_data_dict["window_height"]).size

window.geometry(str(geometry_value[0]) + "x" + str(geometry_value[1]))
window.resizable(basic_data_dict["resizable_x"], basic_data_dict["resizable_y"])

def html_maker():
  temp_string = """
    <html>
      <head></head>
      <body></body>
    </html>
  """
  button["text"] = temp_string

button = Button(window, text="HTML 찍어내기!!!", width=20, height=5, command=html_maker)

button.pack()

window.mainloop()

