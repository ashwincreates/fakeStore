import ListGroup from "react-bootstrap/ListGroup";
import {useContext, useEffect} from "react";
import filterContext from "../context/filterContext";
import Form from 'react-bootstrap/Form';

function Filter(props) {

	const context = useContext(filterContext)

	useEffect(() => {
	}, [context.filteredCategories])

	return (
			<>
				<h6 className=""> Filter </h6>
				<Form>
					<Form.Group>
						<Form.Control type="text" placeholder="Search" onChange={(e) => {context.filter(e.target.value)}}></Form.Control>
					</Form.Group>
				</Form>
				<h6 className={"mt-4"}> Sort by Categories </h6>
				<ListGroup>
					{
						context.categories?
							context.categories.map((category, index) => {
								return (context.filteredCategories.has(category)) ?
										<ListGroup.Item key={index} className={"bg-primary"} onClick={(_) => {context.toggleCategory(category)}}>
											{category}
										</ListGroup.Item> :
										<ListGroup.Item key={index} onClick={(_) => {context.toggleCategory(category)}}>
											{category}
										</ListGroup.Item>
							}): ""
					}
				</ListGroup>
			</>
	)
}

export default Filter;
