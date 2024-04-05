let calendar = document.querySelector('.calendar ')

let startX = 0
let moveX = 0
calendar.addEventListener('touchstart', function (e) {
  startX = e.targetTouches[0].pageX
})
calendar.addEventListener('touchmove', function (e) {
  moveX = e.targetTouches[0].pageX - startX
  let translateX = moveX
  this.style.transform = `translateX(${translateX}px)`
})
