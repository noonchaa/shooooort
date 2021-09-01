import firebase from '../utils/firebaseClient'

const ListHistory = ({short,origin,visits,id}) => {

    const updateVisit = () => {
        firebase.firestore().collection('shooooort').doc(id)
        .update({
            visits : firebase.firestore.FieldValue.arrayUnion(new Date())
        })
    }
    
    const getTime = () => {
        const timeVisit = !visits.length? new Date() : visits[visits.length-1].seconds*1000
        const yearCompare = new Date().getFullYear() - new Date(timeVisit).getFullYear()
        const monthCompare = new Date().getMonth() - new Date(timeVisit).getMonth()
        const hour = new Date().getHours() - new Date(timeVisit).getHours()
        const minute = new Date().getMinutes() - new Date(timeVisit).getMinutes()
        const second = new Date().getSeconds() - new Date(timeVisit).getSeconds()
        const visit =   yearCompare==0?
                        monthCompare==0?
                        hour==0?
                        minute==0?
                        second==0?
                        0+' seconds ago'
                        :second+' seconds ago'
                        :minute+' minutes ago'
                        :hour+' hours ago'
                        :monthCompare+' months ago'
                        :yearCompare+' years ago'

        return visit
    }

    return(
        <div className='flex flex-row mb-2 flex-nowrap group hover:bg-gray-100' onClick={()=> {
            navigator.clipboard.writeText('https://shooooort.vercel.app/'+short)
            updateVisit()
            }}>
            <div className='w-3/6 md:w-4/6 cursor-pointer'>
                <h1 className='text-gray-900'>shooooort/
                    <span className='text-red-600'>{short}</span>
                    <span className='text-white hidden md:inline-block ml-8 group-hover:text-red-500'>Click to copy this link</span>
                </h1>
                <h1 className='text-sm text-gray-400 overflow-hidden'>{origin}</h1>
            </div>
                <h1 className='w-1/6 text-gray-900 text-center self-center'>{visits.length}</h1>
                <h1 className='w-2/6 md:w-1/6 text-center self-center'>
                    {!visits.length?'-':getTime()}
                </h1>
        </div>
    )
}

export default ListHistory