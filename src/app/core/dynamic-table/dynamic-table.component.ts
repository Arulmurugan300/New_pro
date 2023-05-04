import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit ,AfterViewInit {
  @Input() datapack!: any;
  @Output() output = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: Array<any>;
  displayedColumns!: string;
  event!: object;

  ngOnInit() {
    this.dataSource = this.datapack.value;
    this.displayedColumns = this.datapack.column;
    console.log('dvaev', this.datapack);

  };
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  };

  Value(Event: any, col: any) {
    console.log("Event", Event, col);
    this.event = {
      data: Event,
      Index: col,
    }
    this.output.emit(this.event);

  }


}
