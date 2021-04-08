import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSearchComponent } from './letter-search.component';

describe('LetterSearchComponent', () => {
  let component: LetterSearchComponent;
  let fixture: ComponentFixture<LetterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
