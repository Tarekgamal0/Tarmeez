import "./menuButton.css";
export default function menuButton({ title, children = "" }) {
  return title == null || title == "" ? (
    <div></div>
  ) : (
    <button className={"Menu-button"}>
      {title} {children}
    </button>
  );
}
