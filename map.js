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
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
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
var markeramex = new google.maps.Marker({position: amex, map: map,icon:'dashboard.png'});
var amexinfo = new google.maps.InfoWindow({content: 'AMEX'});
markeramex.addListener('click', function() {amexinfo.open(map, markeramex);});

// >>>>>
var amgen = {lat:34.1921405,lng:-118.9216709};
var markeramgen = new google.maps.Marker({position: amgen, map: map,icon: "dashboard.png",});
var amgeninfo = new google.maps.InfoWindow({content: 'AMGEN'});
markeramgen.addListener('click', function() {amgeninfo.open(map, markeramgen);});
// >>>>>
// >>>>>
var boa = {lat:35.2275026,lng:-80.8441752};
var boamarker = new google.maps.Marker({position: boa, map: map,icon: "dashboard.png"});
var boainfo = new google.maps.InfoWindow({content: 'BOA'});
boamarker.addListener('click', function() {boainfo.open(map, boamarker);});
// >>>>>
// >>>>>
var barclays = {lat:51.5102261,lng:-0.136686};
var barclaysmarker = new google.maps.Marker({position: barclays, map: map,icon: "dashboard.png"});
var barclaysinfo = new google.maps.InfoWindow({content: 'Barclays'});
barclaysmarker.addListener('click', function() {barclaysinfo.open(map, barclaysmarker);});// >>>>>

// >>>>>
var bbt = {lat:35.7162819,lng:-77.9506506};
var bbtmarker = new google.maps.Marker({position: bbt, map: map,icon: "dashboard.png"});
var bbtinfo = new google.maps.InfoWindow({content: 'BB&T'});
bbtmarker.addListener('click', function() {bbtinfo.open(map, bbtmarker);});

// >>>>>

// >>>>>
var caixa = {lat:41.3876788,lng:2.1243538};
var caixamarker = new google.maps.Marker({position: caixa, map: map,icon: "dashboard.png"});
var caixainfo = new google.maps.InfoWindow({content: 'CAIXA'});
caixamarker.addListener('click', function() {caixainfo.open(map, caixamarker);});// >>>>>

// >>>>>
var cambia = {lat:45.5116013,lng:-122.6808454};
var cambiamarker = new google.maps.Marker({position: cambia, map: map,icon: "dashboard.png"});
var cambiainfo = new google.maps.InfoWindow({content: 'Cambia'});
cambiamarker.addListener('click', function() {cambiainfo.open(map, cambiamarker);});// >>>>>

// >>>>>
var blue = {lat:39.1691361,lng:-76.849864};
var bluemarker = new google.maps.Marker({position: blue, map: map,icon: "dashboard.png"});
var blueinfo = new google.maps.InfoWindow({content: 'Blue Cross'});
bluemarker.addListener('click', function() {blueinfo.open(map, bluemarker);});// >>>>>

// >>>>>
var centrica = {lat:51.485636,lng:-0.6417451};
var centricamarker = new google.maps.Marker({position: centrica, map: map,icon: "dashboard.png"});
var centricainfo = new google.maps.InfoWindow({content: 'Centrica'});
centricamarker.addListener('click', function() {centricainfo.open(map, centricamarker);});// >>>>>

// >>>>>
var century = {lat:39.5718128,lng:-104.9998954};
var centurymarker = new google.maps.Marker({position: century, map: map,icon: "dashboard.png"});
var centuryinfo = new google.maps.InfoWindow({content: 'Century Link'});
centurymarker.addListener('click', function() {centuryinfo.open(map, centurymarker);});// >>>>>

// >>>>>
var cigna = {lat:41.8128902,lng:-72.7491042};
var cignamarker = new google.maps.Marker({position: cigna, map: map,icon: "dashboard.png"});
var cignainfo = new google.maps.InfoWindow({content: 'Cigna'});
cignamarker.addListener('click', function() {cignainfo.open(map, cignamarker);});// >>>>>

// >>>>>
var comcast = {lat:39.9545258,lng:-75.1707527};
var comcastmarker = new google.maps.Marker({position: comcast, map: map,icon: "dashboard.png"});
var comcastinfo = new google.maps.InfoWindow({content: 'Comcast'});
comcastmarker.addListener('click', function() {comcastinfo.open(map, comcastmarker);});// >>>>>

