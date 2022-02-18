import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function BlankLink ({ href, icon, storeKey }) {
  const [clicked, setClicked] = useLocalStorage(storeKey)

  const handleClick = (e) => {
    e.preventDefault()
    setClicked(true)
    window.open(href, '_blank')
  }

  return <a className={clicked ? 'clicked' : undefined} href={href} target="_blank" rel="noreferrer" onClick={handleClick}>
    <FontAwesomeIcon icon={clicked ? faCheck : icon} />
  </a>
}
