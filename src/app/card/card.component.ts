import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';

  constructor() {}

  ngOnInit(): void {}
}
