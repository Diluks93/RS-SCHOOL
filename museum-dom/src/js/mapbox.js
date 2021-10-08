export default function useMapbox(){
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGlsdWtzIiwiYSI6ImNrdTFxc3ZmODBuazAyb28xcTdtYTZmMGUifQ.oH3L-MEDH588UW1NMgorKg';
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/diluks/ckui98gc8ahw517mp4l5wbwr1',
    center: [2.336263, 48.860929],
    zoom: 15.71,
  });

  let nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true
  })

  map.addControl(nav, 'top-right');
}

