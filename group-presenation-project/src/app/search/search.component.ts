import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { ViewEncapsulation } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // passing a key value pair object to the new FormGroup constructors. 
  // passing an instance of formcontrol
  addcomponentReactiveForm: FormGroup;
  hintColor;

  constructor(private fb: FormBuilder, private productService: ProductService) { this.hintColor = '#FF0000'; }

  ngOnInit() {
    this.addcomponentReactiveForm = this.fb.group({
      productEnglish: '',
      productFrench: ''
    });
    this.addcomponentReactiveForm.valueChanges.subscribe(console.log);

    // Import Validators to cover validation use cases. Synchronysly validate
    this.addcomponentReactiveForm = this.fb.group({
      productId: ['', [
        Validators.required,
        Validators.maxLength(30),
      ]],
      productDescription: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
    });
  }
  // Getters and setters for the various field on my form.
  get productEnglish() {
    return this.addcomponentReactiveForm.get('productEnglish');
  }

  search(){
    this.productService.getProducts().subscribe((res: any) => {
      console.log(res);
    }, (err: any) => { 
      console.log(err.error.status);
    });
  }

}
