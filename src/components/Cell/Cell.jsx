import style from './Cell.module.css'

export function Cell({ id, hasMine, data }) {
	const rightClick = (e) => {
		const { target } = e
		e.preventDefault()
		if (target.classList.contains(style.flag)) {
			target.classList.remove(style.flag)
			target.classList.add(style.question)
		} else if (target.classList.contains(style.question)) {
			target.classList.remove(style.question)
			target.classList.remove(style.emptyPressed)
			target.classList.add(style.empty)
		} else {
			// добавить флаг
			target.classList.add(style.flag)
		}
	}

	const leftClick = (e) => {
		const { target } = e
		const isFlag = target.classList.contains(style.flag)
		const isQuestion = target.classList.contains(style.question)
		if (isFlag || isQuestion) {
			return
		} else if (hasMine) {
			target.classList.remove(style.empty)
			target.classList.add(style.mineRed)
			setTimeout(() => {alert('Game over!')}, 0)
		} else {
			switch (data) {
				case 0:
					target.classList.add(style.num0)
					break
				case 1:
					target.classList.add(style.num1)
					break
				case 2:
					target.classList.add(style.num2)
					break
				case 3:
					target.classList.add(style.num3)
					break
				case 4:
					target.classList.add(style.num4)
					break
				case 5:
					target.classList.add(style.num5)
					break
				case 6:
					target.classList.add(style.num6)
					break
				case 7:
					target.classList.add(style.num7)
					break
				case 8:
					target.classList.add(style.num8)
					break

				default:
					break
			}
		}
	}

	const mouseDowun = ({ target }) => {
		if (target.classList.contains(style.question)) {
			target.classList.add(style.questionPressed)
		} else {
			target.classList.add(style.emptyPressed)
		}
	}
	const mouseUp = ({ target }) => {
		target.classList.remove(style.emptyPressed)
		if (target.classList.contains(style.question)) {
			target.classList.remove(style.questionPressed)
		}
	}
	const mouseLeave = ({ target }) => {
		if (target.classList.contains(style.question)) {
			target.classList.remove(style.questionPressed)
		}
		target.classList.remove(style.emptyPressed)
	}

	return (
		<div
			className={`${style.empty} ${style.size}`}
			onClick={leftClick}
			onContextMenu={rightClick}
			onMouseDown={mouseDowun}
			onMouseUp={mouseUp}
			onMouseLeave={mouseLeave}
			data={data}></div>
	)
}
