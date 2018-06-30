import React from "react"
import PostList from "../components/PostList";
import CategoryList from "../components/CategoryList";


export default class AppContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Post List</h3>
                        <PostList/>
                    </div>
                    <div className="col-sm-6">
                        <h3>Category List</h3>
                        <CategoryList/>
                    </div>
                </div>
            </div>
        )
    }
}