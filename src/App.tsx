import { ThemeProvider } from "styled-components"
import { I18nextProvider } from "react-i18next";
import PaginaPadrao from "./page"
import Tema from "./common/Tema"
import EstilosGlobais from "./common/EstilosGlobais"
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useConfigurarI18n from "./common/state/hooks/traducao/useConfigurarI18n";
import SobreMim from "./components/SobreMim";
import Projetos from "./components/Projetos";
import Formacoes from "./components/Formacoes";
import Contatos from "./components/Contatos";
import Habilidades from "./components/Habilidades";

function App() {
  const i18n = useConfigurarI18n();
  if (!i18n) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={Tema}>
        <RecoilRoot>
          <Router>
            <Routes>
              <Route path='/' element={<PaginaPadrao />}>
                <Route index element={<SobreMim />} />
                <Route path='/projetos' element={<Projetos />} />
                <Route path='/formacoes' element={<Formacoes />} />
                <Route path='/habilidades' element={<Habilidades />} />
                <Route path='/contatos' element={<Contatos />} />
              </Route>
            </Routes>
          </Router>
          <EstilosGlobais />
        </RecoilRoot>
      </ThemeProvider>
    </I18nextProvider>
  )
}

export default App
