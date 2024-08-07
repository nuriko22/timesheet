/* уроки ------------->
  Разг. о важном
  Русск. яз.
  Алгебра
  Физика
  География
  ОБЖ
  Лит-ра
  Технология
  Англ. яз.
  История
  Химия
  Физ-ра
  Геометрия
  Общество
  Биология
  Рос.- мои гор.
  Информатика
  Родн. яз/лит-ра
*/
const lessonsAndTime = [[['Расписание', 'будет', 'добавлено', 'позже', '', '', '', ''],     
                    ['8:30-9:15', '9:25-10:10', '10:30-11:15', '11:35-12:20', '12:30-13:15', '13:25-14:10', '14:20-15.05', '']],
                 [['Расписание', 'будет', 'добавлено', 'позже', '', '', '', ''],                                  
                    ['8:30-9:15', '9:25-10:10', '10:30-11:15', '11:35-12:20', '12:30-13:15', '13:25-14:10', '14:20-15.05', '']],
                 [['Расписание', 'будет', 'добавлено', 'позже', '', '', '', ''],                 
                    ['8:30-9:15', '9:25-10:10', '10:30-11:15', '11:35-12:20', '12:30-13:15', '13:25-14:10', '14:20-15.05', '']],
                 [['Расписание', 'будет', 'добавлено', 'позже', '', '', '', ''],                
                    ['8:30-9:15', '9:25-10:10', '10:30-11:15', '11:35-12:20', '12:30-13:15', '13:25-14:10', '14:20-15.05', '']],
                 [['Расписание', 'будет', 'добавлено', 'позже', '', '', '', ''],            
                    ['8:30-9:15', '9:25-10:10', '10:30-11:15', '11:35-12:20', '12:30-13:15', '13:25-14:10', '14:20-15.05', '']]];

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
const numLesson = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
const timeLesson = ['onetime', 'twotime', 'threetime', 'fourtime', 'fivetime', 'sixtime', 'seventime', 'eighttime'];

var now = new Date();
str = now.toLocaleString().split(' ');
time = str[1].split(':')[0];
ampm = str[2];
var _day_ = now.getDay();
if (ampm) {_day_ = ampm == "PM" & time >= 5 ? _day_ + 1 : _day_;}
else {_day_ = time >= 17 ? _day_ + 1 : _day_;}
_day_ = _day_ == 0 || _day_ > 5 ? 0 : _day_ - 1;
var day_ = document.getElementById('Day');
day_.innerHTML = days[_day_];
day_.style.cssText = "margin: 30px; font-size: 70px; text-align: center;";

for (let i = 0; i < 9; i++){
    var les = document.getElementById(numLesson[i]);
    les.innerHTML = lessonsAndTime[_day_][0][i];
    les.style.cssText = "font-size: 55px; text-align: center;";

    var time = document.getElementById(timeLesson[i]);
    time.innerHTML = lessonsAndTime[_day_][1][i];
    time.style.cssText = "font-size: 55px; text-align: center;";
}

function button(a){
    var day = document.getElementById('Day');
    day.innerHTML = days[a];
    day.style.cssText = "margin: 30px; font-size: 70px; text-align: center;";

    for (let i = 0; i < 9; i++){
        var les = document.getElementById(numLesson[i]);
        les.innerHTML = lessonsAndTime[a][0][i];
        les.style.cssText = "font-size: 55px; text-align: center;";
    
        var time = document.getElementById(timeLesson[i]);
        time.innerHTML = lessonsAndTime[a][1][i];
        time.style.cssText = "font-size: 55px; text-align: center;";
}
}
