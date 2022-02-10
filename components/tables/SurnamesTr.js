import surnames from '../../database/surnames'

export default function SurnamesTr ({ neighborhood, province }) {
  let paginasBlancasZone = 'ciudad-de-buenos-aires'
  let abcTelefonos = 'Capital+Federal'
  let type = 'generic'
  if (neighborhood) {
    type = 'neighborhood'
    abcTelefonos = paginasBlancasZone = neighborhood.url
  }
  if (province) {
    type = 'province'
    abcTelefonos = paginasBlancasZone = province.url
  }

  const trs = surnames.map((surname, key) =>
    <tr key={key}>
      <td>#{key + 1}</td>
      <td>{surname}</td>
      <td>
        <a href={`http://www.paginasblancas.com.ar/persona/s/${surname}/${paginasBlancasZone}`} target="_blank" rel="noreferrer">Link</a>
      </td>
      <td>
        <a href={`https://www.abctelefonos.com/search?q=${surname}&l=${abcTelefonos}%2C+Argentina&t=persona&country=argentina`} target="_blank" rel="noreferrer">Link</a>
      </td>
      <td>
        <form action="https://www.telexplorer.com.ar/odontologos" method="post" target='_blank'>
          <input type="hidden" id="nombre" name="nombre" value={surname} />
          <select className={'d-none'} id="provincia1" name="provincia">
            <option defaultValue value="12">Cdad. De BsAs</option>
          </select>
          <select className={'d-none'} name="locafield" id="localidad">
            <option defaultValue value="12">TODAS</option>
            <option value="121341211">AGRONOMIA</option>
            <option value="121341212">ALMAGRO</option>
            <option value="121341213">BALVANERA</option>
            <option value="121341214">BARRACAS</option>
            <option value="121341215">BELGRANO</option>
            <option value="121341216">BOCA</option>
            <option value="121341217">BOEDO</option>
            <option value="121341218">CABALLITO</option>
            <option value="121341219">CHACARITA</option>
            <option value="121341220">COGHLAN</option>
            <option value="121341221">COLEGIALES</option>
            <option value="121341222">CONSTITUCION</option>
            <option value="121341223">FLORES</option>
            <option value="121341224">FLORESTA</option>
            <option value="121341225">LA PATERNAL</option>
            <option value="121341226">LINIERS</option>
            <option value="121341227">MATADEROS</option>
            <option value="121341228">MONSERRAT</option>
            <option value="121341229">MONTE CASTRO</option>
            <option value="121341230">NUEVA POMPEYA</option>
            <option value="121341231">NUÑEZ</option>
            <option value="121341232">PALERMO</option>
            <option value="121341233">PARQUE AVELLANEDA</option>
            <option value="121341234">PARQUE CHACABUCO</option>
            <option value="121341235">PARQUE PATRICIOS</option>
            <option value="121341238">RECOLETA</option>
            <option value="121341239">RETIRO</option>
            <option value="121341240">SAAVEDRA</option>
            <option value="121341241">SAN CRISTOBAL</option>
            <option value="121341242">SAN NICOLAS</option>
            <option value="121341243">SAN TELMO</option>
            <option value="121341244">VELEZ SARSFIELD</option>
            <option value="121341245">VERSAILLES</option>
            <option value="121341246">VILLA CRESPO</option>
            <option value="121341247">VILLA DEL PARQUE</option>
            <option value="121341248">VILLA DEVOTO</option>
            <option value="121341249">VILLA GRAL MITRE</option>
            <option value="121341250">VILLA LUGANO</option>
            <option value="121341251">VILLA LURO</option>
            <option value="121341252">VILLA ORTUZAR</option>
            <option value="121341253">VILLA PUEYRREDON</option>
            <option value="121341255">VILLA RIACHUELO</option>
            <option value="121341256">VILLA SANTA RITA</option>
            <option value="121341257">VILLA SOLDATI</option>
            <option value="121341258">VILLA URQUIZA</option>
          </select>
          <input type="hidden" name="zone" value="namwp" />
          <input type="hidden" name="res" value="0" />
          <input type="submit" value="Link" />
        </form>
      </td>
      {type === 'province' && <td>
        <a href={`https://www.google.com.ar/maps/search/${surname},+caba`} target="_blank" rel="noreferrer">Link</a>
      </td>}
    </tr>
  )

  return trs
}
