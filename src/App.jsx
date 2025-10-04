import "./App.css";
import Header from "./components/Header.jsx";
import Post from "./components/Post.jsx";
import SideMenu from "./components/SideMenu.jsx";
function App() {
  return (
    <>
      <Header />
      {/*Posts & Side Container*/}
      <div style={{ width: "75%", margin: "auto", display: "flex" }}>
        {/*Posts Container*/}
        <div style={{ width: "60%" }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        {/*Posts Container*/}
        {/*Side Container*/}
        <div style={{ width: "40%" }}>
          <SideMenu />
        </div>
        {/*Side Container*/}
      </div>
      {/*Posts & Side Container*/}
    </>
  );
}

export default App;
