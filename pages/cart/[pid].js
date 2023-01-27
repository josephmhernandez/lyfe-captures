import { useRouter } from "next/router";


const CartId = () => {
    const router = useRouter();
    const { pid } = router.query;
    
    return (
        <div>
        <h1>Checkout Page</h1>
        <p>Checkout ID: {pid}</p>
        </div>
    );
}

export default CartId;