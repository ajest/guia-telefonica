import Head from 'next/head'
import SearchAddressForm from '../components/forms/searchAddressForm/SearchAddressForm'
import styles from '../styles/Generic.module.css'

export default function Direccion () {
  return (
    <div className={styles.container}>
      <Head>
        <title>电话目录 Guía telefónica</title>
        <meta name="description" content="Guía telefónica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchAddressForm />
      </main>
    </div>
  )
}
