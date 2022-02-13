import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SearchAddressForm.module.css'

export default function SearchAddressForm () {
  return <div className={styles['form-container']}>
      <form>
      <div>
        <label htmlFor="address">Dirección 地址</label>
        <input id="address" type="text" name="address" placeholder="Av. Lope de Vega" />
      </div>
      <div>
        <label htmlFor="number">Altura 号码</label>
        <input id="number" type="text" name="number" placeholder="123" />
      </div>
      <div>
        <button type="submit" value="点击">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  </div>
}
