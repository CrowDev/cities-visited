import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CityTable } from 'src/app/@types/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() dataSource: any[] = [];
  @Input() total = 0;
  @Input() pageSize = 0;
  @Output() add = new EventEmitter<CityTable>();
  @Output() remove = new EventEmitter<CityTable>();
  @Output() paginate = new EventEmitter<PageEvent>();
  displayedColumns: string[] = ['id', 'name', 'region', 'actions'];

  handleAddCity(city: CityTable) {
    this.add.emit(city);
  }

  handleRemoveCity(city: CityTable) {
    this.remove.emit(city);
  }

  onPaginate(event: PageEvent) {
    this.paginate.emit(event);
  }
}
