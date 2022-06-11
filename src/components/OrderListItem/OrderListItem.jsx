import styles from './OrderListItem.module.css';

export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
    return (
        <div className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectOrder(order)}>
            <div>
                <div className='order-id'>Order Id: <span className="smaller">{order.orderId}</span></div>
                <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
            </div>
            <div className="align-rt">
                <div>Calories   {order.orderTotal}</div>
                <div className="smaller">{order.totalQty} Cal Adjustment</div>
            </div>
        </div>
    );
}