import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTablesRequest } from "../../../redux/tablesReducer";

const TableForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    //dispatch(updateTablesRequest({
      //id, status, peopleAmount, maxPeopleAmount, bill}));
    navigate("/");
  }

  return (
    <Container>
        <h3>Table 1,2,3</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Status:</Form.Label>
          <Form.Select />
          <Form.Label>People:</Form.Label>
          <Form.Control />/
          <Form.Control />
          <Form.Label>Bill: </Form.Label>
          $ <Form.Control />
          <Button type="submit">Update</Button>
        </Form>
    </Container>
  );
};

export default TableForm;