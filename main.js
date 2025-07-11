$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown(); // Exibe o formulário
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); // Esconde o formulário
    });
    
// Adiciona a imagem ao clicar no botão "Adicionar"
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecodaNovaImagem = $('#endereco-imagem-nova').val(); // Obtém o valor do campo de entrada 
        const novoItem = $('<li style= "display: none"></li>');
        $(`<img src="${enderecodaNovaImagem}" />`).appendTo(novoItem); // Cria um novo elemento de imagem com o URL fornecido
        $(`
            <div class= "overlay-imagem-link">
            <a href="${enderecodaNovaImagem}" target="_blank" title= "Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); // Adiciona o novo item à lista
        $(novoItem).fadeIn(1000); // Exibe o novo item com um efeito de fade-in 
        $('#endereco-imagem-nova').val(''); // Limpa o campo de entrada
    })
})

