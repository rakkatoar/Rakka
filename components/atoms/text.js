export default function test ({value, color, size, weight, margin, marginTop, marginBottom}) {
	return <p style={{color:color, fontSize:size, fontWeight:weight, margin:margin, marginTop: marginTop, marginBottom: marginBottom}}>{value}</p>;
}