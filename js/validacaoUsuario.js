let email = document.querySelector("#emailValidacao");
let cpf = document.querySelector("#cpfValidacao");
let form = document.querySelector("#validacaoUsuario");

form.addEventListener("submit", function(event){
	event.preventDefault();

	let dados = {
		email: email.value,
		cpf: cpf.value
	};

	fetch('http://localhost:8080/api', {
		method: 'POST',
		supportHeaderParams: true,
		headers: {
    		'Accept': 'application/json',
        	'Content-Type': 'application/json'
		},
		body: JSON.stringify(dados)
	})
	.then(function(response) {
		return response
	})
	.then(function(response) {
		if(!response.ok){
			throw Error(response.statusText);
		}else{
			alert("Login efetuado com sucesso.")
			window.location.href = "usuario.html";
		}
	})
	.catch(e => alert("Email ou CPF inválido."))
})

