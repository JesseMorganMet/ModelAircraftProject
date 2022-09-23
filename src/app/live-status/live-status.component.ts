import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-live-status',
  templateUrl: './live-status.component.html',
  styleUrls: ['./live-status.component.scss']
})
export class LiveStatusComponent implements OnInit {
  @Input() connectMessage: string = "";
  @Input() connectStatus: string = "";

  hidden: any;

  constructor() {
  }

  ngOnInit(): void {
    this.popupShow();
  }

  ngOnChanges(change) {
    this.popupShow();
  }

  popupShow() {
    this.hidden = "show"
    console.log("peeking")
  }

  popupClose() {
    this.hidden = "hide"
    console.log("hiding")
  }
}
