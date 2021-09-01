import {useRouter} from 'next/router'
import { useEffect } from 'react'
import firebase from '../utils/firebaseClient'

const Short = () => {
    const router = useRouter()

    useEffect(()=>{
        firebase.firestore().collection('shooooort').where('short','==',router.asPath.slice(1)).get().then((data)=>{
            data.forEach((doc)=>{
                setTimeout(()=>{
                    router.push(doc.data().origin)
                },3000)
            })
        })
    },[router])
    return(
        <div className='max-w-screen-lg mx-auto px-4 py-4'>
            <header>
            <div className='flex flex-col md:flex-row justify-between mb-8'>
                <h1 className='text-red-600 font-bold text-5xl font-Mont underline'>Shooooort</h1>
                <h2 className='font-Robo md:self-center font-light text-gray-500'>The link shortener with a long name</h2>
            </div>
            </header>
            <main>
                <h1 className='text-center text-2xl text-red-600 font-semibold mb-8 animate-pulse'>Redirecting to original url</h1>
                <h1 className='text-center text-2xl text-red-600 font-semibold mb-8 animate-pulse'>Please wait</h1>
            </main>
        </div>
    )
}
export default Short