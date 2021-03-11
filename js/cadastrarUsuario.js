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

	function alertSucess(msg){
		Swal.fire({
		  type: "success",
		  icon: "success",
		  text: `${msg}`,
		  showConfirmButton: false,
		  timer: 2000
		});
	}

	function alertError(msg){
		Swal.fire({
		  	type: "error",
		  	icon: "error",
		  	text: `${msg}`,
		  	showConfirmButton: false,
		  	timer: 2000
		})
	}

	function validarNumeros(str){
		let expp = /[0-9]/g;
		let resultt = str.match(expp);
		let rr = JSON.stringify(resultt)
		rr = rr.replace(/[^\d]+/g, '')
		if(str.length === rr.length){
			return false;
		}
		return true
	}
	
	if(nome.value === null || nome.value === ""){
		alertError("O campo Nome precisa ser preenchido!!");
	}else if(cpf.value === null || cpf.value === ""){
		alertError("O campo CPF precisa ser preenchido!!");
	}else if(validarNumeros(cpf.value)){
		alertError("O campo CPF aceita somente números!!");
	}else if(telefone.value === null || telefone.value === ""){
		alertError("O campo Telefone precisa ser preenchido!!");
	}else if(validarNumeros(telefone.value)){
		alertError("O campo Telefone aceita somente números!!");
	}else if(email.value === null || email.value === ""){
		alertError("O campo Email precisa ser preenchido!!");
	}else if(bairro.value === null || bairro.value === ""){
		alertError("O campo Bairro precisa ser preenchido!!");
	}else if(rua.value === null || rua.value === ""){
		alertError("O campo Rua precisa ser preenchido!!");
	}else if(numero.value === null || numero.value === ""){
		alertError("O campo Numero precisa ser preenchido!!");
	}else if(validarNumeros(numero.value)){
		alertError("O campo Numero aceita somente números!!");
	}else{
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

			alertSucess("Usuário cadastrado com sucesso!!");
			setTimeout(function(){ 
				window.location.href = "home.html";
			}, 2000);
			
		}
	})
	.catch(e => alertError("Dados incorretos, por favor informe corretamente."))
	}
})

