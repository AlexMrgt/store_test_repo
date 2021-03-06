import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {PbAppModule} from "./pb-app/pb-app.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PbAppModule)
  .catch(err => console.error(err));
