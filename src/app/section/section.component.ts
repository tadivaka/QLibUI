import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryService } from '../query.service';
import { Section } from '../newquery/Section';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SectionService } from '../section.service';


@Component({
  selector: 'sections',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  showLoader: boolean = true;
  sectionsList: Array<Section> = [];
  displayedColumns: string[] = ['sectionId', 'requiredCount', 'totalCount', 'sectionName', 'createdDate', 'Edit'];
  dataSource: MatTableDataSource<Section>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private queryService: QueryService,
    private sectionService: SectionService,
    private toastr: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getSectionsData();
  }

  // Get All Member deatils API
  getSectionsData() {
    this.sectionService
      .getAllSections()
      .subscribe(res => {
        this.sectionsList = res;
        if (this.sectionsList.length > 0) {
          this.dataSource = new MatTableDataSource(this.sectionsList);
          this.dataSource.paginator = this.paginator;
          this.toastr.success('Data loading sucessfully', 'Sucessful');
          this.showLoader = false;
        }
      });
  }
}
