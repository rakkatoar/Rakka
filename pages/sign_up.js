import AtomText from "../components/atoms/text";
import AtomLink from "../components/atoms/link";
import AtomButton from "../components/atoms/button";
import MoleculeInput from "../components/molecules/input";
import MoleculeCheckbox from "../components/molecules/checkbox";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function test() {
  return (
    <>
      <center>
        <div className="row container templateSignin">
          <div className="col-md-6">
            <img style={{width:"100%"}} src="/signup/signup_banner.svg" />
            <AtomText value="Start your New Journey With Us" weight="bold" marginTop="50px" marginBottom="10px" size="20px"/>
            <AtomText value="Build your own shop using peduli digital Marketplace" color="#9D9D9D" marginBottom="5px"/>
            <AtomText value="You can sell all your favorite item and get easy money" color="#9D9D9D" />
          </div>
          <div className="col-md-6 text-left" style={{padding:"0 50px"}}>
            <AtomText value="Sign Up" weight="bold" size="36px"/>
            <MoleculeInput label="Username / Email" type="text" color="#9D9D9D" marginTop="30px" />
            <MoleculeInput label="Password" type="password" color="#9D9D9D" />
            <MoleculeInput label="Password" type="password" color="#9D9D9D" />
            <AtomButton className="block" value="Register" background="#0086CF" border="none" color="#FFF" radius="10px" padding="10px" weight="bold" width="100%" marginTop="20px" marginBottom="50px" />
            <AtomText value="Already have an account" color="#9D9D9D" display="inline" marginRight="10px" />
            <AtomLink value="Sign In" href="#sign_in" color="#0086CF"/>
          </div>
        </div>
      </center>
    </>
  );
}
