(function () {
  var filterPriceMap = {
    low: {
      MIN: 0,
      MAX: 10000,
    },
    middle: {
      MIN: 10000,
      MAX: 50000,
    },
    high: {
      MIN: 50000,
      MAX: 9999999,
    },
  };
  var switchPrice = function (arr) {
    switch (filterFormPrice.value) {
      case "low":
        window.priced = arr.filter(function (item) {
          return (
            item.offer.price >= filterPriceMap.low.MIN &&
            item.offer.price <= filterPriceMap.low.MAX
          );
        });

        break;
      case "middle":
        window.priced = arr.filter(function (item) {
          return (
            item.offer.price >= filterPriceMap.middle.MIN &&
            item.offer.price <= filterPriceMap.middle.MAX
          );
        });
        break;
      case "high":
        window.priced = arr.filter(function (item) {
          return (
            item.offer.price >= filterPriceMap.high.MIN &&
            item.offer.price <= filterPriceMap.high.MAX
          );
        });
        break;
    }
    filteredPins(priced);
  };

  var filterForm = document.querySelector(".map__filters");
  var filterFormType = filterForm.querySelector("#housing-type");
  var filterFormPrice = filterForm.querySelector("#housing-price");
  var filterFormRooms = filterForm.querySelector("#housing-rooms");
  var filterFormGuests = filterForm.querySelector("#housing-guests");
  var filterFormFeatures = filterForm.querySelector("#housing-features");
  var filteredPins = function (data) {
    pins.forEach(function (item) {
      item.remove();
    });

    for (var i = 0; i < data.length; i++) {
      pins[i] = pinCoor.cloneNode(true);
      pins[i].setAttribute(
        "style",
        "left:" + data[i].location.x + "px;top:" + data[i].location.y + "px"
      );
      pins[i].querySelector("img").setAttribute("src", data[i].author.avatar);
      pins[i].setAttribute("alt", data[i].offer.title);

      container.appendChild(pins[i]);
      console.log(pins);
      window.card(data);
    }
  };
  var guestsSelector = function (arr) {
    if (filterFormGuests.value == "any") {
      window.fGuests = arr;
    } else {
      window.fGuests = arr.filter(function (item) {
        return item.offer.guests == filterFormGuests.value;
      });
    }
  };
  filterFormType.addEventListener("change", function () {
    window.data = json.slice();
    window.filteredData = data.filter(function (item) {
      return item.offer.type === filterFormType.value;
    });
    console.log(filteredData);

    filteredPins(filteredData);
  });

  filterFormPrice.addEventListener("change", function () {
    if (filterFormType.value !== "any") {
      switchPrice(filteredData);
    } else {
      switchPrice(json);
    }
  });
  filterFormRooms.addEventListener("change", function () {
    if (filterFormType.value !== "any") {
      switch (filterFormPrice.value) {
        case "any":
          window.fRooms = filteredData.filter(function (item) {
            return item.offer.rooms == filterFormRooms.value;
          });

          break;
        case filterFormPrice.value:
          window.fRooms = priced.filter(function (item) {
            return item.offer.rooms == filterFormRooms.value;
          });

          break;
      }
    } else {
      window.fRooms = json.filter(function (item) {
        return item.offer.rooms == filterFormRooms.value;
      });
    }
    filteredPins(window.fRooms);
  });

  filterFormGuests.addEventListener("change", function () {
    if (filterFormType.value == "any") {
      guestsSelector(window.json);
    } else {
      switch (filterFormRooms.value) {
        case "any":
          guestsSelector(window.priced);
          break;
        case filterFormRooms.value:
          guestsSelector(window.fRooms);
          break;
      }
    }
    filteredPins(window.fGuests);
  });
})();
