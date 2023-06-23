const inputA = document.getElementById('inputA'); 
const inputB = document.getElementById('inputB'); 
const btn = document.getElementById('btn');
const text = document.getElementById('text'); 
const backgroundInfo = document.getElementById('bg-info');
const image = document.getElementById('imageInfo');
const imageContainer = document.getElementById('imageContainer');
const refresh =document.getElementById('refresh');
const containerShadow =document.getElementById('container')

 

btn.addEventListener("click", function() {

    if (Number(inputB.value) > Number(inputA.value)) {
        text.innerHTML = "Congrats! A lógica é o valor de B ser maior 🥳" // muda texto do html
        text.style.color ="#075012"
        backgroundInfo.style.background = "#92F9A3"
        image.remove()
        imageContainer.setAttribute('src', './assets/images/ok-icons.svg')
        containerShadow.style.boxShadow = "0px 2px 5px -1px  rgba(18, 243, 18, 0.786)"
        
    } else {
        text.innerHTML = "Ah não! Esta não é a lógica 🥺"
        text.style.color ="#740404"
        backgroundInfo.style.background = "#F99692"
        image.remove()
        imageContainer.setAttribute('src', './assets/images/error-icons.svg')
        containerShadow.style.boxShadow = "0px 2px 5px -1px  rgba(248, 66, 66, 0.641)"
    } 

})



refresh.addEventListener("click", function(){
    window.location.reload()
})



