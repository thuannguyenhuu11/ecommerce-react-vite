import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '@/components/Info/Info';
import AdvancedHeadling from '@components/AdvancedHeadling/AdvancedHeadling';
import HeadlingListProducts from '@components/HeadlingListProducts/HeadlingListProducts';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';

const HomePage = () => {
    const { container } = styles;

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvancedHeadling />
                <HeadlingListProducts />
            </div>
        </div>
    );
};

export default HomePage;
