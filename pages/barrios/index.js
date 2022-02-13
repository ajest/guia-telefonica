import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Generic.module.css'
import neighborhoods from '../../database/neighborhoods'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

export default function Index () {
  const surnamesLi = neighborhoods.map((neighborhood, key) => {
    return <li key={key}>
      <Link href={`/barrios/${neighborhood.url}`}>
        {neighborhood.name}
      </Link>
    </li>
  })

  return (
    <>
      <Breadcrumb />
      <div className={styles.container}>
        <Head>
          <title>Barrios | 地区</title>
          <meta name="description" content="Barrios | 地区" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            地区 Barrios <FontAwesomeIcon icon={faMapLocationDot} />
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
