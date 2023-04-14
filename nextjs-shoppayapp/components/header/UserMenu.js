import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

export default function UserMenu({ session }) {
  return (
    <div className={styles.menu}>
      {session ? (
        <div className={styles.flex}>
          <Image
            src={session.user.image}
            alt={session.user.name}
            className={styles.menu__img}
            width={500}
            height={500}
          />
          <div className={styles.col}>
            <h5>Welcome</h5>
            <h3>{session.user.name}</h3>
            <button className={styles.btn_primary} onClick={() => signOut()}>
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <>
          <h4>Welcome to Shoppay !</h4>
          <div className={styles.flex}>
            <button className={styles.btn_primary}>Register</button>
            <button className={styles.btn_outlined} onClick={() => signIn()}>
              Login
            </button>
          </div>
        </>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
}
