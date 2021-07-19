import {Component, OnInit} from '@angular/core';
import {ParticlesConfig} from '../assets/particles-config';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PortifolioSecondVersion';

  public ngOnInit(): void {
    this.invokeParticles();
    this.invokeCookieConsent();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig);
  }

  public invokeCookieConsent(): void{
    const cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#164969'
        },
        button: {
          background: '#ffe000',
          text: '#164969'
        }
      },
      theme: 'classic',
      content: {
        message: 'This site uses cookies to analyze traffic and for ads measurement purposes.' ,
        link: 'Learn more about how we use cookies',
        href: 'https://www.google.com/about/company/user-consent-policy/'
      }
    });
    sessionStorage.setItem('SameSite', 'None');
  }
}

