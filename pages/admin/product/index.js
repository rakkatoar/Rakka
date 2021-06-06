import AtomText from "../../../components/atoms/text";
import AtomButton from "../../../components/atoms/button";
import MoleculeInput from "../../../components/molecules/input";
import MoleculeTextarea from "../../../components/molecules/textarea";
import OrganismNav from "../../../components/organisms/nav";
import {list_product} from "../../../components/variables/product";
import {useRouter} from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toast, Modal, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import { fetch_data } from "../../../components/variables/api";

function Index({ data }) {
  const [show, setShow] = useState(false);
  const [showBackground, setShowBackground] = useState("#1DD200");
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(true);
  const [showContent, setShowContent] = useState("");
	const [productId, setProductId] = useState("");
	const [productName, setProductName] = useState("");
	const [productStock, setProductStock] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productCategory, setProductCategory] = useState("");
	const [productDesc, setProductDesc] = useState("");
  const router = useRouter();

	const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
	const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalDelete = (e) => {
		setProductId(e.target.alt);
		setShowModalDelete(true);
	};
	const handleChangeProductName = (e) => {
    setProductName(e.target.value);
  };
	const handleChangeProductStock = (e) => {
    setProductStock(e.target.value);
  };
	const handleChangeProductPrice = (e) => {
    setProductPrice(e.target.value);
  };
	const handleChangeProductCategory = (e) => {
    setProductCategory(e.target.value);
  };
	const handleChangeProductDesc = (e) => {
    setProductDesc(e.target.value);
  };
	
const products = data;
	const handleSaveProduct = () => {
    let json = {
			"action":"save",
			"table":"tx_hdr_product",
			"create_date":"product_create_date",
			"hdr_id":"PRODUCT_ID",
			"data":
			{
				"product_name":productName,
				"product_price":productPrice,
				"product_stock":productStock
			},
			"detail":
			{
				"table":"tx_dtl_product",
				"data":
				{
					"DTL_PRODUCT_CATEGORY":productCategory,
					"DTL_PRODUCT_DESC":productDesc
				}
			}
		}
		fetch_data("POST", "http://localhost/api/store", json).then(function (
			result
			){
		if(result.success){
			setShowBackground("#1DD200");
			setShowContent(result.message);
			setShow(true);
			setShowModal(false);
			router.reload(window.location.pathname);
		} else {
			alert(result.message);
		}

	})
};
const handleDeleteProduct = () => {
	let json = {
		"action":"delete",
    "table":"tx_hdr_product",
    "table_detail":"tx_dtl_product",
		"id":productId,
		"where":"PRODUCT_ID",
		"where_detail":"DTL_HDR_ID"
}
fetch_data("POST", "http://localhost/api/store", json).then(function (
	result
	){
	if(result.success){
		setShowBackground("#DF0303");
		setShowContent(result.message);
		setShow(true);
		setShowModalDelete(false);
		setProductId("");
		router.reload(window.location.pathname);
	} else {
		alert(result.message);
	}

})
}
	let user;
		if (typeof Storage !== "undefined") {
			user = JSON.parse(localStorage.getItem("user_id"));
		}

	const handleAddNewProduct = () =>setShowModal (true);
	
  return (
    <>
      <OrganismNav />
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{position:"fixed", right:"20px", top:"20px", zIndex:"99", background:showBackground, color:"#fff"}}>
        <Toast.Body><img src="/beranda/toast_check.png" className="mr-3" />{showContent}</Toast.Body>
      </Toast>
			<Modal show={showModal} onHide={handleCloseModal}>
					<Modal.Header closeButton>
						<Modal.Title className="w-100">
							<AtomText value="Add New Product" textAlign="center" size="40px" weight="bold" width="100%" />
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="row">
							<div className="col-md-6">
								<img src="/admin/add-product-bg.png"></img>
							</div>
							<div className="col-md-6">
								<MoleculeInput onChange={handleChangeProductName} label="Product Name" name="name" type="text" border={productName.length == 0 ? "solid thin red" : ""} />
								<div className="row">
									<div className="col-md-6">
										<MoleculeInput onChange={handleChangeProductPrice} label="Price" name="price" type="text" border={productPrice.length == 0 ? "solid thin red" : ""}/>
									</div>
									<div className="col-md-6">
										<MoleculeInput onChange={handleChangeProductStock} label="Stock" name="stock" type="text" border={productStock.length == 0 ? "solid thin red" : ""}/>
									</div>
								</div>
								<MoleculeInput onChange={handleChangeProductCategory} label="Category" name="category" type="text"/>
								<MoleculeTextarea onChange={handleChangeProductDesc} label="Description" name="description" rows="5"/>
								<Button variant="primary btn-block" onClick={handleSaveProduct}>
									Save
								</Button>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			<Modal show={showModalDelete} onHide={handleCloseModalDelete}>
					<Modal.Header closeButton>
						<Modal.Title className="w-100">
							<AtomText value="Confirm Delete" textAlign="center" size="30px" weight="bold" width="100%" />
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="row">
								<img className="mx-auto" src="/admin/delete-product-bg.png"></img>
						</div>
						<div className="row">
							<div className="col-md-12">
								<AtomText textAlign="center" value="Are you sure to delete this product ?" size="30px" weight="bold"/>
							</div>
							<div className="col-md-6">
								<Button variant="danger btn-block" onClick={handleCloseModalDelete}>
										Cancel
								</Button>
							</div>
							<div className="col-md-6">
								<Button variant="primary btn-block" onClick={handleDeleteProduct}>
										Yes, sure
								</Button>
							</div>
						</div>
					</Modal.Body>
				</Modal>
      <center>
        <div className="row container mt-5 ">
					<AtomText value={`Hello, ${user ? user[0].USER_NAME : ""}`} size="13px" weight="600" />
          <AtomText value="This is your products"  size="36px" weight="bold"  display="block" textAlign="left" width="100%"/>
					<div className="row" style={{position:"relative", width:"100%"}}>
						<AtomButton onClick={handleAddNewProduct} value="Add new product" position="absolute" right="0" background="#0086CF" radius="10px" color="#fff" border="none"/>
					</div>
        </div>
        <div className="mt-5 pt-5 pb-5">
          <center>
            <div className="row container">
							<table className="w-100">
								<thead>
									<tr>
										<th colSpan="2">Product Name</th>
										<th>Price</th>
										<th>Stock</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{products ? products.map((product) => {
										return(
											<>
											<tr>
												<td><img src="" style={{width:"50px"}}/></td>
												<td>{product.PRODUCT_NAME}</td>
												<td>{product.PRODUCT_PRICE}</td>
												<td>{product.PRODUCT_STOCK}</td>
												<td><img onClick={handleShowModalDelete} alt={product.PRODUCT_ID} src="/admin/trash-icon.png"/></td>
											</tr>
											</>
										)
									})
									: []}
								</tbody>
							</table>
            </div>
          </center>
        </div>
      </center>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
	let json = {
		"action":"list",
		"table":"tx_hdr_product",
		"create_date":"product_create_date",
	}
	const res = await fetch_data("POST", "http://localhost/api/store", json).then(function (
		result
		){
		if(result.success){
			return result.data;
		} else {
			alert(result.message);
		}
	})

  const data = await res;

  // Pass data to the page via props
  return { props: { data } }
}

export default Index