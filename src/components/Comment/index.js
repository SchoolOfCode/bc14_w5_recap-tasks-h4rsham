import "../../index.css";

export default function Comment(props) {
  const firstNameInitial = props.author.charAt(0);
  const lastNameInitial = props.author.split(" ").pop().charAt(0);

  return (
    <div>
      <p>{props.author}</p>
      <p>{props.content}</p>
      <p className="initials-circle">{firstNameInitial + lastNameInitial}</p>
    </div>
  );
}
