export default function product_image({ image }) {
  return (
    <>
	<div className="col-3" style={{ margin: "auto", display: "block", padding: "15px 0", borderRadius: "10px", border: "1px solid #DEDEDE" }}>
		<img src={image} />
	</div>
    </>
  );
}
