import menu from '../menu.json'
import template from '../templates/dishesFromArray.hbs'
import refs from './refs.js'


////////MARKUP////////
const { dishesMenu, themeSwitcher } = refs;


const markup = template(menu)
dishesMenu.insertAdjacentHTML('beforeend', markup);


////////THEME-SWITCHER////////
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
////////1/////////
// themeSwitcher.addEventListener('change', e => {
//   console.log(e.target.checked);
//   if (e.target.checked) {
//     document.querySelector('body').classList.add(Theme.DARK)
//     localStorage.setItem('theme', Theme.DARK)
//   } else {
//     document.querySelector('body').classList.remove(Theme.DARK)
//     localStorage.removeItem('theme')
//   }
// })


// let theme = localStorage.getItem('theme');
// console.log('theme by LS:', theme)
// if (theme) {
//   document.querySelector('body').classList.add(Theme.DARK)
//   themeSwitcher.checked = true
// } else {
//   document.querySelector('body').classList.remove(Theme.DARK)
//   themeSwitcher.checked = false
// }
/////////2 toggler//////////
themeSwitcher.addEventListener('change', e => {

  document.querySelector('body').classList.toggle(Theme.DARK)
  document.querySelector('body').classList.toggle(Theme.LIGHT)
  let theme = e.target.checked ? Theme.DARK : Theme.LIGHT
  localStorage.setItem('theme', theme)

})

let theme = localStorage.getItem('theme')

if (!theme) {
  theme = Theme.LIGHT;
  localStorage.setItem('theme', theme)
}
document.querySelector('body').classList.add(theme)
themeSwitcher.checked = theme === Theme.LIGHT ? false : true
