import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorRegiaoComponent } from './por-regiao.component';

describe('PorRegiaoComponent', () => {
  let component: PorRegiaoComponent;
  let fixture: ComponentFixture<PorRegiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorRegiaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorRegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
