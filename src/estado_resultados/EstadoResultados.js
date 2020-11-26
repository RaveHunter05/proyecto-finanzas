import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


function EstadoResultados() {
    function handleSubmit(e){
        alert(e.target.value)
    }

    //Funciones handle

    function handleIngresos(e){
        setIngresos(e.target.value)
    }

    function handleGastos(e){
        setGastos(e.target.value)
    }

    function handleDepreciacion(e){
        setDepreciacion(e.target.value)
    }

    function handleOtros(e){
        setOtros(e.target.value)
    }

    function handleUaii(e){
        setUaii(e.target.value)
    }
    
    function handleGastosIntereses(e){
        setGastosIntereses(e.target.value)
    }
    function handleImpuestosRenta(e){
        setImpuestosRenta(e.target.value)
    }

    const [ingresos, setIngresos] = useState()
    const [gastos, setGastos] = useState()
    const [depreciacion, setDepreciacion] = useState()
    const [otros, setOtros] = useState()
    const [uaii, setUaii] = useState()
    const [gastosIntereses, setGastosIntereses] = useState()
    const [impuestosRenta, setImpuestosRenta] = useState()
    
    return (
        <div>
            <h2>Ingrese las cuentas para el estado de resultados</h2>
            <form onSubmit="handleSubmit">
                <label>
                    Ingresos por ventas
                    <input 
                    type="number" 
                    name="ingresos" 
                    id="ingresosVentas"
                    onChange={handleIngresos}
                    value={ingresos}
                    />
                </label>
                <label>
                    Gastos de operación
                    <input 
                    type="number" 
                    name="ingresos" 
                    id="ingresosVentas"
                    onChange={handleGastos}
                    value={gastos}
                    />
                </label>
                <label>
                    Depreciación (edificios y equipos)
                    <input 
                    type="number" 
                    name="ingresos" 
                    id="ingresosVentas"
                    onChange={handleDepreciacion}
                    value={depreciacion}
                    />
                </label>
                <label>
                    Otros gastos de ventas administrativas
                    <input 
                    type="number" 
                    name="ingresos" 
                    id="ingresosVentas"
                    onChange={handleOtros}
                    value={otros}
                    />
                </label>
                <label>
                    Utilidades antes de intereses e impuestos
                    <input 
                    type="number" 
                    name="ingresos" 
                    id="ingresosVentas"
                    onChange={handleUaii}
                    value={uaii}
                    />
                </label>
                <label>
                    Gastos de intereses
                    <input 
                    type="number" 
                    name="ingresos" 
                    id="ingresosVentas"
                    onChange={handleGastosIntereses}
                    value={gastosIntereses}
                    />
                </label>
                <label>
                    Impuestos sobre renta
                    <input 
                    type="number" 
                    name="ingresos" 
                    id="ingresosVentas"
                    onChange={handleImpuestosRenta}
                    value={impuestosRenta}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default EstadoResultados
