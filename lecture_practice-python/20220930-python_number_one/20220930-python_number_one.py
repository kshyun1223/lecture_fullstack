import time
import threading
import js2py

letter = {
  "화연님 바보" : "메롱 약오르죵",
}

puppy = """
function textLetter(obj) {
  return obj;
}
"""

puppyis = js2py.eval_js(puppy)

def printPuppy():
  print(puppyis(letter))
  threading.Timer(0.2, printPuppy).start()

printPuppy()