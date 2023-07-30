import SwitchTheme from '@/components/layout/SwitchTheme'
import { NavbarProps } from '@/interfaces/layout'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const Navbar: React.FC<NavbarProps> = ({ domain }) => {
  const { t } = useTranslation(domain)

  const menu = (
    <>
      <li>
        <Link href={'/about'}>{t('navbar.about')}</Link>
      </li>
      {/* <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
      <li>
        <Link href={'/services'}>{t('navbar.services')}</Link>
      </li>
      <li>
        <Link href={'/contact'}>{t('navbar.contact')}</Link>
      </li>
    </>
  )

  return (
    <>
      <div className="navbar flex-none bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <Link href={'/'} className="btn btn-ghost text-xl normal-case">
            {t('pageTitle')}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <SwitchTheme />
        </div>
      </div>
    </>
  )
}

export default Navbar
