import copy

a = [1, 2, 3, 4]
b = copy.deepcopy(a)
b.append(5)
print(a == b)
print(a)
print(b)

c= ["a", "b", "c"]
d = c
d.append("d")
print(c == d)
print(c)
print(d)