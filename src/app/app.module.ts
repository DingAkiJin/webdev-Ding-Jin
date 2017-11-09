import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import {NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home/home.component';
import { TestComponent } from './components/test/test/test.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './components/user/register/register.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetHeadingComponent } from './components/widget/widget-edit/widget-heading/widget-heading.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {Routing} from './app.routing';
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './services/flickr.service.client';
import {SharedService} from './services/shared.service';



@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    PageEditComponent,
    PageListComponent,
    PageNewComponent,
    WidgetChooserComponent,
    WidgetHeadingComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetListComponent,
    WidgetEditComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
    FlickrImageSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    QuillEditorModule,
    Routing
  ],
  // Client Side services here
  providers: [ UserService, WebsiteService, PageService, WidgetService, FlickrService , SharedService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
