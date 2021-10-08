export default function useMapbox(){
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGlsdWtzIiwiYSI6ImNrdTFxc3ZmODBuazAyb28xcTdtYTZmMGUifQ.oH3L-MEDH588UW1NMgorKg';
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/diluks/ckuiiuxe1d31p19nsc7tc6xsp',
    center: [2.336263, 48.860929],
    zoom: 15.71,
  });

  let nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true
  })

  map.addControl(nav, 'top-right');
  let marker1 = new mapboxgl.Marker({ color: 'black' })
    .setLngLat([2.3364, 48.86091])
    .addTo(map);

  let marker2 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3333, 48.8602])
    .addTo(map);
  let marker3 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3397, 48.8607])
    .addTo(map);
  let marker4 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.333, 48.8619])
    .addTo(map);
  let marker5 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3365, 48.8625])
    .addTo(map);
}