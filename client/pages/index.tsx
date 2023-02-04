import styled from '@emotion/styled'
import Head from 'next/head'
import { lazy, Suspense } from 'react'
import SkeletonLoader from '../components/Skeleton/Skeleton'

const UsersComponent = lazy(() => import("./users"))

const Home = () => {
  return (
    <div>
      <Head>
        <title>Users App</title>
        <meta name="description" content="next apollo app demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapper>
        <Suspense fallback={<div><SkeletonLoader/></div>}>
          <UsersComponent />
        </Suspense>
      </MainWrapper>
    </div>
  )
}

export default Home

const MainWrapper = styled.main`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-top: 3rem;
`;