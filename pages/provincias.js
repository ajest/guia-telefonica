import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Provinces () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Provincias | 外省</title>
        <meta name="description" content="Provincias | 外省" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Provincias | 外省
        </h1>
        <nav>
          <ul>
            <li>
              <Link href={'/'}>
                Volver
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
