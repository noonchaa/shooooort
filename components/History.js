const History = () => {
    const ListUrl = [
        {
            id: 'fhfys',
            short: 'hygeos',
            origin: 'https://example.com',
            total:[new Date(),new Date(),new Date()]
        },
        {
            id: 'fhfys',
            short: 'hygeos',
            origin: 'https://example.com',
            total:[new Date(),new Date(),new Date()]
        },
        {
            id: 'fhfys',
            short: 'hygeos',
            origin: 'https://example.com',
            total:[new Date(),new Date(),new Date()]
        },
    ]

    return(
        <div>
            <div className='flex flex-col md:flex-row mb-4'>
                <h1 className='text-xl md:mr-8'>
                    Previously shortened by you
                </h1>
                <p className='text-base text-red-600 md:self-center cursor-pointer'>
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
            
            {ListUrl.map((item,index)=>(
            <div className='first:border-l-4 border-red-600 -ml-4 pl-2' key={index}>
                <div className='flex flex-row mb-2 flex-nowrap group' onClick={()=> navigator.clipboard.writeText('https://shooooort/'+item.short)}>
                    <div className='w-3/6 md:w-4/6 cursor-pointer'>
                        <h1 className='text-gray-900'>
                            shooooort/
                            <span className='text-red-600'>
                                {item.short}
                            </span>
                            <span className='text-white hidden md:inline-block ml-8 group-hover:text-red-500'>
                                Click to copy this link
                            </span>
                        </h1>
                        <h1 className='text-sm text-gray-400 overflow-hidden'>
                            {item.origin}
                        </h1>
                    </div>
                    <h1 className='w-1/6 text-gray-900 text-center self-center'>
                        {item.total.length}
                    </h1>
                    <h1 className='w-2/6 md:w-1/6 text-center self-center'>
                    8 minutes ago
                    </h1>
                </div>

            </div>
            ))}

        </div>
    )
}
export default History