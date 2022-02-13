import { faGlobeAmericas, faLocationDot, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Generic.module.css'

export default function Home () {
  // TODO: Por tipo de negocio
  // TODO: LocalStorage para controlar donde hice click

  return (
    <div className={styles.container}>
      <Head>
        <title>电话目录 Guía telefónica</title>
        <meta name="description" content="Guía telefónica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Censo telefónico de locales chinos para Provincias y Barrios de CABA</p>
        <p>在外省和首都的找新中国人地址的功能</p>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={'/barrios'}>
                <a>
                  姓 Apellidos (地区 Barrios) <FontAwesomeIcon icon={faMapLocationDot} />
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/provincias'}>
                <a>
                  姓 Apellidos (外省 Provincias) <FontAwesomeIcon icon={faGlobeAmericas} />
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/direccion'}>
                <a>
                  地址 Dirección <FontAwesomeIcon icon={faLocationDot} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
