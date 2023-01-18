import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
const ReactMap = ({ searchResults }) => {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })
  console.log(center)
  return (
    <Map
      mapStyle="mapbox://styles/ijonel906/clcyss8lz000514uu9x8b35b7"
      mapboxAccessToken={process.env.ACCESS_TOKEN}
      {...viewPort}
      e
      onMove={(evt) => setViewPort(evt.viewPort)}>
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}>
            <p className="cursor-pointer text-2xl animate-bounce">📌</p>
          </Marker>
        </div>
      ))}
    </Map>
  )
}

export default ReactMap
