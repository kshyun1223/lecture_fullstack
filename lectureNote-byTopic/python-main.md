# Python
## 기본 사용법
### 콘솔
```python
print() # 자바스크립트의 console.log와 동일
```

### 데이터 타입
- 정수
```python
#Number - Integer(정수)
print(1) #1
```

- 문자열
```python
#String
print('Hello world') #Hello world
```

- string escape: 특정 기능이 있는 기호를 문자 그 자체로만 인식되게 하려면 역슬래시( \ ) 뒤에 입력
```python
#string escape
print("Hell'o' \"w\"orld") #Hell'o' "w"orld
```

- 줄바꿈: \n
```python
#줄바꿈
print('H\ne\nl\nl\no') 
```

- dogstring: 코드 자체에서 줄바꿈을 하려면 문자열 앞뒤에 따옴표 세 개(''')를 입력
```python
#docstring
print('''
H
E
L
L
O
''')
```

### 변수
```python
#variable(변수)
a = 'Hello Pyhton' #값
print(a) #출력

#length
print(len(a)) #12

#index
print(a[0]) #H
print(a[1]) #e
print(a[2:5]) #llo

#repeat
print((a+'\n')-2) #두번 반복
```

### 포맷팅
- positional formatting: 위치를 지정하고 순서대로 값을 넣는 방법
```python
print('to {}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim apple veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. {} Duis aute irure dolor in {} reprehenderit apple computer in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui {} officia deserunt mollit anim id est laborum.'.format('egoing', 12, 'egoing', 'egoing'))
```

- named placeholder: 변수명을 지정하고 값을 넣는 방법
  - `{age:d}`에서 d는 digit의 약자로 숫자를 의미. 이에 따라 값으로는 반드시 숫자가 들어가야 한다. 
```python
print('to {name}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim apple veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. {age:d} Duis aute irure dolor in {name} reprehenderit apple computer in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui {name} officia deserunt mollit anim id est laborum.'.format(name='egoing', age=12))
```

### Boolean
``` python
#Boolean
print(True) #참
print(False) #거짓

#Expression(표현식)
print(1+1) #2
print('Hello '+'world') #Hello world

#Comparison operator(비교연산자)
print(1==1) #True
print(1<2) #True
print(2<1) #False

#Membership operator: 문자열 내에서 특정 문자의 포함 여부 
print('world' in 'Hello world') #True
```

### 조건문
```python
#input 함수: 사용자가 입력한 값을 변수에 저장
user_id = input('Please enter your ID') 
user_pwd = input('Please enter your Password')

#조건문
if user_pwd == '111111':
    print('Hello master')
else:
    print('Who are you?')

#중첩 조건문
if user_id == 'egoing':
    if user_pwd == '111111':
        print('Hello master')
    else:
        print('Who are you?')
else:
    print('Who are you?')
```

### 리스트
```python
squars = [1, 'four', 9, 16, 25] #리스트를 생성하여 squars 변수의 값으로 입력
print(squars) #[1, 'four', 9, 16, 25]
print(squars[1]) #four
print(len(squars)) #5

s[1] = 4 #four → 4
print(squars) #[1, 4, 9, 16, 25]

del squars[2] #9 삭제
print(squars) #[1, 4, 16, 25]

squars.append('egoing') #'egoing' 추가
print(squars) #[1, 4, 16, 25, 'egoing']
```

### 반복문 for
```python
#list 
for value in ['a','b','c'] #value 변수에 a, b, c를 차례대로 대입한다
    print(value) #a b c

#range
for value in range(10) #value 변수에 0~10을 차례대로 대입한다
    print(value) #0 1 2 3 4 5 6 7 8 9 10
```

### 함수
```python
def average(a,b,c): #average 함수를 생성
    s=a+b+c
    r=s/3
    print(r)
    return r

print(average(10,20,30)) #20
``` 

### 모듈
```python
#math 모듈 생성: math.py 파일을 생성하고 함수 작성
def average(a,b,c):
    s=a+b+c
    r=s/3
    return r
 
def plus(a,b):
    return a+b
 
pi = 3.14

#호출 방법 1
import math
print(math.average(1,2,3))
print(math.plus(1,2))
print(math.pi)

#호출 방법 2
from math import average, plus, pi
 
print(average(1,2,3))
print(plus(1,2))
print(pi)
```
