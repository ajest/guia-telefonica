import { faGlobeAmericas, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home () {
  // TODO: Por tipo de negocio
  // TODO: Por dirección

  return (
    <div className={styles.container}>
      <Head>
        <title>电话目录 Guía telefónica</title>
        <meta name="description" content="Guía telefónica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={'/barrios'}>
                <a>
                  地区 Barrios <FontAwesomeIcon icon={faMapLocationDot} />
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/provincias'}>
                <a>
                  外省 Provincias <FontAwesomeIcon icon={faGlobeAmericas} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
