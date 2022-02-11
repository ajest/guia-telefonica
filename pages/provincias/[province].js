import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import SurnamesTr from '../../components/tables/SurnamesTr'
import provinces from '../../database/provinces'
import styles from '../../styles/Home.module.css'

export default function Provinces () {
  const [selectedProvince, setSelectedProvince] = useState('')
  const router = useRouter()
  const { province } = router.query

  useEffect(() => {
    const selectedValue = provinces.find(
      value => value.url === province
    )
    setSelectedProvince(selectedValue)
  }, [province])

  return (
    <>
      <Breadcrumb second={{ label: 'Provincias', url: 'provincias' }} />
      <div className={styles.container}>
        <Head>
          <title>{(selectedProvince && selectedProvince.name) || 'Provincia'} | Apellidos 姓名</title>
          <meta name="description" content="Guía telefónica | Apellidos 姓名" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            {selectedProvince && selectedProvince.name} <FontAwesomeIcon icon={faGlobeAmericas} />
          </h1>
          <section>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre 姓名</th>
                  <th>Páginas blancas</th>
                  <th>ABC Teléfonos</th>
                  <th>Telexplorer</th>
                  <th>Google Maps</th>
                </tr>
              </thead>
              <tbody>
                {selectedProvince && <SurnamesTr province={selectedProvince} />}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  )
}
