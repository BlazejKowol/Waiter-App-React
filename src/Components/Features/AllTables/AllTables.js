import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTables } from "../../../redux/tablesReducer";

const AllTables = () => {

  const tables = useSelector(getAllTables); 

  return (
    <Container>
        {tables.map(table => (
        <section className="row p-0 border-bottom">
            <Col className="col-lg-2 p-0 d-flex align-items-center">
                <h3 className="text-center m-0">Table {table.id}</h3>
            </Col>
            <Col className="col-lg-4 p-0 d-flex align-items-center">
                <p className="m-0"><strong>Status: </strong>{table.status}</p>
            </Col>
            <Link className="col d-flex my-2 p-0 justify-content-end text-decoration-none text-light" to={`/table/${table.id}`}>
                <button type="submit" className="text-white border border-none bg-primary rounded py-2">
                    Show more
                </button>
            </Link>           
        </section>
        ))}
    </Container>
  );
};

export default AllTables;