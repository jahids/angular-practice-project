import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateAgePipe } from './calculate-age.pipe';
import { PasswordStrengthDirective } from './password-strength.directive';
import { ChildComponent } from './Component/child/child.component';
import { NewoneComponent } from './Component/newone/newone.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateAgePipe,
    PasswordStrengthDirective,
    ChildComponent,
    NewoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
