import Paciente from "./Paciente";

// Funcion que recibe los parametros del App.jsx
function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {/* Mostrar un texto u otro dependiendo del condicional */}
      {pacientes && pacientes.length ? (
        <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-center mt-5 mb-10 font-bold text-xl">
              Administra tus {""}
              <span className="text-cyan-600">Pacientes y Citas</span>
            </p>

            {/* Enviar los props a paciente para editar/eliminar */}
            {pacientes.map( paciente => 
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
            )}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-center mt-5 mb-10 text-xl">
              Comienza agregando pacientes {""}
              <span className="text-cyan-600 font-bold">y apareceran en este lugar</span>
            </p>
        </>
      )}

    </div>
    
  );
}
export default ListadoPacientes;
