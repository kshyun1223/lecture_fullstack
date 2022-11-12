from work import get_date

memo_title = input("제목을 작성하세요 >>> ")
memo_text = input("내용을 작성하세요 >>> ")

if memo_title != "" and memo_text != "":
  get_date.memo_maker(memo_title, memo_text)
