import { useEffect, RefObject } from 'react';

interface UseCliqueForaProps<T extends HTMLElement> {
  ref: RefObject<T>;
  aoClicarFora: () => void;
}

const useFecharAoClicarFora = <T extends HTMLElement>({
  ref,
  aoClicarFora,
}: UseCliqueForaProps<T>) => {
  useEffect(() => {
    const lidarComCliqueFora = (evento: MouseEvent) => {
      if (ref.current && !ref.current.contains(evento.target as Node)) {
        aoClicarFora();
      }
    };

    document.addEventListener('mousedown', lidarComCliqueFora);

    return () => {
      document.removeEventListener('mousedown', lidarComCliqueFora);
    };
  }, [ref, aoClicarFora]);
};

export default useFecharAoClicarFora;