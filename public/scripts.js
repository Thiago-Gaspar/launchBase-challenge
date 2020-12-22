
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const blogId = card.getAttribute("id")
        window.location.href = `courses/${blogId}`
        
        })
}


   

    


