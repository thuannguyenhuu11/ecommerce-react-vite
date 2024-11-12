import MainLayout from '@components/Layout/Layout';
import CountdownBanner from '@components/CountDownBanner/CountDownBanner';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

const HeadlingListProducts = ({ data }) => {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadlingListProducts;