// >>>>>
var common = {lat:-33.8660344,lng:151.2016745};
var commonmarker = new google.maps.Marker({position: common, map: map,icon: "dashboard.png"});
var commoninfo = new google.maps.InfoWindow({content: 'Common'});
commonmarker.addListener('click', function() {commoninfo.open(map, commonmarker);});// >>>>>
//
// >>>>>
var marker = new google.maps.Marker({position: cox, map: map,icon: "dashboard.png"});
// >>>>>
//
// >>>>>
var credicorp = {lat:-12.0697018,lng:-76.9386145};
var credicorpmarker = new google.maps.Marker({position: credicorp, map: map,icon: "dashboard.png"});
var credicorpinfo = new google.maps.InfoWindow({content: 'Credicorp'});
credicorpmarker.addListener('click', function() {credicorpinfo.open(map, credicorpmarker);});// >>>>>

// >>>>>
var dbs = {lat:1.278238,lng:103.8492692};
var dbsmarker = new google.maps.Marker({position: dbs, map: map,icon: "dashboard.png"});
var dbsinfo = new google.maps.InfoWindow({content: 'DBS'});
dbsmarker.addListener('click', function() {dbsinfo.open(map, dbsmarker);});// >>>>>

// >>>>>
var deere = {lat:41.4768354,lng:-90.4265615};
var deeremarker = new google.maps.Marker({position: deere, map: map,icon: "dashboard.png"});
var deereinfo = new google.maps.InfoWindow({content: 'John Deere'});
deeremarker.addListener('click', function() {deereinfo.open(map, deeremarker);});// >>>>>
//
// >>>>>
var dod = {lat:-35.2796122,lng:149.1311545};
var dodmarker = new google.maps.Marker({position: dod, map: map,icon: "dashboard.png"});
var dodinfo = new google.maps.InfoWindow({content: 'D.O.D. of AUS'});
dodmarker.addListener('click', function() {dodinfo.open(map, dodmarker);});// >>>>>

// >>>>>
var discover = {lat:42.1567664,lng:-87.8922984};
var discovermarker = new google.maps.Marker({position: discover, map: map,icon: "dashboard.png"});
var discoverinfo = new google.maps.InfoWindow({content: 'Discover Card'});
discovermarker.addListener('click', function() {discoverinfo.open(map, discovermarker);});// >>>>>

// >>>>
var emc = {lat:42.1942139,lng:-71.5469642};
var emcmarker = new google.maps.Marker({position: emc, map: map,icon: "dashboard.png"});
var emcinfo = new google.maps.InfoWindow({content: 'EMC-Dell'});
emcmarker.addListener('click', function() {emcinfo.open(map, emcmarker);});// >>>>>

// >>>>>
var emerson = {lat:38.7301502,lng:-90.2800146};
var emersonmarker = new google.maps.Marker({position: emerson, map: map,icon: "dashboard.png"});
var emersoninfo = new google.maps.InfoWindow({content: 'Emerson'});
emersonmarker.addListener('click', function() {emersoninfo.open(map, emersonmarker);});// >>>>>
//
// >>>>>
var empresas = {lat:-33.439834,lng:-70.6549371};
var empresasmarker = new google.maps.Marker({position: empresas, map: map,icon: "dashboard.png"});
var empresasinfo = new google.maps.InfoWindow({content: 'Empresas'});
empresasmarker.addListener('click', function() {empresasinfo.open(map, empresasmarker);});// >>>>>

// >>>>>
var erie = {lat:42.1306046,lng:-80.0860351};
var eriemarker = new google.maps.Marker({position: erie, map: map,icon: "dashboard.png"});
var erieinfo = new google.maps.InfoWindow({content: 'Erie'});
eriemarker.addListener('click', function() {erieinfo.open(map, eriemarker);});// >>>>>

