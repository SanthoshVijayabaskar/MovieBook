import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() {
    console.log("NavBar: Constructor Executed")
  }

  ngOnInit() {
    console.log("NavBar: OnInit Executed");
  }

  ngAfterContentInit() {
    console.log("NavBar: AfterContentInit Executed");
  }

  ngAfterContentChecked() {
    console.log("NavBar: AfterContentChecked Executed");
  }

  ngAfterViewInit(){
    console.log("NavBar: AfterViewInit Executed");
  }

  ngAfterViewChecked(){
    console.log("NavBar: AfterViewChecked Executed");
  }

  ngDoCheck(){
    console.log("NavBar: DoCheck Executed");
  }

  ngOnChanges(){
    console.log("NavBar: OnChanges Executed");
  }

  ngOnDestroy(){
    console.log("NavBar: OnDestroy Executed");
  }

}
