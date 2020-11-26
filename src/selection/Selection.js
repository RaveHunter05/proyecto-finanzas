import React from 'react'
import {Link} from 'react-router-dom'

function Selection() {
    function noCreado(){
        alert("este modulo aún no se ha completado :'l")
    }
    return (
        <div>
            <h2 className="pt-3 pb-3">¿Que desea hacer?</h2>
            <div className="row pt-3">
                <div className="col">
                    <button onClick={noCreado}>
                        Balance general
                    </button>
                </div>
                <div className="col">
                    <Link to="/resultado">
                        <button>
                            <span>Estado de resultados</span>
                        </button>
                    </Link>
                </div>
                <div className="col">
                        <button onClick={noCreado}>
                            Razones financieras
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Selection
