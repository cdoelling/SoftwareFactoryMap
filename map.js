// ---------CA SITE LIST-------------

  //
  // var cadevData = [
  //     {location: new google.maps.LatLng(17.4254196,78.3349578), weight: 12},
  //     {location: new google.maps.LatLng(50.0278166,14.4930487), weight: 11},
  //     {location: new google.maps.LatLng(37.3857826,-121.9753225), weight: 10},
  //     {location: new google.maps.LatLng(33.0789714,-96.8110784), weight: 9},
  //     {location: new google.maps.LatLng(40.5244307,-105.0244388), weight: 8},
  //     {location: new google.maps.LatLng(42.2953163,-71.488151), weight: 7},
  //     {location: new google.maps.LatLng(12.9591505,77.6459774), weight: 6},
  //     {location: new google.maps.LatLng(40.020194,-105.2512472), weight: 5},
  //     {location: new google.maps.LatLng(39.7513315,-105.0033265), weight: 3},
  //     {location: new google.maps.LatLng(49.284005,-123.1213143), weight: 4},
  //     {location: new google.maps.LatLng(40.4534992,-80.1909099), weight: 3},
  //     {location: new google.maps.LatLng(41.808818,-88.1174986), weight: 2},
  //     {location: new google.maps.LatLng(32.2610569,34.4118136), weight: 1},
  //   ];

    var styles = [
      {
        stylers: [
          { hue: "#f2fffe" },
          { saturation: -10 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 90 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "water",
        stylers: [{ color: "#f2f2f2"}]
      }
    ];

    var island = new google.maps.LatLng(37.7450122,-25.6959568);

    map = new google.maps.Map(document.getElementById('map'), {
      center: island,
      zoom: 2,
          });

    map.setOptions({styles: styles});

    // var locations = [
    //       {lat: -31.563910, lng: 147.154312},
    //       {lat: -33.718234, lng: 150.363181},
    //       {lat: -33.727111, lng: 150.371124},
    //       {lat: -33.848588, lng: 151.209834},
    //       {lat: -33.851702, lng: 151.216968},
    //       {lat: -34.671264, lng: 150.863657},
    //       {lat: -35.304724, lng: 148.662905},
    //       {lat: -36.817685, lng: 175.699196},
    //       {lat: -36.828611, lng: 175.790222},
    //       {lat: -37.750000, lng: 145.116667},
    //       {lat: -37.759859, lng: 145.128708},
    //       {lat: -37.765015, lng: 145.133858},
    //       {lat: -37.770104, lng: 145.143299},
    //       {lat: -37.773700, lng: 145.145187},
    //       {lat: -37.774785, lng: 145.137978},
    //       {lat: -37.819616, lng: 144.968119},
    //       {lat: -38.330766, lng: 144.695692},
    //       {lat: -39.927193, lng: 175.053218},
    //       {lat: -41.330162, lng: 174.865694},
    //       {lat: -42.734358, lng: 147.439506},
    //       {lat: -42.734358, lng: 147.501315},
    //       {lat: -42.735258, lng: 147.438000},
    //       {lat: -43.999792, lng: 170.463352}
    //     ]


    // var markers = locations.map(function(location, i) {
    //       return new google.maps.Marker({
    //         position: location,
    //         label: labels[i % labels.length]
    //       });
    //     });
    //
    // var markerCluster = new MarkerClusterer(map, markers,
    //             {imagePath: 'file:///Users/doech03/Desktop/DEV%20MKTG/SoftwareFactoryMap/markers/m1.png'});



    // var gradientCABlue = [
    // 'rgba(0, 255, 255, 0)',
    // 'rgba(0, 255, 255, 1)',
    // 'rgba(0, 191, 255, 1)',
    // 'rgba(0, 127, 255, 1)',
    // 'rgba(0, 63, 255, 1)',
    // 'rgba(0, 0, 255, 1)',
    // 'rgba(0, 0, 223, 1)',
    // 'rgba(0, 0, 191, 1)',
    // 'rgba(0, 0, 159, 1)',
    // 'rgba(0, 0, 127, 1)',
    // 'rgba(63, 0, 91, 1)',
    // 'rgba(127, 0, 63, 1)',
    // 'rgba(191, 0, 31, 1)',
    // 'rgba(255, 0, 0, 1)'
    // ];

  //   var heatmap = new google.maps.visualization.HeatmapLayer({
  //     data: cadevData,
  //     gradient: gradientCABlue,
  //     radius: 20,
  //   });
  //   // heatmap.setMap(map);
  //   heatmap.setMap(null);
  //
  // function toggleHeatmap() {
  // heatmap.setMap(heatmap.getMap() ? null : map);
  // }


//-------- AGILE LIST --------------

// AMEX
var amex = {lat:33.6584628,lng:-111.9628393};
var marker = new google.maps.Marker({
          position: amex,
          map: map,
        });

// __________________BUILD FASTER APPS____________________

var westpac = {lat:-33.8660344,lng:151.2016745};
//
var marker = new google.maps.Marker({
          position: westpac,
          map: map,
        });

var liberty = {lat:52.2775552,lng:4.7469156};
//
var marker = new google.maps.Marker({
          position: liberty,
          map: map,
        });


var experian = {lat:33.084906,lng:-96.6833492};
//
var marker = new google.maps.Marker({
          position: experian,
          map: map,
        });

var firstdata = {lat:33.9055143,lng:-84.362277};
        //
var marker = new google.maps.Marker({
          position: firstdata,
          map: map,
        });

var ford = {lat:42.3174407,lng:-83.2116834};
                        //
var marker = new google.maps.Marker({
      position: ford,
        map: map,
      });

var westernunion = {lat:39.5466043,lng:-104.8467667};
                        //
var marker = new google.maps.Marker({
      position: westernunion,
        map: map,
      });




// ------------------SECURE ACCESS----------------------

// >>>>>
var bnp = {lat:48.8717555,lng:2.335482};
var marker = new google.maps.Marker({position: bnp, map: map,});
// >>>>>
// >>>>>
var evry = {lat:59.8997876,lng:10.6255937};
var marker = new google.maps.Marker({position: evry, map: map,});
// >>>>>
// >>>>>
var iccrea = {lat:41.8317007,lng:12.5767312};
var marker = new google.maps.Marker({position: iccrea, map: map,});
// >>>>>
// >>>>>
var ministro = {lat:41.8997054,lng:12.4925701};
var marker = new google.maps.Marker({position: ministro, map: map,});
// >>>>>// >>>>>
var telefonica = {lat:40.4200003,lng:-3.7040966};
var marker = new google.maps.Marker({position: telefonica, map: map,});
// >>>>>// >>>>>
var cox = {lat:33.9234972,lng:-84.3520734};
var marker = new google.maps.Marker({position: cox, map: map,});
// >>>>>// >>>>>
var fedex = {lat:35.0397384,lng:-89.9920365};
var marker = new google.maps.Marker({position: fedex, map: map,});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: firstdata, map: map,});
// >>>>>
// >>>>>
var hms = {lat:32.8885184,lng:-96.974342};
var marker = new google.maps.Marker({position: hms, map: map,});
// >>>>>
// >>>>>
var lexmark = {lat:38.072593,lng:-84.4933229};
var marker = new google.maps.Marker({position: lexmark, map: map,});
// >>>>>
// >>>>>
var mellon = {lat:40.7071309,lng:-74.0140018};
var marker = new google.maps.Marker({position: mellon, map: map,});
// >>>>>
// >>>>>
var disney = {lat:34.1568141,lng:-118.3272834};
var marker = new google.maps.Marker({position: disney, map: map,});
// >>>>>
// >>>>>
var trans = {lat:41.879033,lng:-87.6437433};
var marker = new google.maps.Marker({position: trans, map: map,});
// >>>>>
// >>>>>
var travelport = {lat:33.8862634,lng:-84.4645877};
var marker = new google.maps.Marker({position: travelport, map: map,});
// >>>>>// >>>>>
var unionbank = {lat:37.7932972,lng:-122.4039367};
var marker = new google.maps.Marker({position: unionbank, map: map,});
// >>>>>
var west = {lat:41.2686779,lng:-96.0999749};
var marker = new google.maps.Marker({position:west, map:map,});
// >>>>>

