import { useForm } from "react-hook-form";

const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const Onsubmit = (data) => {
        console.log(data);

    }
    
    return <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(Onsubmit)}>
            
            <div className="col-md-3">
                <label>Nombre</label>
                <input placeholder="Ingrese Nombre" className="form-control" type="text" {...register('nombre',{
                    required: true,
                    maxLength: 20
                    
                })} />
                {errors.nombre?.type === 'required'&& <p> Todos los campos deben ser diligenciados</p>}
            </div>
            <div className="col-md-3">
                <label>Apellido</label>
                <input placeholder="Ingrese Apellido" className="form-control" type="text" {...register('apellido', {
                    required: true,
                    })} />
                {errors.apellido?.type === 'required'&& <p> Todos los campos deben ser diligenciados</p>}
            </div>
            <div className="col-md-3">  
                <label>Teléfono</label>
                <input placeholder="Ingrese telefono" className="form-control" type="text" {...register('telefono', {
                    required: true
                })} />
                {errors.telefono?.type === 'required'&& <p> Todos los campos deben ser diligenciados</p>}
            </div>
            <div className="col-md-3">
                <label>Email</label>
                <input placeholder="Ejemplo@hotmail.com"className="form-control" type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p> El formato del email es incorrecto</p>}
                
            </div>
            <input  className='btn btn-primary btnAction' type="submit" value="Enviar" /> 

        </form>
    </div>

}
export default Formulario;