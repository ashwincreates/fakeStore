import React from "react";

const filterContext = React.createContext({
							categories: [],
							filteredCategories: new Set(),
							toggleCategory: (category) => {
				
								},
							filter: (matchText) => {
									// a function to filter the result
								},
							filtered: []
						})

export default filterContext;
