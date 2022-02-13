import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import SearchAddressForm from '../components/forms/searchAddressForm/SearchAddressForm'
import styles from '../styles/Generic.module.css'

export default function Direccion () {
  return (
    <>
      <Breadcrumb />
      <div className={styles.container}>
        <Head>
          <title>电话目录 Guía telefónica</title>
          <meta name="description" content="Guía telefónica" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            地址 Dirección <FontAwesomeIcon icon={faLocationDot} />
          </h1>
          <section>
            <SearchAddressForm />
          </section>
        </main>
      </div>
    </>
  )
}
