import AtomText from "../atoms/text";

export default function billing_product({ product, weight, size, price, quantity}) {
	return (
		<>
			<AtomText value={product} weight={weight} marginBottom="0" marginTop="20px" size={size}/>
			<AtomText value={price} weight={weight} display="inline" size={size}/>
			<AtomText value={quantity} weight={weight} display="inline" size={size}/>
		</>
	);
}