let emailV = document.querySelector("#emailValidacao");
let cpfV = document.querySelector("#cpfValidacao");
let formV = document.querySelector("#validacaoUsuario");
var idUsuario;

formV.addEventListener("submit", function(event){
	event.preventDefault();

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
			//const json1 = '{"message":{"success":true,"details":"Login efetuado com sucesso.","id":13}}';
			//const obj = JSON.parse(json1);
			//idUsuario = obj.message.id;
			return response.json()
		}
	})
	.then((response) => {
		//const obj = JSON.parse(response);
		idUsuario = response.message.id;
		alert("Login efetuado com sucesso.")
		window.location.href = `${idUsuario}/usuario.html`;
	})
	.catch(e => alert("Email ou CPF inválido."))
})

