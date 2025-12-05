

let DarkBtnEl = document.querySelector('#dark-btn')
let MoonEl = document.getElementById('moon')
let SunEl = document.getElementById('sun')
let MenuBar = document.getElementById('menu-bar')
let MenuBtn = document.getElementById('menu-btn')
let SiteBar = document.getElementById('site-bar')
let xMark = document.getElementById('x-mark')


DarkBtnEl.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    MoonEl.classList.toggle('hidden')
    SunEl.classList.toggle('hidden')
    
})

MenuBtn.addEventListener('click', () => {
    SiteBar.classList.remove('hidden')
    console.log("a");
    
})
xMark.addEventListener('click', () => {
    SiteBar.classList.add('hidden')
})
