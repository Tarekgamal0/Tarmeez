import Button from "./menuButton.jsx";
export default function SideMenu() {
  const buttons = [
    { id: 1, title: "مميز", content: <>&#10084;&#10084;</> },
    { id: 2, title: "اكثر المقالات", content: <>&#9733;&#9733;</> },
    {
      id: 3,
      title: "image",
      content: (
        <img
          style={{ width: "100px", display: "block" }}
          src="https://th.bing.com/th/id/R.34582bcd1f2313d02158df4e47123087?rik=LE9dsJaXkR%2bxJg&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2ftrees%2ftrees-07.jpg&ehk=fS7bCWA1J1cEgA2Z8Abx4idifVrJiRLc3Nip42qjm40%3d&risl=&pid=ImgRaw&r=0"
        />
      ),
    },
  ];
  const buttonsList = buttons.map((button) => {
    return (
      <Button key={button.id} title={button.title}>
        {button.content}
      </Button>
    );
  });
  const Style = { border: "5px solid teal", margin: "25px" };

  return (
    <>
      <div className="SideMenu" style={Style}>
        {buttonsList}
      </div>
    </>
  );
}
