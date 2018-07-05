import React from "react"
import API from "../utils/Const";
import ListItem from "./ListItem";

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: [],}
    }

    componentDidMount() {
        fetch(API.CATEGORIES, {})
            .then(data => data.json())
            .then(categories => this.setState({categories}))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <ul>
                {
                    this.state.categories.map((category, index) => <ListItem key={index} text={category.name}/>)
                }
            </ul>
        )
    }
}

export default CategoryList;