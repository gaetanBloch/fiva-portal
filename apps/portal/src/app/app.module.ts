import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { GbButtonComponentModule } from '@gblo.ch/ngx-components';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ButtonComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatButtonModule,
    GbButtonComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent, NxWelcomeComponent],
})
export class AppModule {}
