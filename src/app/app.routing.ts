
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home/home.component';
import {TestComponent} from './components/test/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetHeadingComponent} from './components/widget/widget-edit/widget-heading/widget-heading.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {OmdbtestComponent} from './omdb-test/omdbtest/omdbtest.component';
import {AuthenticationService} from './services/authentication.service.client';

const APP_ROUTES: Routes = [
  {path: 'omdb', component: OmdbtestComponent},
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/website', component: WebsiteListComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/new', component: WebsiteNewComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid', component: WebsiteEditComponent, canActivate: [AuthenticationService] },
  {path: 'profile/website/:wid/page', component: PageListComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthenticationService]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthenticationService]},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
