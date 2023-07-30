import Head from 'next/head'
import { HeaderProps } from '../interfaces/layout'
import Navbar from './navbar'

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  favicon,
  domain,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Head>
      <Navbar domain={domain} />
    </>
  )
}

export default Header
