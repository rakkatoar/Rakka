import AtomText from "../../atoms/text";
import {useRouter} from "next/router";
export default function product_list({ image, name, category, price, href, index, addCart, id }) {
  const router = useRouter();
 
  const handleClick = (e) => {
    router.push({
      pathname: href,
      query: { id: e.target.id },
    });
  };
  return (
    <>
      <div className="p-4 templateProductList text-left" style={{height:"auto"}}>
        <div onClick={handleClick} id={index} className="mb-3" style={{width:"100%", background:"red", height:"156px", background: `url(${image})`, backgroundSize:"contain", backgroundRepeat: "no-repeat", backgroundPosition:"center"}}>
        {/*<img className="mb-4" src={image} />*/}
        </div>
        <AtomText value={name} size="14px" weight="bold" />
        <AtomText value={category} size="9px" margin="-10px 0px 20px 0px" />
        <div className="row">
          <div className="col-md-8">
            <AtomText value={`$${price}`} size="18px" weight="bold" marginBottom="0px"/>
          </div>
          <div onClick={addCart} className="col-md-4">
            <img id={id} name={name} src="/beranda/icon_cart_black.png" />
          </div>
        </div>
      </div>
    </>
  );
}