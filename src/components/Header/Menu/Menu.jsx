import styles from '../styles.module.scss';

const Menu = ({ content, href }) => {
    const { menu, subMenu } = styles;

    return <div className={menu}>{content}</div>;
};

export default Menu;
