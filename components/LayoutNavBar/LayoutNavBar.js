import FooterNav from "./FooterNav";
import HeaderNav from "./HeaderNav";

const LayoutNavBar = (props) => {
  return (
    <>
      <HeaderNav />
      <main>{props.children}</main>

      <FooterNav />
    </>
  );
};

export default LayoutNavBar;
