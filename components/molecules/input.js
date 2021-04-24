import { InputGroup, FormControl } from 'react-bootstrap';
export default function form_input({ label, type, color, marginTop, weight, rows }) {
  return (
    <>
			<label htmlFor="basic-url" style={{color:color, marginTop:marginTop, fontWeight:weight}}>{label}</label>
			<InputGroup className="mb-3" size="lg">
				<FormControl id="basic-url" aria-describedby="basic-addon3" type={type} rows={rows}/>
			</InputGroup>
    </>
  );
}