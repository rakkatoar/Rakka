import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculeInput from "../components/molecules/input";
import MoleculeTextarea from "../components/molecules/textarea";
import MoleculeBillingProduct from "../components/molecules/billing_product";
import MoleculeBillingTotalPrice from "../components/molecules/billing_total_price";
import OrganismNav from "../components/organisms/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function billing() {
  return (
    <>
			<OrganismNav />
      <center>
        <div className="row container mt-5">
          <div className="col-md-8 text-left">
            <AtomText value="Billing Info" weight="bold" size="28px"/>
            <AtomText value="Invoice : 13.04.2020.1" color="#646464" size="20px"/>
						<div className="row">
							<div className="col-md-6">
								<MoleculeInput label="Name" name="name" type="text"/>
							</div>
							<div className="col-md-6">
								<MoleculeInput label="Email" name="email" type="email"/>
							</div>
							<div className="col-md-6">
								<MoleculeInput label="Nomor Telpon" name="telp" type="number"/>
							</div>
							<div className="col-md-6">
								<MoleculeInput label="Keterangan" name="keterangan" type="text"/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
									<MoleculeTextarea label="Alamat" name="address" rows="5"/>
							</div>
						</div>
          </div>
          <div className="col-md-4 text-left" style={{marginTop:"20px", padding:"50px 50px"}}>
						<div style={{padding:"20px 20px", background:"#F8F8F8", borderRadius: "10px", marginBottom:"10px"}}>
							<AtomText value="Billing Info" weight="bold" size="15px"/>
							<div style={{height:"240px"}}>
							<MoleculeBillingProduct product="Lorevial #A1294" price="$50.00" quantity=" x 1" size="12px"/>
							<MoleculeBillingProduct product="Lorevial #A1294" price="$140.00" quantity=" x 10" size="12px"/>
							<MoleculeBillingProduct product="Lorevial #A1294" price="$350.00" quantity=" x 5" size="12px"/>
							</div>
							<MoleculeBillingTotalPrice totalPrice="$540.00" size="12px"/>
						</div>
            <AtomButton className="block" value="Pay" background="#0086CF" border="none" color="#FFF" radius="10px" padding="10px" weight="bold" width="100%" marginTop="10px" marginBottom="50px" />
          </div>
        </div>
      </center>
    </>
  );
}
