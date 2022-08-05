import Image from "next/image";

const ProductPicture = (props) => {
  return (
    <div className="product-picture">
      <Image src={props.src} alt={props.alt}/>
    </div>
  );
};
export default ProductPicture;
