let emailValidacao = document.querySelector("#emailValidacao");
let cpfValidacao = document.querySelector("#cpfValidacao");
let forma = document.querySelector("#validacaoUsuario");
var idUsuario;

// fetch('https://aw-api-biblioteca.herokuapp.com/api/13/livros').then(function(response){
//     response.json().then(function(data) {
//         console.log(data);
//     });
// }).catch(function(error) {
//     console.log('Fetch Error:', error);
// });

forma.addEventListener("submit", function(event){
	event.preventDefault();

	let dadosa = {
		email: emailValidacao.value,
		cpf: cpfValidacao.value
	};

	if(emailValidacao.value == null || emailValidacao.value == ""){
		alert("Email inválido, por favor informe novamente.")
	}else if(cpfValidacao.value == null || cpfValidacao.value == "" ){
		alert("CPF inválido, por favor informe novamente.")
	}else{
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
			if(!response.ok){
				throw Error(response.statusText);
			}else{
				alert("Login efetuado com sucesso.")
				// const json = '{"result":true, "count":42}';
				const json1 = '{"message":{"success":true,"details":"Login efetuado com sucesso.","id":4}}';
				const obj = JSON.parse(json1);
				idUsuario = obj.message.id;
				window.location.href = "usuario.html"+idUsuario;
			}	
		})
		.catch(e => alert("Email ou CPF inválido."))
	}
})

