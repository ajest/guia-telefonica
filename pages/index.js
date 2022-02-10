import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home () {
  // TODO: Por tipo de negocio
  // TODO: Por dirección

  return (
    <div className={styles.container}>
      <Head>
        <title>Guía telefónica</title>
        <meta name="description" content="Guía telefónica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Guía telefónica
        </h1>
        <nav>
          <ul>
            <li>
              <Link href={'/barrios'}>
                Barrios
              </Link>
            </li>
            <li>
              <Link href={'/provincias'}>
                Provincias
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
