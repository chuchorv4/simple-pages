import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import i18nextConfig from '../../next-i18next.config'

const Document = ({ __NEXT_DATA__ }: DocumentProps) => {
  const currentLocale = __NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
  return (
    <Html lang={currentLocale}>
      <Head />
      <body data-theme="night">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
