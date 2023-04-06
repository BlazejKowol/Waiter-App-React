import { Col } from "react-bootstrap";

const AllTables = () => {
  return (
    <section className="row border-bottom-2">
        <Col xs="12" md="6" className="col-lg-4">
            <div className={"rounded py-2 ps-2 mx-1 mb-2"}>
               <h3>Table</h3> 
            </div>
        </Col>
    </section>
  );
};

export default AllTables;