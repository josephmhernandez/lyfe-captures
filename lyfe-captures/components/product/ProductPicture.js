import Image from "next/image";
import classes from './ProductPicture.module.css';

const ProductPicture = (props) => {
  return (
    <div className={classes.productImage}>
      <Image src={props.src} alt={props.alt}/>
    </div>
  );
};
export default ProductPicture;
