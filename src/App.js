import { Container } from "react-bootstrap";
import { Routes } from "react-router-dom";
import Footer from "./Components/Pages/Footer/Footer";
import Header from "./Components/Pages/Header/Header";
import PageNotFound from "./Components/Features/PageNotFound/PageNotFound";
import { Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import TableForm from "./Components/Features/TableForm/TableForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesReducer";
import { fetchStatus } from "./redux/statusReducer";

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchStatus()), [dispatch]);

  return (
    <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TableForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
    </Container>
  );
}

export default App;
