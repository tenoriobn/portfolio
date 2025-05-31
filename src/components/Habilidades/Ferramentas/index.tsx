import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IEstilizacaoCustomizada } from "common/interface/IEstilizacaoCustomizada";
import { cor } from "common/Tema/cores";
import { IFerramentas } from "common/interface/IFerramentas";
import { estadoTrocaTema } from "common/state/atom";
import Botao from "components/Botao";
import useControleFerramentasVisiveis from "common/state/hooks/ferramentas/useControleFerramentasVisiveis";

const ContainerFerramentas = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 32px);
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 319px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (min-width: 375px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 48px);
    row-gap: 3rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 64px);
  }
`;

const LinkDocumentacaoFerramenta = styled(Link)``;

const IconeFerramenta = styled.img<IEstilizacaoCustomizada>`
  filter: drop-shadow(0rem 0rem .375rem ${(props) => (props.$trocaTema ? cor.cinzaEscuro : cor.cinzaMedio)});
  width: 32px;
  height: 32px;
  transition: all .3s ease-in-out;
  opacity: .6;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: 992px) {
    width: 64px;
    height: 64px;
  }
`;

const BotaoProjetos = styled(Botao)`
  font-size: 1rem;
  align-self: center;
  max-width: fit-content;
  margin-top: 2rem;
`;

export default function Ferramentas({ tituloRef }: { tituloRef: React.RefObject<HTMLDivElement> }) {
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");
  const listaFerramentas: IFerramentas[] = t("habilidades.listaFerramentas", { returnObjects: true });
  const qtdInicialFerramentas = 18;
  const { qtdFerramentasVisiveis, mostrarTodos, alternarVisibilidade } =
    useControleFerramentasVisiveis(qtdInicialFerramentas);

  return (
    <>
      <ContainerFerramentas>
        {listaFerramentas.slice(0, qtdFerramentasVisiveis).map((ferramenta) => (
          <LinkDocumentacaoFerramenta
            to={ferramenta.link}
            key={ferramenta.id}
            title={ferramenta.titulo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconeFerramenta src={ferramenta.icone} $trocaTema={trocaTema} />
          </LinkDocumentacaoFerramenta>
        ))}
      </ContainerFerramentas>

      {listaFerramentas.length > qtdInicialFerramentas && (
        <BotaoProjetos
          onClick={() => alternarVisibilidade(listaFerramentas.length, tituloRef)}
        >
          {mostrarTodos ? t("projetos.verMenos") : t("projetos.verMais")}
        </BotaoProjetos>
      )}
    </>
  );
}
