
import { RecoilRoot } from "recoil";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SobreMim from "./components/SobreMim";
import PaginaPadrao from "./page/PaginaPadrao";
import Habilidades from "./components/Habilidades";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<SobreMim />} />
            <Route path='/habilidades' element={<Habilidades />} />
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
