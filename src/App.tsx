import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import EstilosGlobais from "./common/EstilosGlobais";

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <EstilosGlobais />
      <p>Hello World!</p>
    </ThemeProvider>
  );
}

export default App;
