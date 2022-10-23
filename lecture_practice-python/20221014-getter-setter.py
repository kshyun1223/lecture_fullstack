class Pokemon:
  def __init__(self, id, name, type):
    self.id=id
    self.name=name
    self.type=type
  @property
  def id(self):
    return self.__id
  @id.setter
  def id(self, id):
    if str(type(id)) == "<class 'int'>":
      self.__id = id
    else:
      print("id 타입은 정수여야 합니다.")
pikachu = Pokemon(3.3, "피카츄", "전기")
print(pikachu.__dict__)
