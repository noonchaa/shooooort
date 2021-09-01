import ListHistory from "./ListHistory"
import firebase from '../utils/firebaseClient'
import { useEffect, useState } from "react"

const History = () => {
    const [history,setHistory] = useState([])
    const [link,setLink] = useState(0)

    useEffect(()=>{
        firebase.firestore().collection('shooooort').get().then((data)=>{
            setLink(data.docs.length)
        })
        firebase.firestore().collection('shooooort').orderBy('time','asc')
        .onSnapshot((item)=>{
            let data = []
            item.forEach((doc)=>{
                data.unshift(doc.data())
            })
            setHistory(data)
        })
        return()=>{
            setHistory([])
            setLink(0)
        }
    },[])

    const delHistory = () => {
        history.map((item)=>{
            firebase.firestore().collection('shooooort').doc(item.id).delete().then(()=>console.log('deleted!')).catch((err)=>console.log('error',err))
        })
    }

    return(
        <div>
            <div className='flex flex-col md:flex-row mb-4'>
                <h1 className='text-xl md:mr-8'>
                    Previously shortened by you
                </h1>
                <p className='text-base text-red-600 md:self-center cursor-pointer' onClick={()=>delHistory()}>
                    Clear history
                </p>
            </div>

            <div className='flex flex-row mb-4'>
                <h1 className='w-3/6 md:w-4/6 uppercase text-sm text-gray-500'>
                    Link
                </h1>
                <h1 className='w-1/6 uppercase text-sm text-gray-500 text-center'>
                    Visits
                </h1>
                <h1 className='w-2/6 md:w-1/6 uppercase text-sm text-gray-500 text-center'>
                    Last Visited
                </h1>
            </div>
            
            <div>
            {history.map((item,index)=>(
            <div className={history.length>link?'first:border-l-4 border-red-600 first:pl-2':''} key={index}>
                <ListHistory id={item.id} short={item.short} origin={item.origin} visits={item.visits}/>
            </div>
            ))}
            </div>

        </div>
    )
}
export default History