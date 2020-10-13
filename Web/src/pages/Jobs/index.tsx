import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import marker from '../../assets/images/icon.svg'
import './style.css'

function Jobs() {
    
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={marker} alt="uJob" />
                    <h2>Escolha um serviço</h2>
                    <p>Vejas as melhores oportunidades.</p>
                </header>
                <footer>
                    <strong>Trabalho de todos os tipos</strong>
                    <span>Trabalho em todos os locais</span>
                </footer>
            </aside>

            <Map
                center={[-7.2281782, -39.3309997]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <TileLayer
                    url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </Map>

            <Link to="" className="create-job">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default Jobs