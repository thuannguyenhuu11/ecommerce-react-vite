import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import InfoCard from './InfoCard/InfoCard';
import { dataInfo } from './constants';

const Info = () => {
    const { container } = styles;

    return (
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item) => {
                        return (
                            <InfoCard
                                key={item.title}
                                content={item.title}
                                description={item.description}
                                src={item.src}
                            />
                        );
                    })}
                </div>
            </MainLayout>
        </div>
    );
};

export default Info;
