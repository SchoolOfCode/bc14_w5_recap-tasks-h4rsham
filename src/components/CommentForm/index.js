import { useState } from "react";

export default function CommentForm(props) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    const newComment = {
      author: author,
      comment: comment,
    };
    setCommentList([...commentList, newComment]); // This adds the new comment to the commentList array
    setComment("");
  };

  // Grey area start
  const CommentCard = ({ comment }) => {
    return (
      <div>
        <h5>Author: {comment.author}</h5>
        <p>Comment: {comment.comment}</p>
      </div>
    );
  };
  // Grey area end

  return (
    <div>
      <p>Add a comment</p>
      <h5>Author: </h5>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <h5>Comment: </h5>
      <input
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {/* Grey area start */}
      <div>
        {commentList.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </div>
      {/* Grey area end */}
    </div>
  );
}
