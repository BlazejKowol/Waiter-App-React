import { Button, Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTablesById, updateTablesRequest } from "../../../redux/tablesReducer";
import { useState } from "react";
import { getStatus} from "../../../redux/statusReducer";
import { Navigate } from "react-router-dom";

const TableForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const tableData = useSelector(state => getTablesById(state, id));
  const tableStatus = useSelector(getStatus);

  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateTablesRequest({
      id, status, peopleAmount, maxPeopleAmount, bill}));
    navigate("/");
  }

  if(peopleAmount < 0) setPeopleAmount(0);
  if(peopleAmount > 10) setPeopleAmount(10);
  if(maxPeopleAmount > 10) setMaxPeopleAmount(10);
  if(maxPeopleAmount < 0) setMaxPeopleAmount(0);
  if(peopleAmount > maxPeopleAmount) setMaxPeopleAmount(peopleAmount);

  if(!tableData) return <Navigate to="/" />

  return (
    <Container>
        <h3>Table {id}</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="d-flex align-items-center mb-4">
              <Col lg={1}>
                <Form.Label><strong>Status: </strong></Form.Label>
              </Col>
              <Col lg={3} className="w-15">
                <Form.Select
                  value={status}
                  onChange={e => setStatus(e.target.value)}>
                  {tableStatus.map(tStatus => (
                  <option key={tStatus}>
                    {tStatus}
                  </option>))}
                </Form.Select>
              </Col>  
              </Form.Group>
            </Row>
            <Form.Group className="d-flex align-items-center mb-4 w-25">
              <Form.Label className="me-4"><strong>People: </strong></Form.Label>
              <Form.Control
                  className="d-flex pe-0 w-25"
                  type="number"
                  value={status === 'Free' || status === 'Cleaning' ? 0 : peopleAmount}
                  onChange={e => setPeopleAmount(e.target.value)}/>
              <span className="mx-2">/</span>
              <Form.Control
                  className="d-flex w-25 pe-0"
                  type="number"  
                  value={maxPeopleAmount}
                  onChange={e => setMaxPeopleAmount(e.target.value)}/>
              </Form.Group>
            {status === 'Busy' && (
              <Form.Group className="d-flex align-items-center mb-4 w-25">
                <Form.Label><strong>Bill:</strong></Form.Label>
                <span className="ms-5 me-1">$</span>
                <Form.Control
                className="w-25"
                type="number" 
                value={status === 'Busy' ? bill : 0}
                onChange={e => setBill(e.target.value)}/>
              </Form.Group>
              )}
          <Button type="submit">Update</Button>
        </Form>
    </Container>
  );
};

export default TableForm;