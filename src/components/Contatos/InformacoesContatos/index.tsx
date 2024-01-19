import styled from "styled-components";
import { Link } from "react-router-dom";
import Linkedin from "src/assets/icons/linkedin.svg?react";
import Github from "src/assets/icons/github.svg?react";
import Gmail from "src/assets/icons/gmail.svg?react";
import Whatsapp from "src/assets/icons/whatsapp.svg?react";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { useRecoilValue } from "recoil";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estiloIconeSocial } from "src/common/estilosPadronizados/estilosIcones";
import { useTranslation } from "react-i18next";

const ContainerInformacoesContatos = styled.div`
  margin-top: 1.5rem;
  flex: 1;
`;

const InstrucaoContato = styled.p`
  text-align: center;
`;

const ContainerCanaisComunicacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 375px) {
    gap: 1.5rem;
  }
`;

const Icone = styled.svg<IEstilizacaoCustomizada>`
  ${estiloIconeSocial}
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 992px) {
    width: 48px;
    height: 48px;
  }
`;

export default function InformacoesContatos() {
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");

  return (
    <ContainerInformacoesContatos>
      <InstrucaoContato>
        {t('contatos.conteudoTextual')}
      </InstrucaoContato>
      <ContainerCanaisComunicacao>
        <Link to="https://www.linkedin.com/in/bruno-tenorio/" target="_blank" rel="noopener noreferrer">
          <Icone as={Linkedin} $trocaTema={trocaTema} />
        </Link>
        <Link to="https://github.com/tenoriobn/" target="_blank" rel="noopener noreferrer">
          <Icone as={Github} $trocaTema={trocaTema} />
        </Link>
        <Link to="mailto:tenoriobn@gmail.com">
          <Icone as={Gmail} $trocaTema={trocaTema} />
        </Link>
        <Link to="https://wa.me/5511989400334" target="_blank" rel="noopener noreferrer">
          <Icone as={Whatsapp} $trocaTema={trocaTema} />
        </Link>
      </ContainerCanaisComunicacao>
    </ContainerInformacoesContatos>
  );
}
