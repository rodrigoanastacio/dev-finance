const modalOverlay = document.querySelector('.c-modal-overlay')
const body = document.querySelector('body')

const openModal = () => {

  document.querySelector('.c-transactions__button')
    .addEventListener( 'click', (e) => {
      e.preventDefault()
      modalOverlay.classList.add('has-active')
      body.setAttribute('style', 'overflow: hidden;')
    } )
}

const closeModal = () => {

  document.querySelector('.c-modal-overlay')
    .addEventListener( 'click', (e) => {
      modalOverlay.classList.remove('has-active')
      body.setAttribute('style', 'overflow: scroll;')

    } )
}

module.exports = {
  openModal,
  closeModal
}