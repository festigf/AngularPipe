import { LOCALE_ID,enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
/*  {provide: LOCALE_ID, useValue: 'it-IT' },
{provide: MAT_DATE_LOCALE, useValue: 'it-IT' }*/



]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
