import './App.css'
import {Outlet} from 'react-router-dom';
import Bar from './partials/bar';
import FilterContext from "./context/filterContext";
import {useState, useEffect} from "react";

function App() {

	const [products, setProducts] = useState(undefined);
	const [filtered, setFiltered] = useState(undefined);
	const [categories, setCategories] = useState(undefined);
	const [filteredCategories, setFilteredCategories] = useState(new Set());

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(response => response.json())
			.then((data) => {
				setProducts(data)
				setFiltered(data)
			})
	}, [])

	useEffect(() => {
		if (products) {
			let _categories = new Set(products.map((e) => e.category));
			setCategories(Array.from(_categories))
		}
	}, [products])

	const filter = (match) => {
		let newfiltered = products.filter((e) => {
						let reg = new RegExp(match)
						return reg.test(e.title)
					})
		setFiltered(newfiltered)
	}

	const toggle = (category) => {
		let newCategories = new Set(filteredCategories)
		newCategories.has(category) ? newCategories.delete(category): newCategories.add(category)
		setFilteredCategories(newCategories)
	}
	
	return (
		<FilterContext.Provider value={{filteredCategories: filteredCategories, categories: categories, toggleCategory: toggle, filter: filter, filtered: filtered}}>
			<div className="App">
				<Bar/>
				<Outlet/>
			</div>
		</FilterContext.Provider>
  	);
}

export default App;
