import { Component, OnInit } from '@angular/core';
import { MoveElementService } from 'app/move-element.service';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {

  constructor(private moveService: MoveElementService) { }

  ngOnInit() {
  }

}
