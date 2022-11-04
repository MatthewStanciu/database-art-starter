import type { NextPage } from 'next'
import Head from 'next/head'
import useSWR, { Fetcher } from 'swr'
import Submit from '../components/submit'

type Message = {
  id: string
  message: string
}

const fallbackData: Message[] = [
  {
    id: '',
    message: 'init'
  }
]

const Home: NextPage = () => {
  const fetcher: Fetcher<Message[], string> = (route) =>
    fetch(route).then((res) => res.json())

  return (
    <div className="flex flex-col items-center my-8 gap-8">
      <Head>
        <title>Database Art 🌈</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>hiii</p>
    </div>
  )
}

export default Home
