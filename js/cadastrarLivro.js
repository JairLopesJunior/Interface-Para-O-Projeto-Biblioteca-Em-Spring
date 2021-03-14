let titulo = document.querySelector("#tituloInformado");
let autor = document.querySelector("#autorInformado");
let editora = document.querySelector("#editoraInformado");
let anoPublicacao = document.querySelector("#anoPublicacaoInformado");
let genero = document.querySelector("#generoInformado");
let id = document.querySelector("#idInformado");
let form = document.querySelector("#cadastrarLivro");

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

	if(titulo.value === null || titulo.value === ""){
		alertError("O campo Titulo precisa ser preechido!!");
	}else if(autor.value === null || autor.value === ""){
		alertError("O campo Autor precisa ser preechido!!");
	}else if(editora.value === null || editora.value === ""){
		alertError("O campo Editora precisa ser preechido!!");
	}else if(anoPublicacao.value === null || anoPublicacao.value === ""){
		alertError("O campo Ano de Publicação precisa ser preechido!!");
	}else if(genero.value === null || genero.value === ""){
		alertError("O campo Gênero precisa ser preechido!!");
	}else{
	
	    let dados = {
			titulo: titulo.value,
	        autor: autor.value,
	        editora: editora.value,
	        anoPublicacao: anoPublicacao.value,
	        genero: genero.value,
	        id: id.value
	    };

		fetch('http://localhost:8080/api/cliente/13/livros/'+id.value, {
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
				alertSucess("Livro cadastrado com sucesso!!");
	          	setTimeout(function(){ 
	            	document.location.reload(true);
	          	}, 2000);
			}
		})
		.catch(e => alertError("Dados incorretos, por favor informe corretamente!!"))
	}
})

