import Button from "./menuButton.jsx";
export default function SideMenu() {
  const Style = { border: "5px solid teal", margin: "25px" };
  return (
    <>
      <div className="SideMenu" style={Style}>
        <Button title="مميز">&#10084;&#10084;</Button>
        <Button title="اكثر المقالات">&#9733;&#9733;</Button>
        <Button></Button>
      </div>
    </>
  );
}
