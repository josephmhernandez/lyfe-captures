import Link from "next/link";
import Image from "next/image";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.centerElements}>
          <h3>LyfeCaptures</h3>
          <p>2022, LyfeCaptures</p>

          <div className={classes.iconsPaymentMethod}>
            <span>
              <Image src="/amex.svg" alt="amex" width={50} height={50} />
            </span>
            <span>
              <Image src="/paypal.svg" alt="paypal" width={50} height={50} />
            </span>
            <span>
              <Image src="/visa.svg" alt="visa" width={50} height={50} />
            </span>
            <span>
              <Image
                src="/mastercard.svg"
                alt="mastercard"
                width={50}
                height={50}
              />
            </span>
          </div>
        </div>
        <div className={classes.support}>
          <h2>Support</h2>
          <span>
            <Link href="/faqs">Questions</Link>
          </span>
          <span>
            <Link href="/delivery">Delivery/Returns</Link>
          </span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </span>
          <span>
            <Link href="/terms-of-service">Terms of Service</Link>
          </span>
        </div>
        <div>
          <h2>Contact Us</h2>
          <Link href="">help@lyfecaptures.com</Link>
        </div>
        <div className={classes.iconsPaymentMethod}>
          <h2>Follow Us</h2>
          <span>
            <Image src="/facebook.svg" alt="fb" width={35} height={35} />
          </span>
          <span>
            <Image src="/instagram.svg" alt="i" width={35} height={35} />
          </span>
          <span>
            <Image src="/tiktok.svg" alt="tiktok" width={35} height={35} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
