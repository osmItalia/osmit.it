import * as React from 'react'
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import config from '../config';

const { BaseLayer } = LayersControl

export default function Map() {

    if (typeof window === 'undefined') {
        return null;
    }
    
    return (
        <div>
            <MapContainer center={config.center} zoom={config.zoom} scrollWheelZoom={false}>
                <LayersControl>
                {config.layers.map(l => (
                    <BaseLayer
                        key={l.name}
                        name={l.name}
                        checked={l.checked}
                    >
                        <TileLayer
                            attribution={l.attribution}
                            url={l.url}
                        />
                    </BaseLayer>))
                }
                </LayersControl>
            </MapContainer>
        </div>
    )
}
