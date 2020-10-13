import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import './style.css'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src="https://www.pngkey.com/png/full/224-2241610_job.png" height="40px" alt="uJob" />
                <main>
                    <h1>
                        uJob, encontre e solicite trabalho de forma rápida, prática e segura
            </h1>
                    <span>*Todas as solicitações e aceitação de trabalhos são por meios de cadastro e politica da plataforma</span>
                </main>
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
                </Link>
            </div>
        </div>
    )
}

export default Landing