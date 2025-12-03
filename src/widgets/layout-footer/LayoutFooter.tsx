import { Link } from 'react-router';
import { Layout } from 'antd';
import styles from './LayoutFooter.module.css';

const { Footer } = Layout;

export function LayoutFooter() {
	return (
		<Footer className={styles.footer}>
			created by <Link to={'https://github.com/expant'}>Anton Elagin</Link>
		</Footer>
	);
}
