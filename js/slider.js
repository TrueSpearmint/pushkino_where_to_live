// Выбираем все элементы слайдеров на странице
var sliders = document.querySelectorAll(".slider");
// Выбираем контейнеры для отображения значений шкалы на слайдерах
var ticksContainers = document.querySelectorAll(".slider-ticks");

// Для каждого слайдера на странице
sliders.forEach(function (slider, index) {
  // Выбираем контейнер для отображения значений шкалы для текущего слайдера
  var ticksContainer = ticksContainers[index];

  // Создаем массив значений шкалы от минимального до максимального значения слайдера
  var tickValues = [];
  for (var i = parseInt(slider.min); i <= parseInt(slider.max); i++) {
    tickValues.push(i);
  }

  // Для каждого значения шкалы создаем соответствующий элемент
  tickValues.forEach(function (value) {
    var tick = document.createElement("div");
    tick.classList.add("slider-tick");
    tick.textContent = value;
    // Добавляем элемент в контейнер для отображения значений шкалы
    ticksContainer.appendChild(tick);
  });

  // Добавляем обработчик события изменения значения слайдера
  slider.addEventListener("input", function () {
    var value = this.value;
    // Оставляем функцию пустой, чтобы не отображать текущее значение под шкалой значений
  });
});
