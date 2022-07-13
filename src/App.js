import { Box } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/home/home";

function App() {
  return (
    <Box width="100%" padding="0" margin="0">
      <Header />
      <Home />
    </Box>
  );
}

export default App;
