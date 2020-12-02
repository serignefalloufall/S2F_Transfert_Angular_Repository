import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmeteurComponent } from './emeteur.component';

describe('EmeteurComponent', () => {
  let component: EmeteurComponent;
  let fixture: ComponentFixture<EmeteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmeteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmeteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
