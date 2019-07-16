import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {Title} from '@angular/platform-browser';;
import{filter,map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked, DoCheck, AfterContentInit{
  // title = 'my-first-project';

  constructor(
    private readonly router: Router,
    private readonly title: Title,
    private readonly route: ActivatedRoute
  ) {};


  public ten: number =10;

  one: number =1;

  ngAfterContentChecked(){
    console.log('Checked again')
  }


  ngDoCheck(){
    console.log('Check')
  }

  ngOnInit(){
    // this.keyUpEvent();
    
    this.router.events
    .pipe(filter((event => event instanceof NavigationEnd)))
    .pipe(map(() => this.route))
    .pipe(
      map(route => {
        while(route.firstChild){
          route = route.firstChild;
        }
        return route;
      })
    )
    .subscribe(route=>{
      const routeData = route.snapshot.data;
      this.title.setTitle('Email')
    })

  }

  ngAfterContentInit(){
    console.log('After checked')
  }

}