import { MainProps } from '@/interfaces/main'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'
import Modal from '@/components/common/Modal'
import { useMutation } from '@tanstack/react-query'
import sendEmail from '@/services/front/sendEmail'
import { ContactForm } from '@/interfaces/contact'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const Contact = ({ domain }: MainProps) => {
  const { t } = useTranslation(domain)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  })

  const [showModal, setShowModal] = useState(false)

  const { mutate } = useMutation(sendEmail, {
    onSuccess: () => {
      setShowModal(true)
    },
  })

  const onSubmit = (data: ContactForm) => {
    mutate(data)
  }
  return (
    <>
      {showModal && (
        <Modal
          title={t('contact.modal.title')}
          buttons={<></>}
          closeModal={() => {
            reset()
            setShowModal(false)
          }}
        >
          <>{t('contact.modal.body')}</>
        </Modal>
      )}
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
          <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Alberta&ie=UTF8&t=&z=10&iwloc=B&output=embed"
            ></iframe>
            <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  {t('contact.address')}
                </h2>
                <p className="mt-1">{t('footer.address')}</p>
              </div>
              <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  {t('contact.email')}
                </h2>
                <a className="leading-relaxed text-primary">
                  {t('footer.email')}
                </a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  {t('contact.phone')}
                </h2>
                <p className="leading-relaxed">{t('footer.phone')}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-5xl font-bold text-primary">
                {t('contact.title')}
              </h2>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('contact.name')}</span>
                  <span className="label-text-alt text-info">
                    {t('contact.required')}
                  </span>
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  {errors.name && (
                    <span className="label-text text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('contact.email')}</span>
                  <span className="label-text-alt text-info">
                    {t('contact.required')}
                  </span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  {errors.email && (
                    <span className="label-text text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('contact.message')}</span>
                  <span className="label-text-alt text-info">
                    {t('contact.required')}
                  </span>
                </label>
                <textarea
                  {...register('message')}
                  className="textarea textarea-bordered h-24"
                  placeholder="Type here"
                ></textarea>
                <label className="label">
                  {errors.message && (
                    <span className="label-text text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control mt-6 w-full">
                <input
                  type="submit"
                  className="btn btn-primary btn-active"
                  value={t('contact.send')}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
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

export default Contact
