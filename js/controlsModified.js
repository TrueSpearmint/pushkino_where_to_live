// Создание пользовательского контрола
class CustomNavigationControl {
  onAdd(map) {
    this._map = map;
    this._container = document.createElement("div");
    this._container.className = "mapboxgl-ctrl mapboxgl-ctrl-group";

    // Кнопка приближения
    const zoomInButton = document.createElement("button");
    zoomInButton.className = "mapboxgl-ctrl-icon";
    zoomInButton.type = "button";
    zoomInButton.title = "Zoom in";
    const svgIcon = document.createElement("svg");
    svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon.setAttribute("viewBox", "0 0 18 18");
    svgIcon.innerHTML = decodeURIComponent(
      '%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"%3E%3Cpath fill="%231F3044" d="M9,4C8.4,4,8,4.4,8,5v3H5C4.4,8,4,8.4,4,9s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3V5C10,4.4,9.6,4,9,4z"/%3E%3C/svg%3E'
    );
    svgIcon.style.width = "18px"; // Желаемая ширина иконки
    svgIcon.style.height = "18px"; // Желаемая высота иконки
    svgIcon.style.display = "inline-block"; // Чтобы выровнять по центру
    svgIcon.style.marginTop = "2px"; // Установка отступов
    zoomInButton.appendChild(svgIcon);
    zoomInButton.onclick = () => map.zoomIn();
    this._container.appendChild(zoomInButton);

    // Кнопка отдаления
    const zoomOutButton = document.createElement("button");
    zoomOutButton.className = "mapboxgl-ctrl-icon";
    zoomOutButton.type = "button";
    zoomOutButton.title = "Zoom out";
    const svgIcon2 = document.createElement("svg");
    svgIcon2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgIcon2.setAttribute("viewBox", "0 0 18 18");
    svgIcon2.innerHTML = decodeURIComponent(
      "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%231F3044'%0Ad='M5,8C4.4,8,4,8.4,4,9s0.4,1,1,1h8c0.6,0,1-0.4,1-1s-0.4-1-1-1H5z'/%3E%3C/svg%3E"
    );
    svgIcon2.style.width = "18px"; // Желаемая ширина иконки
    svgIcon2.style.height = "18px"; // Желаемая высота иконки
    svgIcon2.style.display = "inline-block"; // Чтобы учитывалась высота
    svgIcon2.style.marginTop = "5px"; // Установка отступов
    zoomOutButton.appendChild(svgIcon2);
    zoomOutButton.onclick = () => map.zoomOut();
    this._container.appendChild(zoomOutButton);

    // Кнопка возврата на север и вид сверху
    const compassButton = document.createElement("button");
    compassButton.className = "mapboxgl-ctrl-compass";
    compassButton.type = "button";
    compassButton.title = "Reset bearing to north and view from above";
    const compassIcon = document.createElement("span");
    compassIcon.className = "mapboxgl-ctrl-icon";
    compassButton.appendChild(compassIcon);
    compassButton.onclick = () => {
      map.easeTo({ bearing: 0, pitch: 0 });
    };
    this._container.appendChild(compassButton);

    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}
