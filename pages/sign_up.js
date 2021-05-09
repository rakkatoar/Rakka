import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculeInput from "../components/molecules/input";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import {users} from "../components/variables/user";
import { useState } from "react";
import {useRouter} from "next/router";

export default function signUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleSignup = () => {
    if(password1 == password2){
      let checkusername = users.filter(user => (user.username == username && user.password == password1));
      console.log(checkusername.length);
      if(checkusername.length == 0){
        alert("Signup Success");
        let newUser = {
          username:username,
          password:password1
        }
        users.push(newUser);
        console.log(users);
        router.push("/sign_in");
      } else if (username.length == 0) {
        alert("Username Empty");
      } else if (checkusername.length > 0 ){
        alert("User already registered.")
      }
    } else {
      alert("Password is not match");
    }
  };
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
            <MoleculeInput onChange={handleChangeUsername} label="Username / Email" type="text" color="#9D9D9D" marginTop="30px" border={username.length == 0 ? "solid thin red" : ""} />
            <MoleculeInput onChange={handleChangePassword1} label="Password" type="password" color="#9D9D9D" border={password1.length == 0 ? "solid thin red" : ""} />
            <MoleculeInput onChange={handleChangePassword2} label="Password" type="password" color="#9D9D9D" border={password2.length == 0 ? "solid thin red" : ""} />
            <AtomButton onClick={handleSignup} className="block" value="Register" background="#0086CF" border="none" color="#FFF" radius="10px" padding="10px" weight="bold" width="100%" marginTop="20px" marginBottom="50px" />
            <AtomText value="Already have an account" color="#9D9D9D" display="inline" marginRight="10px" />
            <Link href="/sign_in"><span style={{color:"#0086CF"}}>Sign In</span></Link>
          </div>
        </div>
      </center>
    </>
  );
}
