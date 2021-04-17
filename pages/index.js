import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  // document.title = "Home Page";
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit alias quis, voluptatibus quasi quidem consequuntur mollitia aspernatur reprehenderit ea? Qui asperiores quam aut ipsam culpa sequi sed hic nulla.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit alias quis, voluptatibus quasi quidem consequuntur mollitia aspernatur reprehenderit ea? Qui asperiores quam aut ipsam culpa sequi sed hic nulla.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>
            See Ninja Listing
        </a>
        </Link>
      </div>
    </>
  );
}
