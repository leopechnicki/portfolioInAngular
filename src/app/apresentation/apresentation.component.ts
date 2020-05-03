import {Component, OnInit, ViewChild} from '@angular/core';

import Typewriter from 't-writer.js';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css']
})
export class ApresentationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const textTypewrite = document.querySelector('.textTypewrite');
    const nameOnTypewrite = document.querySelector('.nameOnTypewrite');
    const dotTypewriter = document.querySelector('.dotTypewriter');
    const descriptionTypewrite = document.querySelector('.descriptionTypewrite');
    const options = {
      typeColor: 'white',
      cursorColor: 'white'
    };

    const firstWriter = new Typewriter(textTypewrite, options);
    const secondWriter = new Typewriter(nameOnTypewrite, {
      typeColor: '#ff7d4b',
      cursorColor: 'white'});
    const thirdWriter = new Typewriter(dotTypewriter, options);
    const fourthWriter = new Typewriter(descriptionTypewrite, options);


    firstWriter.type('Hi, I\'m ')
      .removeCursor()
      .then(
        secondWriter.type('Leonardo Pechnicki')
          .removeCursor()
          .then(
            thirdWriter.type('.')
              .removeCursor()
              .then(
                fourthWriter.type('A Full-Stack Developer.')
                  .start.bind(fourthWriter)
              ).start.bind(thirdWriter)
          ).start.bind(secondWriter))
      .start();
  }


}
