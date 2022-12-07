import Form from "../Form/Form";
import HeaderLeft from "./HeaderLeft";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav">
          <HeaderLeft />
          <HeaderMenu />
          <Form />
        </nav>
      </div>
    </div>
  );
};

export default Header;
