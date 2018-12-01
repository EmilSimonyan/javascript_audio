var beep = new Audio()
beep.src = './beep.mp3'
let name = prompt('Enter Your Name !.')
mybtn.addEventListener('click', () => {
	if (name.trim() == 'hakob') {
		alert('Welcome Hakob!.')
	} else {
		beep.play()
	}
})