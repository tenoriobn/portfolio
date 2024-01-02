import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import EstilosGlobais from "./common/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from 'react-router-dom';
import SobreMim from "./components/SobreMim";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RecoilRoot>
        <Router>
          <EstilosGlobais />
          <Cabecalho />

          <SobreMim />
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
