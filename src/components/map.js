import * as React from 'react'
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/dist/styles.css";
import * as L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import config from '../config';

const { BaseLayer } = LayersControl

export default function Map() {
    return (
        <div>
            <MapContainer 
                center={config.center} 
                zoom={config.zoom}
                dragging={!L.Browser.mobile}
                tap={!L.Browser.mobile}
                scrollWheelZoom={false}
            >
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
                <FullscreenControl />
            </MapContainer>
        </div>
    )
}
