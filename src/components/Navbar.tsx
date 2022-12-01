import Link from "next/link";
import AccountNav from "./AccountNav";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Link href="/">ricehub</Link>
      {/* <ul>
        <li>
          <Link href="/About">About</Link>
        </li>
      </ul> */}
      <AccountNav />
    </nav>
  );
}
