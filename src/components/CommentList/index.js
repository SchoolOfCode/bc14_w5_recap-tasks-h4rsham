import "../../index.css";

export default function CommentList(props) {
  const firstNameInitial = props.author.charAt(0);
  const lastNameInitial = props.author.split(" ").pop().charAt(0);

  return (
    <div className="text-card">
      <p className="initials-circle">{firstNameInitial + lastNameInitial}</p>
      <p>{props.id}</p>
      <p>{props.author}</p>
      <p>{props.comment}</p>
    </div>
  );
}
