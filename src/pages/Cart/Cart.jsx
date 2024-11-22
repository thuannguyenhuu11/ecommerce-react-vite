import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Contents from '@/pages/Cart/components/contents/Contents';
import Steps from '@/pages/Cart/components/steps/Steps';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

const Cart = () => {
    const { container } = styles;

    return (
        <>
            <Header />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <Contents />
                </MainLayout>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
