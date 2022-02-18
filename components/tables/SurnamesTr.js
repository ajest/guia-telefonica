import { faSearch } from '@fortawesome/free-solid-svg-icons'
import externalSiteKeys from '../../constants/externalSiteKeys'
import neighborhoods from '../../database/neighborhoods'
import provinces from '../../database/provinces'
import surnames from '../../database/surnames'
import SubmitAsALinkButton from '../forms/buttons/SubmitAsALinkButton'
import BlankLink from '../links/BlankLink'

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
        <BlankLink
          href={`http://www.paginasblancas.com.ar/persona/s/${surname}/${paginasBlancasZone}`}
          icon={faSearch}
          storeKey={`${type}-${surname}-${externalSiteKeys['paginas-blancas']}`}
        />
      </td>
      {type === 'province' && <td>
        <BlankLink
          href={`https://www.abctelefonos.com/search?q=${surname}&l=${abcTelefonosZone}%2C+Argentina&t=persona&country=argentina`}
          icon={faSearch}
          storeKey={`${type}-${surname}-${externalSiteKeys.telexplorer}`}
        />
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
          <SubmitAsALinkButton
            icon={faSearch}
            storeKey={`${type}-${surname}-${externalSiteKeys['google-maps']}`}
          />
        </form>
      </td>
      {type === 'province' && <td>
        <BlankLink
          href={`https://www.google.com.ar/maps/search/${surname},+${province.name}`}
          icon={faSearch}
          storeKey={`${type}-${surname}-${externalSiteKeys['google-maps']}`}
        />
      </td>}
    </tr>
  )

  return trs
}
