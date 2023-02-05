import Swal from "sweetalert2";

function Paciente({paciente, setPaciente, eliminarPaciente}) {

  // Funcion para eliminar pacientes que se envia al App.jsx
  function handleEliminar () {
    const respuesta = true;

    if (respuesta) {
      Swal.fire({
        title: '¿Estas seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0891b2',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Eliminado Correctamente!',
            showConfirmButton: false,
            timer: 800
          })
          eliminarPaciente(id);
          }
        })
      }
  }

  const {nombre, propietario, email, alta, sintomas, id} = paciente;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}

          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}

          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}

          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}

          <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}

          <span className="font-normal normal-case">{sintomas}</span>
        </p>
                                                                                  
        <div className="flex justify-between mt-10">
          <button 
            type="button" 
            className=" bg-cyan-600 hover:bg-cyan-800 text-white py-2 px-10 rounded font-bold"
            onClick={() => setPaciente(paciente)}
            >Editar</button>
          
          <button 
            type="button" 
            className=" bg-red-600 hover:bg-red-800 text-white py-2 px-10 rounded font-bold"
            onClick={handleEliminar}
            id="eliminar"
            >Eliminar</button>

        </div>
      </div>
  )
}

export default Paciente;