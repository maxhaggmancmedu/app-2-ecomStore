import Navbar from "@/components/header/Header"
import { LayoutProps } from "@/types/layoutProps";
import styles from '@/styles/index.module.css'

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
    <div className={styles.pageContainer}>
        <Navbar />
        {children}
    </div>
    );
};

export default Layout;