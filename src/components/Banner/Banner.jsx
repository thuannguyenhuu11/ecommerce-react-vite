import Button from '../Button/Button';
import styles from './styles.module.scss';

const Banner = () => {
    const { container, content, title, des } = styles;

    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Marseille Store</h1>
                <div className={des}>
                    Make yours celebrations even more special this years with
                    beautiful.
                </div>

                <div
                    style={{
                        width: '172px'
                    }}
                >
                    <Button content={'Go to shop'} />
                </div>
            </div>
        </div>
    );
};

export default Banner;
