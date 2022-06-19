import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  inputValue: string = '123';

  constructor() {}

  ngOnInit(): void {
  }

  clearInput() {
    this.inputValue = '';
  }

}
