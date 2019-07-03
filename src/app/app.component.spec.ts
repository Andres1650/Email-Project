import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Output, Input, Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-first-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-first-project');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-first-project!');
  });
});



// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })

// export class HomeComponent{
//   clicked= false;

//   email = [
//   {
//     name: 'Bobby Smith',
//     subject: 'Weekly New York Times',
//     body: 'Here\'s a sample of what new articles we have for this week'
//   },
//   {
//     name: 'Sarah Nash',
//     subject: 'School Board Meeting',
//     body: 'Just wondering if you still plan on attending'
//   }
//   ];

//   handleClick(){
//     this.clicked=true;
//   }
// }