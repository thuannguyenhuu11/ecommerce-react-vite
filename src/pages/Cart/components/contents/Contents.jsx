import CartTable from '@/pages/Cart/components/contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart, deleteItem, deleteCart } from '@/apis/cartService';

function Contents() {
    const { containerContents, boxFooter, boxBtnDelete, boxCoupon } = styles;
    const {
        listProductCart,
        handleGetListProductsCart,
        isLoading,
        setIsLoading,
        userId
    } = useContext(SideBarContext);

    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteCart = () => {
        setIsLoading(true);
        deleteCart({ userId })
            .then((res) => {
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    return (
        <div className={containerContents}>
            <div
                style={{
                    width: '58%'
                }}
            >
                <CartTable
                    listProductCart={listProductCart}
                    getData={handleReplaceQuantity}
                    isLoading={isLoading}
                    getDataDelete={handleDeleteItemCart}
                />

                <div className={boxFooter}>
                    <div className={boxCoupon}>
                        <input type='text' placeholder='Coupon code' />
                        <Button content={'OK'} isPriamry={false} />
                    </div>

                    <div className={boxBtnDelete}>
                        <Button
                            content={<div>&#128465; CLEAR SHOPPING CART</div>}
                            isPriamry={false}
                            onClick={handleDeleteCart}
                        />
                    </div>
                </div>
            </div>

            <CartSummary />
        </div>
    );
}

export default Contents;
