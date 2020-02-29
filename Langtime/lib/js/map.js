 function initMap() {
                    var uluru = {
                        lat: 46.4050006,
                        lng: 30.7146067
                    };
                    var map = new google.maps.Map(
                        document.getElementById('map'), {
                            zoom: 17,
                            center: uluru
                        });
                    var marker = new google.maps.Marker({
                        position: uluru,
                        map: map
                    });
                }