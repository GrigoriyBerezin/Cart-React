import "./style.scss"
import formatPrice from "../../utils/priceFormatter"

const CartFooter = ({ total }) => {
    const { count, price } = total

    return (
        <footer className='cart-footer'>
            <div className='cart-footer__count'>{count} ед.</div>
            <div className='cart-footer__price'>
                {formatPrice(price)}
                руб.
            </div>
        </footer>
    )
}

export default CartFooter
