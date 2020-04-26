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
  var filterForm = document.querySelector(".map__filters");
  var filterFormType = filterForm.querySelector("#housing-type");
  var filterFormPrice = filterForm.querySelector("#housing-price");
  var filterFormRooms = filterForm.querySelector("#housing-rooms");
  var filterFormGuests = filterForm.querySelector("#housing-guests");
  var filterFormFeatures = filterForm.querySelector("#housing-features");
  var filteredPins = function () {
    for (var i = 0; i < jsonCopy.length; i++) {
      container.removeChild(pins[i]);
      var fPins = [];
      fPins[i] = pinCoor.cloneNode(true);
      fPins[i].setAttribute(
        "style",
        "left:" +
          jsonCopy[i].location.x +
          "px;top:" +
          jsonCopy[i].location.y +
          "px"
      );
      fPins[i]
        .querySelector("img")
        .setAttribute("src", jsonCopy[i].author.avatar);
      fPins[i].setAttribute("alt", jsonCopy[i].offer.title);

      container.appendChild(fPins[i]);
    }
  };
  filterFormType.addEventListener("change", function () {
    var data = json.slice();


      var filteredData = data.filter(function (item) {
         item.offer.type === filterFormType.value;
      });
      console.log(filteredData);
      
    
  });
  
})();

/*ыва
1 фильтр(сортировка по первому фильтру, отрисовка), 2 фильтр( сортировка по 2 фильтру, отрисовка)......
1 фильтрм(сортировка по нему), 2 фильтр(сортировка по нему).........n фильтр, сортировка по нему и отрисовка
*/
