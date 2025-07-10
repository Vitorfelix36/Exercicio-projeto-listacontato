const form = document.getElementById('formContato');
const tabela = document.querySelector('#tabelaContatos tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;
    tabela.appendChild(novaLinha);

    form.reset();
});
