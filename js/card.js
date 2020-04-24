(function(){

    window.card=function(){
        pins.forEach(function(item, index){
            var i=index
            item.classList.add('map__pin--active')
            item.addEventListener("click", function(){
                           
        var newCard = mapCard.cloneNode(true);
        
    newCard.querySelector(".popup__title").textContent = json[i].offer.title;
    newCard.querySelector(".popup__text--address").textContent =json[i].offer.address;
    newCard.querySelector('.popup__avatar').src=json[i].author.avatar
    
    newCard.querySelector(".popup__text--price").textContent =
    json[i].offer.price + " Р/ночь";
    newCard.querySelector(".popup__type").textContent = json[i].offer.type;
    newCard.querySelector(".popup__text--capacity").textContent =
    json[i].offer.rooms + " комнат(ы) для " + json[i].offer.guests + " гостей.";
    newCard.querySelector(".popup__text--time").textContent = "Заезд после " + json[i].offer.checkin + ", выездо до " + json[i].offer.checkout;
    newCard.querySelector(".popup__description").textContent = json[i].offer.description;
    newCard.querySelector(".popup__pictures").querySelector("img").setAttribute("src", json[i].offer.photos[1]);
    newCard.querySelector('.popup__pictures').querySelector('img').setAttribute('height', '50');
    newCard.querySelector('.popup__pictures').querySelector('img').setAttribute('width', '50')

    
    map.appendChild(newCard);
    console.log(newCard)
    var closeButton = newCard.querySelector(".popup__close");
    closeButton.addEventListener("click", function() {
    map.removeChild(newCard);
    });
    newCard.addEventListener('keydown', function(){
        if(keycode==='27'){map.removeChild(newCard);}
    })
    
    })
    })
    }

})()