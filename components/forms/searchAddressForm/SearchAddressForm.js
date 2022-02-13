import styles from './SearchAddressForm.module.css'
import genericStyles from '../../../styles/Generic.module.css'
import Select from 'react-select'
import { useState } from 'react'
import neighborhoods from '../../../database/neighborhoods'
import provinces from '../../../database/provinces'
import NumbersTableBody from '../../tables/NumbersTableBody'

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

export default function SearchAddressForm () {
  const [form, setForm] = useState({
    zone: '',
    address: '',
    number: ''
  })

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
  }

  return <div className={styles['form-container']}>
    <form onSubmit={handleSubmit}>
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
      </div>
    </form>
    <section>
      <table className={genericStyles.table}>
        <NumbersTableBody number={form.number} address={form.address} zone={form.zone} />
      </table>
    </section>
  </div>
}
