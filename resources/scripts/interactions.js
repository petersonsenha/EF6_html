function mudarVisibilidade(bloco, instrucao, box) {
  if (bloco.style.visibility === "hidden") {
    bloco.style.visibility = "visible";
    box.style.background = "rgb(222,227,220,1)";
    bloco.style.background = "rgb(222,227,220,1)";
    instrucao ? (instrucao.style.visibility = "hidden") : "";
  } else {
    bloco.style.visibility = "hidden";
    bloco.style.background = "rgb(255,255,255)";
    box.style.background = "rgb(255,255,255)";
    instrucao ? (instrucao.style.visibility = "visible") : "";
  }
}

function infografico(instrucao, texto) {
  document.getElementById(instrucao).textContent = texto;
}