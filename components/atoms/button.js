export default function test ({value, color, fontSize, background, border, radius, padding, position, bottom, marginBottom}) {
	return <button style={{color:color, fontSize:fontSize, background:background, border:border, borderRadius:radius, padding:padding, position:position, bottom:bottom, marginBottom:marginBottom}}>{value}</button>;
}