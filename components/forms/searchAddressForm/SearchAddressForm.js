import styles from './SearchAddressForm.module.css'
import genericStyles from '../../../styles/Generic.module.css'
import Select from 'react-select'
import { useState } from 'react'
import neighborhoods from '../../../database/neighborhoods'
import provinces from '../../../database/provinces'
import NumbersTableBody from '../../tables/NumbersTableBody'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

const customStyles = {
  control: base => ({
    ...base,
    fontFamily: 'Arial',
    fontWeight: 100,
    fontSize: '0.85rem'
  })
}

const zones = [...neighborhoods, ...provinces].map(zone => {
  return {
    value: zone.url,
    label: zone.name,
    name: 'zone'
  }
})

const defaultFormValues = {
  zone: '',
  address: '',
  number: ''
}

export default function SearchAddressForm () {
  const [form, setForm] = useState(defaultFormValues)
  const [formAux, setFormAux] = useState(defaultFormValues)
  const [submitted, setSubmitted] = useState(false)
  const [searching, setSearching] = useState(false)

  const handleInput = (e) => {
    if ('target' in e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    } else {
      setForm({
        ...form,
        [e.name]: e.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(false)
    setSearching(true)
    setTimeout(() => {
      setSubmitted(true)
      setSearching(false)
    }, 500)
    setFormAux(form)
  }

  return <div className={styles['form-container']}>
    <form onSubmit={handleSubmit}>
      <div className={styles['form-group-container']}>
        <div className={styles['form-group']}>
          <div>
            <Select options={zones}
              styles={customStyles}
              placeholder="选择地方 Elija Zona"
              id="zone"
              instanceId={'zone'}
              onChange={handleInput} />
          </div>
        </div>
        <div className={styles['form-group']}>
          <div>
            <label htmlFor="address">Dirección 地址</label>
            <input className={styles['custom-control']} id="address" type="text" name="address" placeholder="Av. Lope de Vega" onChange={handleInput} />
          </div>
          <div>
            <label htmlFor="number">Altura 号码</label>
            <input className={styles['custom-control']} id="number" type="number" name="number" placeholder="123" onChange={handleInput} />
          </div>
          <div className={styles['submit-container']}>
            <button className={styles['custom-control']}>
              <FontAwesomeIcon className={searching ? styles.spin : undefined} icon={searching ? faSpinner : faSearch}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </form>
    {submitted && <section>
      <table className={genericStyles.table}>
        <NumbersTableBody number={formAux.number} address={formAux.address} zone={formAux.zone} />
      </table>
    </section>}
  </div>
}
