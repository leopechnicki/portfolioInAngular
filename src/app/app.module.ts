import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApresentationComponent} from './apresentation/apresentation.component';
import {SkillsComponent} from './skills/skills.component';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import {BannerComponent} from './banner/banner.component';
import {AdsenseModule} from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    ApresentationComponent,
    SkillsComponent,
    FooterComponent,
    ContactComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AdsenseModule.forRoot({
        adClient: 'ca-pub-0487329598065195',
        adSlot: 7259870550,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
