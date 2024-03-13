document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.reviewsBlock');
    const content = document.querySelector('.content');
    const scrollLeftBtn = document.querySelector('#scroll-left');
    const scrollRightBtn = document.querySelector('#scroll-right');
    const image = document.querySelector('#fill');
    const scrollStep = 260; // Шаг прокрутки
    var oldPosition = container.scrollLeft;
    var shiftX = 0;

    scrollLeftBtn.addEventListener('click', function() {
        container.scrollLeft -= scrollStep; // Прокрутить влево
    });

    scrollRightBtn.addEventListener('click', function() {
        container.scrollLeft += scrollStep; // Прокрутить вправо
    });

    container.addEventListener('wheel', (event) => {
        event.preventDefault(); // Предотвратить стандартное прокручивание
        const direction = Math.sign(event.deltaY); // Определить направление прокрутки
        container.scrollLeft += scrollStep * direction; // Прокрутить контейнер
    });

    container.addEventListener('scroll', function() {
        const dir = oldPosition > container.scrollLeft ? -1 : 1;
        oldPosition = container.scrollLeft;
        shiftX += image.scrollLeft + 20 * dir; // Установить скорость смещения
        image.style.transform = `translateX(${shiftX}px)`; // Смещение элемента по оси X
    });

    // Добавляем обработчик события input для поля телефона
    document.getElementById('phone').addEventListener('input', function(event) {
        const phoneInput = event.target;
        const cursorPosition = phoneInput.selectionStart;
        const currentValue = phoneInput.value;
        const numericValue = currentValue.replace(/\D/g, ''); // Удаляем все нецифровые символы
        const formattedValue = numericValue.slice(0, 10); // Получаем только первые 10 цифр

        // Устанавливаем новое значение в поле телефона
        phoneInput.value = formattedValue;
        phoneInput.setSelectionRange(cursorPosition, cursorPosition);
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Предотвращаем отправку формы
    event.preventDefault();

    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const consent = document.getElementById('consent').checked;

    // В данном примере просто выводим данные в консоль
    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Согласие:', consent);
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}