import { InputGroup, FormControl } from 'react-bootstrap';
export default function form_input({ label, type, color, marginTop, weight, rows, onChange, border }) {
  return (
    <>
			<label style={{color:color, marginTop:marginTop, fontWeight:weight}}>{label}</label>
			<InputGroup className="mb-3" size="lg">
				<FormControl style={{border:border}} onChange={onChange} aria-describedby="basic-addon3" type={type} rows={rows}/>
			</InputGroup>
    </>
  );
}