// >>>>>
var express = {lat:38.7187948,lng:-90.3126465};
var expressmarker = new google.maps.Marker({position: express, map: map,icon: "dashboard.png"});
var expressinfo = new google.maps.InfoWindow({content: 'Express Scripts'});
expressmarker.addListener('click', function() {expressinfo.open(map, expressmarker);});// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: firstdata, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var fiserv = {lat:43.0338183,lng:-88.1430455};
var fiservmarker = new google.maps.Marker({position: fiserv, map: map,icon: "dashboard.png"});
var fiservinfo = new google.maps.InfoWindow({content: 'Fiserv'});
fiservmarker.addListener('click', function() {fiservinfo.open(map, fiservmarker);});
// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: ford, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var general = {lat:441.2166958,lng:-73.2557022};
var generalmarker = new google.maps.Marker({position: general, map: map,icon: "dashboard.png"});
var generalinfo = new google.maps.InfoWindow({content: 'General-Motors'});
generalmarker.addListener('click', function() {generalinfo.open(map, generalmarker);});// >>>>>

// >>>>>
var group = {lat:47.6215735,lng:-122.3402902};
var groupmarker = new google.maps.Marker({position: group, map: map,icon: "dashboard.png"});
var groupinfo = new google.maps.InfoWindow({content: 'group'});
groupmarker.addListener('click', function() {groupinfo.open(map, groupmarker);});// >>>>>

// >>>>>
var harland = {lat:29.4805671,lng:-98.5987262};
var harlandmarker = new google.maps.Marker({position: harland, map: map,icon: "dashboard.png"});
var harlandinfo = new google.maps.InfoWindow({content: 'Harland'});
harlandmarker.addListener('click', function() {harlandinfo.open(map, harlandmarker);});// >>>>>

// >>>>>
var hca = {lat:32.8982822,lng:-96.9621333};
var hcamarker = new google.maps.Marker({position: hca, map: map,icon: "dashboard.png"});
var hcainfo = new google.maps.InfoWindow({content: 'HCA'});
hcamarker.addListener('click', function() {hcainfo.open(map, hcamarker);});// >>>>>


// >>>>>
var honeywell = {lat:40.7913,lng:-74.4454687};
var honeywellmarker = new google.maps.Marker({position: honeywell, map: map,icon: "dashboard.png"});
var honeywellinfo = new google.maps.InfoWindow({content: 'Honeywell'});
honeywellmarker.addListener('click', function() {honeywellinfo.open(map, honeywellmarker);});// >>>>>

// >>>>>
var intel = {lat:37.3875909,lng:-121.9659756};
var intelmarker = new google.maps.Marker({position: intel, map: map,icon: "dashboard.png"});
var intelinfo = new google.maps.InfoWindow({content: 'Intel'});
intelmarker.addListener('click', function() {intelinfo.open(map, intelmarker);});// >>>>>

// >>>>>
var igt = {lat:36.0735614,lng:-115.2632042};
var igtmarker = new google.maps.Marker({position: igt, map: map,icon: "dashboard.png"});
var igtinfo = new google.maps.InfoWindow({content: 'IGT'});
igtmarker.addListener('click', function() {igtinfo.open(map, igtmarker);});// >>>>>

// >>>>>
var kmd = {lat:55.7367467,lng:12.3912995};
var kmdmarker = new google.maps.Marker({position: kmd, map: map,icon: "dashboard.png"});
var kmdinfo = new google.maps.InfoWindow({content: 'KMD'});
kmdmarker.addListener('click', function() {kmdinfo.open(map, kmdmarker);});// >>>>>

// >>>>>
var philips = {lat:52.344402,lng:4.9143783};
var philipsmarker = new google.maps.Marker({position: philips, map: map,icon: "dashboard.png"});
var philipsinfo = new google.maps.InfoWindow({content: 'Philips'});
philipsmarker.addListener('click', function() {philipsinfo.open(map, philipsmarker);});// >>>>>

// >>>>>
var libertyglobal = {lat:52.2775519,lng:4.7469209};
var libertyglobalmarker = new google.maps.Marker({position: libertyglobal, map: map,icon: "dashboard.png"});
var libertyglobalinfo = new google.maps.InfoWindow({content: 'Liberty Global'});
libertyglobalmarker.addListener('click', function() {libertyglobalinfo.open(map, libertyglobalmarker);});// >>>>>
//
//
// >>>>>
var mckesson = {lat:37.7888404,lng:-122.4049042};
var mckessonmarker = new google.maps.Marker({position: mckesson, map: map,icon: "dashboard.png"});
var mckessoninfo = new google.maps.InfoWindow({content: 'Mckesson'});
mckessonmarker.addListener('click', function() {mckessoninfo.open(map, mckessonmarker);});// >>>>>

