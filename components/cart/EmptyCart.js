import classes from "./EmptyCart.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BuyNowButton } from "../../components/ui/CustomButtons";
import { Button } from "semantic-ui-react";
import prodPicTransitBlack from "../../public/images/new-prod-pics/trans-black.png";
import Image from "next/image";
const EmptyCart = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/maps");
  };

  return (
    <div className={classes.emptyPage}>
      <h1>Uh Oh! It looks like your cart is empty :/</h1>
      <Image src={prodPicTransitBlack} width={800} height={400} />
      <h1>How about creating a new map?</h1>
      <Link href="/maps">
        <a>
          <Button
            style={{
              "background-color": "var(--color-primary)",
              color: "white",
              "border-radius": "100px",
              "font-family": "var(--page-paragraph-font-family)",
              "font-size": "var(--page-paragraph-font-size)",
              "font-weight": "400",
            }}
          >
            Create a new map
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default EmptyCart;
