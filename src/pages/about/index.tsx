import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainProps } from '../../interfaces/main'
import Image from 'next/image'

const About = ({ domain }: MainProps) => {
  const { t } = useTranslation(domain)
  const features = t('aboutUs.features', { returnObjects: true }) as
    | string
    | string[]
  return (
    <>
      <div className="hero py-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="rounded object-cover object-center"
            alt="hero"
            src={`/images/${domain}/dummy_800x800.png`}
            width={800}
            height={800}
          ></Image>
          <div>
            <h1 className="text-5xl font-bold">{t('aboutUs.title')}</h1>
            <p className="py-6 text-2xl">{t('aboutUs.body')}</p>
            <div className="grid gap-6 text-2xl text-primary sm:grid-cols-2">
              {typeof features != 'string' &&
                features.map((feature, index) => (
                  <>
                    <div key={index} className="-px-3 flex items-center">
                      <svg
                        className="mx-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="mx-3">{feature}</span>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero py-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h1 className="mt-4 text-xl font-semibold ">
                {t('aboutUs.mision.title')}
              </h1>

              <p className="mt-2 text-secondary">{t('aboutUs.mision.body')}</p>
            </div>
            <div>
              <h1 className="mt-4 text-xl font-semibold ">
                {t('aboutUs.vision.title')}
              </h1>

              <p className="mt-2 text-secondary">{t('aboutUs.vision.body')}</p>
            </div>
            <div>
              <h1 className="mt-4 text-xl font-semibold ">
                {t('aboutUs.values.title')}
              </h1>

              <p className="mt-2 text-secondary">{t('aboutUs.values.body')}</p>
            </div>
          </div>
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

export default About
