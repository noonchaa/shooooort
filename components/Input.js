import { useState } from "react"

const Input = () => {
    const [url,setUrl] = useState('')

    const getShort = async () => {
        const res = await fetch('/api/short',{
            method:'POST',
            body: JSON.stringify({
                url:url
            })
        }).then(respon => respon.text())
        console.log(await JSON.parse(res).shortcode)
        setUrl('')
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
            Shorten this link
            </button>
        </div>
    )
}
export default Input