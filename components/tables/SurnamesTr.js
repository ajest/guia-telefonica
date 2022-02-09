import surnames from '../../database/surnames'

export default function SurnamesTr ({ neighborhood, province }) {
  console.log(neighborhood)
  console.log(province)

  const trs = surnames.map((surname, key) =>
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
          <select className={'d-none'} id="provincia1" name="provincia">
            <option defaultValue value="12">Cdad. De BsAs</option>
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

  return trs
}
