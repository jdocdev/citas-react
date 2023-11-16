function Error({children}) {
    return (
        <div className='bg-red-500 text-white p-3 uppercase font-bold text-center mb-3 rounded-md'>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Error