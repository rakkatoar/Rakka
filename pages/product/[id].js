import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import OrganismNav from "../../components/organisms/nav";
import MoleculeProductImage from "../../components/molecules/product_image";
import 'bootstrap/dist/css/bootstrap.min.css';
import {list_product} from "../../components/variables/product";
import {useRouter} from "next/router";

export default function detail() {
	const router = useRouter();
	const products = list_product();
	const product = products[router.query.id];
	console.log(product);
	return (
		<>
			<OrganismNav />
			<center>
				<div className="row container mt-5">
					<div className="col-md-6" style={{ padding: "0 50px", marginBottom: "30px" }}>
						<div style={{ padding: "10px 0 30px 0", background: "#FFFFFF", border: "1px solid #DEDEDE", boxSizing: "border-box", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "10px" }}>
							<img style={{ margin: "auto", display: "block", minWidth:"100%", height:"auto"}} src={ product ? product.images[0] : "/products/product_4.jpg"} />
						</div>
						<div className="row mt-4">
              <MoleculeProductImage image={product ? product.images[1] : "/products/product_4_1.png"} />
              <MoleculeProductImage image={product ? product.images[2] : "/products/product_4_2.png"} />
              <MoleculeProductImage image={product ? product.images[3] : "/products/product_4_3.png"} />
						</div>
					</div>
					<div className="col-md-6 text-left" style={{ marginBottom: "30px" }}>
						<AtomText value={product ? product.name : "title"} size="24px" weight="bold" />
						<AtomText value={`Stock : ${product ? product.stock : "-"}`} size="14px" color="#9D9D9D" />
						<AtomText value={`$${product ? product.price : "-"}`} size="20px" weight="bold" />
						<AtomText marginBottom="80px" value={product ? product.description : "No Description"} size="14px" />
						<AtomButton value="Add To Cart" background="#0086CF" color="#FFF" border="none" padding="10px 20px" radius="10px" icon="/beranda/logo_cart.svg" topIcon="0px"/>
					</div>
				</div>
			</center>
		</>
	);
}
