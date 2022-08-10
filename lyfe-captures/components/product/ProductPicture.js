import Image from "next/image";
import classes from "./ProductPicture.module.css";

const ProductPicture = (props) => {
  return <Image src={props.src} alt={props.alt} />;
};
export default ProductPicture;
