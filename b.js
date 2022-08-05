(function () { /* Делаем анонимную функцию, чтобы не засорять названиями глобальную область видимости */
    let p = 0;
    let a = document.querySelector('.button-2');
    a.onclick = () => {
        p = (p + 2) * 3;
        console.log(`P из второй кнопки равен: ${p}`);
    }
})();