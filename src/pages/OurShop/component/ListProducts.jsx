import MainLayout from '@components/Layout/Layout';
import styles from '../styles.module.scss';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import Button from '@components/Button/Button';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ListProducts = () => {
    const { containerProduct, sectionListProduct, rotate } = styles;
    const { products } = useContext(OurShopContext);

    return (
        <div className={sectionListProduct}>
            <MainLayout>
                <div className={containerProduct}>
                    {products.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                            isHomepage={false}
                        />
                    ))}
                </div>
            </MainLayout>
        </div>
    );
};

export default ListProducts;
