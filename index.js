const btn = document.getElementById('btn')
const bird1 = document.getElementById('bird1')
const bird2 = document.getElementById('bird2')
const rocks = document.getElementById('rocks')
const water = document.getElementById('water')
const header = document.querySelector('header')
const slogan = document.getElementById('slogan')
const forest = document.getElementById('forest')

window.addEventListener('scroll', () => {
  let value = this.scrollY
  slogan.style.top = 35 + value * -0.3 + '%'
  bird1.style.top = value * -1.5 + 'px'
  bird1.style.left = value * 2 + 'px'
  bird2.style.top = value * -1.5 + 'px'
  bird2.style.left = value * -3 + 'px'
  btn.style.marginTop = 150 + value * 1.5 + 'px'
  rocks.style.top = value * -0.12 + 'px'
  forest.style.top = value * 0.5 + 'px'
  header.style.top = value * 0.8 + 'px'
})
