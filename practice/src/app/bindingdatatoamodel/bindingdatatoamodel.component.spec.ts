import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingdatatoamodelComponent } from './bindingdatatoamodel.component';

describe('BindingdatatoamodelComponent', () => {
  let component: BindingdatatoamodelComponent;
  let fixture: ComponentFixture<BindingdatatoamodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingdatatoamodelComponent]
    });
    fixture = TestBed.createComponent(BindingdatatoamodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
