import styles from './LineItem.module.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <div className={styles.LineItem}>
            <div className="flex-ctr-ctr">{lineItem.item.emoji}</div>
            <div className="flex-ctr-ctr flex-col">
                <span className="align-ctr">{lineItem.item.name}</span>
                <span>{lineItem.item.calories}</span>
            </div>
            <span className="calAdj">Calorie Adjustmemt</span>
            <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
                {!isPaid &&
                    <button
                        className="btn-xs"
                        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 10)}
                    >−</button>
                }
                <span>{lineItem.qty}</span>
                {!isPaid &&
                    <button
                        className="btn-xs"
                        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 10)}
                    >+</button>
                }
            </div>
            <div className={styles.extCalories}>{lineItem.extCalories}</div>
        </div>
    );
}