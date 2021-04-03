fetch("@/assets/js/dummy.json")
        .then(response => response.json())
        .then(data =>{
            const location = data;

            new mapboxgl.Marker().setLngLat([location.lng, location.lat]).addTo(map);
        });