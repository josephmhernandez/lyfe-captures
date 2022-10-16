import classes from "./EmptyCart.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BuyNowButton } from "../../components/ui/CustomButtons";
import Image from "next/image";
const EmptyCart = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/maps");
  };

  return (
    <div className={classes.emptyPage}>
      <h2>Uh Oh! It looks like your cart is empty :/</h2>
      <Image src='/maps-prod-pic-landing.png' width={400} height={400}/>
      <h2>How about creating a new product?</h2>
      <BuyNowButton onClick={handleClick}>Create A New Map</BuyNowButton>
    </div>
  );
};

export default EmptyCart;
