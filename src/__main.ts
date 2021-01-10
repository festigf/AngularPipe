import "./polyfills";
/*import { LOCALE_ID } from "@angular/core";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
*/
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE
} from '@angular/material/core';
import {
    MomentDateModule,
    MomentDateAdapter
} from '@angular/material-moment-adapter';


import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./app/material-module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MM YYYY',
    },
};

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [DatepickerEventsExample],
  declarations: [DatepickerEventsExample],
  bootstrap: [DatepickerEventsExample],
  providers: [{
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        }, {
            provide: MAT_DATE_FORMATS,
            useValue: MY_FORMATS
        },
        //you can change
   /*     useValue {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        }, {
            provide: MAT_DATE_FORMATS,
            useValue: MY_FORMATS
        }*/
    ]

    /*providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    },
    { provide: LOCALE_ID, useValue: "it-IT" },
    { provide: MAT_DATE_LOCALE, useValue: "it-IT" }
  ]*/
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
