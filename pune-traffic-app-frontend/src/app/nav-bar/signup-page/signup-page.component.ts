import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup-page',
  imports: [FormsModule,
    CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
      // throw new Error('Method not implemented.');
  }

  onSubmit(form:any){
      console.log(form.value)
  }

  openLoginPage(){
      this.router.navigateByUrl("");
  }
}
