import "./menuButton.css";
export default function menuButton({ title = "no title", children = "" }) {
  return <button className={"Menu-button"}>{title + " " + children}</button>;
}
