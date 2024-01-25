import { Navbar } from "flowbite-react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const HeaderNav = () => {
  return (
    <div className="w-full">
      <Navbar fluid rounded className="bg-slate-900">
        <Navbar.Toggle />
        <Navbar.Brand className="mr-3 h-4 sm:h-9 font-greatVibesFont" href="/">
          <p className="text-4xl sm:text-4xl font-great-vibes text-primaryWhite">
            MapYourMemory
          </p>
          {/* <img src="/logo.png" alt="logo" className="h-4 sm:h-9" /> */}
        </Navbar.Brand>

        <Navbar.Collapse>
          <Navbar.Link className="text-primaryWhite" href="/maps">
            Create Now
          </Navbar.Link>
          <Navbar.Link className="text-primaryWhite" href="/aboutus">
            About Us
          </Navbar.Link>
          <Navbar.Link className="text-primaryWhite" href="/gallery">
            Get Inspired
          </Navbar.Link>
          <Navbar.Link className="text-primaryWhite" href="/sizes">
            Sizes
          </Navbar.Link>
          <Navbar.Link className="text-primaryWhite" href="/contactus">
            FAQs
          </Navbar.Link>
          <Navbar.Link className="text-primaryWhite" href="/cart">
            {/* Hi icon cart */}
            <HiOutlineShoppingCart size={20} className="inline-block" />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
