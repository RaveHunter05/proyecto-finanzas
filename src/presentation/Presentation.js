import React from 'react'
import { Link } from 'react-router-dom'

function Presentation() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <h2>
                En esta herramienta web están implementados los conocimientos obtenidos en la clase de Finanzas I, tomando en cuenta todo el material y las clases que se impartierona lo largo de este semestre.
            </h2>
            <Link to="/selection">
                <button>
                    <span>Selection</span>
                </button>
            </Link>
        </div>
    )
}

export default Presentation
