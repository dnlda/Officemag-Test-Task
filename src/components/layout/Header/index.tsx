import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: "sticky",
        flexWrap: "nowrap",
        background: "#757575ff",
        top: 0,
        padding: "23px 130px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 10,
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Link to={"/text_page"}>Текст</Link>
        <Link to={"/form_page"}>Форма</Link>
        <Link to={"/buttons_variant_page"}>Кнопки</Link>
      </div>
    </div>
  );
};

export default Header;
