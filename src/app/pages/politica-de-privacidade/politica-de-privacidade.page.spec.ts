import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticaDePrivacidadePage } from './politica-de-privacidade.page';

describe('PoliticaDePrivacidadePage', () => {
  let component: PoliticaDePrivacidadePage;
  let fixture: ComponentFixture<PoliticaDePrivacidadePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaDePrivacidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticaDePrivacidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
