import { useEffect } from "react";
import { cor } from "../../../Tema/cores";

const useCorTemaDinamica = (trocaTema: boolean) => {
  useEffect(() => {
    const metaCorTema = document.querySelector('meta[name="theme-color"]');
    
    if (metaCorTema) {
      metaCorTema.setAttribute('content', trocaTema ? cor.azulEscuro : cor.azul);
    }
  }, [trocaTema]);
};

export default useCorTemaDinamica;
