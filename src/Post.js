import { render } from "@testing-library/react";
import React from "react";
import "./Post.css";

const postInfo = {
  title: "Sample Post Title",
  imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
  description: "This is the description of the post",
};


class Post extends React.Component {
  constructor(){
    super();
    this.state={
      title: "Sample Post Title",
      imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
      description: "This is the description of the post",
    }
  }
  render(){
    return (
    <div className="Post" data-testid="post">
      <p>{this.state.title}</p>
      <img src={this.state.imageLink} alt="post" />
      <p>{this.state.description}</p>
    </div>
  );
  }
  
};

export default Post;
