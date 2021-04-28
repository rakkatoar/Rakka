import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculeInput from "../components/molecules/input";
import MoleculeCheckbox from "../components/molecules/checkbox";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import {users} from "../components/variables/user";
import { useState } from "react";
import {useRouter} from "next/router";

export default function test() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    let check = users.filter(user => (user.username == username && user.password == password));

    if(check.length){
      alert("Login Success");
      router.push("/billing");
    } else if (username.length == 0) {
      alert("Username Empty");
    } else {
      alert("Username/password wrong");
    }
  };
  return (
    <>
      <center>
        <div className="row container templateSignin">
          <div className="col-md-6">
            <img style={{width:"100%"}}  src="/signin/signin_banner.svg" />
            <AtomText value="Start your New Journey With Us" weight="bold" marginTop="50px" marginBottom="10px" size="20px"/>
            <AtomText value="Build your own shop using peduli digital Marketplace" color="#9D9D9D" marginBottom="5px"/>
            <AtomText value="You can sell all your favorite item and get easy money" color="#9D9D9D" />
          </div>
          <div className="col-md-6 text-left" style={{padding:"0 50px"}}>
            <AtomText value="Sign In" weight="bold" size="36px"/>
            <MoleculeInput onChange={handleChangeUsername} label="Username / Email" type="text" color="#9D9D9D" marginTop="30px" border={username.length == 0 ? "solid thin red" : ""} />
            <MoleculeInput onChange={handleChangePassword} label="Password" type="password" color="#9D9D9D"  border={password.length == 0 ? "solid thin red" : ""}/>
            <MoleculeCheckbox label="Remember Me" type="checkbox" color="#9D9D9D" />
            <AtomButton onClick={handleLogin} className="block" value="Login" background="#0086CF" border="none" color="#FFF" radius="10px" padding="10px" weight="bold" width="100%" marginTop="20px" marginBottom="50px" />
            <AtomText value="Don't have account" color="#9D9D9D" display="inline" marginRight="10px" />
            <Link href="/sign_up"><span style={{color:"#0086CF"}}>Sign Up</span></Link>
          </div>
        </div>
      </center>
    </>
  );
}
