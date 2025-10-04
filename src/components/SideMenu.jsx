import Button from "./menuButton.jsx";
export default function SideMenu() {
  const Style = { border: "5px solid teal", margin: "25px" };
  return (
    <>
      <div className="SideMenu" style={Style}>
        <Button title="مميز">&#10084;&#10084;</Button>
        <Button title="اكثر المقالات">&#9733;&#9733;</Button>
        <Button title="image">
          <img style={{width:"100px", display:"block"}} src="https://th.bing.com/th/id/R.34582bcd1f2313d02158df4e47123087?rik=LE9dsJaXkR%2bxJg&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2ftrees%2ftrees-07.jpg&ehk=fS7bCWA1J1cEgA2Z8Abx4idifVrJiRLc3Nip42qjm40%3d&risl=&pid=ImgRaw&r=0"/>
        </Button>
        <Button></Button>
      </div>
    </>
  );
}
