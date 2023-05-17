export default function BlogPost() {
  const blog = {
    title: "IDK what I'm doing",
    author: "Harsham Lachman the 3rd",
    datePosted: "17/05/2023",
    content: "This is my attempt at using React",
    imageSrc:
      "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "A couple of coders.",
  };

  return (
    <div className="blog-post">
      <h1>{blog.title}</h1>
      <h2>{blog.author}</h2>
      <h3>{blog.datePosted}</h3>
      <p>{blog.content}</p>
      <img src={blog.imageSrc} alt={blog.imageAlt} />
    </div>
  );
}
