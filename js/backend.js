(function() {
    
    window.load = function(url, onSucces, onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json'
        xhr.addEventListener('load', function() {
            if (xhr.status === 200) {
                onSucces(xhr.response);

            } else {
                onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText)
            }
        })
        xhr.addEventListener('error', function() {
            onError('Произошла ошибка соденинения')
        })
        xhr.open('GET', url)
        xhr.send()
    }
    console.log(xhr.response)
})()