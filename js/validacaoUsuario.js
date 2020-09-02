let emailValidacao = document.querySelector("#emailValidacao");
let cpfValidacao = document.querySelector("#cpfValidacao");
let forma = document.querySelector("#validacaoUsuario");

forma.addEventListener("submit", function(event){
	event.preventDefault();

	let dadosa = {
		email: emailValidacao.value,
		cpf: cpfValidacao.value
	};

	fetch('https://aw-api-biblioteca.herokuapp.com/api', {
		method: 'POST',
		supportHeaderParams: true,
		headers: {
    		'Accept': 'application/json',
        	'Content-Type': 'application/json'
		},
		body: JSON.stringify(dadosa)
	})
	.then(function(response) {
		return response
	})
	.then(function(response) {
		if(emailValidacao.value == null || emailValidacao.value == ""){
			alert("Email inválido, por favor informe novamente.")
		}else if(cpf.value == null || cpf.value == ""){
			alert("CPF inválido, por favor informe novamente.")
		}else{
			if(!response.ok){
				throw Error(response.statusText);
			}else{
				alert("Login efetuado com sucesso.")
				window.location.href = "usuario.html";
			}
		}
	})
	.catch(e => alert("Email ou CPF inválido."))
})

