import React from "react"

import Headline from "../components/Headline"

export default class AppContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Headline>Hello Ozcan Yarimdunya</Headline>
                    </div>
                    <ul>
                        <li>Hello</li>
                        <li>World</li>
                    </ul>
                </div>
            </div>
        )
    }
}