import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { TrackerFormComponent } from './tracker-form.component';

describe('TrackerFormComponent', () => {
  let component: TrackerFormComponent;
  let fixture: ComponentFixture<TrackerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Add FormsModule here
      declarations: [TrackerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
