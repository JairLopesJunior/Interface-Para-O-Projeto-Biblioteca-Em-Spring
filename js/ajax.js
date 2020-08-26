let nome = document.querySelector("#nome");
let cpf = document.querySelector("#cpf");
let celular = document.querySelector("#celular");
let email = document.querySelector("#email");
let numero = document.querySelector("#numero");
let rua = document.querySelector("#rua");
let bairro = document.querySelector("#bairro");
let form = document.querySelector("#form");

form.addEventListener("submit", function(event){
	event.preventDefault();

	let dados = {
		nome: nome.value,
		cpf: cpf.value,
		celular: celular.value,
		email: email.value,
		numero: numero.value,
		rua: rua.value,
		bairro: bairro.value
	};

	fetch('https://aw-api-biblioteca.herokuapp.com/api', {
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
		alert("Usuário cadastrado com sucesso.")
	})
})