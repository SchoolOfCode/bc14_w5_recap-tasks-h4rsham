export default function CommentList(props) {
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.author}</p>
      <p>{props.comment}</p>
    </div>
  );
}
