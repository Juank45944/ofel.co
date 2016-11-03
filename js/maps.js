function initMap() {
        var myLatLng = {lat: 5.051582, lng: -75.487607};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 18
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Punto de recolección de regalos',
          icon: 'img/custom-marker.png'
        });
      }
