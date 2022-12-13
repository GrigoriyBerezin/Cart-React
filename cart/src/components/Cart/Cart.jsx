import CartFooter from "../CartFooter/CartFooter"
import CartHeader from "../CartHeader/CartHeader"
import Product from "../Product/Product"
import data from "./../../data"

const Cart = () => {
    return (
        <section className='cart'>
            <CartHeader />
            <Product />
            <CartFooter />
        </section>
    )
}

export default Cart
