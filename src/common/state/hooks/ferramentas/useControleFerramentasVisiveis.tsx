import { useState, useCallback } from "react";

const useControleFerramentasVisiveis = (qtdInicial: number) => {
  const [qtdFerramentasVisiveis, setQtdFerramentasVisiveis] = useState(qtdInicial);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const alternarVisibilidade = useCallback(
    (totalItens: number, containerRef: React.RefObject<HTMLDivElement>) => {
      if (mostrarTodos) {
        setQtdFerramentasVisiveis(qtdInicial);
        if (containerRef.current) {
          window.scrollTo({
            top: containerRef.current.offsetTop - 100,
            behavior: "smooth",
          });
        }
      } else {
        setQtdFerramentasVisiveis(totalItens);
      }
  
      setMostrarTodos(!mostrarTodos);
    },
    [mostrarTodos, qtdInicial]
  );

  return { qtdFerramentasVisiveis, mostrarTodos, alternarVisibilidade };
};

export default useControleFerramentasVisiveis;
