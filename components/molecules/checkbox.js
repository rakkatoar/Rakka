export default function form_input({ label, type, color, name, value }) {
  return (
    <>
			<input type={type} name={name} value={value} />
			<label className="text-left" style={{color:color, marginLeft:"10px"}} for={name}>{label}</label>
    </>
  );
}