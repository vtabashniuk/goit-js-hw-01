/*  Задание 5  */
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const destinationCountry = prompt("Введите Вашу страну:");
const country1 = "Китай";
const deliveryRate1 = 100;
const country2 = "Чили";
const deliveryRate2 = 250;
const country3 = "Австралия";
const deliveryRate3 = 170;
const country4 = "Индия";
const deliveryRate4 = 80;
const country5 = "Ямайка";
const deliveryRate5 = 120;
let message;

switch (destinationCountry.toLowerCase()) {
  case country1.toLowerCase():
    message = `Доставка в ${contry1} будет стоить ${deliveryRate1} кредитов`;
    break;
  case country2.toLowerCase():
    message = `Доставка в ${country2} будет стоить ${deliveryRate2} кредитов`;
    break;
  case country3.toLowerCase():
    message = `Доставка в ${country3} будет стоить ${deliveryRate3} кредитов`;
    break;
  case country4.toLowerCase():
    message = `Доставка в ${country4} будет стоить ${deliveryRate4} кредитов`;
    break;
  case country5.toLowerCase():
    message = `Доставка в ${country5} будет стоить ${deliveryRate5} кредитов`;
    break;
  default:
    alert(`В вашей стране ${destinationCountry} доставка не доступна!`);
}
console.log(message);