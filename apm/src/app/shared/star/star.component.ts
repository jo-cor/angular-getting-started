import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-start',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  cropWidth: number = 75;
  @Input() rating: number = 4;

  //this one looks at changes in Input properties
  ngOnChanges(changes: SimpleChanges): void {
    //75 because that is the width set in the template
    this.cropWidth = (this.rating * 75) / 5;
  }
}
