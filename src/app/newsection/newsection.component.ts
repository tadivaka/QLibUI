import { Component, OnInit } from '@angular/core';
import { SectionService } from '../section.service';
import { Section } from '../newquery/Section';
import { FormControl, FormGroup } from '@angular/forms'
import { Query } from '../qlibhome/Query';
import { QueryService } from '../query.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'newsection',
  templateUrl: './newsection.component.html',

})
export class NewSectionComponent implements OnInit {

  showLoader: boolean = false;
  myForm: FormGroup;
  userId;
  sectionsList: Array<Section> = [];
  sectionObject;
  selectedValue = 0;
  btnName = "Add Section";


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

    if (form.valid) {
      let sectionObj = new Section();
      sectionObj.sectionName = form.value.sectionName;
      sectionObj.RequiredCount = form.value.count;


      if (this.activatedRoute.snapshot.params.id > 0) {
        sectionObj.SectionId = this.activatedRoute.snapshot.params.id;
        this.sectionService.UpdateSectionDetails(sectionObj).subscribe(res => {
          this.toastr.success('Section updated sucessfully.', 'Sucessful');
          this.router.navigate(['sections']);
          this.showLoader = false;
        });
      }
      else {
        this.sectionService.SaveSectionDetails(sectionObj).subscribe(res => {
          this.toastr.success('New Section added sucessfully.', 'Sucessful');
          this.showLoader = false;
        });
      }
    }
  }

  // Get All Member deatils API
  getSectionById(sectionId: number) {
    this.sectionService
      .getSectionById(sectionId)
      .subscribe(res => {
        this.sectionObject = res;
        this.myForm.patchValue({ sectionName: this.sectionObject.sectionName });
        this.myForm.patchValue({ count: this.sectionObject.requiredCount });
        this.btnName = "Update Section";
        this.toastr.success('Sections data loaded to form.', 'Sucessful');
      });
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id > 0) {
      this.getSectionById(this.activatedRoute.snapshot.params.id);
      this.myForm = new FormGroup({
        sectionName: new FormControl(''),
        count: new FormControl('')
      });
    }
    else {
      this.myForm = new FormGroup({
        sectionName: new FormControl(''),
        count: new FormControl('')
      });
    }
  }

}
