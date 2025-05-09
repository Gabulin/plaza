var messageElement = document.querySelector('.cookie-notification');
// Если нет cookies, то показываем плашку
if (!Cookies.get('agreement')) {
    showMessage();
} else {
    initCounter();
}
// Загружаем сам код счетчика сразу
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document,'script','//mc.yandex.ru/metrika/tag.js', 'ym')
// Функция добавляет класс к DOM-элементу. Вы можете использовать библиотеку jQuery или другой фреймворк
function addClass (o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
    if (!o || re.test(o.className)) {
        return;
    }
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
}
// Функция удаляет класс из DOM-элемента. Вы можете использовать библиотеку jQuery или другой фреймворк
function removeClass (o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    if (!o) {
        return;
    }
    o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
}
// Функция, которая прячет предупреждение
function hideMessage () {
    addClass(messageElement, 'cookie-notification_hidden_yes');
}
// Функция, которая показывает предупреждение
function showMessage () {
    removeClass(messageElement, 'cookie-notification_hidden_yes');
}
function saveAnswer () {
    // Прячем предупреждение
    hideMessage();

    // Ставим cookies
    Cookies.set('agreement', '1');
}
function initCounter () {
    ym(/*Номер ,*/ 'init', {});
    saveAnswer();
}
// Нажатие кнопки "Я согласен"
document.querySelector('#yes').addEventListener('click', function () {
    initCounter();
});