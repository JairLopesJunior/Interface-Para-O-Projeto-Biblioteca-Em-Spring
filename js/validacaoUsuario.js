let nome = document.querySelector("#nomeValidacao");
let cpf = document.querySelector("#cpfValidacao");

form.addEventListener("submit", function(event){
	event.preventDefault();

	let dados = {
		nome: nome.value,
		cpf: cpf.value
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

