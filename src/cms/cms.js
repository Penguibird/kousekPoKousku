import CMS from 'netlify-cms-app';
// import idWidget from 'netlify-cms-widget-simple-uuid';
import { Widget as IdWidget } from '@ncwidgets/id'
import { cs } from 'netlify-cms-locales';


// CMS.registerWidget('id', idWidget.Control, idWidget.Preview);
CMS.registerLocale('cs', cs);

CMS.registerWidget(IdWidget);



// if (process.env.NODE_ENV === 'development') {
//     CMS.init({
//         config: {
//             backend: {
//                 site_domain: 'cms.netlify.com'
//             }
//         }
//     });
// } else {
//     CMS.init({
//         config: {
//             backend: {
//                 base_url: 'https://my-github-auth-provider.herokuapp.com'
//             }
//         }
//     });
// }

CMS.init();
