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
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                    alt='image'
                />
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
                    alt='image'
                    className={showImgWhenHover}
                />

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
            <div className={title}>10K Yellow Gold</div>
            <div className={priceCl}>$99.99</div>
        </div>
    );
};

export default ProductItem;
