import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import Header from './header'
import { useTranslation } from 'next-i18next'
import { LayoutProps } from '@/interfaces/layout'
import Footer from './footer'
import Carousel from '@/components/common/Carousel'

const Layout = ({ children, domain }: LayoutProps) => {
  const { t } = useTranslation(domain)
  console.log('domain', domain)
  const isFeching = useIsFetching()
  const isMutating = useIsMutating()
  const isLoading = isFeching > 0 || isMutating > 0

  return (
    <>
      <main className="container mx-auto flex min-h-screen flex-col">
        <Header
          title={t('pageTitle')}
          description={t('pageSubtitle')}
          favicon=""
          domain={domain}
        />
        <section className="mx-a flex-grow">{children}</section>
        <Carousel domain={domain} />
        <Footer domain={domain} />
      </main>
      {isLoading && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700 opacity-75">
          <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
          <h2 className="text-center text-xl font-semibold text-white">
            Loading...
          </h2>
        </div>
      )}
    </>
  )
}

export default Layout
