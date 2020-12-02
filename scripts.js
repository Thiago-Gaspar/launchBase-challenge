const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const imageId = card.getAttribute("id") 
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${imageId}`
    })
}

const modal = document.querySelector(".modal")
    
    modal.classList.contains('.maximize')
    var maximize = document.querySelector ('.maximize')
    maximize.addEventListener("click", function () {
    modal.classList.add('active')

    })


document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modal.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})



   

    


