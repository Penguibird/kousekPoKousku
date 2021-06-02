import CMS from 'netlify-cms-app';
// import idWidget from 'netlify-cms-widget-simple-uuid';
import { Widget as IdWidget } from '@ncwidgets/id'


// CMS.registerWidget('id', idWidget.Control, idWidget.Preview);

CMS.registerWidget(IdWidget);

CMS.init();