var lista = localStorage.getItem("lista");
var listaParse = JSON.parse(lista);
document.getElementById("listaAfazeres").innerHTML = listaParse;

document.getElementById("bAdicionar").addEventListener("click", adicionaAfazeres);
document.getElementById("bLimparTexto").addEventListener("click", limparTexto);
document.getElementById("bLimparNotas").addEventListener("click", limparTudo);

function salvar() {
	var lista = document.getElementById("listaAfazeres");
	var listaString = JSON.stringify(lista.innerHTML);
	console.log(listaString);
	localStorage.setItem("lista", listaString);
}

function adicionaAfazeres() {
	var atividade = document.forms["preencher"]["atividade"].value;
	var novaLi = document.createElement("li");
	var novoCheck = document.createElement("input");
	var novoSpan = document.createElement("span");
	var novoBExcluir = document.createElement("button");

	novaLi.setAttribute("class", "pendente");
	novoCheck.setAttribute("type", "checkbox");
	novoCheck.setAttribute("onclick", "salvarCheck(this)");
	novoSpan.innerText = atividade;
	novoBExcluir.innerText = "X";
	novoBExcluir.setAttribute("onclick", "limparNota(this)");

	novaLi.appendChild(novoCheck);
	novaLi.appendChild(novoSpan);
	novaLi.appendChild(novoBExcluir);
	document.getElementById("listaAfazeres").appendChild(novaLi);

	salvar();
}

function limparTexto() {
	if (window.confirm("Tem certeza que deseja excluir o campo de texto?")) {
		document.getElementById("atividade").value = "";
	}
}

function limparTudo() {
	var li = document.getElementById("listaAfazeres");

	if (window.confirm("Tem certeza que deseja excluir TODAS as notas?")) {
		while (li.firstChild) {
			li.removeChild(li.firstChild);
		}
		salvar();
	}
}

function limparNota(nota) {
	var li = nota.parentNode;
	if (
		window.confirm(
			'Tem certeza que deseja excluir a nota: "' +li.getElementsByTagName("span")[0].innerText +'" ?')
	) {
		li.remove();
		salvar();
	}
}

function salvarCheck(check) {

	if (check.getAttribute("checked") == "checked") {
		check.removeAttribute("checked");
		check.parentNode.setAttribute("class", "pendente");
		check.parentNode.getElementsByTagName("span")[0].removeAttribute("style");
	} else {
		check.setAttribute("checked", "checked");
		check.parentNode.setAttribute("class", "concluido");
		check.parentNode.getElementsByTagName("span")[0].setAttribute("style", "color: rgb(180, 180, 180)");
	}
	salvar();
}