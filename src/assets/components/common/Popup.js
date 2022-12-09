import React,{useState} from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-bootstrap/Modal";
import '../../css/form.css'
function Popup(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>
            {props.action === "edit"
              ? "Edit Department"
              : "NO" && props.action === "delete"
              ? "Delete Department"
              : "NO" && props.action === "addDepartment"
              ? "Add Department"
              : "NO" && props.action === "addHoliday"
              ? "Add Holiday"
              : "NO"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.action === "edit" ? (
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Edit Department</Form.Label>
                <Form.Control type="text" placeholder="Edit Department" />
              </Form.Group>
            </Form>
          ) : "undefined" && props.action === "delete" ? (
            "Are you sure want to delete?"
          ) : "undefined" && props.action === "addDepartment" ? (
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Add Department</Form.Label>
                <Form.Control type="text" placeholder="Add Department" />
              </Form.Group>
            </Form>
          ) : "NO" && props.action === "addHoliday" ? (
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Add Holiday</Form.Label>
                <Form.Control type="text" placeholder="Add Holiday" />
                <Form.Label>Holiday Date</Form.Label>
                <DatePicker  className="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
              </Form.Group>
            </Form>
          ) : (
            "NO"
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            variant="secondary"
            className="btn-success"
            onClick={props.onHide}
          >
            Close
          </button>
          <button
            variant="primary"
            className="btn-success"
            onClick={props.onHide}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Popup;