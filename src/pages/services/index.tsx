import { MainProps } from '@/interfaces/main'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

const Services = ({ domain }: MainProps) => {
  const { t } = useTranslation(domain)
  const services = t('services.services', { returnObjects: true }) as
    | string
    | { image: string; title: string; description: string }[]

  return (
    <>
      <div className="container mx-auto px-6 py-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold capitalize text-primary lg:text-3xl">
            {t('services.title')}
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-secondary">
            {t('services.description')}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {typeof services != 'string' &&
            services.map((service, index) => (
              <>
                <div key={index}>
                  <Image
                    className="relative z-10 h-96 w-full rounded-md object-cover"
                    src={`/images/${domain}/${service.image}`}
                    width={1400}
                    height={800}
                    alt=""
                  ></Image>

                  <div className="relative z-20 mx-auto -mt-20 max-w-lg rounded-md bg-neutral-content p-6 shadow ">
                    <h3 className="font-semibold text-secondary-content md:text-xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-secondary-content md:text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
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
