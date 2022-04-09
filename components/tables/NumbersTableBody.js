import { faSearch } from '@fortawesome/free-solid-svg-icons'
import externalSiteKeys from '../../constants/externalSiteKeys'
import neighborhoods from '../../database/neighborhoods'
import provinces from '../../database/provinces'
import SubmitAsALinkButton from '../forms/buttons/SubmitAsALinkButton'
import BlankLink from '../links/BlankLink'

export default function NumbersTableBody ({ address, number, zone }) {
  if (!address || !number) {
    return null
  }

  const selectedZone = zone ?? 'capital-federal'
  const addressHyphenFormatted = address.replace(/\s+/g, '-')

  const intNumber = parseInt(number, 10)
  const numbers = [intNumber, intNumber - 2, intNumber + 2, intNumber - 4, intNumber + 4, intNumber - 6, intNumber + 6]

  let type = 'generic'
  let addressPlusFormatted = ''

  const selectedNeighborhood = neighborhoods.find(value => value.url === selectedZone)
  if (selectedNeighborhood) {
    type = 'neighborhood'
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
        <BlankLink
          href={`http://www.paginasblancas.com.ar/direccion/s/${addressHyphenFormatted}-${number}/${selectedZone}`}
          icon={faSearch}
          storeKey={`${type}-${addressHyphenFormatted}-${number}-${zone}-${externalSiteKeys['paginas-blancas']}`}
        />
      </td>
      <td>
        <form action="https://www.telexplorer.com.ar/abogados" method="post" target='_blank'>
          <input type="hidden" id="calle2" name="calle" value={address} />
          <input type="hidden" id="altura" name="puerta" value={number} />
          <select className={'d-none'} id="provincia1" name="provincia">
            {<option defaultValue value={12}>
              CABA
            </option>}
          </select>
          <select className={'d-none'} name="locafield" id="localidad">
            {selectedNeighborhood && <option defaultValue value={selectedNeighborhood.telexplorerId}>
              {selectedNeighborhood.name}
            </option>}
            {selectedProvince && <option defaultValue value={selectedProvince.telexplorerId}>
              {selectedProvince.name}
            </option>}
          </select>
          <input type="hidden" name="zone" value="dc" />
          <input type="hidden" name="res" value="0" />
          <input type="hidden" name="Submi" value="BUSCAR" />
          <SubmitAsALinkButton
            icon={faSearch}
            storeKey={`${type}-${addressHyphenFormatted}-${number}-${zone}-${externalSiteKeys.telexplorer}`}
          />
        </form>
      </td>
      {type === 'province' && <>
        <td>
          <BlankLink
            href={`https://www.abctelefonos.com/search?q=${addressPlusFormatted}+${number}&l=${selectedZone}%2C+Argentina&t=direccion&country=argentina`}
            icon={faSearch}
            storeKey={`${type}-${addressHyphenFormatted}-${number}-${zone}-${externalSiteKeys['abc-telefonos']}`}
          />
        </td><td>
          <BlankLink
            href={`https://www.google.com.ar/maps/place/${addressPlusFormatted}+${number},+${selectedZone}`}
            icon={faSearch}
            storeKey={`${type}-${addressHyphenFormatted}-${number}-${zone}-${externalSiteKeys['google-maps']}`}
          />
        </td>
      </>}
    </tr>
  })

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
