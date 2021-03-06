import Link from 'next/link';
export default function test({ value, color, size, weight, margin, marginTop, marginBottom, href, display }) {
  return <Link href={href} style={{ color: color, display:display, fontSize: size, fontWeight: weight, margin: margin, marginTop: marginTop, marginBottom: marginBottom }}>{value}</Link>;
}