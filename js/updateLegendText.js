function updateLegendText() {
  const legendText = document.getElementById("legend-text").querySelector("span");
  const gradient_link = document.querySelector("#gradient");
  const labels_link = document.querySelector(".labels");
  const sliders = [
    { id: "slider-1", text: "Доступность государственных школ" },
    { id: "slider-2", text: "Доступность государственных детских садов" },
    { id: "slider-3", text: "Доступность государственных и частных поликлиник" },
    { id: "slider-4", text: "Доступность предприятий торговли и услуг" },
    { id: "slider-5", text: "Доступность фитнес-центров" },
    { id: "slider-6", text: "Доступность прогулочных зон у воды" },
    { id: "slider-7", text: "Состояние жилищного фонда" },
    { id: "slider-8", text: "Доступность остановки Ростокино на машине" },
    { id: "slider-9", text: "Доступность остановки Ростокино на автобусах" },
  ];

  // Определяем состояние каждого слайдера
  const sliderValues = sliders.map((slider) => ({
    value: document.getElementById(slider.id).value,
    text: slider.text,
  }));

  // Фильтруем слайдеры, значения которых больше 0
  const activeSliders = sliderValues.filter((slider) => slider.value > 0);

  // Проверяем активные слайдеры и устанавливаем соответствующий текст
  if (activeSliders.length === 0) {
    legendText.textContent = "Не выбран ни один показатель";
    gradient_link.style.display = "none";
    labels_link.style.display = "none";
  } else if (activeSliders.length === 1) {
    legendText.textContent = activeSliders[0].text;
    gradient_link.style.display = "block";
    labels_link.style.display = "flex";
  } else {
    legendText.textContent = "Качество городской среды в баллах для жилых домов";
    gradient_link.style.display = "block";
    labels_link.style.display = "flex";
  }
}
