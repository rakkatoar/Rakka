export default function test({ value, color, size, weight, margin, marginTop, marginBottom, display, marginRight, onClick, textAlign, width }) {
  return <p onClick={onClick} style={{ color: color, width: width, display:display, fontSize: size, fontWeight: weight, margin: margin, marginRight: marginRight, marginTop: marginTop, marginBottom: marginBottom, textAlign:textAlign }}>{value}</p>;
}