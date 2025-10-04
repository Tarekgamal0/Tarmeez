import Button from "./menuButton.jsx";
export default function SideMenu() {
  const Style = { border: "5px solid teal", margin: "25px" };
  return (
    <>
      <div className="SideMenu" style={Style}>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </>
  );
}
