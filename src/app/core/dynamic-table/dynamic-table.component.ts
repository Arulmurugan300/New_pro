import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tableElement } from 'src/assets/models';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {
  @Input() datapack!: any;
  @Output() output = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any = [];
  displayedColumns: any = [];
  event!: object;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.datapack.value);
    this.displayedColumns = this.datapack.column;
  };
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator, this.paginator);
  };

  Value(Event: any, col: any) {
    this.event = {
      data: Event,
      Index: col,
    }
    this.output.emit(this.event);

  }


}
