import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import provinces from '../../database/provinces'
import styles from '../../styles/Generic.module.css'

export default function Index () {
  const surnamesLi = provinces.map((province, key) => {
    return <li key={key}>
      <Link href={`/provincias/${province.url}`}>
        {province.name}
      </Link>
    </li>
  })

  return (
    <>
      <Breadcrumb />
      <div className={styles.container}>
        <Head>
          <title>Provincias | 外省</title>
          <meta name="description" content="Provincias | 外省" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            外省 Provincias <FontAwesomeIcon icon={faGlobeAmericas} />
          </h1>
          <section>
            <ol>
              {surnamesLi}
            </ol>
          </section>
        </main>
      </div>
    </>
  )
}
