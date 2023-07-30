import { MainProps } from '@/interfaces/main'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Services = ({ domain }: MainProps) => {
  const { t } = useTranslation(domain)
  return (
    <>
      <h1 className="text-3xl font-bold underline">{t('services')}</h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
}) => {
  const domain = (req?.headers?.host || '').replace(/([w]{3}||[.-])*/g, '')
  return {
    props: {
      domain,
      ...(await serverSideTranslations(locale ?? 'en', [domain])),
    },
  }
}

export default Services
