import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddCharacterComponent } from './app-add-character.component';

describe('AppAddCharacterComponent', () => {
  let component: AppAddCharacterComponent;
  let fixture: ComponentFixture<AppAddCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAddCharacterComponent]
    });
    fixture = TestBed.createComponent(AppAddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
