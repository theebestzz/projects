import Image from "next/image";
import styles from "./styles.module.scss";

import Visa from "../../public/images/payment/visa.webp";
import Mastercard from "../../public/images/payment/mastercard.webp";
import Paypal from "../../public/images/payment/paypal.webp";
import American_Express from "../../public/images/payment/american_express.webp";
import Cb from "../../public/images/payment/cb.webp";
import Jcb from "../../public/images/payment/jcb.webp";
import Maestro from "../../public/images/payment/maestro.webp";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>Payment</h3>
      <div className={styles.footer__flexwrap}>
        <Image src={Visa} alt="Visa" title="Visa" />
        <Image src={Mastercard} alt="Mastercard" title="Mastercard" />
        <Image src={Paypal} alt="Paypal" title="Paypal" />
        <Image src={Jcb} alt="Jcb" title="Jcb" />
      </div>
    </div>
  );
}
