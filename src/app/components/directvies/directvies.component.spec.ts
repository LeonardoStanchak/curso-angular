import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectviesComponent } from './directvies.component';

describe('DirectviesComponent', () => {
  let component: DirectviesComponent;
  let fixture: ComponentFixture<DirectviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
