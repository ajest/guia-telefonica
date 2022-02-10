import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SurnamesTr from '../../components/tables/surnamesTr'
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
    <div className={styles.container}>
      <Head>
        <title>{(selectedProvince && selectedProvince.name) || 'Provincia'} | Apellidos 姓名</title>
        <meta name="description" content="Guía telefónica | Apellidos 姓名" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Guía telefónica
          {selectedProvince && <span> | {selectedProvince.name}</span>}
        </h1>
        <section>
          <nav>
            <Link href={'/provincias'}>
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
  )
}
