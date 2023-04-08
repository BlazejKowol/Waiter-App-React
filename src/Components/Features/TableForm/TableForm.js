import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTablesById, updateTablesRequest } from "../../../redux/tablesReducer";
import { useState } from "react";
import { getStatus} from "../../../redux/statusReducer";

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

  return (
    <Container>
        <h3>Table {id}</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Status:</Form.Label>
          <Form.Select
            value={status}
            onChange={e => setStatus(e.target.value)}>
            {tableStatus.map(tStatus => (
            <option>
              {tStatus}
            </option>))}
          </Form.Select>
          <Form.Label>People:</Form.Label>
          <Form.Control 
            value={peopleAmount}
            onChange={e => setPeopleAmount(e.target.value)}/>/
          <Form.Control  
            value={maxPeopleAmount}
            onChange={e => setMaxPeopleAmount(e.target.value)}/>
          <Form.Label>Bill: </Form.Label>
          $ <Form.Control 
            value={bill}
            onChange={e => setBill(e.target.value)}/>
          <Button type="submit">Update</Button>
        </Form>
    </Container>
  );
};

export default TableForm;