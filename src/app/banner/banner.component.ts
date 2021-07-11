import {AfterViewInit, Component, Input} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {BannerModel} from '../share/models/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {

  @Input() banner: BannerModel;
  showAd = environment.adsense.show;
  constructor() {    }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
          overlays: {bottom: true}
        });
      } catch (e) {
        console.error(e);
      }
    }, 0);
  }

}
