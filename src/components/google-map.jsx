"use client"

import { useEffect, useRef, useState } from "react"

export default function GoogleMap({ pickup, dropoff }) {
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const [directionsService, setDirectionsService] = useState(null)
  const [directionsRenderer, setDirectionsRenderer] = useState(null)

  useEffect(() => {
    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = initializeMap
      document.head.appendChild(script)
    } else {
      initializeMap()
    }
  }, [])

  const initializeMap = () => {
    if (!mapRef.current) return

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      zoom: 13,
      center: { lat: -33.7969, lng: 151.1332 }, // North Ryde area
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_CENTER,
      },
    })

    const directionsServiceInstance = new window.google.maps.DirectionsService()
    const directionsRendererInstance = new window.google.maps.DirectionsRenderer({
      suppressMarkers: false,
      polylineOptions: {
        strokeColor: "#7C3AED",
        strokeWeight: 4,
        strokeOpacity: 0.8,
      },
    })

    directionsRendererInstance.setMap(mapInstance)

    setMap(mapInstance)
    setDirectionsService(directionsServiceInstance)
    setDirectionsRenderer(directionsRendererInstance)
  }

  useEffect(() => {
    if (map && directionsService && directionsRenderer && pickup && dropoff) {
      // Calculate and display route
      directionsService.route(
        {
          origin: pickup,
          destination: dropoff,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(result)
          } else {
            console.error("Directions request failed due to " + status)
          }
        },
      )
    }
  }, [map, directionsService, directionsRenderer, pickup, dropoff])

  return <div ref={mapRef} className="w-full h-full rounded-2xl" style={{ minHeight: "100%" }} />
}
