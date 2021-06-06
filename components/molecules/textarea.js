import { Form } from 'react-bootstrap';
export default function form_input({ label, type, color, marginTop, weight, rows, onChange }) {
  return (
    <>
			<Form.Group controlId="exampleForm.ControlTextarea1">
			<Form.Label>{label}</Form.Label>
			<Form.Control onChange={onChange} as="textarea" rows={rows} />
		</Form.Group>
    </>
  );
}