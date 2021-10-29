import React from "react";
import "./Post.css";
import { Component } from "react";

class Post extends Component {
	constructor(title, imageLink, description) {
		super();
		this.title = "Sample Post Title";
		this.imageLink =
			"https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg";
		this.description = "This is the description of the post";
	}
	render() {
		return (
			<div className="Post" data-testid="post">
				<p>{this.title}</p>
				<img src={this.imageLink} alt="post" />
				<p>{this.description}</p>
			</div>
		);
	}
}

export default Post;
