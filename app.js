
	const PC_Display = document.getElementById("PC_choice")
	const user_Display = document.getElementById("user_choice")
	const result_Display = document.getElementById("result")
	const possible_C = document.querySelectorAll('button')
	let user_C
	let PC_C
	let result
	possible_C.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
		user_C = e.target.id
		user_Display.innerHTML = user_C
		generaatePC_choice()
		//PC_Display =
		result = "sem resultado"
		console.log(PC_C + "||" + user_C)
		if (user_C == PC_C){
			result = "draw"
		} else{
			if (user_C == "rock" && PC_C == "paper"){
				result = "defeat"
			}
			if (user_C == "rock" && PC_C == "scissor"){
				result = "win"
			}
			if (user_C == "paper" && PC_C == "scissor"){
				result = "defeat"
			}
			if (user_C == "paper" && PC_C == "rock"){
				result = "win"
			}
			if (user_C == "scissor" && PC_C == "rock"){
				result = "defeat"
			}
			if (user_C == "scissor" && PC_C == "paper"){
				result = "win"
			}

		}
		result_Display.innerHTML = result
	}))
	
	function generaatePC_choice(){
		const randomNumber = Math.floor(Math.random() * 3);
		//console.log(randomNumber)
		if(randomNumber == 1){
			PC_C = "rock"
		}
		if (randomNumber == 2){
			PC_C = "scissor"
		}
		if (randomNumber == 3){
			PC_C = "paper"
		}
		PC_Display.innerHTML = PC_C	
	}