// >>>>>
var mgm = {lat:36.1140649,lng:-115.1751743};
var mgmmarker = new google.maps.Marker({position: mgm, map: map,icon: "dashboard.png"});
var mgminfo = new google.maps.InfoWindow({content: 'MGM'});
mgmmarker.addListener('click', function() {mgminfo.open(map, mgmmarker);});// >>>>>

// >>>>>
var morgan = {lat:40.760386,lng:-73.9878667};
var morganmarker = new google.maps.Marker({position: morgan, map: map,icon: "dashboard.png"});
var morganinfo = new google.maps.InfoWindow({content: 'Morgan Stanley'});
morganmarker.addListener('click', function() {morganinfo.open(map, morganmarker);});// >>>>>

// >>>>>
var mutual = {lat:41.2413542,lng:-96.0659568};
var mutualmarker = new google.maps.Marker({position: mutual, map: map,icon: "dashboard.png"});
var mutualinfo = new google.maps.InfoWindow({content: 'Mutual of Omaha'});
mutualmarker.addListener('click', function() {mutualinfo.open(map, mutualmarker);});// >>>>>

// >>>>>
var nybank = {lat:40.7388484,lng:-73.5867626};
var nybankmarker = new google.maps.Marker({position: nybank, map: map,icon: "dashboard.png"});
var nybankinfo = new google.maps.InfoWindow({content: 'NYBank'});
nybankmarker.addListener('click', function() {nybankinfo.open(map, nybankmarker);});// >>>>>

// >>>>>
var nylife = {lat:40.7430573,lng:-73.9883587};
var nylifemarker = new google.maps.Marker({position: nylife, map: map,icon: "dashboard.png"});
var nylifeinfo = new google.maps.InfoWindow({content: 'NYLife'});
nylifemarker.addListener('click', function() {nylifeinfo.open(map, nylifemarker);});// >>>>>

// >>>>>
var nordea = {lat:59.3335202,lng:18.0685562};
var nordeamarker = new google.maps.Marker({position: nordea, map: map,icon: "dashboard.png"});
var nordeainfo = new google.maps.InfoWindow({content: 'Nordea'});
nordeamarker.addListener('click', function() {nordeainfo.open(map, nordeamarker);});// >>>>>

// >>>>>
var oiii = {lat:-22.9409133,lng:-43.1815708};
var oiiimarker = new google.maps.Marker({position: oiii, map: map,icon: "dashboard.png"});
var oiiiinfo = new google.maps.InfoWindow({content: 'OI'});
oiiimarker.addListener('click', function() {oiiiinfo.open(map, oiiimarker);});// >>>>>
//
// >>>>>
var sprint = {lat:38.9156506,lng:-94.660869};
var sprintmarker = new google.maps.Marker({position: sprint, map: map,icon: "dashboard.png"});
var sprintinfo = new google.maps.InfoWindow({content: 'Sprint'});
sprintmarker.addListener('click', function() {sprintinfo.open(map, sprintmarker);});// >>>>>

// >>>>>
var state = {lat:42.3527656,lng:-71.0608139};
var statemarker = new google.maps.Marker({position: state, map: map,icon: "dashboard.png"});
var stateinfo = new google.maps.InfoWindow({content: 'State Street'});
statemarker.addListener('click', function() {stateinfo.open(map, statemarker);});// >>>>>

// >>>>>
var ing = {lat:52.3142923,lng:4.9505077};
var ingmarker = new google.maps.Marker({position: ing, map: map,icon: "dashboard.png"});
var inginfo = new google.maps.InfoWindow({content: 'ING'});
ingmarker.addListener('click', function() {inginfo.open(map, ingmarker);});// >>>>>

