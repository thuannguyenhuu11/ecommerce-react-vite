import MainLayout from '@components/Layout/Layout';
import CountdownBanner from '@components/CountDownBanner/CountDownBanner';
import styles from './styles.module.scss';

const HeadlingListProducts = () => {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate} /> */}
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HeadlingListProducts;
