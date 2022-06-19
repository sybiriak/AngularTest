import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() text: string = '';

  @Output() textCleared = new EventEmitter();

  @ViewChild('button') buttonElement: any;

  constructor() {
    console.log('constructor', this.text);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.text, this.buttonElement);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.buttonElement);
  }

  ngOnDestroy(): void {
    console.log('ngAfterViewInit');
  }

  clearText() {
    this.text = '';
    this.textCleared.emit();
  }
}
