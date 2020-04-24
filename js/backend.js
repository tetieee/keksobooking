(function() {
    window.save=function(url, cb, err){
    window.form=document.querySelector('.notice__form')
    window.data=new FormData(form)
    window.formxhr = new XMLHttpRequest();
    formxhr.open('POST', url)
    formxhr.addEventListener('load', cb)
    formxhr.send(data)
}
    window.load = function(url,cb,err) {
        
        window.xhr = new XMLHttpRequest();
      
      
            xhr.open('GET', url)
            xhr.responseType = 'json'
            xhr.addEventListener(`load`, cb);
            xhr.send()
            
            
    }
    
    function anal(){
       
        load('http://anus/inde.html', onLoad, onError)
    }
    function popec(){
        save('http://anus/', loaded, onError)
    }
        window.backend={
            save: anal,
            load:popec
        }
        
        
    
  


        
})()