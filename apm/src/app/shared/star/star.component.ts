import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-start',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  cropWidth: number = 75;
  @Input() rating: number = 0;
  @Output() maBigMadafakaNotification: EventEmitter<string> = new EventEmitter<string>();

  //this one looks at changes in Input properties
  ngOnChanges(changes: SimpleChanges): void {
    //75 because that is the width set in the template
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick():void{
    this.maBigMadafakaNotification.emit(this.rating.toString());
    console.log(`rating ${this.rating} was clickeado `);
  }
}
