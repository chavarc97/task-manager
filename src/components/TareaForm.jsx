import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { crearTarea } from '../features/tareas/tareaSlice'

const TareaForm = () => {

    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(crearTarea({ description }))
        setDescription('')
    }

    return (
        <>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción:</label>
                        <input
                            type="text"
                            name="descripcion"
                            id="descripcion"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type='submit' className="btn btn-block">Crear Tarea</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default TareaForm
