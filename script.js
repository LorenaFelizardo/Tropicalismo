document.addEventListener('DOMContentLoaded', () => {
  // === Elementos da Acessibilidade ===
  const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
  const menuAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const botoesAcessibilidade = menuAcessibilidade.querySelectorAll('button');

  const btnAumentarFonte = document.getElementById('aumentar-fonte');
  const btnDiminuirFonte = document.getElementById('diminuir-fonte');
  const btnContraste = document.getElementById('alterna-contraste');

  let tamanhoFonte = 1; // 1rem

  // === Toggle do menu de acessibilidade ===
  botaoAcessibilidade.addEventListener('click', () => {
    const aberto = menuAcessibilidade.classList.toggle('apresenta-lista');
    botaoAcessibilidade.classList.toggle('rotacao-botao');

    botaoAcessibilidade.setAttribute('aria-expanded', String(aberto));
    menuAcessibilidade.setAttribute('aria-hidden', String(!aberto));

    // Ativa/desativa foco dos botões
    botoesAcessibilidade.forEach(btn => {
      btn.tabIndex = aberto ? 0 : -1;
    });
  });

  // === Controle de Fonte ===
  const alterarFonte = (incremento) => {
    tamanhoFonte = Math.max(0.5, Math.min(2, tamanhoFonte + incremento));
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  };

  btnAumentarFonte.addEventListener('click', () => alterarFonte(0.1));
  btnDiminuirFonte.addEventListener('click', () => alterarFonte(-0.1));

  // === Contraste Alto ===
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });

  // === Animações ScrollReveal ===
  const sr = ScrollReveal({
    delay: 300,
    distance: '60px',
    duration: 900,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false // desative se não quiser que a animação repita ao voltar a rolar
  });

  sr.reveal('#inicio');
  sr.reveal('#tropicalia');
  sr.reveal('#galeria');
  sr.reveal('#contato');
});
