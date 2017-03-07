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
      zoom: 3,
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
// >>>>>
// >>>>>
var boa = {lat:35.2275026,lng:-80.8441752};
var marker = new google.maps.Marker({position: boa, map: map,icon: "dashboard.png"});
// >>>>>
// >>>>>
var barclays = {lat:51.5102261,lng:-0.136686};
var marker = new google.maps.Marker({position: barclays, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var bbt = {lat:35.7162819,lng:-77.9506506};
var marker = new google.maps.Marker({position: bbt, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var caixa = {lat:41.3876788,lng:2.1243538};
var marker = new google.maps.Marker({position: caixa, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var cambia = {lat:45.5116013,lng:-122.6808454};
var marker = new google.maps.Marker({position: cambia, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var blue = {lat:39.1691361,lng:-76.849864};
var marker = new google.maps.Marker({position: blue, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var centrica = {lat:51.485636,lng:-0.6417451};
var marker = new google.maps.Marker({position: centrica, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var century = {lat:39.5718128,lng:-104.9998954};
var marker = new google.maps.Marker({position: century, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var cigna = {lat:41.8128902,lng:-72.7491042};
var marker = new google.maps.Marker({position: cigna, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var comcast = {lat:39.9545258,lng:-75.1707527};
var marker = new google.maps.Marker({position: comcast, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var common = {lat:-33.8660344,lng:151.2016745};
var marker = new google.maps.Marker({position: common, map: map,icon: "dashboard.png"});
// >>>>>
//
// >>>>>
var marker = new google.maps.Marker({position: cox, map: map,icon: "dashboard.png"});
// >>>>>
//
// >>>>>
var credicorp = {lat:-12.0697018,lng:-76.9386145};
var marker = new google.maps.Marker({position: credicorp, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var dbs = {lat:1.278238,lng:103.8492692};
var marker = new google.maps.Marker({position: dbs, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var deere = {lat:41.4768354,lng:-90.4265615};
var marker = new google.maps.Marker({position: deere, map: map,icon: "dashboard.png"});
// >>>>>
//
// >>>>>
var dod = {lat:-35.2796122,lng:149.1311545};
var marker = new google.maps.Marker({position: dod, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var discover = {lat:42.1567664,lng:-87.8922984};
var marker = new google.maps.Marker({position: discover, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>
var emc = {lat:42.1942139,lng:-71.5469642};
var marker = new google.maps.Marker({position: emc, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var emerson = {lat:38.7301502,lng:-90.2800146};
var marker = new google.maps.Marker({position: emerson, map: map,icon: "dashboard.png"});
// >>>>>
//
// >>>>>
var empresas = {lat:-33.439834,lng:-70.6549371};
var marker = new google.maps.Marker({position: empresas, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var erie = {lat:42.1306046,lng:-80.0860351};
var marker = new google.maps.Marker({position: erie, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var express = {lat:38.7187948,lng:-90.3126465};
var marker = new google.maps.Marker({position: express, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: firstdata, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var fiserv = {lat:43.0338183,lng:-88.1430455};
var marker = new google.maps.Marker({position: fiserv, map: map,icon: "dashboard.png"});
// >>>>>
//
// >>>>>
var marker = new google.maps.Marker({position: ford, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var general = {lat:441.2166958,lng:-73.2557022};
var marker = new google.maps.Marker({position: general, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var group = {lat:47.6215735,lng:-122.3402902};
var marker = new google.maps.Marker({position: group, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var harland = {lat:29.4805671,lng:-98.5987262};
var marker = new google.maps.Marker({position: harland, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var hca = {lat:32.8982822,lng:-96.9621333};
var marker = new google.maps.Marker({position: hca, map: map,icon: "dashboard.png"});
// >>>>>


// >>>>>
var honeywell = {lat:40.7913,lng:-74.4454687};
var marker = new google.maps.Marker({position: honeywell, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var intel = {lat:37.3875909,lng:-121.9659756};
var marker = new google.maps.Marker({position: intel, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var igt = {lat:36.0735614,lng:-115.2632042};
var marker = new google.maps.Marker({position: igt, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var kmd = {lat:55.7367467,lng:12.3912995};
var marker = new google.maps.Marker({position: kmd, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var philips = {lat:52.344402,lng:4.9143783};
var marker = new google.maps.Marker({position: philips, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var libertyglobal = {lat:52.2775519,lng:4.7469209};
var marker = new google.maps.Marker({position: libertyglobal, map: map,icon: "dashboard.png"});
// >>>>>
//
//
// >>>>>
var mckesson = {lat:37.7888404,lng:-122.4049042};
var marker = new google.maps.Marker({position: mckesson, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var mgm = {lat:36.1140649,lng:-115.1751743};
var marker = new google.maps.Marker({position: mgm, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var morgan = {lat:40.760386,lng:-73.9878667};
var marker = new google.maps.Marker({position: morgan, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var mutual = {lat:41.2413542,lng:-96.0659568};
var marker = new google.maps.Marker({position: mutual, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var nybank = {lat:40.7388484,lng:-73.5867626};
var marker = new google.maps.Marker({position: nybank, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var nylife = {lat:40.7430573,lng:-73.9883587};
var marker = new google.maps.Marker({position: nylife, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var nordea = {lat:59.3335202,lng:18.0685562};
var marker = new google.maps.Marker({position: nordea, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var oiii = {lat:-22.9409133,lng:-43.1815708};
var marker = new google.maps.Marker({position: oiii, map: map,icon: "dashboard.png"});
// >>>>>
//
// >>>>>
var sprint = {lat:38.9156506,lng:-94.660869};
var marker = new google.maps.Marker({position: sprint, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var state = {lat:42.3527656,lng:-71.0608139};
var marker = new google.maps.Marker({position: state, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var ing = {lat:52.3142923,lng:4.9505077};
var marker = new google.maps.Marker({position: ing, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var ingka = {lat:56.5323206,lng:14.0987238};
var marker = new google.maps.Marker({position: ingka, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var target = {lat:44.9739966,lng:-93.2778496};
var marker = new google.maps.Marker({position: target, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var ericcson = {lat:33.0753257,lng:-96.8347344};
var marker = new google.maps.Marker({position: ericcson, map: map,icon: "dashboard.png"});
// >>>>>


// >>>>>
var telestra = {lat:-37.8095001,lng:144.9675156};
var marker = new google.maps.Marker({position: telestra, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var kaiser = {lat:37.807932,lng:-122.269273};
var marker = new google.maps.Marker({position: kaiser, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: westernunion, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var thompson = {lat:40.756392,lng:-73.9889717};
var marker = new google.maps.Marker({position: thompson, map: map,icon: "dashboard.png"});
// >>>>>


// >>>>>
var timewarner = {lat:38.9554034,lng:-77.4280096};
var marker = new google.maps.Marker({position: timewarner, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: trans, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var marker = new google.maps.Marker({position: unionbank, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var united = {lat:43.6515533,lng:-79.384459};
var marker = new google.maps.Marker({position: united, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var unum = {lat:35.0504844,lng:-85.309063};
var marker = new google.maps.Marker({position: unum, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var visa = {lat:37.5592521,lng:-122.2785536};
var marker = new google.maps.Marker({position: visa, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var walmart = {lat:36.3655837,lng:-94.2203385};
var marker = new google.maps.Marker({position: walmart, map: map,icon: "dashboard.png"});
// >>>>>

// >>>>>
var unum = {lat:35.0504844,lng:-85.309063};
var marker = new google.maps.Marker({position: unum, map: map,icon: "dashboard.png"});
// >>>>>

var marker = new google.maps.Marker({position: westpac, map: map,icon: "dashboard.png"});

var wells = {lat:37.7933766,lng:-122.4048088};
var marker = new google.maps.Marker({position: wells, map: map,icon: "dashboard.png"});



// __________________BUILD FASTER APPS____________________

var westpac = {lat:-33.8660344,lng:151.2016745};
//
var marker = new google.maps.Marker({
          position: westpac,
          map: map,
          icon: "device-mobile.png",
        });

var liberty = {lat:52.2775552,lng:4.7469156};
//
var marker = new google.maps.Marker({
          position: liberty,
          map: map,
          icon: "device-mobile.png",
        });


var experian = {lat:33.084906,lng:-96.6833492};
//
var marker = new google.maps.Marker({
          position: experian,
          map: map,
          icon: "device-mobile.png",
        });

var firstdata = {lat:33.9055143,lng:-84.362277};
        //
var marker = new google.maps.Marker({
          position: firstdata,
          map: map,
          icon: "device-mobile.png",
        });

var ford = {lat:42.3174407,lng:-83.2116834};
                        //
var marker = new google.maps.Marker({
      position: ford,
        map: map,
        icon: "device-mobile.png",
      });

var westernunion = {lat:39.5466043,lng:-104.8467667};
                        //
var marker = new google.maps.Marker({
      position: westernunion,
        map: map,
        icon: "device-mobile.png",
      });




// ------------------SECURE ACCESS----------------------

// >>>>>
var bnp = {lat:48.8717555,lng:2.335482};
var marker = new google.maps.Marker({
    position: bnp,
    map: map,
    icon:'lock.png'
    });
// >>>>>
// >>>>>
var evry = {lat:59.8997876,lng:10.6255937};
var marker = new google.maps.Marker({position: evry, map: map, icon: 'lock.png'});
// >>>>>
// >>>>>
var iccrea = {lat:41.8317007,lng:12.5767312};
var marker = new google.maps.Marker({position: iccrea, map: map, icon: 'lock.png'});
// >>>>>
// >>>>>
var ministro = {lat:41.8997054,lng:12.4925701};
var marker = new google.maps.Marker({position: ministro, map: map, icon: 'lock.png'});
// >>>>>// >>>>>
var telefonica = {lat:40.4200003,lng:-3.7040966};
var marker = new google.maps.Marker({position: telefonica, map: map, icon: 'lock.png'});
// >>>>>// >>>>>
var cox = {lat:33.9234972,lng:-84.3520734};
var marker = new google.maps.Marker({position: cox, map: map, icon: 'lock.png'});
// >>>>>// >>>>>
var fedex = {lat:35.0397384,lng:-89.9920365};
var marker = new google.maps.Marker({position: fedex, map: map, icon: 'lock.png'});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: firstdata, map: map, icon: 'lock.png'});
// >>>>>
// >>>>>
var hms = {lat:32.8885184,lng:-96.974342};
var marker = new google.maps.Marker({position: hms, map: map, icon: 'lock.png'});
// >>>>>
// >>>>>
var lexmark = {lat:38.072593,lng:-84.4933229};
var marker = new google.maps.Marker({position: lexmark, map: map, icon: 'lock.png'});
// >>>>>
// >>>>>
var mellon = {lat:40.7071309,lng:-74.0140018};
var marker = new google.maps.Marker({position: mellon, map: map, icon: 'lock.png'});
// >>>>>
// >>>>>
var disney = {lat:34.1568141,lng:-118.3272834};
var marker = new google.maps.Marker({position: disney, map: map,icon: 'lock.png'});
// >>>>>
// >>>>>
var trans = {lat:41.879033,lng:-87.6437433};
var marker = new google.maps.Marker({position: trans, map: map,icon: 'lock.png'});
// >>>>>
// >>>>>
var travelport = {lat:33.8862634,lng:-84.4645877};
var marker = new google.maps.Marker({position: travelport, map: map,icon: 'lock.png'});
// >>>>>// >>>>>
var unionbank = {lat:37.7932972,lng:-122.4039367};
var marker = new google.maps.Marker({position: unionbank, map: map,icon: 'lock.png'});
// >>>>>
var west = {lat:41.2686779,lng:-96.0999749};
var marker = new google.maps.Marker({position:west, map:map,icon: 'lock.png'});
// >>>>>

// ------------------DIGITAL BUSINESS MODEL----------------------

// >>>>>
var banca = {lat:40.842847,lng:14.2468525};
var marker = new google.maps.Marker({position: banca, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var bnp = {lat:48.8717555,lng:2.335482};
var marker = new google.maps.Marker({position: bnp, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var pbce = {lat:48.8195422,lng:2.4601244};
var marker = new google.maps.Marker({position: pbce, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var orange = {lat:48.8364311,lng:2.3042558};
var marker = new google.maps.Marker({position: orange, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var scotland = {lat:55.9347583,lng:-3.336824};
var marker = new google.maps.Marker({position: scotland, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var aig = {lat:40.7052639,lng:-74.0077088};
var marker = new google.maps.Marker({position: aig, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: markeramex, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var broadridge = {lat:40.7551912,lng:-73.6974465};
var marker = new google.maps.Marker({position: broadridge, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: cox, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: experian, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var marker = new google.maps.Marker({position: firstdata, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var gm = {lat:42.3288351,lng:-83.0411523};
var marker = new google.maps.Marker({position: gm, map: map,icon:'repo-forked.png'});
// >>>>>
// >>>>>
var verizon = {lat:40.7777947,lng:-74.0449733};
var marker = new google.maps.Marker({position: verizon, map: map,icon:'repo-forked.png'});
// >>>>>
