const aside = document.querySelector(".aside_bar")
const nav = document.querySelector("nav")
const bur = document.querySelector(".burger")
const pic = document.querySelector(".pic")
const pic2 = document.querySelector(".pic2")
const our = document.querySelector('.our')
const sideimg = document.querySelectorAll('.sideimg')
const res = document.querySelector(".res-title")
const h2 = document.querySelectorAll('h2')
const label = document.querySelectorAll('label')
const input = document.querySelectorAll('input')
const para = document.querySelectorAll('.para')
const cont = document.querySelector('#contact')
const foodi = document.querySelector('#order')
const food = document.querySelectorAll('.food-item')
window.addEventListener('scroll', scrolling)
console.log(food)

function scrolling() {
  const topp = res.getBoundingClientRect().top
  const ourt = our.getBoundingClientRect().top
  const con = cont.getBoundingClientRect().top
  const order = foodi.getBoundingClientRect().top
  if (order < 300) {
    for (let i = 0; i < food.length; i++) {
      food[i].style = 'opacity:1'
      if (i % 2 == 0) {
        food[i].className = 'food-item animate__animated animate__fadeInRight'
      } else {
        food[i].className = 'food-item animate__animated animate__fadeInLeft'
      }
    }
  }
  if (ourt <= 270) {
    sideimg[0].className = 'sideimg animate__animated animate__backInLeft'
    sideimg[0].style = 'opacity:1'
    h2[0].className = 'animate__animated animate__backInDown'
    h2[0].style = 'opacity:1'
    para[0].className = 'para animate__animated animate__backInRight'
    para[0].style = 'opacity:1'
  }
  if (topp <= 300) {
    for (let i = 0; i < label.length; i++) {
      label[i].className = 'animate__animated animate__bounceIn'
    }
    for (let i = 1; i < input.length; i++) {
      input[i].className = 'animate__animated animate__bounceIn'
    }
    h2[1].className = 'res-title animate__animated animate__backInDown'
    h2[1].style = 'opacity:1'
    h2[2].style = 'opacity:1'
    pic.style = 'opacity:1'
    pic2.style = 'opacity:1'
    pic.className = 'pic animate__animated animate__backInLeft'
    pic2.className = 'pic2 animate__animated animate__backInRight'
  }
  if (con <= 300) {
    para[1].className = 'para animate__animated animate__backInRight'
    para[1].style = 'opacity:1'
    h2[3].className = 'res-title animate__animated animate__backInDown'
    h2[3].style = 'opacity:1'
    sideimg[1].className = 'sideimg animate__animated animate__backInLeft'
    sideimg[1].style = 'opacity:1'
  }

}

bur.addEventListener('click', clicked)
let j = 0

function clicked() {
  if (j == 0) {
    aside.style = 'display:block'
    nav.style = 'height:100vh'
    j++
  } else {
    aside.style = 'display:none'
    nav.style = 'height: 10vh'
    j--
  }
}