import Head from 'next/head'
import surnames from '../database/surnames'
import styles from '../styles/Home.module.css'

export default function Home () {
  const surnamesList = surnames.map((surname, key) =>
    <tr key={key}>
      <td>#{key + 1}</td>
      <td>{surname}</td>
      <td>
        <a href={`http://www.paginasblancas.com.ar/persona/s/${surname}/ciudad-de-buenos-aires`} target="_blank" rel="noreferrer">Link</a>
      </td>
      <td>
        <a href={`https://www.abctelefonos.com/search?q=${surname}&l=Capital+Federal%2C+Argentina&t=persona&country=argentina`} target="_blank" rel="noreferrer">Link</a>
      </td>
      <td>
        <form action="https://www.telexplorer.com.ar/odontologos" method="post" target='_blank'>
          <input type="hidden" id="nombre" name="nombre" value={surname} />
          <select className={styles['d-none']} id="provincia1" name="provincia">
            <option value="12" selected="selected">Cdad. De BsAs</option>
          </select>
          <input type="hidden" name="zone" value="namwp" />
          <input type="hidden" name="res" value="0" />
          <input type="submit" value="Link" />
        </form>
      </td>
      <td>
      <a href={`https://www.google.com.ar/maps/search/${surname},+caba`} target="_blank" rel="noreferrer">Link</a>
      </td>
    </tr>
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Guía telefónica</title>
        <meta name="description" content="Guía telefónica" />
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
              {surnamesList}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
