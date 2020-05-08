// получаем элемент кнопки двигателя
const engine_btn = document.querySelector(`.engine_btn`)

// получаем элемент педали
const pedal = document.querySelector(`.pedal`)

// получаем элемент полосы прогресса
const engine_rpm = document.querySelector(`.engine_rpm_progress`)

// получаем звук включения двигателя
const engine_sound = new Audio(`audio/engine.mp3`)
engine_sound.loop = true

// получаем звук увеличения оборотов
const pedal_sound = new Audio(`audio/car.mp3`)
pedal_sound.loop = true

// статус двигателя
let engine_status = false

// нажатие на кнопку запуска двигателя
engine_btn.addEventListener(`click`, () => {
	
	// если двигатель заглушен
	if(engine_status === false){
		
		// запускаем двигатель
		engine_status = true
		
		// включаем холостые обороты двигателя
		engine_rpm.style.width = `20%`
		engine_sound.play()
		
		// нажатие на педаль
		pedal.addEventListener(`mousedown`, pressPedal)
		pedal.addEventListener(`touchstart`, pressPedal)
		
		// отжатие педали
		pedal.addEventListener(`mouseup`, freedPedal)
		pedal.addEventListener(`touchend`, freedPedal)
		
	} else {
		
		// глушим двигатель
		engine_status = false
		
		// выключаем холостые обороты двигателя
		engine_rpm.style.width = `0%`
		engine_sound.pause()
		
		// запрещаем нажатие на педаль
		pedal.removeEventListener(`mousedown`, pressPedal)
		pedal.removeEventListener(`touchstart`, pressPedal)
		
		// запрещаем отжатие педали
		pedal.removeEventListener(`mouseup`, freedPedal)
		pedal.removeEventListener(`touchend`, freedPedal)
		
	}
	
})

const pressPedal = () => {
	
	pedal.classList.add(`pressing`)
	pedal_sound.play()
	
}

const freedPedal = () => {
	
	pedal.classList.remove(`pressing`)
	pedal_sound.pause()
	
}