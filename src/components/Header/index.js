import React from "react";
import "./styles.css";

// stateless components use functions, not classes.
const Header = () => <header id="main-header">Satoshi Cult</header>;

// if using States, create a class, same thing
// class Header extends Component {
//   render() {
//     return <h1>AAAAAAAA</h1>;
//   }
// }

export default Header;
