import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
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
    <>
      <Breadcrumb second={{ label: 'Barrios', url: 'barrios' }} />
      <div className={styles.container}>
        <Head>
          <title>{(selectedNeighborhood && selectedNeighborhood.name) || 'Barrio'} | Apellidos 姓名</title>
          <meta name="description" content="Guía telefónica | Apellidos 姓名" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            {selectedNeighborhood && selectedNeighborhood.name} <FontAwesomeIcon icon={faMapLocationDot} />
          </h1>
          <section>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre 姓名</th>
                  <th>Páginas blancas</th>
                  <th>Telexplorer</th>
                </tr>
              </thead>
              <tbody>
                {selectedNeighborhood && <SurnamesTr neighborhood={selectedNeighborhood} />}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  )
}
