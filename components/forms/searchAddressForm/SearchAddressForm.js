import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SearchAddressForm.module.css'
import Select from 'react-select'

const customStyles = {
  control: base => ({
    ...base,
    fontFamily: 'Arial',
    fontWeight: 100,
    fontSize: '0.85rem'
  })
}

export default function SearchAddressForm () {
  return <div className={styles['form-container']}>
    <form>
      <div className={styles['form-group']}>
        <div>
          <Select options={[
            { value: 'caba', label: 'CABA' }
          ]}
          styles={customStyles}
          placeholder="选择地方 Elija Zona"
          id="zone" instanceId={'zone'} name="zone" />
        </div>
      </div>
      <div className={styles['form-group']}>
        <div>
          <label htmlFor="address">Dirección 地址</label>
          <input className={styles['custom-control']} id="address" type="text" name="address" placeholder="Av. Lope de Vega" />
        </div>
        <div>
          <label htmlFor="number">Altura 号码</label>
          <input className={styles['custom-control']} id="number" type="text" name="number" placeholder="123" />
        </div>
        <div className={styles['submit-container']}>
          <button className={styles['custom-control']} type="submit" value="点击">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </form>
  </div>
}
