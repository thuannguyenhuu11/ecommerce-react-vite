import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';

const ProductItem = ({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true
}) => {
    const { isShowGrid } = useContext(OurShopContext);

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
        <div className={isShowGrid ? '' : containerItem}>
            <div className={cls(boxImg, { [largImg]: !isShowGrid })}>
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

            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div key={index} className={size}>
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className={cls(title, { [textCenter]: !isHomepage })}>
                    {name}
                </div>

                {!isHomepage && (
                    <div
                        className={textCenter}
                        style={{
                            color: '#888'
                        }}
                    >
                        Brand 01
                    </div>
                )}

                <div
                    className={cls(priceCl, { [textCenter]: !isHomepage })}
                    style={{
                        color: isHomepage ? '#333' : '#888'
                    }}
                >
                    ${price}
                </div>

                {!isHomepage && (
                    <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
