(function() {
    window.mainPin = document.querySelector(".map__pin--main");
    window.formAble = document.querySelector(".notice__form");
    window.adress = formAble.querySelector("#address");
    var MAIN_PIN = {
        WH: document.querySelector('.map__pin--main').getBoundingClientRect().width,
        X: document.querySelector('.map__pin--main').getBoundingClientRect().x,
        Y: document.querySelector('.map__pin--main').getBoundingClientRect().y,
    }
    var successNot=function(){
        var suc=document.createElement('div');
        suc.style.textContent='Успешно отправлено';
        suc.style.margin='50%'
        suc.style.position='absolute'
        suc.style.display='inline-block'
        suc.style.height='40px';
        suc.style.weight='100px';
        suc.style.zIndex='1000';
        map.appendChild(suc)


    }
    var sendButton=formAble.querySelector('.form__submit')
    var resetButton = document.querySelector(".form__reset");
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
    window.map = document.querySelector(".map");
    window.container = document.querySelector(".map__pins");
    window.mapCard = document.querySelector("#template").content.querySelector(".map__card");

    window.pinCoor = document.querySelector("#template").content.querySelector(".map__pin");
    window.pins = [];

    window.onError= function(){
    if (xhr.status!=200){
        alert('Ошибка' + xhr.status+ ': ' + xhr.statusText)
    }
    }

    window.onLoad=function(evt){
    window.json = evt.currentTarget.response;
}
    // Функция активации карты
    var fadeOffHandler = function() {
        map.classList.remove("map--faded");
        formAble.classList.remove("notice__form--disabled");
        for (i = 0; i < fields.length; i++) {
            fields[i].toggleAttribute("disabled");
        }
        adr()
        
    };
  
    var adr = function() {
        adress.value = Math.round(MAIN_PIN.X + MAIN_PIN.WH / 2) + ", " + Math.round(MAIN_PIN.Y + MAIN_PIN.WH + 22);
    }
    var fields = formAble.querySelectorAll("fieldset");
    window.mainPin.addEventListener("mousedown", fadeOffHandler);
  window.loaded=function(){
     successNot()
  }
  sendButton.addEventListener('click', function(evt){
      evt.preventDefault();
      
      window.backend.load()
  })
    
})()