// >>>>>
var ingka = {lat:56.5323206,lng:14.0987238};
var ingkamarker = new google.maps.Marker({position: ingka, map: map,icon: "dashboard.png"});
var ingkainfo = new google.maps.InfoWindow({content: 'Ingka'});
ingkamarker.addListener('click', function() {ingkainfo.open(map, ingkamarker);});// >>>>>

// >>>>>
var target = {lat:44.9739966,lng:-93.2778496};
var targetmarker = new google.maps.Marker({position: target, map: map,icon: "dashboard.png"});
var targetinfo = new google.maps.InfoWindow({content: 'Target'});
targetmarker.addListener('click', function() {targetinfo.open(map, targetmarker);});// >>>>>

// >>>>>
var ericcson = {lat:33.0753257,lng:-96.8347344};
var ericcsonmarker = new google.maps.Marker({position: ericcson, map: map,icon: "dashboard.png"});
var ericcsoninfo = new google.maps.InfoWindow({content: 'Ericcson'});
ericcsonmarker.addListener('click', function() {ericcsoninfo.open(map, ericcsonmarker);});// >>>>>


// >>>>>
var telestra = {lat:-37.8095001,lng:144.9675156};
var telestramarker = new google.maps.Marker({position: telestra, map: map,icon: "dashboard.png"});
var telestrainfo = new google.maps.InfoWindow({content: 'Telestra'});
telestramarker.addListener('click', function() {telestrainfo.open(map, telestramarker);});// >>>>>

// >>>>>
var kaiser = {lat:37.807932,lng:-122.269273};
var kaisermarker = new google.maps.Marker({position: kaiser, map: map,icon: "dashboard.png"});
var kaiserinfo = new google.maps.InfoWindow({content: 'Kaiser'});
kaisermarker.addListener('click', function() {kaiserinfo.open(map, kaisermarker);});// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: westernunion, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var thompson = {lat:40.756392,lng:-73.9889717};
var thompsonmarker = new google.maps.Marker({position: thompson, map: map,icon: "dashboard.png"});
var thompsoninfo = new google.maps.InfoWindow({content: 'Thompson Reuters'});
thompsonmarker.addListener('click', function() {thompsoninfo.open(map, thompsonmarker);});// >>>>>


// >>>>>
var timewarner = {lat:38.9554034,lng:-77.4280096};
var timewarnermarker = new google.maps.Marker({position: timewarner, map: map,icon: "dashboard.png"});
var timewarnerinfo = new google.maps.InfoWindow({content: 'Time Warner'});
timewarnermarker.addListener('click', function() {timewarnerinfo.open(map, timewarnermarker);});// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: trans, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: unionbank, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var united = {lat:43.6515533,lng:-79.384459};
var unitedmarker = new google.maps.Marker({position: united, map: map,icon: "dashboard.png"});
var unitedinfo = new google.maps.InfoWindow({content: 'United'});
unitedmarker.addListener('click', function() {unitedinfo.open(map, unitedmarker);});// >>>>>

// >>>>>
var unum = {lat:35.0504844,lng:-85.309063};
var unummarker = new google.maps.Marker({position: unum, map: map,icon: "dashboard.png"});
var unuminfo = new google.maps.InfoWindow({content: 'Unum'});
unummarker.addListener('click', function() {unuminfo.open(map, unummarker);});// >>>>>

// >>>>>
var visa = {lat:37.5592521,lng:-122.2785536};
var visamarker = new google.maps.Marker({position: visa, map: map,icon: "dashboard.png"});
var visainfo = new google.maps.InfoWindow({content: 'Visa'});
visamarker.addListener('click', function() {visainfo.open(map, visamarker);});// >>>>>

// >>>>>
var walmart = {lat:36.3655837,lng:-94.2203385};
var walmartmarker = new google.maps.Marker({position: walmart, map: map,icon: "dashboard.png"});
var walmartinfo = new google.maps.InfoWindow({content: 'Wal-mart'});
walmartmarker.addListener('click', function() {walmartinfo.open(map, walmartmarker);});// >>>>>

// >>>>>
// >>>>>

var marker = new google.maps.Marker({position: westpac, map: map,icon: "dashboard.png"});

