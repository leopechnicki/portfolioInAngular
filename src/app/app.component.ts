import {Component, OnInit} from '@angular/core';
import {ParticlesConfig} from '../assets/particles-config';
import {BannerModel} from './share/models/banner.model';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PortifolioSecondVersion';
  banner: BannerModel;

  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig);
  }

}

