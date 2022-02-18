import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useLocalStorage from '../../../hooks/useLocalStorage'

export default function SubmitAsALinkButton ({ icon, storeKey }) {
  const [clicked, setClicked] = useLocalStorage(storeKey)

  const handleClick = () => {
    setClicked(true)
  }

  return <button className={'as-a-link' + (clicked ? ' clicked' : '')} type="submit" value="点击" onClick={handleClick}>
    <FontAwesomeIcon icon={clicked ? faCheck : icon} />
  </button>
}
