import ButtonDelete from "../ButtonDelete/ButtonDelete"
import Count from "../Count/Count"
import formatPrice from "../../utils/priceFormatter"
import "./style.scss"

const Product = ({
    product,
    deleteProduct,
    increase,
    changeValue,
    decrease,
}) => {
    const { img, title, priceTotal, count, id } = product

    return (
        <section className='product'>
            <div className='product__img'>
                <img src={`./img/products/${img}`} alt={title} />
            </div>
            <div className='product__title'>{title}</div>
            <div className='product__count'>
                <Count
                    count={count}
                    increase={increase}
                    id={id}
                    decrease={decrease}
                    changeValue={changeValue}
                />
            </div>
            <div className='product__price'>
                {formatPrice(priceTotal)}
                {priceTotal} руб.
            </div>
            <div className='product__controls'>
                <ButtonDelete deleteProduct={deleteProduct} id={id} />
            </div>
        </section>
    )
}

export default Product
