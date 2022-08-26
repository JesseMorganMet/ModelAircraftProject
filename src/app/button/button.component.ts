import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() d: any;
  @Input() i: any;
  @Output() example = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  thing(i){
    this.example.emit(this.i);
  }

}
