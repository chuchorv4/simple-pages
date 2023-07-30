import Layout from '@/layout'
import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => {
  console.log('pageProps', pageProps)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default appWithTranslation(App)
