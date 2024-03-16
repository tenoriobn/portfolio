import { useEffect } from "react";
import { cor } from "../../../Tema/cores";

const useCorTemaDinamica = (trocaTema: boolean) => {
  useEffect(() => {
    const metaCorTema = document.querySelector('meta[name="theme-color"]');
    
    if (metaCorTema) {
      setTimeout(() => {
        metaCorTema.setAttribute('content', trocaTema ? cor.azulEscuro : cor.azul);
      }, 300);
    }
  }, [trocaTema]);
};

export default useCorTemaDinamica;