// ------------------DIGITAL BUSINESS MODEL----------------------

// >>>>>
var banca = {lat:40.842847,lng:14.2468525};
var marker = new google.maps.Marker({position: banca, map: map,});
// >>>>>
// >>>>>
var bnp = {lat:48.8717555,lng:2.335482};
var marker = new google.maps.Marker({position: bnp, map: map,});
// >>>>>
// >>>>>
var pbce = {lat:48.8195422,lng:2.4601244};
var marker = new google.maps.Marker({position: pbce, map: map,});
// >>>>>
// >>>>>
var orange = {lat:48.8364311,lng:2.3042558};
var marker = new google.maps.Marker({position: orange, map: map,});
// >>>>>
// >>>>>
var scotland = {lat:55.9347583,lng:-3.336824};
var marker = new google.maps.Marker({position: scotland, map: map,});
// >>>>>
// >>>>>
var aig = {lat:40.7052639,lng:-74.0077088};
var marker = new google.maps.Marker({position: aig, map: map,});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: amex, map: map,});
// >>>>>
// >>>>>
var broadridge = {lat:40.7551912,lng:-73.6974465};
var marker = new google.maps.Marker({position: broadridge, map: map,});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: cox, map: map,});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: experian, map: map,});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: firstdata, map: map,});
// >>>>>
// >>>>>
var gm = {lat:42.3288351,lng:-83.0411523};
var marker = new google.maps.Marker({position: gm, map: map,});
// >>>>>
// >>>>>
var verizon = {lat:40.7777947,lng:-74.0449733};
var marker = new google.maps.Marker({position: verizon, map: map,});
// >>>>>
