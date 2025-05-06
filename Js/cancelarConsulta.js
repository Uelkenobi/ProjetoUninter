
  function cancelarConsulta(botao) {
    const linha = botao.closest('tr');
    linha.remove();

    const mensagem = document.getElementById('mensagem-cancelamento');
    mensagem.style.display = 'block';

    // Oculta a mensagem depois de 3 segundos
    setTimeout(() => {
      mensagem.style.display = 'none';
    }, 3000);
  }

