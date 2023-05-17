import React from "react";
import BlogPost from "../BlogPost/index";
import Comment from "../Comment/index";
import CommentList from "../CommentList/index";
import CommentForm from "../CommentForm/index";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const [commentList, setCommentList] = useState([]);
  const commentList = [
    {
      id: uuidv4(),
      author: "Harsham Lachman the 3rd",
      content: "PROGRESS!",
    },
    {
      id: uuidv4(),
      author: "Liz K",
      content: "Potato",
    },
    {
      id: uuidv4(),
      author: "Chris Meah",
      content:
        "Women treat me like HTML, they don't care about whats in my head they only care about what's in my body.",
    },
  ];

  return (
    <div>
      <BlogPost />
      <Comment author="Harsham Lachman" content="This is my comment" />
      {commentList.map((comments) => {
        return (
          <CommentList
            key={comments.id}
            id={comments.id}
            author={comments.author}
            content={comments.content}
          />
        );
      })}
      ;
      <CommentForm />
    </div>
  );
}
export default App;
