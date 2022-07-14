import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useNavigate, useLocation} from "react-router-dom";

function ProductCard(props) {
	let navigate = useNavigate();
	let location = useLocation();

	return (
			<Col lg={4} md={6} sm={12} key={props.product.id}>
				<Card className={"h-100"} style = {{ minWidth : '20rem' }}>
					<Card.Img 
						variant="top" 
						src={props.product.image} 
						style={{ height: '25rem', padding: '4rem', objectFit: 'contain'}} 
					/>
					<Card.Body>
						<Row>
							<Col className="col-8">
								<Card.Link 
									className="text-dark fs-5 fw-normal" 
									onClick={() => { navigate("products/" + props.product.id + location.search) }}
								>
									{props.product.title}
								</Card.Link>
							</Col>
							<Col className="col-4 text-end"><h4>$ {props.product.price}</h4></Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		)
}

export default ProductCard;
