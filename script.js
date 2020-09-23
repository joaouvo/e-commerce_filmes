const elementosPosterTopFilmes = document.querySelectorAll(".lista-posteres");
const elementosPosterFilmes = document.querySelectorAll(".lista-posteres-filmes");

fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR")
  .then(resposta=>{
    return resposta.json();
  })
  .then(respostaJson=>{
    for (let i = 0; i < elementosPosterTopFilmes.length; i++) {
      const elementoPosterTopFilmes = elementosPosterTopFilmes[i];
      const informacoesFilmes = respostaJson.results[i];

      elementoPosterTopFilmes.querySelector('.poster-top-filmes').setAttribute('src', informacoesFilmes.poster_path);
    }
    for (let i = 0; i < elementosPosterFilmes.length; i++) {
      const elementoPosterFilmes = elementosPosterFilmes[i];
      const informacoesFilmes = respostaJson.results[i];

      elementoPosterFilmes.querySelector('.poster-filmes').setAttribute('src', informacoesFilmes.poster_path);
    }
  })
  