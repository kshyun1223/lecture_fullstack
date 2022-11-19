class non_local:
  def outer_func():
    count = 0
    def inner_func():
      nonlocal count
      count +=1
      print("non_local: ", count)
    inner_func()
    inner_func()
    inner_func()
    inner_func()
  outer_func()

class local:
  def outer_func():
    count = 0
    def inner_func():
      count += 1
      print("local: ", count)
    inner_func()
    inner_func()
    inner_func()
    inner_func()
  outer_func()

