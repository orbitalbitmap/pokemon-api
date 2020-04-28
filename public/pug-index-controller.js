/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function updateSelected(id) {
  const tabs = document.getElementsByClassName('tabs')
  const methods = document.getElementsByClassName('method')

  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].id === id) {
      tabs[i].classList.add('highlighted')
    } else {
      tabs[i].classList.remove('highlighted')
    }
  }

  for (let i = 0; i < methods.length; i++) {
    if (methods[i].id === id) {
      methods[i].classList.remove('hidden')
    } else {
      methods[i].classList.add('hidden')
    }
  }
}
