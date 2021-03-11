let nome = document.querySelector("#nomeInformado");
let cpf = document.querySelector("#cpfInformado");
let telefone = document.querySelector("#telefoneInformado");
let email = document.querySelector("#emailInformado");
let bairro = document.querySelector("#bairroInformado");
let rua = document.querySelector("#ruaInformado");
let numero = document.querySelector("#numeroInformado");
let form = document.querySelector("#cadastrarUsuario");

form.addEventListener("submit", function(event){
	event.preventDefault();

    let dados = {
		nome: nome.value,
        cpf: cpf.value,
        telefone: telefone.value,
        email: email.value,
        bairro: bairro.value,
        rua: rua.value,
        numero: numero.value
    };

	fetch('http://localhost:8080/api/clientes', {
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
			alert("Usuário cadastrado com sucesso.")
			window.location.href = "home.html";
		}
	})
	.catch(e => alert("Dados incorretos, por favor informe corretamente."))
})

