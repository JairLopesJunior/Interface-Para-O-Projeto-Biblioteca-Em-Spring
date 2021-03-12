let emailV = document.querySelector("#emailValidacao");
let cpfV = document.querySelector("#cpfValidacao");
let formV = document.querySelector("#validacaoUsuario");
var idUsuario;

formV.addEventListener("submit", function(event){
	event.preventDefault();
	
	let str = cpfV.value; 
	let exp = /[0-9]/g;
	let result = str.match(exp);
	let r = JSON.stringify(result)
	r = r.replace(/[^\d]+/g, '')

	if(str.length !== r.length){
		Swal.fire({
		  	type: "error",
		  	icon: "error",
		  	text: "O campo CPF aceita somente números!!",
		  	showConfirmButton: false,
		  	timer: 2000
		})
	}else if(emailV.value === null || emailV.value === ""){
		Swal.fire({
		  	type: "error",
		  	icon: "error",
		  	text: "O campo Email precisa ser preenchido!!",
		  	showConfirmButton: false,
		  	timer: 2000
		})
	}else if(cpfV.value === null || cpfV.value === ""){
		Swal.fire({
		  	type: "error",
		  	icon: "error",
		  	text: "O campo CPF precisa ser preenchido!!",
		  	showConfirmButton: false,
		  	timer: 2000
		})
	}else{

		let dadosV = {
			email: emailV.value,
			cpf: cpfV.value
		};

		fetch('http://localhost:8080/api', {
			method: 'POST',
			supportHeaderParams: true,
			headers: {
	    		'Accept': 'application/json',
	        	'Content-Type': 'application/json'
			},
			body: JSON.stringify(dadosV)
		})
		.then(function(response) {
			if(!response.ok){
				throw Error(response.statusText);
			}else{
				return response.json()
			}
		})
		.then((response) => {
			//const obj = JSON.parse(response);
			idUsuario = response.message.id;
			Swal.fire({
			  type: "success",
			  icon: "success",
			  text: "Login efetuado com sucesso!!",
			  showConfirmButton: false,
			  timer: 2000
			});

			setTimeout(function(){ 
				window.location.href = `${idUsuario}/usuario.html`;
			}, 2000);
		})
		.catch(e => Swal.fire({
					  	type: "error",
					  	icon: "error",
					  	text: "Dados inválidos!!",
					  	showConfirmButton: false,
					  	timer: 2000
					})
			  )
	}
})
