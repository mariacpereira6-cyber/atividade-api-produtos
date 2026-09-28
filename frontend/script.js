async function carregarDados() {
    const url = "http://localhost:3000/";

    try {
        const resposta = await fetch(url);

        const produtos = await resposta.json();

        const listaProdutos = document.getElementById("lista-produtos");

        produtos.forEach((produto) => {

            const card = `
                <div class="card">
                    <h2>${produto.nome}</h2>

                    <p class="categoria">
                        Categoria: ${produto.categoria}
                    </p>

                    <p class="preco">
                        R$ ${produto.preco.toFixed(2).replace(".", ",")}
                    </p>
                </div>
            `;

            listaProdutos.innerHTML += card;
        });

    } catch (erro) {
        console.error("Erro ao carregar os produtos:", erro);
    }
}

carregarDados();
