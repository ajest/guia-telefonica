import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SurnamesTr from '../../components/tables/SurnamesTr'
import neighborhoods from '../../database/neighborhoods'
import styles from '../../styles/Home.module.css'

export default function Neighborhoods () {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('')
  const router = useRouter()
  const { neighborhood } = router.query

  useEffect(() => {
    const selectedValue = neighborhoods.find(
      value => value.url === neighborhood
    )
    setSelectedNeighborhood(selectedValue)
  }, [neighborhood])

  return (
    <div className={styles.container}>
      <Head>
        <title>{(selectedNeighborhood && selectedNeighborhood.name) || 'Barrio'} | Apellidos 姓名</title>
        <meta name="description" content="Guía telefónica | Apellidos 姓名" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Guía telefónica
          {selectedNeighborhood && <span> | {selectedNeighborhood.name}</span>}
        </h1>
        <section>
          <nav>
            <Link href={'/barrios'}>
              Volver
            </Link>
          </nav>
        </section>
        <section>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Posición</th>
                <th>Nombre 姓名</th>
                <th>Páginas blancas</th>
                <th>ABC Teléfonos</th>
              </tr>
            </thead>
            <tbody>
              {selectedNeighborhood && <SurnamesTr neighborhood={selectedNeighborhood} />}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
