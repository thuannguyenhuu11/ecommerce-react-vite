import MainLayout from '@components/Layout/Layout';
import CountdownBanner from '@components/CountDownBanner/CountDownBanner';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

const HeadlingListProducts = () => {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadlingListProducts;
