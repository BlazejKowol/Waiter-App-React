import { Container } from "react-bootstrap";
import { Routes } from "react-router-dom";
import Footer from "./Components/Pages/Footer/Footer";
import Header from "./Components/Pages/Header/Header";
import PageNotFound from "./Components/Features/PageNotFound/PageNotFound";
import { Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Table from "./Components/Features/Table/Table";

function App() {
  return (
    <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
    </Container>
  );
}

export default App;
