const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const container = document.querySelector('.container')
const btns = document.querySelector('.btn-sign')
const btnl = document.querySelector('.btn-log')
const cardsign = document.querySelector('.card-sign')
const cardlog = document.querySelector('.card-log')
const f1 = document.querySelectorAll('.f1')

btns.addEventListener('click',()=>{
    // container.style.flexDirection = 'row-reverse'
item1.style.transform = 'translatex(85%)'
item2.style.transform = 'translatex(-102%)'
    card1.style.display = 'none'
    card2.style.display = 'block'
    cardsign.style.display = 'none'
    cardlog.style.display = 'block'
})
// function underline(){
//     for (let a = 0 ; i < 5 ; i++){
//         s= f1[i]
//         s.
//     }

// }
f1[0].addEventListener('click',()=>{
    f1[0].classList.toggle('f1-alt')
})
f1[1].addEventListener('click',()=>{
    f1[1].classList.toggle('f1-alt')
})
f1[2].addEventListener('click',()=>{
    f1[2].classList.toggle('f1-alt')
})
f1[3].addEventListener('click',()=>{
    f1[3].classList.toggle('f1-alt')
})
f1[4].addEventListener('click',()=>{
    f1[4].classList.toggle('f1-alt')
})
f1[5].addEventListener('click',()=>{
    f1[5].classList.toggle('f1-alt')
})


btnl.addEventListener('click',()=>{
    // container.style.flexDirection = 'row-reverse'
item1.style.transform = 'translatex(0%)'
item2.style.transform = 'translatex(0%)'
    card1.style.display = 'block'
    card2.style.display = 'none'
    cardsign.style.display = 'block'
    cardlog.style.display = 'none'
})

