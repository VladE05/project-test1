const openPopup = document.getElementById('open_pop')
const closePopup = document.getElementById('pop_up_close')
const popUp = document.getElementById('pop_up')

openPopup.addEventListener('click', () => {
	popUp.classList.add('active')
})

closePopup.addEventListener('click', () => {
	popUp.classList.remove('active')
})
