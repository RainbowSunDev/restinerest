import React from "react"

class CategoryItem extends React.Component {
    onItemClicked = () => {
        console.log("Clicked item text: " + this.props.text);
    };

    render() {
        return (
            <li onClick={this.onItemClicked}>{this.props.text}</li>
        )
    }
}

export default CategoryItem;