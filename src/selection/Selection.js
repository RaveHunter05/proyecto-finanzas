import React from 'react'
import {Link} from 'react-router-dom'

function Selection() {
    return (
        <div>
            <h2>¿Que desea hacer?</h2>
            <button>
                Balance general
            </button>
            <Link to="/resultado">
                <button>
                    <span>Estado de resultados</span>
                </button>
            </Link>
            <button>
                Generar todo
            </button>
        </div>
    )
}

export default Selection
