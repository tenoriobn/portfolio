import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import EstilosGlobais from "./common/EstilosGlobais";
import Menu from "./components/Menu";

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <EstilosGlobais />
      <Menu />
    </ThemeProvider>
  );
}

export default App;
