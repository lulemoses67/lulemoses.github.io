import './scripts.js';
import data from './db.js';
import {showTemplate, animatedText} from './Util.js';

//Show tempelate for services and projects
showTemplate('#service','#serviceInfo', data);
showTemplate('#projects','#projectInfo', data);
//Hero animated texts
animatedText('#lul','A Front-end Developer.');




