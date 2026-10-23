/* ===== CONFIGURE AQUI =====
   YOUTUBE_ID: link https://www.youtube.com/watch?v=ABC123xyz -> cole só ABC123xyz
   CAPA: caminho da imagem de capa (ex.: "img/capa.jpg"); deixe "" para usar o fundo colorido */
const YOUTUBE_ID="";
const TITULO="It’s Fine";
const DESCRICAO="Em um mundo de céu avermelhado e água suja, alto-falantes e cartazes repetem que está tudo bem. Enquanto vídeos sensacionalistas feitos com IA negam a crise, as pessoas escolhem acreditar.";
const CAPA="";
const ANO="2026";
const DURACAO="00 min";
const CLASSIFICACAO="14 anos";

const $=id=>document.getElementById(id);
document.title=TITULO+" | NegligêncIA";
$('titulo').textContent=TITULO;
$('descricao').textContent=DESCRICAO;
$('descricao2').textContent=DESCRICAO;
$('meta').textContent=`${ANO}  •  ${DURACAO}  •  Classificação: ${CLASSIFICACAO}`;
$('classif').textContent=CLASSIFICACAO;
if(CAPA)$('heroBg').style.backgroundImage=`url(${CAPA})`;

const modal=$('modal'),video=$('video');
$('assistir').onclick=()=>{
 video.innerHTML=YOUTUBE_ID
  ?`<iframe src="https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1" title="${TITULO}" allow="autoplay; fullscreen" allowfullscreen></iframe>`
  :'<p style="padding:1rem">O documentário será publicado em breve. Volte aqui em outro momento.</p>';
 modal.showModal();
};
$('fechar').onclick=()=>modal.close();
modal.addEventListener('close',()=>video.innerHTML='');
