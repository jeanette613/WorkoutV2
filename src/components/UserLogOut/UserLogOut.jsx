import styles from './UserLogOut.module.css';
import { logout } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
    function handleLogOut() {
        logout();
        setUser(null);
    }

    return (
        <div className={styles.UserLogOut}>
            <div>{user.name}</div>
            <div className={styles.email}>{user.email}</div>
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}