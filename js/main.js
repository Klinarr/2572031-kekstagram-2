import { generatePhotosArray } from './generate-photos-array.js';
import { renderPictures } from './render-pictures.js';
import { renderBigPicture } from './render-big-picture.js';
import './form.js';
import './edit-picture.js';

const photosArray = generatePhotosArray(25);


renderPictures(photosArray);
renderBigPicture(photosArray);
