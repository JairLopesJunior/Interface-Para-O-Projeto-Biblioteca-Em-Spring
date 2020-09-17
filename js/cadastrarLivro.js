let titulo = document.querySelector("#tituloInformado");
let autor = document.querySelector("#autorInformado");
let editora = document.querySelector("#editoraInformado");
let anoPublicacao = document.querySelector("#anoPublicacaoInformado");
let genero = document.querySelector("#generoInformado");
let form = document.querySelector("#cadastrarLivro");

form.addEventListener("submit", function(event){
	event.preventDefault();
	
    let dados = {
		titulo: titulo.value,
        autor: autor.value,
        editora: editora.value,
        anoPublicacao: anoPublicacao.value,
        genero: genero.value
    };

	fetch('http://localhost:8080/api/cliente/13', {
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
			alert("Livro cadastrado com sucesso.")
			document.location.reload(true);
		}
	})
	.catch(e => alert("Dados incorretos, por favor informe corretamente."))
})

