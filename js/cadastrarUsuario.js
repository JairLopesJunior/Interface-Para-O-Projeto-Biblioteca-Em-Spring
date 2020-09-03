let nome = document.querySelector("#nomeInformado");
let cpf = document.querySelector("#cpfInformado");
let celular = document.querySelector("#celularInformado");
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
        celular: celular.value,
        email: email.value,
        bairro: bairro.value,
        rua: rua.value,
        numero: numero.value
	};
	
	if(nome.value == null || nome.value == ""){
		alert("Por favor, informe o campo Nome.")
	}else if(cpf.value == null || cpf.value == ""){
		alert("Por favor, informe o campo CPF.")
	}else if(email.value == null || email.value == ""){
		alert("Por favor, informe o campo Email.")
	}else if(celular.value == null || celular.value == ""){
		alert("Por favor, informe o campo Telefone.")
	}else if(bairro.value == null || bairro.value == ""){
		alert("Por favor, informe o campo Bairro.")
	}else if(rua.value == null || rua.value == ""){
		alert("Por favor, informe o campo Rua.")
	}else if(numero.value == null || numero.value == ""){
		alert("Por favor, informe o campo Numero.")
	}else{
		fetch('https://aw-api-biblioteca.herokuapp.com/api/clientes', {
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
			}
		})
		.catch(e => alert("Dados incorretos, por favor informe corretamente."))
	}
})

