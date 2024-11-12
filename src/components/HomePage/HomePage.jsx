import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Info from '@/components/Info/Info';
import AdvancedHeadling from '@components/AdvancedHeadling/AdvancedHeadling';
import HeadlingListProducts from '@components/HeadlingListProducts/HeadlingListProducts';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import Footer from '@components/Footer/Footer';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';

const HomePage = () => {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 10
        };

        getProducts(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <Header />
            <Banner />
            <Info />
            <AdvancedHeadling />
            <HeadlingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, listProducts.length)} />
            <SaleHomepage />
            <Footer />
        </>
    );
};

export default HomePage;
