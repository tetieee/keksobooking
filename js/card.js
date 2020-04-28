(function () {
  window.card = function (data) {
    pins.forEach(function (item, index) {
      var i = index;
      item.classList.add("map__pin--active");
      item.addEventListener("click", function () {
        var newCard = mapCard.cloneNode(true);

        newCard.querySelector(".popup__title").textContent =
          data[i].offer.title;
        newCard.querySelector(".popup__text--address").textContent =
          data[i].offer.address;
        newCard.querySelector(".popup__avatar").src = data[i].author.avatar;

        newCard.querySelector(".popup__text--price").textContent =
          data[i].offer.price + " Р/ночь";
        newCard.querySelector(".popup__type").textContent = data[i].offer.type;
        newCard.querySelector(".popup__text--capacity").textContent =
          data[i].offer.rooms +
          " комнат(ы) для " +
          data[i].offer.guests +
          " гостей.";
        newCard.querySelector(".popup__text--time").textContent =
          "Заезд после " +
          data[i].offer.checkin +
          ", выездо до " +
          data[i].offer.checkout;
        newCard.querySelector(".popup__description").textContent =
          data[i].offer.description;
        newCard
          .querySelector(".popup__pictures")
          .querySelector("img")
          .setAttribute("src", data[i].offer.photos[1]);
        newCard
          .querySelector(".popup__pictures")
          .querySelector("img")
          .setAttribute("height", "50");
        newCard
          .querySelector(".popup__pictures")
          .querySelector("img")
          .setAttribute("width", "50");

        map.appendChild(newCard);
        
        var closeButton = newCard.querySelector(".popup__close");
        closeButton.addEventListener("click", function () {
          map.removeChild(newCard);
        });
      
      });
    });
  };
})();
