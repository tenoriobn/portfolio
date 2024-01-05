import { RecoilRoot } from "recoil";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SobreMim from "./components/SobreMim";
import PaginaPadrao from "./page/PaginaPadrao";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import Formacoes from "./components/Formacoes";
import Contatos from "./components/Contatos";

function App() {
  return (
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
    </RecoilRoot>
  );
}

export default App;
