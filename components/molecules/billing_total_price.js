import AtomText from "../atoms/text";

export default function billing_product({ totalPrice, weight, size, price, quantity}) {
	return (
		<>
			<AtomText value="Total Price: " display="inline" size={size}/>
			<AtomText value={totalPrice} weight="bold" display="inline" size={size}/>
		</>
	);
}
