import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import neighborhoods from '../../database/neighborhoods'

export default function Index () {
  const surnamesLi = neighborhoods.map((neighborhood, key) => {
    return <li key={key}>
      <Link href={`/barrios/${neighborhood.url}`}>
        {neighborhood.name}
      </Link>
    </li>
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Barrios | 地区</title>
        <meta name="description" content="Barrios | 地区" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Barrios | 地区
        </h1>
        <section>
          <nav>
            <Link href={'/'}>
              Volver
            </Link>
          </nav>
        </section>
        <section>
          <ol>
            {surnamesLi}
          </ol>
        </section>
      </main>
    </div>
  )
}
