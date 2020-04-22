(function(){
    var timein = window.formAble.querySelector("#timein");
var timeout = window.formAble.querySelector("#timeout");
timein.addEventListener("change", function () {
  timeout.value = timein.value;
});

var capacityGuests = window.formAble.querySelector("#capacity");
// [option, ...]
var capacityOptions = capacityGuests.querySelectorAll("option");

// Хрень с полями комнат
var disableAllOptions = function () {
  capacityOptions.forEach(function (item) {
    item.disabled = false;
  });
};
var setDisabled = function (item, value) {
  item.disabled = value;
};
var roomsHuetaHandler = function () {
  switch (roomNumber.value) {
    case "1":
      disableAllOptions();

      capacityOptions.forEach(function (item, index) {
        if (index !== 0) {
          setDisabled(item, true);
        }
      });

      break;
    case "2":
      disableAllOptions();
      capacityOptions.forEach(function (item, index) {
        if (index !== 0 && index !== 1) {
          setDisabled(item, true);
        }
      });
      break;
    case "3":
      disableAllOptions();
      capacityGuests.children[3].disabled = true;
      break;
    case "100":
      disableAllOptions();

      capacityOptions.forEach(function (item, index) {
        if (index !== 3) {
          setDisabled(item, true);
        }
      });
      capacityGuests.children[3].selected = true;
      break;
  }
};

var roomNumber = window.formAble.querySelector("#room_number");

roomNumber.addEventListener("change", roomsHuetaHandler);
//Тип жилища и цена
var houseType = window.formAble.querySelector("#type");

var setPlaceholder = function (value) {
  var price = window.formAble.querySelector("#price");

  price.setAttribute("min", value);
  price.setAttribute("placeholder", value);
};

houseType.addEventListener("change", function () {
  switch (houseType.value) {
    case "flat":
      setPlaceholder(1000);
      break;
    case "bungalo":
      setPlaceholder(0);
      break;
    case "house":
      setPlaceholder(5000);
      break;
    case "palace":
      setPlaceholder(10000);
      break;
  }
});
})()