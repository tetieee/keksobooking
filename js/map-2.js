(function() {
    
    var ava = [
        "img/avatars/user01.png",
        "img/avatars/user02.png",
        "img/avatars/user03.png",
        "img/avatars/user04.png",
        "img/avatars/user05.png",
        "img/avatars/user06.png",
        "img/avatars/user07.png",
        "img/avatars/user08.png",
    ];
    var MAIN_PIN = {
        WH: document.querySelector('.map__pin--main').getBoundingClientRect().width,
        X: document.querySelector('.map__pin--main').getBoundingClientRect().x,
        Y: document.querySelector('.map__pin--main').getBoundingClientRect().y,
    }
    var titles = [
        "Большая уютная квартира",
        "Маленькая неуютная квартира",
        "Огромный прекрасный дворец",
        "Маленький ужасный дворец",
        "Красивый гостевой домик",
        "Некрасивый негостеприимный домик",
        "Уютное бунгало далеко от моря",
        "Неуютное бунгало по колено в воде",
    ];
    var types = ["palace", "flat", "house", "bungalo"];
    var chek = ["12:00", "13:00", "14:00"];
    var arr = [];
    var resetButton = document.querySelector(".form__reset");
    var authors = function() {
        for (var i = 0; i < 8; i++) {
            arr[i] = {
                author: {
                    avatar: ava[i],
                },
                offer: {
                    title: titles[i],
                    address: "location.x, location.y",
                    price: Math.floor(Math.random() * 1000000) + 1,
                    type: {
                        palace: "Дворец",
                        flat: "Квартира",
                        house: "Домик",
                        bungalo: "Лачуга",
                    },
                    rooms: Math.floor(Math.random() * 6) + 1,
                    guests: Math.floor(Math.random() * 9) + 1,
                    checkin: chek[Math.floor(Math.random() * 3)],
                    checkout: chek[Math.floor(Math.random() * 3)],
                    features: [
                        "wifi",
                        "dishwasher",
                        "parking",
                        "washer",
                        "elevator",
                        "conditioner",
                    ],
                    description: "",
                    photos: [
                        "http://o0.github.io/assets/images/tokyo/hotel1.ipg",
                        "http://o0.github.io/assets/images/tokyo/hotel2.ipg",
                        "http://o0.github.io/assets/images/tokyo/hotel3.ipg",
                    ],
                },
                location: {
                    x: Math.floor(Math.random() * 631) + 129,
                    y: Math.floor(Math.random() * 631) + 129,
                },
            };
        }
        return arr;
    };
    resetButton.addEventListener("click", function() {
        map.classList.add("map--faded");
        formAble.classList.add("notice__form--disabled");
        for (i = 0; i < fields.length; i++) {
            fields[i].toggleAttribute("disabled");
        }
        for (var i = 0; i < pins.length; i++) {
            container.removeChild(pins[i]);
        }
        document.querySelector("#title").value = "";
        document.querySelector("#description").value = "";
        price.value = "";
        mainPin.style.top = MAIN_PIN.Y + 'px'
        mainPin.style.left = MAIN_PIN.X + 'px'
    });
    authors();
    console.log(arr);
    //Создание пинов
    var map = document.querySelector(".map");

    var container = document.querySelector(".map__pins");
    var mapCard = document
        .querySelector("#template")
        .content.querySelector(".map__card");

    var pinCoor = document
        .querySelector("#template")
        .content.querySelector(".map__pin");
    var pins = [];
    var createPin = function() {
        for (var i = 0; i < arr.length; i++) {
            pins[i] = pinCoor.cloneNode(true);
            pins[i].setAttribute(
                "style",
                "left:" + arr[i].location.x + "px;top:" + arr[i].location.y + "px"
            );
            pins[i].querySelector("img").setAttribute("src", arr[i].author.avatar);
            pins[i].setAttribute("alt", arr[i].offer.title);
            container.appendChild(pins[i]);
        }
        for (var i = 0; i < pins.length; i++) {
            pins[i].addEventListener("click", function() {
                createCard();
            });
        }
        console.log(pins);
    };
    //Создание и закрытие карточки
    var createCard = function() {
        var newCard = mapCard.cloneNode(true);
        newCard.querySelector(".popup__title").textContent = arr[0].offer.title;
        newCard.querySelector(".popup__text--address").textContent =
            arr[0].offer.address;
        newCard.querySelector(".popup__text--price").textContent =
            arr[0].offer.price + " Р/ночь";
        newCard.querySelector(".popup__type").textContent = arr[0].offer.type.palace;
        newCard.querySelector(".popup__text--capacity").textContent =
            arr[0].offer.rooms + " комнат(ы) для " + arr[0].offer.guests + " гостей.";
        newCard.querySelector(".popup__text--time").textContent = "Заезд после " + arr[0].offer.checkin + ", выездо до " + arr[0].offer.checkout;
        newCard.querySelector(".popup__description").textContent = arr[0].offer.description;
        newCard.querySelector(".popup__pictures").querySelector("img").setAttribute("src", arr[0].offer.photos[2]);
        map.appendChild(newCard);
        var closeButton = newCard.querySelector(".popup__close");
        closeButton.addEventListener("click", function() {
            map.removeChild(newCard);
        });
    };
    // Функция активации карты
    var fadeOffHandler = function() {
        map.classList.remove("map--faded");
        formAble.classList.remove("notice__form--disabled");
        for (i = 0; i < fields.length; i++) {
            fields[i].toggleAttribute("disabled");
        }
        adr()
        createPin();
    };

    window.mainPin = document.querySelector(".map__pin--main");
    window.formAble = document.querySelector(".notice__form");
    window.adress = formAble.querySelector("#address");
    var adr = function() {
        adress.value = Math.round(MAIN_PIN.X + MAIN_PIN.WH / 2) + ", " + Math.round(MAIN_PIN.Y + MAIN_PIN.WH + 22);
    }
    var fields = formAble.querySelectorAll("fieldset");
    window.mainPin.addEventListener("mousedown", fadeOffHandler);


    var onSucces = function() {
        console.log(data)
    }
    var onError = function() {
        console.error(message)
    }

    window.load('http://anus/inde.html', onSucces, onError);
    console.log(xhr.response)
})()