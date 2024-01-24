import { Footer } from "flowbite-react";
import { BsPinterest } from "react-icons/bs";
import { PINTEREST_URL } from "../../constants/UiConstants";
const FooterNav = () => {
  return (
    <Footer container className="bg-slate-900">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="/">
              <p className="text-4xl sm:text-4xl font-great-vibes text-primaryWhite">
                MapYourMemory
              </p>
            </Footer.Brand>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/aboutus">Our Story</Footer.Link>
                <Footer.Link href="/maps">Create Now</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="/contactus">FAQs</Footer.Link>
                <Footer.Link>{process.env.EMAIL_SUPPORT}</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="LyfeCaptures LLC" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href={PINTEREST_URL} icon={BsPinterest} />
          </div>
        </div>
      </div>
    </Footer>
    // <div className="w-full bg-slate-900 text-primaryWhite">
    //   <p>yooo footer</p>
    // </div>
  );
};

export default FooterNav;
