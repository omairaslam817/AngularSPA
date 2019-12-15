import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentTalkUsingServiceComponent } from './child-parent-talk-using-service.component';

describe('ChildParentTalkUsingServiceComponent', () => {
  let component: ChildParentTalkUsingServiceComponent;
  let fixture: ComponentFixture<ChildParentTalkUsingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildParentTalkUsingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildParentTalkUsingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
