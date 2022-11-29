import Link from "next/link";
import AccountNav from "./AccountNav";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <Link href="/">ricehub</Link>
        <AccountNav />
      </ul>
    </nav>
  );
}
