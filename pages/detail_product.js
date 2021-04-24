import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import OrganismNav from "../components/organisms/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function test () {
	return (
	<>
  <OrganismNav />
  <center>
    <div className="row container mt-5">
      <div className="col-md-6" style={{padding:"0 50px", marginBottom:"30px"}}>
		<div style={{padding:"10px 0 30px 0", background: "#FFFFFF", border: "1px solid #DEDEDE", boxSizing: "border-box", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: "10px"}}>
        	<img style={{margin:"auto", display:"block"}} src="/products/product_4.jpg"/>
		</div>
		<div className="row mt-4">
			<div className="col-3" style={{margin:"auto", display:"block", padding:"15px 0", borderRadius: "10px", border: "1px solid #DEDEDE" }}>
        		<img src="/products/product_4_1.png"/>
			</div>
			<div className="col-3" style={{margin:"auto", display:"block", padding:"15px 0", borderRadius: "10px", border: "1px solid #DEDEDE" }}>
        		<img src="/products/product_4_2.png"/>
			</div>
			<div className="col-3" style={{margin:"auto", display:"block", padding:"15px 0", borderRadius: "10px", border: "1px solid #DEDEDE" }}>
        		<img src="/products/product_4_3.svg"/>
			</div>
		</div>
      </div>
      <div className="col-md-6 text-left" style={{marginBottom:"30px"}}>
          <AtomText value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment " size="24px" weight="bold"/>
          <AtomText value="Stock : 50" size="14px" color="#9D9D9D"/>
          <AtomText marginBottom="80px" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" size="14px" />
		<AtomButton position="absolute" bottom="0" value="Add To Cart" background="#0086CF" color="#FFF" border="none" padding="10px 20px" radius="10px"/>
      </div>
    </div>
  </center>
	</>
	);
}
