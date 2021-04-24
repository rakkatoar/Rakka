export default function test({ value, color, size, weight, margin, marginTop, marginBottom, display, marginRight }) {
  return <p style={{ color: color, display:display, fontSize: size, fontWeight: weight, margin: margin, marginRight: marginRight, marginTop: marginTop, marginBottom: marginBottom }}>{value}</p>;
}