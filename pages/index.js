import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button_with_image";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function test() {
  return (
    <>
      <OrganismNav />
      <center>
        <div className="row container mt-5">
          <div className="col text-left">
            <AtomText value="Peduli Digital Market" size="36px" weight="bold" />
            <AtomText value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" size="14px" />
            <div className="row mt-5">
              <div className="col-md-6">
                <AtomButton value="Browse All Products" background="#0086CF" color="#FFF" border="none" padding="10px 20px" radius="10px" image="/beranda/icon_button_2.png" />
              </div>
              <div className="col-md-6">
                <AtomButton value="Follow This Board" background="#F0F0F0" border="none" padding="10px 20px" radius="10px" image="/beranda/icon_button.png" />
              </div>
            </div>
          </div>
          <div className="col">
            <img src="/beranda/banner.svg" />
          </div>
        </div>
        <div className="mt-5 pt-5" style={{ width: "100%", height: "512px", background: "#F9F9F9" }}>
          <center>
            <div className="row container">
              <div className="col-12 text-left">
                <AtomText value="Forever bag" size="24px" weight="bold" />
              </div>
              <div className="col">
                <MoleculeProductList image="/products/product_1.svg" name="Lavonte #A1294" category="Forever Shoes" price="$125.00" />
              </div>
              <div className="col">
                <MoleculeProductList image="/products/product_2.svg" name="Algolili #A1294" category="Forever Shoes" price="$45.00" />
              </div>
              <div className="col">
                <MoleculeProductList image="/products/product_3.svg" name="Loverial #A1294" category="Forever Shoes" price="$50.00" />
              </div>
              <div className="col">
                <MoleculeProductList image="/products/product_4.svg" name="Arcante #A1294" category="Forever Shoes" price="$75.00" />
              </div>
            </div>
          </center>
        </div>
      </center>
    </>
  );
}
