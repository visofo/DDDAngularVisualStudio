import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from '../components/app.component';
import { NotificationsViewerComponent } from '../components/controls/notifications-viewer.component';
import { LoginComponent } from '../components/login/login.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastaModule } from 'ngx-toasta';

import { AccountEndpoint } from '../services/account-endpoint.service';
import { AccountService } from '../services/account.service';
import { AlertService } from '../services/alert.service';
import { AppTitleService } from '../services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from '../services/app-translation.service';
import { AuthService } from '../services/auth.service';
import { ConfigurationService } from '../services/configuration.service';
import { LocalStoreManager } from '../services/local-store-manager.service';
import { NotificationEndpoint } from '../services/notification-endpoint.service';
import { NotificationService } from '../services/notification.service';
import { OidcHelperService } from '../services/oidc-helper.service';
import { ThemeManager } from '../services/theme-manager';

describe('AppComponent', () =>
{
  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLanguageLoader
          }
        }),
        NgxDatatableModule,
        OAuthModule.forRoot(),
        ToastaModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        ModalModule.forRoot()
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        NotificationsViewerComponent
      ],
      providers: [
        AuthService,
        AlertService,
        ConfigurationService,
        ThemeManager,
        AppTitleService,
        AppTranslationService,
        NotificationService,
        NotificationEndpoint,
        AccountService,
        AccountEndpoint,
        LocalStoreManager,
        OidcHelperService
      ]
    }).compileComponents();
  });

  it('should create the app', () =>
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Sesc.Cultura.Web'`, () =>
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance as AppComponent;
    expect(app.appTitle).toEqual('Sesc.Cultura.Web');
  });

  it('should render Loaded! in a h1 tag', () =>
  {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Loaded!');
  });
});
