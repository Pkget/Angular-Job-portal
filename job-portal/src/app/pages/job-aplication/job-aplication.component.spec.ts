import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAplicationComponent } from './job-aplication.component';

describe('JobAplicationComponent', () => {
  let component: JobAplicationComponent;
  let fixture: ComponentFixture<JobAplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
