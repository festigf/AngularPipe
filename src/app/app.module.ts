import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import {
  MomentDateModule,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import { NgModule } from '@angular/core';
import { MaterialModule} from './shared/material.module';
import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt);
export const MY_FORMATS = {
  parse: {
      dateInput: 'DD/MM/YYYY',



  },
  display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MM YYYY',
      dateA11yLabel: 'DD/MM/YYYY',
      monthYearA11yLabel: 'DD MM YYYY',
  },
};
@NgModule({
  declarations: [AppComponent, ConvertPipe],
  imports: [BrowserModule, BrowserAnimationsModule,MaterialModule],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE]
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: MY_FORMATS
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
