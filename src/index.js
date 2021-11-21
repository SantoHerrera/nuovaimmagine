import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();

//json.expericane section original
// {
//     "company": "DefOpenSource",
//     "title": "Front-End Developer",
//     "years": "10.2019 - present",
//     "mainTech": [
//       "Angular 8/9/10"
//     ],
//     "technologies": [
//       "REST API",
//       "RxJS",
//       "JavaScript",
//       "Bootstrap",
//       "MDBootstrap",
//       "EF Core",
//       ".NET Core",
//       "SignalR",
//       "Angular Material"
//     ]
//   },
//   {
//     "company": "Serros Solutions",
//     "title": "Intern",
//     "years": "01.2018 - 09.2019",
//     "mainTech": [
//       "Angular 7/8"
//     ],
//     "technologies": [
//       "RxJS",
//       "Django",
//       "PHP",
//       "JavaScript",
//       "DHTMLX Gantt"
//     ]
//   },