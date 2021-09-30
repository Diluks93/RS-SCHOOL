import customVideoPlayer from './video.js';
import slider from './slider.js'
import comparisons from './comparisons.js';
import modal from './modal.js';
import changeItemGallery from './gallery.js';
import changeIframe from './changeIframe.js';

comparisons();
slider();
customVideoPlayer();
modal();
changeItemGallery();
changeIframe();

mapboxgl.accessToken = 'pk.eyJ1IjoiZGlsdWtzIiwiYSI6ImNrdTFxc3ZmODBuazAyb28xcTdtYTZmMGUifQ.oH3L-MEDH588UW1NMgorKg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/diluks/cku5sv2ux2ws417o5hnw2bhu7'
});