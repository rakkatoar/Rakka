import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import {list_product} from "../components/variables/product";
import {useRouter} from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toast} from "react-bootstrap";
import {useState} from "react";

export default function index() {
  const products = list_product();
  const [show, setShow] = useState(false);
  const [showName, setShowName] = useState("");
  const router = useRouter();

  const handleAddCart = e => {
    setShowName(e.target.name);
    setShow(true);
  };
  return (
    <>
      <OrganismNav />
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{position:"absolute", right:"20px", zIndex:"99", marginTop:"15px", background:"#1DD200", color:"#fff"}}>
        <Toast.Body><img src="/beranda/toast_check.png" className="mr-3" />Success Add {showName} To Cart</Toast.Body>
      </Toast>
      <center>
        <div className="row container mt-5">
          <div className="col-md-6 text-left">
            <AtomText value="Peduli Digital Market" size="36px" weight="bold" />
            <AtomText value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" size="14px" />
            <div className="row mt-5">
              <div className="col-md-6">
                <AtomButton value="Browse All Products" background="#0086CF" color="#FFF" border="none" padding="10px 20px" radius="10px" icon="/beranda/icon_button_2.png" fontSize="14px" />
              </div>
              <div className="col-md-6">
                <AtomButton value="Follow This Board" background="#F0F0F0" border="none" padding="10px 20px" radius="10px" icon="/beranda/icon_button.png" fontSize="14px" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img style={{width:"100%"}} src="/beranda/banner.svg" />
          </div>
        </div>
        <div className="mt-5 pt-5 pb-5" style={{ width: "100%", background: "#F9F9F9" }}>
          <center>
            <div className="row container">
              <div className="col-12 text-left">
                <AtomText value="Forever bag" size="24px" weight="bold" />
              </div>
              {products.map((product, index) => {
                return(
                  <>
                    <div className="col-md-3 mb-4">
                      <MoleculeProductList key={index} addCart={handleAddCart} id={product.id} name={product.name} image={product.images[0]} name={product.name} category={product.category} price={product.price} index={index} href="/product/[id]"/>
                    </div>
                  </>
                )
              })
              }
            </div>
          </center>
        </div>
      </center>
    </>
  );
}
