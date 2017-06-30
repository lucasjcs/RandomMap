function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15
    });

    var point = new google.maps.LatLng(-23.1911176,-50.6456432);
    var marker = new google.maps.Marker({
        position: point,
        map: map
    });

    map.setCenter(point);



    setInterval(function(){
        var xhr;
        xhr = new XMLHttpRequest();
        var pontos;
        xhr.onreadystatechange =  function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                pontos = JSON.parse(xhr.responseText);
                var i = Math.floor(Math.random() * pontos.length);
                var lat = pontos[i].Latitude;

                document.getElementById("nome").innerHTML = pontos[i].nome;
                document.getElementById("lat").innerHTML = pontos[i].Latitude;
                document.getElementById("long").innerHTML = pontos[i].Longitude;

                var long = pontos[i].Longitude;
                var point = new google.maps.LatLng(lat,long);

                map.setCenter(point);
                marker.setPosition(point);
                marker.setMap(map);
            }
        };

        xhr.open("GET", "js/pontos.json", true);
        xhr.send();

    }, 10000);

}