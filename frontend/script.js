async function carregarDados() {

    const url = "https://super-engine-jrq6wvv5xp6pcqqg5-3000.app.github.dev/";

    const resposta = await fetch(url);

    const dados = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    console.log(dados);
    console.log(listaProdutos);

    dados.forEach(produto => {

        const card = `
            <div class="card">
                <h2>${produto.nome}</h2>
                <p>Categoria: ${produto.categoria}</p>
                <p>Preço: R$ ${produto.preco}</p>
            </div>
        `;

        listaProdutos.innerHTML += card;
    });
}

carregarDados();