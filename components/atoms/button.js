export default function test({ value, color, fontSize, background, border, radius, padding, position, bottom, marginTop, marginBottom, width, weight }) {
  return (
  <button style={{ color: color, fontWeight:weight, fontSize: fontSize, background: background, border: border, borderRadius: radius, padding: padding, position: position, bottom: bottom, marginTop: marginTop, marginBottom: marginBottom, width:width }}>
    {value}
  </button>
  );
}