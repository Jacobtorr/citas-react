function Alerta({children}) {

  return (
     <div className='bg-red-700 text-white text-center p-3 uppercase font-bold rounded mb-3'>
        <p>{children}</p>
     </div>
  )
}

export default Alerta;