import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import neighborhoods from '../../database/neighborhoods'
import provinces from '../../database/provinces'

export default function NumbersTableBody ({ address, number, zone }) {
  if (!address || !number) {
    return null
  }

  const selectedZone = zone ?? 'ciudad-de-buenos-aires'
  const intNumber = parseInt(number, 10)
  const numbers = [intNumber, intNumber - 2, intNumber + 2, intNumber - 4, intNumber + 4, intNumber - 6, intNumber + 6]

  let type = 'generic'
  let addressHyphenFormatted = ''
  let addressPlusFormatted = ''

  const selectedNeighborhood = neighborhoods.find(value => value.url === selectedZone)
  if (selectedNeighborhood) {
    type = 'neighborhood'
    addressHyphenFormatted = address.replace(/\s+/g, '-')
  }

  const selectedProvince = provinces.find(value => value.url === selectedZone)
  if (selectedProvince) {
    type = 'province'
    addressPlusFormatted = address.replace(/\s+/g, '+')
  }

  const trs = numbers.map((number, key) => {
    if (number <= 0) {
      return null
    }

    return <tr key={key}>
      {key === 0 ? <td><strong>{number}</strong></td> : <td>{number}</td>}
      <td>
        <a href={`http://www.paginasblancas.com.ar/direccion/s/${addressHyphenFormatted}-${number}/${selectedZone}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSearch} /></a>
      </td>
      <td>
        <form action="https://www.telexplorer.com.ar/abogados" method="post" target='_blank'>
          <input type="hidden" id="calle2" name="calle" value={address} />
          <input type="hidden" id="altura" name="puerta" value={number} />
          <select className={'d-none'} id="provincia1" name="provincia">
            {selectedNeighborhood && <option defaultValue value={selectedNeighborhood.telexplorerId}>
              {selectedNeighborhood.name}
            </option>}
            {selectedProvince && <option defaultValue value={selectedProvince.telexplorerId}>
              {selectedProvince.name}
            </option>}
          </select>
          <input type="hidden" name="selectedZone" value="dc" />
          <input type="hidden" name="res" value="0" />
          <input type="hidden" name="Submi" value="BUSCAR" />
          <button className='as-a-link' type="submit" value="点击">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </td>
      {type === 'province' && <>
        <td>
          <a
          href={`https://www.abctelefonos.com/search?q=${addressPlusFormatted}+${number}&l=${selectedZone}%2C+Argentina&t=direccion&country=argentina`}
          target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </td><td>
          <a href={`https://www.google.com.ar/maps/place/${addressPlusFormatted}+${number},+${selectedZone}/`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </td>
      </>}
    </tr>
  }
  )

  return <>
    <thead>
      <tr>
        <th>Altura 号码</th>
        <th>Páginas blancas</th>
        <th>Telexplorer</th>
        {
          type === 'province' && <>
            <th>ABC Telefonos</th>
            <th>Google Maps</th>
          </>
        }
      </tr>
    </thead>
    <tbody>{trs}</tbody>
  </>
}
