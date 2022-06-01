import styles from './OrderDetail.module.css';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );

    return (
        <div className={styles.OrderDetail}>
            <div className={styles.sectionHeading}>
                {order.isPaid ?
                    <span>ORDER <span className="smaller">{order.orderId}</span></span>
                    :
                    <span>Time of Meal  </span>
                }
                <span>{new Date(order.updatedAt).toLocaleDateString()}  </span>
                <span>{new Date(order.updatedAt).toLocaleTimeString()}</span>
            </div>
            <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
                {lineItems.length ?
                    <>
                        {lineItems}
                        <section className={styles.total}>
                            {order.isPaid ?
                                <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                                :
                                <button
                                    className="btn-sm"
                                    onClick={handleCheckout}
                                    disabled={!lineItems.length}
                                >Log Meal</button>
                            }
                            <span>{order.totalQty}</span>
                            <span className={styles.right}>{order.orderTotal}</span>
                        </section>
                    </>
                    :
                    <div className={styles.hungry}>Total Meal Calories</div>
                }
            </div>
        </div>
    );
}