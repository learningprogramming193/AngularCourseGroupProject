import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  productFormGroup: FormGroup;
  message: string;
  hintColor;

  products = [
    { value: 'pasta', viewValue: 'Pasta' },
    { value: 'fruit', viewValue: 'Fruit' },
    { value: 'detergent', viewValue: 'Detergent' }
  ];

  statuses = [
    { value: 'instore', viewValue: 'In Store' },
    { value: 'online', viewValue: 'Online' }
  ];

  markets = [
    { value: 'child', viewValue: 'Child market' },
    { value: 'adult', viewValue: 'Adult market' }
  ];

  // add formBuilder service to the constructor of this component
  constructor(private fb: FormBuilder, private productService: ProductService) { this.hintColor = '#FF0000'; }

  // create a data model for this form during ngOninitialization
  // schema for the data and validation rules.
  ngOnInit() {
    // validate user input into the form.[Validators] Angular Material
    // Import Validators to cover validation use cases. Synchronysly validate
    
    this.productFormGroup = this.fb.group({
      productDescriptionEnglish: ['', [
        Validators.required,
        Validators.maxLength(30),
      ]],
      productDescriptionFrench: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      brandNameEnglish: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      brandNameFrench: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      productType: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      additionalProductIdentification: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      targetMarket: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      productImageUrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      status: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]]
    });
    
  }
  
  add(product: Product){
    this.productService.add(product).subscribe(
      product => {
        console.log(product);
        this.message = "Product created.  Product ID: " + product.id + " Product Description: " + product.productDescriptionEnglish;
        console.log(this.message);
        
      }
    );
  }
}


