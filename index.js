// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')


var vid = document.getElementById('vidAd');
let vid2=document.getElementById('vidAd2')
// console.log("check",vid)
vid.onloadeddata = function(event) {
  event.target.play();
  event.target.playbackRate=5.0
}
vid2.onloadeddata = function(event) {
  event.target.play();
  event.target.playbackRate=3.0
}

vid.onloadeddata();
vid2.onloadeddata();
// vid.playbackRate = 3.0;

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// const whatsappCloneVideo=document.getElementById('whatsappCloneVideo')

// function playVideo(){
//   whatsappCloneVideo.play()
// }
// whatsappCloneVideo.play()
// window.addEventListener('load',()=>{
//   whatsappCloneVideo.play()
// })