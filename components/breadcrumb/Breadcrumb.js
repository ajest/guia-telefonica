import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb ({ second, third }) {
  return <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href={'/'}>
            <a>
              <FontAwesomeIcon icon={faHome} />
            </a>
          </Link>
        </li>
        {second && <li>
          <Link href={`/${second.url}`}>
            <a>
            {second.label}
            </a>
          </Link>
        </li>}
        {third && <li>
          <Link href={`/${third.url}`}>
            <a>
              {third.label}
            </a>
          </Link>
        </li>}
      </ul>
  </nav>
}
