import { FooterProps } from '@/interfaces/layout'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Footer = ({ domain }: FooterProps) => {
  const { t } = useTranslation(domain)
  console.log('domain', domain)
  return (
    <>
      <footer className="footer footer-center bg-primary p-10 text-primary-content">
        <div>
          <Image
            src={`/images/${domain}/logo200c.png`}
            alt="logo"
            width={150}
            height={100}
          />
          <p className="font-bold">
            {t('footer.address')} | {t('footer.phone')} | {t('footer.email')}
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
