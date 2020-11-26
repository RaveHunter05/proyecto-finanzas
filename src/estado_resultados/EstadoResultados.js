import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


function EstadoResultados() {
    
      async function handleSubmit(e){
        e.preventDefault()
        // await funcionGeneradora()
        setVer(1)
    }

    function funcionGeneradora(){
        setMercaderiaDisponible(invInicial+ compras)
        setCostoVenta(mercaderiaDisponible-invFinal)
        setUtilidadBruta(ventas-costoVenta)
        setGastosOperacion(gastosVenta+gastosAdministrativos)
        setUtilidadOperacion(utilidadBruta-gastosOperacion)
        setGastosNoOperacionales(gastosFinancieros)
        setUAI(utilidadOperacion-gastosNoOperacionales)
        setutilidadEjercicio(UAI-(UAI*30/100))

        // const mercaderiaDisponible = ventas- invInicial -compras
        // const costoVenta = mercaderiaDisponible - invFinal
        // const utilidadBruta = ventas-costoVenta
        // const gastosOperacion = gastosVenta-gastosAdministrativos
        // const utilidadOperacion = utilidadBruta - gastosOperacion
        // const gastosNoOperacionales = gastosFinancieros
        // const UAI = utilidadOperacion - gastosNoOperacionales
        // const utilidadBurta = UAI - (UAI * 30/100)
        

        // return ([mercaderiaDisponible, costoVenta, utilidadBruta, gastosOperacion, utilidadOperacion, gastosNoOperacionales, UAI, utilidadEjercicio])
    }

    async function fMercaderiaDisponible(){
        let resultado = await  ventas-invInicial-compras
        await setMercaderiaDisponible(resultado)
        return resultado
    }

    //Datos a pedir
    const [ventas, setVentas] = useState()
    const [compras, setCompras] = useState()
    const [invInicial, setInvInicial] = useState()
    const [invFinal, setInvFinal] = useState()
    const [gastosVenta, setGastosVenta] = useState()
    const [gastosAdministrativos, setGastosAdministrativos] = useState()
    const [gastosFinancieros, setGastosFinancieros] = useState()
    const [ver, setVer] = useState(0)

    // Datos a generar

    const [mercaderiaDisponible, setMercaderiaDisponible] = useState()
    const [costoVenta, setCostoVenta] = useState()
    const [gastosOperacion, setGastosOperacion] = useState()
    const [utilidadBruta, setUtilidadBruta] = useState()
    const [utilidadOperacion, setUtilidadOperacion] = useState()
    const [gastosNoOperacionales, setGastosNoOperacionales] = useState()
    const [UAI, setUAI] = useState()
    const [utilidadEjercicio, setutilidadEjercicio] = useState()

    // Handles para datos a pedir

    function handleVentas(e){
        setVentas(e.target.value)
    }

    function handleCompras(e){
        setCompras(e.target.value)
    }

    function handleInvInicial(e){
        setInvInicial(e.target.value)
    }

    function handleInvFinal(e){
        setInvFinal(e.target.value)
    }

    function handleGastosVenta(e){
        setGastosVenta(e.target.value)
    }

    function handleGastosAdministrativos(e){
        setGastosAdministrativos(e.target.value)
    }

    function handleGastosFinancieros(e){
        setGastosFinancieros(e.target.value)
    }

    //useEffect

    useEffect(() => {
        setMercaderiaDisponible(0)
        setMercaderiaDisponible(parseFloat(invInicial)+ parseFloat(compras))
        setCostoVenta(0)
        setCostoVenta(parseFloat(mercaderiaDisponible)-parseFloat(invFinal))
        setUtilidadBruta(0)
        setUtilidadBruta(parseFloat(ventas)-parseFloat(costoVenta))
        setGastosOperacion(parseFloat(gastosVenta)+parseFloat(gastosAdministrativos))
        setUtilidadOperacion(0)
        setUtilidadOperacion(parseFloat(utilidadBruta)-parseFloat(gastosOperacion))
        setGastosNoOperacionales(parseFloat(gastosFinancieros))
        setUAI(0)
        setUAI(parseFloat(utilidadOperacion)-parseFloat(gastosNoOperacionales))
        setutilidadEjercicio(0)
        setutilidadEjercicio(UAI-(UAI*30/100))
        setVer(0)
    }, [invInicial, mercaderiaDisponible, ventas, gastosVenta, utilidadBruta, gastosFinancieros, utilidadOperacion, UAI])
    
    
    return (
        <div >
            <h2>Ingrese las cuentas para el estado de resultados</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column">
                <label>
                    Ventas
                    <input 
                    type="number" 
                    name="ventas" 
                    className="form-control"
                    id="ventas"
                    onChange={handleVentas}
                    value={ventas}
                    required
                    />
                </label>
                <label>
                    Compras
                    <input 
                    type="number" 
                    name="compras"
                    className="form-control" 
                    id="compras"
                    onChange={handleCompras}
                    value={compras}
                    required
                    />
                </label>
                <label>
                    Inventario Inicial
                    <input 
                    type="number" 
                    name="invInicial" 
                    className="form-control"
                    id="inv-inicial"
                    onChange={handleInvInicial}
                    value={invInicial}
                    required
                    />
                </label>
                <label>
                    Inventario Final
                    <input 
                    type="number" 
                    name="invFinal" 
                    className="form-control"
                    id="inv-final"
                    onChange={handleInvFinal}
                    value={invFinal}
                    required
                    />
                </label>
                <label>
                    Gastos de venta
                    <input 
                    type="number" 
                    name="gastosVenta" 
                    className="form-control"
                    id="gastos-venta"
                    onChange={handleGastosVenta}
                    value={gastosVenta}
                    required
                    />
                </label>
                <label>
                    Gastos administrativos
                    <input 
                    type="number" 
                    name="gastosAdministrativos" 
                    className="form-control"
                    id="gastos-administrativos"
                    onChange={handleGastosAdministrativos}
                    value={gastosAdministrativos}
                    required
                    />
                </label>
                <label>
                    Gastos financieros
                    <input 
                    type="number" 
                    name="gastos-financieros" 
                    className="form-control"
                    id="gastos-financieros"
                    onChange={handleGastosFinancieros}
                    value={gastosFinancieros}
                    required
                    />
                </label>
                <input className="btn btn-primary" type="submit" value="Generar"/>

                {
                !isNaN(utilidadEjercicio) && !isNaN(ventas) && 
                !isNaN(costoVenta) && !isNaN(utilidadBruta) && 
                !isNaN(mercaderiaDisponible) && !isNaN(gastosOperacion) &&
                !isNaN(utilidadOperacion) && !isNaN(gastosNoOperacionales) &&
                !isNaN(UAI) && !isNaN(utilidadEjercicio)  && ver == 1 &&

                <div className="text-center mt-5 mb-5 d-flex flex-column align-content-center">
                    <h2>
                        Compañía el Buen Camino, S.A <br/>
                        Estado de Resultados <br/>
                        Del 01 al 31 de Diciembre del 2016
                    </h2>

                    <table className="table mt-5">
                        <tr>
                            <td>
                                <strong>Ventas</strong>
                            </td>
                            <td></td>
                            <td>{ventas}</td>
                        </tr>
                        <tr>
                            <td>Inventario inicial</td>
                            <td>{invInicial}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Compras</td>
                            <td>{compras}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Mercadería disponible</td>
                            <td>{mercaderiaDisponible}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Menos: Inventario final</td>
                            <td>{invFinal}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Menos: Costo de venta</strong>
                            </td>
                            <td></td>
                            <td>{costoVenta}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Utilidad Bruta</strong>
                            </td>
                            <td></td>
                            <td>{utilidadBruta}</td>
                        </tr>
                        <tr>
                            <td>Gastos de venta</td>
                            <td>{gastosVenta}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Gastos de administración</td>
                            <td>{gastosAdministrativos}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Menos: Gastos de operación</strong>
                            </td>
                            <td></td>
                            <td>{gastosOperacion}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Utilidad de operación</strong>
                            </td>
                            <td></td>
                            <td>{utilidadOperacion}</td>
                        </tr>
                        <tr>
                            <td>Gastos financieros</td>
                            <td>{gastosFinancieros}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Gastos no operacionales</strong>
                            </td>
                            <td></td>
                            <td>{gastosNoOperacionales}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Utilidad antes de impuestos</strong>
                            </td>
                            <td></td>
                            <td>{UAI}</td>
                        </tr>
                        <tr>
                            <td>Impuestos sobre la renta</td>
                            <td></td>
                            <td>{(UAI*30/100).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Utilidad del ejercicio</strong>
                            </td>
                            <td></td>
                            <td>{utilidadEjercicio.toFixed(2)}</td>
                        </tr>

                    </table>

                </div>
                }
            </form>
        </div>
    )
}

export default EstadoResultados
