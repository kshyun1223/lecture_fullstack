import datetime

def memo_maker(title, text):
  get_time_data = datetime.datetime.now()
  change_time_string = str(get_time_data.year) + "-" + str(get_time_data.month) + "-" + str(get_time_data.day)

  temp_fime_name = change_time_string + "-" + title + ".txt"

  make_open_txt_file = open("../" + temp_fime_name, "w", encoding="utf-8")
  make_open_txt_file.write(text)
  make_open_txt_file.close()