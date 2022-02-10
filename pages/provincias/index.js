import Head from 'next/head'
import Link from 'next/link'
import provinces from '../../database/provinces'
import styles from '../../styles/Home.module.css'

export default function Index () {
  const surnamesLi = provinces.map((province, key) => {
    return <li key={key}>
      <Link href={`/provincias/${province.url}`}>
        {province.name}
      </Link>
    </li>
  })

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
