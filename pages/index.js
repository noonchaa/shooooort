import Head from 'next/head'
import History from '../components/History'
import Input from '../components/Input'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shooooort</title>
        <meta name="description" content="The link shortener with a long name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-screen-lg mx-auto px-4 py-4'>
        <div className='flex flex-col md:flex-row justify-between mb-8'>
            <h1 className='text-red-600 font-bold text-5xl font-Mont underline'>Shooooort</h1>
            <h2 className='font-Robo md:self-center font-light text-gray-500'>The link shortener with a long name</h2>
        </div>
        <Input/>
        <History/>
      </main>

      <footer>
      </footer>
    </div>
  )
}
