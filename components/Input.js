import { useState } from "react"
import firebase from '../utils/firebaseClient'

const Input = () => {
    const [url,setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const db = firebase.firestore().collection('shooooort')

    const getShort = async () => {
        setLoading(true)
        const res = await fetch('/api/short',{
            method:'POST',
            body: JSON.stringify({
                url:url
            })
        }).then(respon => respon.text())
        db.doc(url.replace(/[&\/\\#, +()$~%.'"*?<>{}]/g, '_')).set({
            id: url.replace(/[&\/\\#, +()$~%.'"*?<>{}]/g, '_'),
            time: firebase.firestore.FieldValue.serverTimestamp(),
            origin: url,
            visits:[],
            short: await JSON.parse(res).shortcode
        })
        setUrl('')
        setLoading(false)
    }

    return(
        <div className='flex flex-col md:flex-row justify-between mb-8'>
            <input
                type='url'
                value= {url}
                placeholder='https://www.example.com'
                className='bg-gray-200 px-4 py-3 focus:ring-gray-900 focus:outline-none focus:ring-2 rounded-md mb-2 md:w-full md:mr-4'
                onChange={(e)=>setUrl(e.target.value)}
            />
            <button
            disabled = {url.slice(0,8)!='https://'?true:false}
            onClick={()=>{
                getShort()
            }}
            className={url.slice(0,8)!='https://'?'py-2 px-3 rounded-md bg-gray-300 text-gray-500 flex-none mb-2':'py-2 px-3 text-gray-50 rounded-md bg-red-600 flex-none mb-2'}
            >
            {loading==false?'Shorten this link':'Processing'}
            </button>
        </div>
    )
}
export default Input