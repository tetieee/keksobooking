(function () {
  window.mainPin.addEventListener("mousedown", function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };
    window.backend.save();

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };
      window.mainPin.style.top = window.mainPin.offsetTop - shift.y + "px";
      window.mainPin.style.left = window.mainPin.offsetLeft - shift.x + "px";
    };

    var onMouseUp = function () {
      console.log(window.json);

      var currentAdr = {
        WH: document.querySelector(".map__pin--main").getBoundingClientRect()
          .width,
        X: document.querySelector(".map__pin--main").getBoundingClientRect().x,
        Y: document.querySelector(".map__pin--main").getBoundingClientRect().y,
      };
      window.adress.value =
        Math.round(currentAdr.X + currentAdr.WH / 2) +
        ", " +
        Math.round(currentAdr.Y + currentAdr.WH + 22);

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      window.createPin = function (data) {
        for (var i = 0; i < data.length; i++) {
          pins[i] = pinCoor.cloneNode(true);
          pins[i].setAttribute(
            "style",
            "left:" + json[i].location.x + "px;top:" + json[i].location.y + "px"
          );
          pins[i]
            .querySelector("img")
            .setAttribute("src", json[i].author.avatar);
          pins[i].setAttribute("alt", json[i].offer.title);

          container.appendChild(pins[i]);
        }
      };
      window.createPin(json);
      window.card(json);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
})();
