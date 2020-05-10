import { Component, OnInit } from '@angular/core';
import { SectionService } from '../section.service';
import { Section } from '../newquery/Section';
import { FormControl, FormGroup } from '@angular/forms'
import { Query } from '../qlibhome/Query';
import { QueryService } from '../query.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'newquery',
  templateUrl: './newquery.component.html'
})

export class NewQueryComponent implements OnInit {

  showLoader: boolean = false;
  myForm: FormGroup;
  userId;
  sectionsList: Array<Section> = [];
  queryObject;
  selectedValue = 0;
  btnName = "Add Query";

  constructor(
    private sectionService: SectionService,
    private queryService: QueryService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  onSubmit(form: FormGroup) {
    this.showLoader = true;
    console.log('Valid?', form.valid); // true or false
    console.log('SectionName', form.value.SectionName);
    console.log('queryName', form.value.QueryName);
    console.log('description', form.value.Description);

    if (form.valid) {
      let queryObj = new Query();
      queryObj.SectionId = form.value.sectionName;
      queryObj.QueryName = form.value.queryName;
      queryObj.Description = form.value.description;

      if (this.activatedRoute.snapshot.params.id > 0) {
        queryObj.QueryId = this.activatedRoute.snapshot.params.id;
        this.queryService.UpdateQueryDetails(queryObj).subscribe(res => {
          this.toastr.success('Query updated sucessfully.', 'Sucessful');
          this.router.navigate(['qlibhome']);
          this.showLoader = false;
        });
      }
      else {
        this.queryService.SaveQueryDetails(queryObj).subscribe(res => {
          this.toastr.success('Query added sucessfully.', 'Sucessful');
          this.showLoader = false;
        });
      }
    }
  }

  // Get All Member deatils API
  getSectionsData() {
    this.sectionService
      .getAllSections()
      .subscribe(res => {
        this.sectionsList = res;
        this.toastr.success('data loading sucessfully to the seccion  dropdwon list', 'Sucessful');
      });
  }

  // Get All Member deatils API
  getQueryById(QueryId: number) {
    this.queryService
      .getQueryById(QueryId)
      .subscribe(res => {
        this.queryObject = res;
        this.selectedValue = this.queryObject.sectionId;
        this.myForm.patchValue({ queryName: this.queryObject.queryName });
        this.myForm.patchValue({ description: this.queryObject.description });
        this.btnName = "Update Query";
        this.toastr.success('Query data loaded to form.', 'Sucessful');
      });
  }

  ngOnInit() {
   
    this.getSectionsData();
    if (this.activatedRoute.snapshot.params.id > 0) {
      this.getQueryById(this.activatedRoute.snapshot.params.id);
      this.myForm = new FormGroup({
        sectionName: new FormControl(''),
        queryName: new FormControl(''),
        description: new FormControl('')
      });
    }
    else {
      this.myForm = new FormGroup({
        sectionName: new FormControl(''),
        queryName: new FormControl(''),
        description: new FormControl('')
      });
    }
  }
}