var wells = {lat:37.7933766,lng:-122.4048088};
var wellsmarker = new google.maps.Marker({position: wells, map: map,icon: "dashboard.png"});
var wellsinfo = new google.maps.InfoWindow({content: 'Wells-Fargo'});
wellsmarker.addListener('click', function() {wellsinfo.open(map, wellsmarker);});


// // __________________BUILD FASTER APPS____________________
//
// var westpac = {lat:-33.8660344,lng:151.2016745};
// var westpacmarker = new google.maps.Marker({position: westpac, map: map,icon: "device-mobile.png"});
// var westpacinfo = new google.maps.InfoWindow({content: 'westpac'});
// westpacmarker.addListener('click', function() {westpacinfo.open(map, westpacmarker);});
//
//
//
// var liberty = {lat:52.2775552,lng:4.7469156};
// var libertymarker = new google.maps.Marker({position: liberty, map: map,icon: "device-mobile.png"});
// var libertyinfo = new google.maps.InfoWindow({content: 'Liberty'});
// libertymarker.addListener('click', function() {libertyinfo.open(map, libertymarker);});
//
//
//
// var experian = {lat:33.084906,lng:-96.6833492};
// var experianmarker = new google.maps.Marker({position: experian, map: map,icon: "device-mobile.png"});
// var experianinfo = new google.maps.InfoWindow({content: 'Experian'});
// experianmarker.addListener('click', function() {experianinfo.open(map, experianmarker);});
//
// var firstdata = {lat:33.9055143,lng:-84.362277};
// var firstdatamarker = new google.maps.Marker({position: firstdata, map: map,icon: "device-mobile.png"});
// var firstdatainfo = new google.maps.InfoWindow({content: 'Firstdata'});
// firstdatamarker.addListener('click', function() {firstdatainfo.open(map, firstdatamarker);});
//
// var ford = {lat:42.3174407,lng:-83.2116834};
//                         //
// var fordmarker = new google.maps.Marker({position: ford, map: map,icon: "device-mobile.png"});
// var fordinfo = new google.maps.InfoWindow({content: 'Ford'});
// fordmarker.addListener('click', function() {fordinfo.open(map, fordmarker);});
//
// var westernunion = {lat:39.5466043,lng:-104.8467667};
//                         //
// var westernunionmarker = new google.maps.Marker({position: westernunion, map: map,icon: "device-mobile.png"});
// var westernunioninfo = new google.maps.InfoWindow({content: 'Western Union'});
// westernunionmarker.addListener('click', function() {westernunioninfo.open(map, westernunionmarker);});
//
//
// // ------------------SECURE ACCESS----------------------
//
// // >>>>>
// var bnp = {lat:48.8717555,lng:2.335482};
// var bnpmarker = new google.maps.Marker({position: bnp, map: map,icon: "lock.png"});
// var bnpinfo = new google.maps.InfoWindow({content: 'BNP Paribas'});
// bnpmarker.addListener('click', function() {bnpinfo.open(map, bnpmarker);});
// // >>>>>
// // >>>>>
// var evry = {lat:59.8997876,lng:10.6255937};
// var evrymarker = new google.maps.Marker({position: evry, map: map,icon: "lock.png"});
// var evryinfo = new google.maps.InfoWindow({content: 'Evry'});
// evrymarker.addListener('click', function() {evryinfo.open(map, evrymarker);});// >>>>>
// // >>>>>
// var iccrea = {lat:41.8317007,lng:12.5767312};
// var iccreamarker = new google.maps.Marker({position: iccrea, map: map,icon: "lock.png"});
// var iccreainfo = new google.maps.InfoWindow({content: 'Iccrea'});
// iccreamarker.addListener('click', function() {iccreainfo.open(map, iccreamarker);});// >>>>>
// // >>>>>
// var ministro = {lat:41.8997054,lng:12.4925701};
// var ministromarker = new google.maps.Marker({position: ministro, map: map,icon: "lock.png"});
// var ministroinfo = new google.maps.InfoWindow({content: 'Ministro ITL'});
// ministromarker.addListener('click', function() {ministroinfo.open(map, ministromarker);});
// // >>>>>
// // >>>>>
// var telefonica = {lat:40.4200003,lng:-3.7040966};
// var telefonicamarker = new google.maps.Marker({position: telefonica, map: map,icon: "lock.png"});
// var telefonicainfo = new google.maps.InfoWindow({content: 'Telefonica'});
// telefonicamarker.addListener('click', function() {telefonicainfo.open(map, telefonicamarker);});// >>>>>
// // >>>>>
// var cox = {lat:33.9234972,lng:-84.3520734};
// var coxmarker = new google.maps.Marker({position: cox, map: map,icon: "lock.png"});
// var coxinfo = new google.maps.InfoWindow({content: 'Cox'});
// coxmarker.addListener('click', function() {coxinfo.open(map, coxmarker);});
// // >>>>>
// // >>>>>
// var fedex = {lat:35.0397384,lng:-89.9920365};
// var fedexmarker = new google.maps.Marker({position: fedex, map: map,icon: "lock.png"});
// var fedexinfo = new google.maps.InfoWindow({content: 'Fedex'});
// fedexmarker.addListener('click', function() {fedexinfo.open(map, fedexmarker);});
// // >>>>>
// // >>>>>
// var marker = new google.maps.Marker({position: firstdata, map: map, icon: 'lock.png'});
// // >>>>>
// // >>>>>
// var hms = {lat:32.8885184,lng:-96.974342};
// var hmsmarker = new google.maps.Marker({position: hms, map: map,icon: "lock.png"});
// var hmsinfo = new google.maps.InfoWindow({content: 'HMS'});
// hmsmarker.addListener('click', function() {hmsinfo.open(map, hmsmarker);});
// // >>>>>
// // >>>>>
// var lexmark = {lat:38.072593,lng:-84.4933229};
// var lexmarkmarker = new google.maps.Marker({position: lexmark, map: map,icon: "lock.png"});
// var lexmarkinfo = new google.maps.InfoWindow({content: 'Lexmark'});
// lexmarkmarker.addListener('click', function() {lexmarkinfo.open(map, lexmarkmarker);});
// // >>>>>
// // >>>>>
// var mellon = {lat:40.7071309,lng:-74.0140018};
// var mellonmarker = new google.maps.Marker({position: mellon, map: map,icon: "lock.png"});
// var melloninfo = new google.maps.InfoWindow({content: 'Mellon'});
// mellonmarker.addListener('click', function() {melloninfo.open(map, mellonmarker);});
// // >>>>>
// // >>>>>
// var disney = {lat:34.1568141,lng:-118.3272834};
// var disneymarker = new google.maps.Marker({position: disney, map: map,icon: "lock.png"});
// var disneyinfo = new google.maps.InfoWindow({content: 'Disney'});
// disneymarker.addListener('click', function() {disneyinfo.open(map, disneymarker);});
// // >>>>>
// // >>>>>
// var trans = {lat:41.879033,lng:-87.6437433};
// var transmarker = new google.maps.Marker({position: trans, map: map,icon: "lock.png"});
// var transinfo = new google.maps.InfoWindow({content: 'TransUnion'});
// transmarker.addListener('click', function() {transinfo.open(map, transmarker);});
// // >>>>>
// // >>>>>
// var travelport = {lat:33.8862634,lng:-84.4645877};
// var travelportmarker = new google.maps.Marker({position: travelport, map: map,icon: "lock.png"});
// var travelportinfo = new google.maps.InfoWindow({content: 'Travelport'});
// travelportmarker.addListener('click', function() {travelportinfo.open(map, travelportmarker);});
// // >>>>>
// // >>>>>
// var unionbank = {lat:37.7932972,lng:-122.4039367};
// var unionbankmarker = new google.maps.Marker({position: unionbank, map: map,icon: "lock.png"});
// var unionbankinfo = new google.maps.InfoWindow({content: 'Union Bank'});
// unionbankmarker.addListener('click', function() {unionbankinfo.open(map, unionbankmarker);});
// // >>>>>
// var west = {lat:41.2686779,lng:-96.0999749};
// var westmarker = new google.maps.Marker({position: west, map: map,icon: "lock.png"});
// var westinfo = new google.maps.InfoWindow({content: 'West Bank'});
// westmarker.addListener('click', function() {westinfo.open(map, westmarker);});// >>>>>
//
// // ------------------DIGITAL BUSINESS MODEL----------------------
//
// // >>>>>
// var banca = {lat:40.842847,lng:14.2468525};
// var bancamarker = new google.maps.Marker({position: banca, map: map,icon: "repo-forked.png"});
// var bancainfo = new google.maps.InfoWindow({content: 'Banca'});
// bancamarker.addListener('click', function() {bancainfo.open(map, bancamarker);});
// // >>>>>
// // >>>>>
// var bnp = {lat:48.8717555,lng:2.335482};
// var bnpmarker = new google.maps.Marker({position: bnp, map: map,icon: "repo-forked.png"});
// var bnpinfo = new google.maps.InfoWindow({content: 'BNP'});
// bnpmarker.addListener('click', function() {bnpinfo.open(map, bnpmarker);});
// // >>>>>
// // >>>>>
// var pbce = {lat:48.8195422,lng:2.4601244};
// var pbcemarker = new google.maps.Marker({position: pbce, map: map,icon: "repo-forked.png"});
// var pbceinfo = new google.maps.InfoWindow({content: 'PBCE'});
// pbcemarker.addListener('click', function() {pbceinfo.open(map, pbcemarker);});
// // >>>>>
// // >>>>>
// var orange = {lat:48.8364311,lng:2.3042558};
// var orangemarker = new google.maps.Marker({position: orange, map: map,icon: "repo-forked.png"});
// var orangeinfo = new google.maps.InfoWindow({content: 'Orange'});
// orangemarker.addListener('click', function() {orangeinfo.open(map, orangemarker);});
// // >>>>>
// // >>>>>
// var scotland = {lat:55.9347583,lng:-3.336824};
// var scotlandmarker = new google.maps.Marker({position: scotland, map: map,icon: "repo-forked.png"});
// var scotlandinfo = new google.maps.InfoWindow({content: 'Scotland'});
// scotlandmarker.addListener('click', function() {scotlandinfo.open(map, scotlandmarker);});
// // >>>>>
// // >>>>>
// var aig = {lat:40.7052639,lng:-74.0077088};
// var aigmarker = new google.maps.Marker({position: aig, map: map,icon: "repo-forked.png"});
// var aiginfo = new google.maps.InfoWindow({content: 'AIG'});
// aigmarker.addListener('click', function() {aiginfo.open(map, aigmarker);});
// // >>>>>
// // >>>>>
// var marker = new google.maps.Marker({position: markeramex, map: map,icon:'repo-forked.png'});
// // >>>>>
// // >>>>>
// var broadridge = {lat:40.7551912,lng:-73.6974465};
// var broadridgemarker = new google.maps.Marker({position: broadridge, map: map,icon: "repo-forked.png"});
// var broadridgeinfo = new google.maps.InfoWindow({content: 'Broad Ridge'});
// broadridgemarker.addListener('click', function() {broadridgeinfo.open(map, broadridgemarker);});// >>>>>
// // >>>>>
// var marker = new google.maps.Marker({position: cox, map: map,icon:'repo-forked.png'});
// // >>>>>
// // >>>>>
// var marker = new google.maps.Marker({position: experian, map: map,icon:'repo-forked.png'});
// // >>>>>
// // >>>>>
// var marker = new google.maps.Marker({position: firstdata, map: map,icon:'repo-forked.png'});
// // >>>>>
// // >>>>>
// var gm = {lat:42.3288351,lng:-83.0411523};
// var gmmarker = new google.maps.Marker({position: gm, map: map,icon: "repo-forked.png"});
// var gminfo = new google.maps.InfoWindow({content: 'GM'});
// gmmarker.addListener('click', function() {gminfo.open(map, gmmarker);});// >>>>>
// // >>>>>
// var verizon = {lat:40.7777947,lng:-74.0449733};
// var verizonmarker = new google.maps.Marker({position: verizon, map: map,icon: "repo-forked.png"});
// var verizoninfo = new google.maps.InfoWindow({content: 'Verizon'});
// verizonmarker.addListener('click', function() {verizoninfo.open(map, verizonmarker);});// >>>>>
