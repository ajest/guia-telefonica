import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import neighborhoods from '../../database/neighborhoods'
import provinces from '../../database/provinces'
import surnames from '../../database/surnames'

export default function SurnamesTr ({ neighborhood, province }) {
  let type = 'generic'
  let paginasBlancasZone = 'ciudad-de-buenos-aires'
  let abcTelefonosZone = 'Capital+Federal'
  let selectedNeighborhood
  let selectedProvince

  if (neighborhood) {
    type = 'neighborhood'
    selectedNeighborhood = neighborhoods.find(value => value.url === neighborhood.url)
    paginasBlancasZone = neighborhood.url
  }

  if (province) {
    type = 'province'
    selectedProvince = provinces.find(value => value.url === province.url)
    abcTelefonosZone = paginasBlancasZone = province.url
  }

  const trs = surnames.map((surname, key) =>
    <tr key={key}>
      <td><small>{key + 1}</small></td>
      <td>{surname}</td>
      <td>
        <a href={`http://www.paginasblancas.com.ar/persona/s/${surname}/${paginasBlancasZone}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSearch} /></a>
      </td>
      {type === 'province' && <td>
        <a href={`https://www.abctelefonos.com/search?q=${surname}&l=${abcTelefonosZone}%2C+Argentina&t=persona&country=argentina`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSearch} /></a>
      </td>}
      <td>
        <form action="https://www.telexplorer.com.ar/abogados" method="post" target='_blank'>
          <input type="hidden" id="nombre" name="nombre" value={surname} />
          <input type="hidden" id="nombre" name="AuthID" value={'534E50514E535153534150515B54555B505941312C'} />
          <select className={'d-none'} id="provincia1" name="provincia">
            {selectedNeighborhood && <option defaultValue value={selectedNeighborhood.telexplorerId}>
              {selectedNeighborhood.name}
            </option>}
            {selectedProvince && <option defaultValue value={selectedProvince.telexplorerId}>
              {selectedProvince.name}
            </option>}
          </select>
          <input type="hidden" name="zone" value="namwp" />
          <input type="hidden" name="res" value="0" />
          <button className='as-a-link' type="submit" value="点击">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </td>
      {type === 'province' && <td>
        <a href={`https://www.google.com.ar/maps/search/${surname},+${province.url}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSearch} /></a>
      </td>}
    </tr>
  )

  return trs
}
