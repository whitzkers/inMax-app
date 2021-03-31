fetch("@/assets/js/dummy.json")
        .then(response => response.json())
        .then(data =>{
            const location = data;

            marker1 = new mapboxgl.Marker().setLngLat([location.lng, location.lat]).addTo(map);
        });