import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMasComponent } from './article-mas.component';

describe('ArticleMasComponent', () => {
  let component: ArticleMasComponent;
  let fixture: ComponentFixture<ArticleMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
