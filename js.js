function showMessage(from, text) {
    alert(from + ": " + text);
}
showMessage(" Бармен", "Привет ");
showMessage(" Бармен", "У меня есть вопрос к тебе");
function checkAge(age) {
    if (age >= 18) {
      return true;
    } 
  }
  
  let age = prompt('Сколько тебе лет?', "18");
  
  if ( checkAge(age) ) {
    alert( 'Тогда заказывай' );
  } else {
    alert( ' Как подростешь, приходи' );
  }