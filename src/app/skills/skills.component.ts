import {Component, OnInit} from '@angular/core';
import {SkillModel} from '../share/models/skill.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillList = [
    new SkillModel('HTML5', '<img src="https://img.icons8.com/color/48/000000/html-5.png"/>'),
    new SkillModel('Javascript', '<img src="https://img.icons8.com/color/48/000000/javascript.png"/>'),
    new SkillModel('Typescript', '<img src="https://img.icons8.com/color/48/000000/typescript.png"/>'),
    new SkillModel('NodeJS', '<img src="https://img.icons8.com/color/48/000000/nodejs.png"/>'),
    new SkillModel('Angular', '<img src="https://img.icons8.com/color/48/000000/angularjs.png"/>'),
    new SkillModel('Ionic', '<img src="https://img.icons8.com/ios-filled/48/000000/ionic.png"/>'),
    new SkillModel('CSS3', '<img src="https://img.icons8.com/color/48/000000/css3.png"/>'),
    new SkillModel('Bootstrap', '<img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>'),
    new SkillModel('Java', '<img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/>'),
    new SkillModel('C', '<img src="https://img.icons8.com/color/48/000000/c-programming.png"/>'),
    new SkillModel('Cobol', '<img src="../../assets/cobol_icon_132525.png"/>'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
