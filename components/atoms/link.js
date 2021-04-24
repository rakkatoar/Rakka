export default function test({ value, color, size, weight, margin, marginTop, marginBottom, href, display }) {
  return <a href={href} style={{ color: color, display:display, fontSize: size, fontWeight: weight, margin: margin, marginTop: marginTop, marginBottom: marginBottom }}>{value}</a>;
}