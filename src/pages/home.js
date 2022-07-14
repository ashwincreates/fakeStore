import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Filter from "../components/filter";
import ProductCard from "../components/product_card";
import FilterContext from "../context/filterContext";
import Col from "react-bootstrap/Col";
import {useContext} from "react";

function Home() {

	const context = useContext(FilterContext)

	return (
		<>
			<Container fluid>
				<Row className={"min-vh-100"}>
					<Col sm={2} className={"position-fixed fixed-top fixed-bottom d-md-block bg-light collapse border-end"} style={{zIndex: "100", paddingTop: "48px"}}>
						<div className={"position-sticky pt-3"}>
							<Filter/>
						</div>
					</Col>
					<Col sm={10} className={"ms-sm-auto"}>
						<Container className="pt-4">
							<h5> Trending Products </h5>
							<Row className="g-2 mt-2">
								{
									context.filtered ?
									context.filtered.map((e) => {
										if (context.filteredCategories.size > 0) {
											if (context.filteredCategories.has(e.category)) return <ProductCard key={e.id} product={e}/>
											else return ""
										} else return <ProductCard key={e.id} product={e}/>
									} 
									) : <Spinner animation="border" variant="primary" />
								}
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Home;
