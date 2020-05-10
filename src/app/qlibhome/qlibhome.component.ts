import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryService } from '../query.service';
import { Query } from './Query';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'qlibhome',
  styleUrls: ['qlibhome.component.css'],
  templateUrl: "./qlibhome.component.html",
})
export class QLibhomeComponent implements OnInit {
  showLoader: boolean = true;
  queriesList: Array<Query> = [];
  displayedColumns: string[] = ['queryId', 'queryName', 'sectionName', 'sCreatedDate', 'Edit', 'Delete'];
  dataSource: MatTableDataSource<Query>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private queryService: QueryService,
    private toastr: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getQueriesData();
  }
  // Get All Member deatils API
  getQueriesData() {
    this.queryService
      .getQueries()
      .subscribe(res => {
        this.queriesList = res;
        if (this.queriesList.length > 0) {
          this.dataSource = new MatTableDataSource(this.queriesList);
          this.dataSource.paginator = this.paginator;
          this.toastr.success('Data loading sucessfully', 'Sucessful');
          this.showLoader = false;
        }
      });
  }

  DeleteQuery(QueryId: number) {
    this.queryService.DeleteQuery(QueryId).subscribe(res => {
      this.toastr.success('Record deleted sucessfully', 'Sucessful');
      this.getQueriesData();
    });
  }
  
  deleteQuery(queryId: number, name: string) {
    if (confirm("Are you sure to delete query :" + name)) {
      this.showLoader = true;
      this.DeleteQuery(queryId);
    }
  }
}
