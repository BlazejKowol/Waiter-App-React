import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const AllTables = () => {
  return (
    <Container>
        <section className="row p-0 border-bottom">
            <Col className="col-lg-1 p-0 d-flex align-items-center">
                <h3 className="text-center">Table</h3>
            </Col>
            <Col className="col-lg-1 p-0 d-flex align-items-center">
                <p className="m-0">Status:</p>
            </Col>
            <Link className="col d-flex my-2 p-0 justify-content-end text-decoration-none text-light" to={"/table"}>
                <button type="submit" className="text-white border border-none bg-primary rounded py-2">
                    Show more
                </button>
            </Link>
        </section>
    </Container>
  );
};

export default AllTables;