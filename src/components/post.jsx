import "./Post.css";
export default function Post({ children, body="no body" }) {
  return (
    <>
      <div className="post">
        {children}
        <hr />
        <h5>{body}</h5>
      </div>
    </>
  );
}
