import { GetStaticProps } from 'next'

const page404 = () => {
  return <></>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  }
}

export default page404
