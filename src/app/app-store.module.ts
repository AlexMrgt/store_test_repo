import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";


@NgModule({
  declarations: [],

  imports: [
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true,
    }),
    EffectsModule.forRoot([]) // чтобы работали эффекты в lazy-модулях
  ],

})
export class AppStoreModule { }
