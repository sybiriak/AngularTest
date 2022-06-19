import { HelpService } from './../../services/help.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  inputValue: string = '123';

  number1: number = 0;

  constructor(
    private helpService: HelpService
  ) {}

  ngOnInit(): void {
    this.number1 = this.helpService.calculate(3, 5);
    this.helpService.getUser().subscribe((response) => {
      console.log(response);
    });
  }

  clearInput() {
    this.inputValue = '';
  }

}
