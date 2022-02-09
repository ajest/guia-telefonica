import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SurnamesTr from '../../components/tables/surnamesTr'
import neighborhoods from '../../database/neighborhoods'
import styles from '../../styles/Home.module.css'

export default function Surnames () {
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
        </h1>
        <section>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Posición</th>
                <th>Nombre 姓名</th>
                <th>Páginas blancas</th>
                <th>ABC Teléfonos</th>
                <th>Telexplorer</th>
                <th>Google Maps</th>
              </tr>
            </thead>
            <tbody>
              <SurnamesTr />
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
