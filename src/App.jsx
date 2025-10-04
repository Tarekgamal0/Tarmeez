import "./App.css";
import Header from "./components/Header.jsx";
import Post from "./components/Post.jsx";
import SideMenu from "./components/SideMenu.jsx";

const showSideMenu = true;
const posts = [
  {
    id: 1,
    body: "أكاديمية ترميز مخصصة لتعليم البرمجة",
    content: (
      <div>
        <h1>20</h1>
        <h1>أكاديمية ترميز</h1>
      </div>
    ),
  },
  {
    id: 2,
    body: "this is the hello world article",
    content: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    id: 3,
    body: "this is the body of post 3",
    content: (
      <div>
        <h1>Post 3</h1>
      </div>
    ),
  },
];
function App() {
  const postList = posts.map((post) => {
    return (
      <Post key={post.id} body={post.body}>
        {post.content}
      </Post>
    );
  });

  return (
    <>
      <Header />
      {/*Posts & Side Container*/}
      <div style={{ width: "75%", margin: "auto", display: "flex" }}>
        {/*Posts Container*/}
        <div style={{ width: "70%" }}>{postList}</div>
        {/*Posts Container*/}

        {/*Side Container*/}
        <div style={{ width: "30%" }}>{sideMenuShow()}</div>
        {/*Side Container*/}
      </div>
      {/*Posts & Side Container*/}
    </>
  );
}
function sideMenuShow() {
  if (showSideMenu) {
    return <SideMenu />;
  } else return null;
}
export default App;
