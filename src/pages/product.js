import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

function Product() {

	const [product, setProduct] = useState(undefined)
	let params = useParams();

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/" + params.id)
			.then(response => response.json())
			.then((data) => setProduct(data))
	}, [])

	return (
		<>
			<Container>
				{
					product?
					<Row className={"mt-4"}>
						<Col className={"justify-content-center"}>
							<Container className="d-flex justify-content-center">
								<Image src={product.image} style={{maxHeight: "25rem", padding: "1rem"}}/>
							</Container>
						</Col>
						<Col>
							<h6 className={"text-secondary"}> {product.category} </h6>
							<h3> {product.title} </h3>

							<h6 className={"text-secondary mt-4"}> Price </h6>
							<h2 className={"text-success"}> $ {product.price} </h2>

							<h6 className={"text-secondary mt-5"}> Description </h6>
							<p> {product.description} </p>

							<h6 className={"text-secondary mt-5"}> Rating </h6>
							<Container fluid className={"d-flex mt-3 align-center"}>
									<h2> { product.rating.rate } </h2>
									<div className="ms-4">
										{
											[...new Array(parseInt(product.rating.rate))].map(
												(i) => <FontAwesomeIcon size={"2x"} icon={faStar} />)
										}
										{
											Math.ceil(parseFloat(product.rating.rate) - parseInt(product.rating.rate)) ? <FontAwesomeIcon size={"2x"} icon={faStarHalf} />:""
										}
									</div>
							</Container>
							<h6> { product.rating.count } reviews </h6>
						</Col>
					</Row> : <Spinner animation="border" variant="primary" />
				}
			</Container>
		</>
	)
}

export default Product;
