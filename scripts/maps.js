function updateMap() {
  fetch("../json/data.json")
    .then((response) => response.json())
    .then((res) => {
      console.log(res.data);
      res.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }


        //Marking the map with markers
        new mapboxgl.Marker({
          draggable: true,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
updateMap();
