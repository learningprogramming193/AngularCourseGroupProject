import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  // data service array attribute
  private products$: Product[];
  // Collapsing logic
  isProducts = false;
  isProduct = false;
  objectLEngth = 0;
  // passing a key value pair object to the new FormGroup constructors.
  // passing an instance of formcontrol
  addcomponentReactiveForm: FormGroup;
  hintColor;
  message: string;

  constructor(private fb: FormBuilder, private productService: ProductService) { this.hintColor = '#FF0000'; }
  toggleCollapse() {
    // TOGGLING LOGIC
    const productId = this.addcomponentReactiveForm.controls.productId.value;
    const productDescription = this.addcomponentReactiveForm.controls.productDescription.value;

    console.log(productId);
    console.log(productDescription);
    // HTTPCLIENT CLIENT GET ALL PRODUCTS.
    this.message = "";
    this.products$ = new Array();
    if (productId === '' && productDescription === '') {
      this.productService.getProducts().subscribe((data: any) => {
        this.products$ = data;
        console.log(data.length);
        console.log('Product id ' + Object.keys(data).length);
        if (this.products$ === undefined || this.products$ === null || this.products$.length === undefined || this.products$.length === 0){
          this.message = "No Product found.";
        }else{
          this.objectLEngth = this.products$.length;
          this.tableCollapseLogic(this.objectLEngth);
          console.log(this.objectLEngth);
        }
      });
    }
    // tslint:disable-next-line: triple-equals
    if (productId != '' && productDescription == '') {
      this.productService.getProduct(productId).subscribe((data: any) => {
        if (data != null){
          this.products$ = new Array<Product>(data);
          console.log('Product id ' + Object.keys(data).length);
        }
        if (this.products$ === undefined || this.products$ === null || this.products$.length === undefined || this.products$.length === 0){
          this.message = "No Product found.";
        }else{
          this.objectLEngth = this.products$.length;
          this.tableCollapseLogic(this.objectLEngth);
          console.log(this.objectLEngth);
        }
      });
    }
    // tslint:disable-next-line: triple-equals
    if (productId == '' && productDescription != '') {
      this.productService.getProductsByDesc(productDescription).subscribe((data: any) => {
        this.products$ = data;
        console.log(data.length);
        console.log('Product id ' + Object.keys(data).length);
        if (this.products$ === undefined || this.products$ === null || this.products$.length === undefined || this.products$.length === 0){
          this.message = "No Product found.";
        }else{
          this.objectLEngth = this.products$.length;
          this.tableCollapseLogic(this.objectLEngth);
          console.log(this.objectLEngth);
        }
      });
    }
    // tslint:disable-next-line: triple-equals
    if (productId != '' && productDescription != '') {
      // tslint:disable-next-line: max-line-length
      this.productService.getProductsByIdDesc(productId, productDescription).subscribe((data: any) => {
        this.products$ = new Array<Product>(data);
        console.log('Product id ' + Object.keys(data).length);
        if (this.products$ === undefined || this.products$ === null || this.products$.length === undefined || this.products$.length === 0){
          this.message = "No Product found.";
        }else{
          this.objectLEngth = this.products$.length;
          this.tableCollapseLogic(this.objectLEngth);
          console.log(this.objectLEngth);
        }
      });
    }
    
  }

  resetting() {
    this.isProducts = false;
    this.isProduct = false;
    this.addcomponentReactiveForm.controls.productId.setValue('');
    this.addcomponentReactiveForm.controls.productDescription.setValue('');
  }
  tableCollapseLogic(objectLength) {
    // tslint:disable-next-line: triple-equals
    if (objectLength == undefined) {
      this.isProduct = true;
      this.isProducts = false;
    } else {
      this.isProduct = false;
      this.isProducts = true;
    }
  }


  ngOnInit() {
    this.addcomponentReactiveForm = this.fb.group({
      productEnglish: '',
      productFrench: ''
    });
    this.addcomponentReactiveForm.valueChanges.subscribe(console.log);

    // Import Validators to cover validation use cases. Synchronysly validate
    this.addcomponentReactiveForm = this.fb.group({
      productId: ['', [
       // Validators.required,
        Validators.maxLength(30),
      ]],
      productDescription: ['', [
        //Validators.required,
        Validators.maxLength(30)
      ]],
    });
  }
}
