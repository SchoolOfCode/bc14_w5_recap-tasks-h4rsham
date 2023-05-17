import React from "react";
import BlogPost from "../BlogPost/index";
import Comment from "../Comment/index";
import CommentList from "../CommentList/index";
import CommentForm from "../CommentForm/index";
import { useState } from "react";

function App() {
  // const [commentList, setCommentList] = useState([]);
  const [commentList, setCommentList] = useState([]);

  return (
    <div>
      <BlogPost />
      <Comment author="Harsham Lachman" comment="This is my comment" />
      {commentList.map((comments) => {
        return (
          <CommentList
            key={comments.id}
            author={comments.author}
            comment={comments.comment}
          />
        );
      })}
      <CommentForm commentList={commentList} setCommentList={setCommentList} />
    </div>
  );
}
export default App;
