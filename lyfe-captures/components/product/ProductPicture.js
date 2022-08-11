import Image from "next/image";

const ProductPicture = (props) => {
  return <Image src={props.src} alt={props.alt} />;
};
export default ProductPicture;
