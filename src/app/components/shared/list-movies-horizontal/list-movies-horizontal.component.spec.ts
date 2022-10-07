import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesHorizontalComponent } from './list-movies-horizontal.component';

describe('ListMoviesHorizontalComponent', () => {
  let component: ListMoviesHorizontalComponent;
  let fixture: ComponentFixture<ListMoviesHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoviesHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMoviesHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
