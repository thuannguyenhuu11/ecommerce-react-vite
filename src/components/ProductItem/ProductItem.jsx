import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

const ProductItem = ({ src, prevSrc, name, price }) => {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largImg,
        isActiveSize,
        btnClear
    } = styles;

    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt='image' />
                <img src={prevSrc} alt='image' className={showImgWhenHover} />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='cart' />
                    </div>

                    <div className={boxIcon}>
                        <img src={heartIcon} alt='heart' />
                    </div>

                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='reload' />
                    </div>

                    <div className={boxIcon}>
                        <img src={cartIcon} alt='cart' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceCl}>{price}</div>
        </div>
    );
};

export default ProductItem;
