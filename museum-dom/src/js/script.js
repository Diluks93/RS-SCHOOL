import customVideoPlayer from './video.js';
import addRipple from './ripple.js';
import slider from './slider.js'
import comparisons from './comparisons.js';
import modal from './modal.js';
import activitySectionGallery from './gallery.js';
import changeIframe from './changeIframe.js';
import showSidepanel from './hamburger.js';
import useMapbox from './mapbox.js'
import calculateTickets from './calculate.js'
import getFormValidate from './validation.js';

addRipple()
comparisons();
slider();
customVideoPlayer();
modal();
activitySectionGallery();
changeIframe();
showSidepanel();
useMapbox();
calculateTickets();
getFormValidate();


const dateInp = document.querySelector('.date-inp');
dateInp.setAttribute('placeholder', 'Date');
const timeInp = document.querySelector('.time-inp');
timeInp.setAttribute('placeholder', 'Time');