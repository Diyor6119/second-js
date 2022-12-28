
alert ("Добро пожаловать")

var vozrast = prompt("Сколько вам лет ?")
if (vozrast >  0 && vozrast <18 || vozrast  == 18 ) {
    alert ("Вы еще молоды, вам нужно учиться")
}else if (vozrast> 18 && vozrast == 50 || vozrast <50 )
{
    alert ('Вы должны работать')
}else if (vozrast >50 && vozrast < 59 || vozrast == 59){
    alert('Вам пора на пенсию')
}else if (vozrast >59 && vozrast < 100 || vozrast == 100){
    alert('Вы пенсионер')
}else{
    alert('Что то пошло не так')
}

alert('А давайте посмотрим на время ?');

var vremya = +prompt ('Ведите время в числах')
switch (vremya) {
    case 1:
        alert('Сейчас час ночи');
        break;
    case 2:
        alert('Сейчас 2 часа ночи');
        break;
    case 3:
        alert('Сейчас 3 часа ночи');
        break;
    case 4:
        alert('Сейчас 4 часа ночи');
        break;
    case 5:
        alert('Сейчас 5 часов ночи');
        break;
    case 6:
        alert('Сейчас 6 часа ночи');
        break;
    case 7:
        alert('Сейчас 7 часов утра');
        break;
    case 8:
        alert('Сейчас 8 часов утра');
        break;
    case 9:
        alert('Сейчас 9 часов утра');
        break;
    case 10:
        alert('Сейчас 10 часов утра');
        break;
    case 11:
        alert('Сейчас 11 часов дня');
        break;
    case 12:
        alert('Сейчас 12 часов дня');
        break;
    case 13:
        alert('Сейчас 1 час дня');
        break;
    case 14:
        alert('Сейчас 2 часа дня');
        break;
    case 15:
        alert('Сейчас 3 часа дня');
        break;
    case 16:
        alert('Сейчас 4 часа дня');
        break;
    case 17:
        alert('Сейчас 5 часа дня');
        break;
    case 18:
        alert('Сейчас 6 часов вечера');
        break;
    case 19:
        alert('Сейчас 7 часов вечера');
        break;
    case 20:
        alert('Сейчас 8 часов вечера');
        break;
    case 21:
        alert('Сейчас 9 часов вечера');
        break;
    case 22:
        alert('Сейчас 10 часов вечера');
        break;
    case 23:
        alert('Сейчас 11 часов вечера');
        break;
        default:
        alert("Ничего не найдено");
        break;
}

alert ('Стой это не конец')
alert ('Давай вместе найдем среднее число')

a=+prompt("Введите число:"); 
b=+prompt("Введите число:"); 
c=+prompt("Введите число:");
	
	if (a>b) (b<c)
	var d = b;
	alert(d);

		if (a<b) (a>c)
		var d = a;
		alert(d);

			if (c<a) (c>b)
			var d = c;
			alert(d);

