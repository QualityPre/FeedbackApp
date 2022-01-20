const App = () => {
  const title = "Blog post";
  const body = "This is my blog post";
  const comments = [
    {
      id: 1,
      text: "Comment one",
    },
    {
      id: 2,
      text: "Comment two",
    },
    {
      id: 3,
      text: "Comment three",
    },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading...</h1>;

  const commmentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments && commmentBlock}
    </div>
  );
};

export default App;
