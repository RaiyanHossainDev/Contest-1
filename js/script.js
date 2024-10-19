// ========================= DOM Part start 
let body   = document.querySelector('body')
// ======= Canva dom
let next   = document.querySelector('.next')
let canva  = document.querySelector('.canva')
// ======= greet DOM
let greet  = document.querySelector('.greet')
// ======= name DOM
let nameTaker   = document.querySelector('.name')
let nameInput   = document.querySelector('.nameInput')
let nameEvent   = document.querySelector('.event')
let error       = document.querySelector('.error')


// =============== next function
next.addEventListener('click' , ()=>{
    canva.remove()
    greet.style     = 'display:block'
    nameTaker.style = 'display:block' 
})

// =============== name taking function
let nameFunc = ()=>{
    if(nameInput.value == ''){
        nameEvent.style = 'border-color: red;'
        // ======= giving content to element
        error.innerHTML = 'please enter some content' + '<i class="fa-solid fa-circle-exclamation"></i>'
    }else{
        nameEvent.style = 'border-color: #B5C0D0;'
        error.innerHTML = ''
        greet.style     = 'display:none'
        nameTaker.style = 'display:none'
        body.style      = 'background: none;'
    }
}



