webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_test_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_heading_widget_heading_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__omdb_test_omdbtest_omdbtest_component__ = __webpack_require__("../../../../../src/app/omdb-test/omdbtest/omdbtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_omdb_service_client__ = __webpack_require__("../../../../../src/app/services/omdb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_widget_widget_list_order_by_pipe_pipe__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_widget_widget_list_sortable_directive__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_widget_widget_list_safe_pipe_pipe__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/safe-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_widget_widget_list_webdev_sortable_directive__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/webdev-sortable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_39__components_widget_widget_list_webdev_sortable_directive__["a" /* WebdevSortableDirective */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_test_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_heading_widget_heading_component__["a" /* WidgetHeadingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_33__omdb_test_omdbtest_omdbtest_component__["a" /* OmdbtestComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_widget_widget_list_safe_pipe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_37__components_widget_widget_list_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_36__components_widget_widget_list_order_by_pipe_pipe__["a" /* OrderByPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_23__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_31__services_flickr_service_client__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_32__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_34__services_omdb_service_client__["a" /* OmdbServiceClient */],
            __WEBPACK_IMPORTED_MODULE_35__services_authentication_service_client__["a" /* AuthenticationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NO_ERRORS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__omdb_test_omdbtest_omdbtest_component__ = __webpack_require__("../../../../../src/app/omdb-test/omdbtest/omdbtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");


















var APP_ROUTES = [
    { path: 'omdb', component: __WEBPACK_IMPORTED_MODULE_16__omdb_test_omdbtest_omdbtest_component__["a" /* OmdbtestComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website', component: __WEBPACK_IMPORTED_MODULE_11__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/new', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid', component: __WEBPACK_IMPORTED_MODULE_10__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_6__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */]] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<!DOCTYPE html>\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <title>A3</title>\r\n  <base href=\"/\">\r\n\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\r\n  <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n\r\n  <style>\r\n    body,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\r\n  </style>\r\n  <script\r\n    src=\"https://code.jquery.com/jquery-3.2.1.min.js\"\r\n    integrity=\"sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=\"\r\n    crossorigin=\"anonymous\"></script>\r\n\r\n  <script\r\n    src=\"https://code.jquery.com/ui/1.12.1/jquery-ui.min.js\"\r\n    integrity=\"sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=\"\r\n    crossorigin=\"anonymous\"></script>\r\n\r\n\r\n</head>\r\n\r\n<body class=\"w3-light-grey\">\r\n\r\n<!-- w3-content defines a container for fixed size centered content,\r\nand is wrapped around the whole page content, except for the footer in this example -->\r\n<div class=\"w3-content\" style=\"max-width:1400px\">\r\n\r\n  <!-- Header -->\r\n  <header class=\"w3-container w3-center w3-padding-32\">\r\n    <h1><b>Welcome to Ding's WebSite</b></h1>\r\n\r\n  </header>\r\n\r\n  <!-- Grid -->\r\n  <div class=\"w3-row\">\r\n\r\n    <!-- Blog entries -->\r\n\r\n    <!-- Blog entry -->\r\n    <div class=\"w3-card-4 w3-margin w3-white\">\r\n      <img src=\"http://all4desktop.com/data_images/wallpapers/nature-and-landscape/055005.jpg\" alt=\"Nature\" style=\"width:20%\">\r\n      <div class=\"w3-container\">\r\n        <h3><b>A Little About Myself</b></h3>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"w3-container\">\r\n        <p>I'm a student majoring in Computer Science at Northeastern University.\r\n          I have a heart of love of Web Development. Hope to be better at it in the future. </p>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!-- END BLOG ENTRIES -->\r\n\r\n\r\n\r\n\r\n  <!-- Footer -->\r\n  <footer class=\"w3-container w3-dark-grey w3-padding-32 w3-margin-top\">\r\n\r\n      <button class=\"w3-button w3-black  w3-padding-large w3-margin-bottom\"\r\n              [routerLink] = \"['/login']\">Assignment</button>\r\n\r\n    <a href=\"https://webdev-news-app.herokuapp.com\">\r\n      <button class=\"w3-button w3-black w3-padding-large w3-margin-bottom\">Project</button>\r\n    </a>\r\n    <a href=\"https://github.com/DingAkiJin/webdev-Ding-Jin\">\r\n      <button class=\"w3-button w3-black w3-padding-large w3-margin-bottom\">Github</button>\r\n    </a>\r\n  </footer>\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left \">\r\n      <a [routerLink]=\"['/profile','website',wid,'page']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>Edit Page</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n\r\n\r\n    <!--check mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click) = \"updatePages(name, title)\"\r\n         [routerLink]=\"['/profile', 'website',wid,'page']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n<div class=\" container-fluid top-custom \">\r\n  <p>Name</p>\r\n  <input\r\n    [(ngModel)] = \"name\"\r\n    class=\"form-control\"\r\n    value=\"Blog Post\"\r\n    name = \"name\"/>\r\n\r\n  <p >Title</p>\r\n  <input [(ngModel)] = \"title\"\r\n         class=\"form-control \"\r\n         placeholder=\"Page Title\"\r\n         name = \"title\"\r\n         />\r\n  <a [routerLink]=\"['/profile','website',wid,'page']\" class=\"button\">\r\n    <button (click)=\"deletePage(wid,pid)\"\r\n      class=\"btn btn-danger btn-block top-custom\">\r\n      Delete\r\n    </button>\r\n  </a>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(sharedService, pageService, activatedRoute) {
        this.sharedService = sharedService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageEditComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    PageEditComponent.prototype.deletePage = function (wid, pid) {
        var _this = this;
        this.pageService.deletePage(wid, pid)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageEditComponent.prototype.updatePages = function (name, title) {
        var _this = this;
        // const newPage = new Page(this.pid, name, this.page.websiteId , title);
        var newPage = {
            _id: this.page._id,
            name: name,
            websiteId: this.page.websiteId,
            description: title
        };
        this.pageService.updatePage(this.wid, newPage)
            .subscribe(function (page) {
            _this.page = page;
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pid = params['pid'];
            //  this.userId = params['uid'];
            _this.wid = params['wid'];
            _this.pageService
                .findPageById(_this.wid, _this.pid).subscribe(function (page) {
                _this.page = page;
                _this.name = _this.page.name;
                _this.title = _this.page.description;
            });
        });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left \">\r\n      <a [routerLink]=\"['/profile', 'website']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>Pages</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n\r\n\r\n    <!--plus mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile', 'website', wId,'page','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-plus\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<!-- page lists -->\r\n\r\n<div class=\"container-fluid top-custom \">\r\n  <ul class=\"list-group\">\r\n    <li *ngFor = \"let page of pages\"\r\n        class=\"list-group-item\">\r\n      <a [routerLink]=\"['/profile','website', wId, 'page', page._id,'widget']\">\r\n      {{page.name}}\r\n        <a [routerLink]=\"['/profile','website',wId,'page',page._id]\">\r\n      <span class=\"glyphicon glyphicon-cog pull-right\">\r\n      </span>\r\n        </a>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageListComponent = (function () {
    function PageListComponent(sharedService, _pageService, activatedRoute) {
        this.sharedService = sharedService;
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            // this.userId = params['uid'];
            _this.wId = params['wid'];
            _this._pageService
                .findAllPagesForWebsite(_this.userId, _this.wId).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left \">\r\n      <a [routerLink]=\"['/profile','website', websiteId,'page']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>New Page</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n\r\n\r\n    <!--check mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"createPage(name, title)\" class=\"navbar-link\">\r\n        <span  class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\" container-fluid top-custom \">\r\n  <lable>Name</lable>\r\n  <input [(ngModel)] = \"name\"\r\n         name = \"name\"\r\n         class=\"form-control\"\r\n         placeholder=\"Page Name\"\r\n         required\r\n        />\r\n\r\n  <lable >Title</lable>\r\n  <input [(ngModel)] = \"title\"\r\n         name = \"title\"\r\n         class=\"form-control \"\r\n         placeholder=\"Page Title\"\r\n         required/>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(sharedService, _pageService, activatedRoute, router) {
        this.sharedService = sharedService;
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            // this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent.prototype.createPage = function (name, title) {
        var _this = this;
        // const page0: Page = new Page('', name , this.websiteId , title);
        var newPage = {
            name: name,
            websiteId: this.websiteId,
            description: title
        };
        this._pageService.createPage(this.websiteId, newPage)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n  <h1>Login</h1>\r\n\r\n\r\n\r\n    <input    [(ngModel)] = \"username\"\r\n              placeholder=\"username\"\r\n              name = \"username\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              required\r\n              #username1 = \"ngModel\"/>\r\n\r\n\r\n\r\n    <input   [(ngModel)] = \"password\"\r\n             placeholder=\"password\"\r\n             name = \"password\"\r\n             type=\"password\"\r\n             class=\"form-control\"\r\n             required\r\n             #password1 = \"ngModel\"/>\r\n\r\n\r\n    <button class=\"btn btn-primary btn-block\"\r\n            type=\"submit\"\r\n            (click) = \"login(username,password)\">Login</button>\r\n      <br/>\r\n\r\n\r\n    <button class=\"btn btn-success btn-block\"\r\n           [routerLink] = \"['/register']\">Register</button>\r\n\r\n  <a href=\"localhost:3100/facebook/login\" class=\"btn btn-primary btn-block\"\r\n          type=\"button\">\r\n    <span class=\"fa fa-facebook\"></span>\r\n    Facebook\r\n  </a>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(sharedService, userservice, router) {
        this.sharedService = sharedService;
        this.userservice = userservice;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userservice
            .login(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.errorFlag = false;
            _this.router.navigate(['/profile']);
        });
        // this.userservice.findUserByCredentials(username, password)
        //   .subscribe((user: User) => {
        //   if (user) {
        //     this.router.navigate(['/profile', user._id]);
        //   }
        // });
    };
    LoginComponent.prototype.register = function (username, password) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', username, password, '', '');
        this.userservice.createUser(user)
            .subscribe(function (user1) {
            if (user1) {
                _this.router.navigate(['/register']);
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<nav class=\"nav navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\" >\r\n      <a class=\"navbar-brand thick \">\r\n        <b>Profile</b>\r\n      </a>\r\n    </p>\r\n\r\n    <!--tick mark-->\r\n\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"updateUser(username,password,firstname,lastname)\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid top-custom\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input [(ngModel)] = \"username\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"username\"\r\n             placeholder=\"username\"\r\n             value = \"alice\"\r\n             name= \"username\"\r\n      >\r\n    </div>\r\n  </form>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input [(ngModel)] = \"password\"\r\n             name = \"password\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"email\"\r\n             value =\"alice.wonderland@unicorn.com\"\r\n\r\n      >\r\n    </div>\r\n  </form>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"first-name\">First Name</label>\r\n      <input [(ngModel)] = \"firstname\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"first-name\"\r\n             value = \"Alice\"\r\n             name = \"firstname\"\r\n      >\r\n    </div>\r\n  </form>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"last-name\">Last Name</label>\r\n      <input [(ngModel)] = \"lastname\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"last-name\"\r\n             value =\"Wonderland\"\r\n             name=\"lastname\">\r\n    </div>\r\n  </form>\r\n  <a class=\"btn btn-primary btn-block\"\r\n     [routerLink]=\"[ '/profile', 'website']\" >\r\n    Websites\r\n  </a>\r\n  <a (click) = \"logout()\" class=\"btn btn-danger btn-block\">\r\n    Logout\r\n  </a>\r\n</div>\r\n\r\n\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user\"  ></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(sharedService, userService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.updateUser = function (username, password, firstname, lastname) {
        var _this = this;
        var updateUser = {
            _id: this.userId,
            username: username,
            password: password,
            firstName: firstname,
            lastName: lastname,
        };
        this.userService.updateUser(updateUser).subscribe(function (user) {
            _this.user = user;
        });
    };
    ProfileComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.username = this.user['username'];
        this.password = this.user['password'];
        this.firstname = this.user['firstName'];
        this.lastname = this.user['lastName'];
        this.userId = this.user['_id'];
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.getUser();
        this.userService.findUserById(this.userId).subscribe(function (user) {
            _this.user = user;
        });
        // alert('userId: ' + this.userId);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1>Register</h1>\r\n\r\n  <input [(ngModel)] = \"username\"\r\n         placeholder=\"username\"\r\n         type=\"text\"\r\n         id=\"username\"\r\n         class=\"form-control\"\r\n          name = \"username\"/>\r\n  <input [(ngModel)]=\"password\"\r\n         placeholder=\"password\"\r\n         type=\"password\"\r\n         id=\"password\"\r\n         class=\"form-control\"\r\n         name = \"password\"\r\n          />\r\n  <input placeholder=\"verify password\"\r\n         [(ngModel)] = \"vpassword\"\r\n         name = \"vpassword\"\r\n         type=\"password\"\r\n         id=\"verify password\"\r\n         class=\"form-control\"\r\n         />\r\n  <a (click) =\"regSuccess(username, password)\" class=\"btn btn-primary btn-block\">\r\n    <button class=\"btn btn-primary btn-block\"\r\n             type = \"submit\"\r\n             >\r\n    Register\r\n    </button>\r\n  </a>\r\n  <a  (click)=\"deleteUser(user._id)\"  class=\"buttom\">\r\n    <button class=\"btn btn-danger btn-block left-custom\" routerLink=\"/login\">\r\n      Cancel\r\n    </button>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(sharedService, userService, router, activatedRoute) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    RegisterComponent.prototype.deleteUser = function (uid) {
        var _this = this;
        this.userService.deleteUser(uid)
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    RegisterComponent.prototype.regSuccess = function (username, password) {
        var _this = this;
        this.username = username;
        this.password = password;
        this.userService.register(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/profile']);
        });
        //  this.userService.findUserByUsername(this.username)
        //    .subscribe((user) => {
        //    console.log(user);
        //    if  (user === null)  {
        //      const newUser = {
        //        username: this.username ,
        //        password: this.password
        //    }
        //      this.userService.createUser(newUser).subscribe((user1) => {
        //        console.log(user1);
        //        this.router.navigate(['/profile', user1._id]);
        //        // if (user1) {
        //          // this.router.navigate(['/register', user1._id]);
        //        // }
        //      });
        //      // this.router.navigate(['/profile', this.user._id]);
        //    }
        //    });
        // // if ( this.password === this.vpassword) {
        // //   this.router.navigate(['/profile', this.user._id]);
        // // }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            return _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.user = user;
                _this.username = user.username;
                _this.password = user.password;
            });
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 hidden-xs\">\r\n      <nav class=\"nav navbar navbar-inverse my-navbar-top \">\r\n        <!--arrow mark-->\r\n        <p class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/profile','website']\" class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n          </a>\r\n        </p>\r\n\r\n        <!--heading on the nav bar-->\r\n        <div class=\".left-custom\">\r\n          <p class=\"navbar-header pull-left \">\r\n            <a class=\"navbar-brand thick \">\r\n              <b>Websites</b>\r\n            </a>\r\n          </p>\r\n        </div>\r\n        <!--plus mark-->\r\n        <p class=\"navbar-text pull-right\">\r\n          <a [routerLink]=\"['/profile','website','new']\" class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-plus\"></span>\r\n          </a>\r\n        </p>\r\n      </nav>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <nav class=\"nav navbar navbar-inverse my-navbar-top\">\r\n        <!--heading on the nav bar-->\r\n        <div class=\".left-custom\">\r\n          <p class=\"navbar-header pull-left \">\r\n            <a class=\"navbar-brand thick \">\r\n              <b>Edit Website</b>\r\n            </a>\r\n          </p>\r\n        </div>\r\n        <!--check mark-->\r\n        <p class=\"navbar-text pull-right\">\r\n          <a [routerLink]=\"['/profile','website']\" class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-ok\"></span>\r\n          </a>\r\n        </p>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <!-- Footer -->\r\n  <nav class=\"nav navbar navbar-inverse navbar-fixed-bottom\">\r\n    <div class=\"container-fluid\">`\r\n      <p class=\"navbar-text pull-right\">\r\n        <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-user\" style=\"color:white\"></span>\r\n        </a>\r\n      </p>\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<div class=\"col-sm-3 hidden-xs top-custom\">\r\n  <app-website-list></app-website-list>\r\n</div>\r\n\r\n<div class=\"col-sm-9 top-custom \">\r\n  <lable>Website Name</lable>\r\n  <input\r\n    [(ngModel)] = \"name\"\r\n    class=\"form-control\"\r\n    type=\"text\"\r\n    value=\"Blogger\"\r\n    name=\"name\"\r\n    />\r\n  <lable>Website Description</lable>\r\n  <textarea\r\n    [(ngModel)] = \"description\"\r\n    class=\"form-control \"\r\n    rows=\"8\"\r\n  name = \"description\">Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was developed by Pyra Labs, which was bought by Google in 2003. Generally, the blogs are hosted by Google at a subdomain of blogspot.com. Blogs can also be hosted in the registered custom domain of the blogger (like www.example.com). A user can have up to 100 blogs per account.\r\n        </textarea>\r\n\r\n  <br/>\r\n  <button (click) = \"updateWebsits(name,description)\"\r\n          class = \"btn btn-block btn-primary\">\r\n    Update Website</button>\r\n\r\n  <a [routerLink]=\"['/profile', 'website']\">\r\n  <button class=\"btn btn-danger btn-block \">\r\n    Delete\r\n  </button>\r\n  </a>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(sharedService, websiteService, activatedRoute) {
        this.sharedService = sharedService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteEditComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.uid = this.user['_id'];
    };
    WebsiteEditComponent.prototype.updateWebsits = function (websiteName, description) {
        var _this = this;
        var newWebsite = {
            _id: this.website._id,
            name: websiteName,
            developerId: this.website.developerId,
            description: description
        };
        this.websiteService.updateWebsite(this.uid, newWebsite)
            .subscribe(function (website) {
            _this.website = website;
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wid = params['wid'];
            // this.uid = params['uid'];
            _this.websiteService
                .findWebsiteById(_this.uid, _this.wid).subscribe(function (website) {
                _this.website = website;
            });
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-inverse  navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>Websites</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n\r\n\r\n    <!--plus mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile', 'website','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-plus\"></span>\r\n      </a>\r\n    </p>\r\n    <!-- Footer -->\r\n    <nav class=\"nav navbar navbar-inverse navbar-fixed-bottom\">\r\n      <div class=\"container-fluid\">\r\n        <p class=\"navbar-text pull-right\">\r\n          <a [routerLink]=\"['/profile']\"class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-user\"></span>\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</nav>\r\n<!-- website lists -->\r\n\r\n\r\n\r\n<div class=\"container-fluid top-custom \">\r\n  <ul class=\"list-group\">\r\n    <li  *ngFor = \"let website of websites\"\r\n         class=\"list-group-item\">\r\n      <a [routerLink]=\"['/profile', 'website', website._id, 'page']\">\r\n      {{website.name}}\r\n      </a>\r\n      <a (click)=\"deleteWebsite(website._id)\" class=\"pull-right\">\r\n        <span class = \"glyphicon glyphicon-remove\"></span>\r\n      </a>\r\n      <a\r\n         [routerLink]=\"['/profile', 'website', website._id]\">\r\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteListComponent = (function () {
    function WebsiteListComponent(sharedService, _websiteService, activatedRoute) {
        this.sharedService = sharedService;
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.uid = this.user['_id'];
    };
    WebsiteListComponent.prototype.updateWebsits = function (websiteName) {
        var _this = this;
        var newWebsite = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */](this.website._id, websiteName, this.website.developerId, '');
        this._websiteService.updateWebsite(this.uid, newWebsite)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteListComponent.prototype.selectWebsite = function (WebsiteId) {
        var _this = this;
        this._websiteService.findWebsiteById(this.uid, WebsiteId)
            .subscribe(function (website) {
            _this.website = website;
            _this.websiteName = _this.website.name;
        });
    };
    WebsiteListComponent.prototype.deleteWebsite = function (websiteId) {
        var _this = this;
        this._websiteService.deleteWebsite(websiteId, this.uid)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this._websiteService.findWebsitesByUser(this.uid)
            .subscribe(function (data) {
            console.log(data);
            _this.websites = data;
        }, function (error) { return console.log(error); });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 hidden-xs\">\r\n      <nav class=\"nav navbar navbar-inverse my-navbar-top \">\r\n        <!--arrow mark-->\r\n        <p class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/profile', 'website']\" class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n          </a>\r\n        </p>\r\n\r\n        <!--heading on the nav bar-->\r\n        <div class=\".left-custom\">\r\n          <p class=\"navbar-header pull-left \">\r\n            <a class=\"navbar-brand thick \">\r\n              <b>Websites</b>\r\n            </a>\r\n          </p>\r\n        </div>\r\n        <!--plus mark-->\r\n        <p class=\"navbar-text pull-right\">\r\n          <a [routerLink]=\"['/profile','website','new']\" class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-plus\"></span>\r\n          </a>\r\n        </p>\r\n      </nav>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <nav class=\"nav navbar navbar-inverse my-navbar-top\">\r\n        <!--heading on the nav bar-->\r\n        <div class=\".left-custom\">\r\n          <p class=\"navbar-header pull-left \">\r\n            <a class=\"navbar-brand thick \">\r\n              <b>New Website</b>\r\n            </a>\r\n          </p>\r\n        </div>\r\n        <!--check mark-->\r\n        <p class=\"navbar-text pull-right\">\r\n          <a [routerLink]=\"['/profile','website']\" class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-ok\"></span>\r\n          </a>\r\n        </p>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <!-- Footer -->\r\n  <nav class=\"nav navbar navbar-inverse navbar-fixed-bottom\">\r\n    <div class=\"container-fluid\">\r\n      <p class=\"navbar-text pull-right\">\r\n        <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-user\"></span>\r\n        </a>\r\n      </p>\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div class=\"col-sm-3 hidden-xs top-custom\">\r\n  <ul class=\"list-group\">\r\n    <li  *ngFor = \"let website of websites\"\r\n         class=\"list-group-item\">\r\n\r\n      <a [routerLink]=\"['/profile', 'website', website._id, 'page']\">\r\n        {{website.name}}\r\n        <a [routerLink]=\"['/profile','website',website._id]\">\r\n      <span class=\"glyphicon glyphicon-cog pull-right\">\r\n      </span>\r\n        </a>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n\r\n<div class=\"col-sm-9 top-custom \">\r\n  <lable>Name</lable>\r\n  <input [(ngModel)] =\"websitename\" class=\"form-control\" name = \"websitename\"/>\r\n  <lable>Description</lable>\r\n  <textarea [(ngModel)] = \"description\" class=\"form-control \" name=\"description\"\r\n            rows=\"8\"></textarea>\r\n  <br/>\r\n  <button (click) = \"createWebsite(websitename,description)\"\r\n                                    class = \"btn btn-block btn-primary\">\r\n  Create Website</button>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(router, sharedService, _websiteService, activatedRoute) {
        this.router = router;
        this.sharedService = sharedService;
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteNewComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.uid = this.user['_id'];
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        // this.activatedRoute.params.subscribe(
        // (params) => {
        // this.uid = params['uid'];
        this._websiteService
            .findWebsitesByUser(this.uid).subscribe(function (websites) {
            _this.websites = websites;
        });
        // };
    };
    WebsiteNewComponent.prototype.createWebsite = function (websitename, description) {
        var _this = this;
        // const website: Website = new Website('', websitename , '' , description);
        var newWebsite = {
            name: websitename,
            description: description
        };
        this._websiteService.createWebsite(this.uid, newWebsite)
            .subscribe(function (data) { return _this.router.navigate(['profile/', 'website']); });
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left \">\r\n      <a [routerLink]=\"['/profile','website',websiteId,'page',pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>Choose Widget</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n\r\n</nav>\r\n\r\n<!-- website lists -->\r\n<div class=\"container-fluid top-custom \">\r\n  <ul class=\"list-group\">\r\n    <li (click) = \"createWidget('HEADING')\"class=\"list-group-item\">\r\n      <a >\r\n        Header\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/profile','website',websiteId,'page',pId,'widget']\">\r\n        Label\r\n      </a>\r\n    </li>\r\n    <li (click) = \"createWidget('HTML')\" class=\"list-group-item\">\r\n      <a >\r\n        HTML\r\n      </a>\r\n    </li>\r\n    <li (click) = \"createWidget('TEXT')\" class=\"list-group-item\">\r\n      <a >\r\n        Text Input\r\n\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/profile','website',websiteId,'page',pId,'widget']\">\r\n        Link\r\n\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/profile','website',websiteId,'page',pId,'widget']\">\r\n        Button\r\n\r\n      </a>\r\n    </li>\r\n    <li (click) = \"createWidget('IMAGE')\" class=\"list-group-item\">\r\n      <a >\r\n        Image\r\n\r\n      </a>\r\n    </li>\r\n    <li (click) = \"createWidget('YOUTUBE')\" class=\"list-group-item\">\r\n      <a >\r\n        YouTube\r\n\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/profile','website',websiteId,'page',pId,'widget']\">\r\n        Data table\r\n\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/profile','website',websiteId,'page',pId,'widget']\">\r\n        Repeater\r\n\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(sharedService, widgetService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pId = params['pid'];
            // this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        var _this = this;
        // const widget:  Widget = new Widget('', widgetType, this.pId, 0, '' , '' , '');
        var newWidget = {
            widgetType: widgetType,
            pageId: this.pId,
        };
        this.widgetService.createWidget(this.pId, newWidget)
            .subscribe(function (widget0) {
            if (widget0) {
                _this.router.navigate(['/profile', 'website', _this.websiteId, 'page', _this.pId, 'widget', widget0._id]);
            }
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetChooserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\r\n\r\n  <div *ngSwitchCase=\"'HEADING'\">\r\n    <app-widget-heading></app-widget-heading>\r\n  </div>\r\n  <div *ngSwitchCase=\"'IMAGE'\">\r\n    <app-widget-image></app-widget-image>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'YOUTUBE'\">\r\n    <app-widget-youtube></app-widget-youtube>\r\n\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'HTML'\">\r\n  <app-widget-html></app-widget-html>\r\n\r\n   </div>\r\n  <div *ngSwitchCase=\"'TEXT'\">\r\n    <app-widget-text></app-widget-text>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = (function () {
    function WidgetEditComponent(sharedService, widgetService, activatedRoute) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = { widgetType: '' };
    }
    WidgetEditComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            // this.userId = params['uid'];
            _this.pId = params['pid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget0) {
            _this.widget.widgetType = widget0.widgetType.toString();
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left \">\r\n      <a [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>Widget Edit</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n    <!--check mark-->\r\n    <p class=\"navbar-text pull-right \">\r\n      <a (click) = \"updateWidget(text, size)\"\r\n        [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok \"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n\r\n</nav>\r\n\r\n\r\n<p class=\"container-fluid top-custom \">\r\n  <lable>Name</lable>\r\n  <input [(ngModel)]=\"widgetType\"\r\n         class=\"form-control\"\r\n         name = \"widgetType\"/>\r\n  <lable>Text</lable>\r\n  <input [(ngModel)]=\"text\"\r\n         class=\"form-control\"\r\n         type=\"text\"\r\n          name =\"text\"/>\r\n  <label>Size</label>\r\n  <input [(ngModel)] = \"size\"\r\n        class=\"form-control\"\r\n        type=\"number\"\r\n        value=\"3\"\r\n        name = \"size\"/>\r\n\r\n\r\n  <a [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"button\">\r\n    <button (click)=\"deleteWidget(pId,widgetId)\"\r\n            class=\"btn btn-danger btn-block \">\r\n      Delete\r\n    </button>\r\n  </a>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeadingComponent = (function () {
    function WidgetHeadingComponent(sharedService, widgetService, activatedRoute) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetHeadingComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WidgetHeadingComponent.prototype.deleteWidget = function (pid, wgid) {
        var _this = this;
        this.widgetService.deleteWidget(pid, wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetHeadingComponent.prototype.updateWidget = function (text, size) {
        var _this = this;
        // const newWidget = new Widget(this.widgetId, 'HEADING', this.pId , size , text, '', '');
        var newWidget = {
            _id: this.widgetId,
            widgetType: 'HEADING',
            pageId: this.pId,
            size: size,
            text: text,
            width: '',
            url: '',
        };
        this.widgetService.updateWidget(this.pId, this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
        });
    };
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            // this.userId = params['uid'];
            _this.pId = params['pid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget0) {
                if (widget0) {
                    _this.widget = widget0;
                    _this.widgetType = widget0.widgetType;
                    _this.size = widget0.size;
                    _this.text = widget0.text;
                }
            });
        });
    };
    return WidgetHeadingComponent;
}());
WidgetHeadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-heading',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHeadingComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!--Left arrow-->\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/profile','website',websiteId,'page', pId,'widget']\"class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n    <span>\r\n        <!--heading on the nav bar-->\r\n        <p class=\"navbar-header pull-left\">\r\n            <a class=\"navbar-brand thick\">\r\n                <b>Widget Edit</b>\r\n            </a>\r\n        </p>\r\n        </span>\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click) = \"updateWidget(name,text)\"\r\n        [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <!--<div *ngIf=\"flag\"-->\r\n  <!--class=\"alert alert-danger\">-->\r\n  <!--&lt;!&ndash;{{error}}&ndash;&gt;-->\r\n  <!--</div>-->\r\n  <p class=\"container-fluid top-custom \">\r\n    <div class=\"form-group\">\r\n      <label for=\"Name\">Name</label>\r\n      <input\r\n        [(ngModel)] = \"name\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        id=\"Name\"\r\n        name=\"name\"\r\n        placeholder=\"Name\"\r\n        required>\r\n      <!--<span class=\"alert-class\"-->\r\n      <!--*ngIf=\"flag\">{{alert}}</span>-->\r\n    </div>\r\n    <quill-editor [(ngModel)]=\"text\" name=\"text\"></quill-editor>\r\n\r\n\r\n<br/>\r\n\r\n  <a [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"button\">\r\n    <button (click)=\"deleteWidget(pId,widgetId)\"\r\n            class=\"btn btn-danger btn-block \">\r\n      Delete\r\n    </button>\r\n  </a>\r\n\r\n</div>\r\n\r\n<!-- Footer -->\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(sharedService, widgetService, activatedRoute) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetHtmlComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WidgetHtmlComponent.prototype.deleteWidget = function (pid, wgid) {
        var _this = this;
        this.widgetService.deleteWidget(pid, wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function (name, text) {
        var _this = this;
        // const newWidget = new Widget(this.widgetId, 'HEADING', this.pId , size , text, '', '');
        var newWidget = {
            _id: this.widgetId,
            widgetType: 'HTML',
            pageId: this.pId,
            text: text,
            name: name,
        };
        this.widgetService.updateWidget(this.pId, this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
        });
    };
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            // this.userId = params['uid'];
            _this.pId = params['pid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget0) {
                if (widget0) {
                    _this.widget = widget0;
                    _this.widgetType = widget0.widgetType;
                    _this.name = widget0.name;
                    _this.text = widget0.text;
                }
            });
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!--Left arrow-->\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/profile', 'website',websiteId,'page', pageId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n    <span>\r\n        <!--heading on the nav bar-->\r\n        <p class=\"navbar-header pull-left\">\r\n            <a class=\"navbar-brand thick\">\r\n                <b>Search Flickr</b>\r\n            </a>\r\n        </p>\r\n        </span>\r\n  </div>\r\n</nav>\r\n<h1>Input</h1>\r\n<!--!!Material on the page!!-->\r\n<div class = \"container-fluid top-custom\">\r\n  <div class=\"input-group\">\r\n\r\n    <input  [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\r\n    <span class=\"input-group-btn\">\r\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\r\n                <span class=\"glyphicon glyphicon-search\"></span>\r\n            </a>\r\n        </span>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div *ngFor = \"let pic of photos\"\r\n         class=\"col-xs-4\">\r\n      <img    (click)=\"selectPhoto(pic)\"\r\n              width=\"100%\"\r\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\r\n\r\n\r\n      <p></p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!-- Footer -->\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <!--Play Symbol-->\r\n    <!--User Symbol-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    FlickrImageSearchComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        // fetch userId, pageId and websiteId from url
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos['photo'];
        });
        // .then(function (response) {
        //   let dat = response.data.replace('jsonFlickrApi(', '');
        //   dat = dat.substring(0, dat.length - 1);
        //   dat = JSON.parse(dat);
        //   this.photos = dat.photos;
        // });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            pageId: this.pageId,
            url: url
        };
        this.widgetService
            .updateWidget(this.pageId, this.widgetId, widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/profile/' + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/' + _this.widgetId]);
            }
            else {
                _this.error = 'failed!';
            }
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=flickr-image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"nav navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left \">\r\n      <a [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>Widget Edit</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n    <!--check mark-->\r\n    <p class=\"navbar-text pull-right \">\r\n      <a (click) = \"updateWidget(text, url, width)\"\r\n        [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok \"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid top-custom \">\r\n  <lable>Name</lable>\r\n  <input [(ngModel)]=\"widgetType\"\r\n         class=\"form-control\"\r\n         name = \"widgetType\"/>\r\n  <lable>Text</lable>\r\n  <input [(ngModel)]=\"text\"\r\n         class=\"form-control\"\r\n         type=\"text\"\r\n          name = \"text\"/>\r\n  <lable>URL</lable>\r\n  <input [(ngModel)]=\"url\"\r\n        class=\"form-control\"\r\n         type =\"url\"\r\n         value =\"http://lorempixel.com/400/200\"\r\n         name =\"url\"/>\r\n  <lable>Width</lable>\r\n  <input [(ngModel)]=\"width\"\r\n         class=\"form-control\"\r\n         value=\"100%\"\r\n         name = \"width\"/>\r\n\r\n\r\n\r\n\r\n\r\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\r\n\r\n    <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\r\n    <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\r\n    <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\r\n    <input  name=\"pageId\" value=\"{{pId}}\"   style=\"display: none\"/>\r\n    <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\r\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\r\n    <br/>\r\n\r\n  </form>\r\n  <a class=\"btn btn-primary btn-block \"\r\n\r\n     [routerLink]=\"['/profile/'+  '/website/'+websiteId+'/page/'+pId+'/widget/'+widgetId+'/flickr']\" >Choose From Flickr</a>\r\n\r\n\r\n  <div class=\"left-custom\">\r\n    <a [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"button\">\r\n      <button (click)=\"deleteWidget(pId,widgetId)\" class=\"btn btn-danger btn-block \">\r\n        Delete\r\n      </button>\r\n    </a>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = (function () {
    function WidgetImageComponent(sharedService, widgetService, activatedRoute) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetImageComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WidgetImageComponent.prototype.updateWidget = function (text, url, width) {
        var _this = this;
        // const newWidget = new Widget(this.widgetId, 'IMAGE', this.pId , 0 , '', this.width, this.url);
        var newWidget = {
            _id: this.widgetId,
            widgetType: 'IMAGE',
            pageId: this.pId,
            size: 0,
            text: text,
            width: width,
            url: url,
        };
        this.widgetService.updateWidget(this.pId, this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function (pid, wgid) {
        var _this = this;
        this.widgetService.deleteWidget(pid, wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.activatedRoute.params
            .subscribe(function (params) {
            // this.userId = params['uid'];
            _this.pId = params['pid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget0) {
                if (widget0) {
                    _this.widget = widget0;
                    _this.widgetType = widget0.widgetType;
                    _this.width = widget0.width;
                    _this.url = widget0.url;
                    _this.text = widget0.text;
                }
            });
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header-->\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!--Left arrow-->\r\n    <p class=\"navbar-text pull-left\">\r\n      <a  [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n    <span>\r\n        <!--heading on the nav bar-->\r\n        <p class=\"navbar-header pull-left\">\r\n            <a class=\"navbar-brand thick\">\r\n                <b>Widget Edit</b>\r\n            </a>\r\n        </p>\r\n        </span>\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click) = \"updateWidget(text, rows, name, placeholder, formatted)\"\r\n        [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\"\r\n          class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<!--Body of the page -->\r\n<div class=\"container-fluid top-custom\">\r\n\r\n  Text\r\n  <input [(ngModel)]= \"text\" name = \"text\" class=\"form-control\"/>\r\n  Rows\r\n  <input [(ngModel)]=\"rows\" name = \"rows\" class=\"form-control\" type=\"number\"/>\r\n\r\n  <label for=\"Name\">Name</label>\r\n  <div>\r\n    <input\r\n           type=\"text\"\r\n           class=\"form-control\"\r\n           id=\"Name\"\r\n           name=\"name\"\r\n           placeholder=\"Name\">\r\n\r\n  </div>\r\n\r\n  Placeholder\r\n  <input [(ngModel)] = \"placeholder\"  name = \"placeholder\" class=\"form-control\" required/>\r\n  <p></p>\r\n  <div class=\"input-group\">\r\n    <input type=\"text\"\r\n           readonly\r\n           value=\"Formatted\"\r\n           class=\"form-control\"/>\r\n    <span class=\"input-group-addon\">\r\n        <input [(ngModel)] = \"formatted\"\r\n               name = \"formatted\"\r\n               type=\"checkbox\"/>\r\n    </span>\r\n  </div>\r\n\r\n  <p></p>\r\n\r\n  <a [routerLink]=\"['/profile','website',websiteId,'page', pId,'widget']\" class=\"button\">\r\n    <button (click)=\"deleteWidget(pId,widgetId)\"\r\n            class=\"btn btn-danger btn-block \">\r\n      Delete\r\n    </button>\r\n  </a>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = (function () {
    function WidgetTextComponent(sharedService, widgetService, activatedRoute) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetTextComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WidgetTextComponent.prototype.deleteWidget = function (pid, wgid) {
        var _this = this;
        this.widgetService.deleteWidget(pid, wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetTextComponent.prototype.updateWidget = function (text, rows, name, placeholder, formatted) {
        var _this = this;
        // const newWidget = new Widget(this.widgetId, 'HEADING', this.pId , size , text, '', '');
        var newWidget = {
            _id: this.widgetId,
            widgetType: 'TEXT',
            pageId: this.pId,
            text: text,
            rows: rows,
            name: name,
            placeholder: placeholder,
            formatted: formatted
        };
        this.widgetService.updateWidget(this.pId, this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
        });
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            // this.userId = params['uid'];
            _this.pId = params['pid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget0) {
                if (widget0) {
                    _this.widget = widget0;
                    _this.widgetType = widget0.widgetType;
                    _this.name = widget0.name;
                    _this.rows = widget0.rows;
                    _this.text = widget0.text;
                    _this.placeholder = widget0.placeholder;
                    _this.formatted = widget0.formatted;
                }
            });
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left \">\r\n      <a [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>Widget Edit</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n    <!--check mark-->\r\n    <p class=\"navbar-text pull-right \">\r\n      <a (click) = \"updateWidget(text, url, width)\"\r\n        [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok \"></span>\r\n      </a>\r\n    </p>\r\n\r\n  </div>\r\n</nav>\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid top-custom \">\r\n  <lable>Name</lable>\r\n  <input [(ngModel)]=\"widgetType\"\r\n         class=\"form-control\"\r\n          name = \"widgetType\"/>\r\n  <lable>Text</lable>\r\n  <input [(ngModel)]=\"text\"\r\n         class=\"form-control\"\r\n         name = \"text\"\r\n         type=\"text\"/>\r\n  <lable>URL</lable>\r\n  <input [(ngModel)] = \"url\"\r\n         class=\"form-control\"\r\n         type=\"url\"\r\n         value=\"https://www.youtube.com/embed/RY4rWrlY-qM\"\r\n         name=\"url\"/>\r\n  <lable>Width</lable>\r\n  <input [(ngModel)]=\"width\"\r\n         class=\"form-control\"\r\n          name =\"width\"/>\r\n  <a [routerLink]=\"['/profile', 'website',websiteId,'page', pId,'widget']\" class=\"button\">\r\n    <button (click)=\"deleteWidget(pId,widgetId)\" class=\"btn btn-danger btn-block \">\r\n      Delete\r\n    </button>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(sharedService, widgetService, activatedRoute) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetYoutubeComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WidgetYoutubeComponent.prototype.updateWidget = function (text, url, width) {
        var _this = this;
        // const newWidget = new Widget(this.widgetId, 'YOUTUBE', this.pId , 0 , '', this.width, this.url);
        var newWidget = {
            _id: this.widgetId,
            widgetType: 'YOUTUBE',
            pageId: this.pId,
            size: 0,
            text: text,
            width: width,
            url: url
        };
        this.widgetService.updateWidget(this.pId, this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
        });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function (pid, wgid) {
        var _this = this;
        this.widgetService.deleteWidget(pid, wgid)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            // this.userId = params['uid'];
            _this.pId = params['pid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget0) {
                if (widget0) {
                    _this.widget = widget0;
                    _this.widgetType = widget0.widgetType;
                    _this.width = widget0.width;
                    _this.url = widget0.url;
                    _this.text = widget0.text;
                }
            });
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'orderBy'
    })
], OrderByPipe);

//# sourceMappingURL=order-by-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/safe-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        // splitting input url on '='
        // the result is two elements in the output array
        var parts = url.split('=');
        var id = parts[1];
        url = 'https://www.youtube.com/embed/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/webdev-sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebdevSortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebdevSortableDirective = (function () {
    function WebdevSortableDirective(el) {
        this.el = el;
        this.orderChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    WebdevSortableDirective.prototype.ngAfterViewInit = function () {
        this.onAfterViewInit(this);
    };
    WebdevSortableDirective.prototype.onAfterViewInit = function (element) {
        jQuery(this.el.nativeElement).sortable({
            start: function (event, ui) {
                this.start = ui.item.index();
            },
            stop: function (event, ui) {
                this.stop = ui.item.index();
                var index = { start: this.start, stop: this.stop };
                element.orderChanged.emit(index);
            }
        });
    };
    return WebdevSortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WebdevSortableDirective.prototype, "orderChanged", void 0);
WebdevSortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({ selector: '[webDevSortable]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], WebdevSortableDirective);

var _a;
//# sourceMappingURL=webdev-sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget{\r\n  position: relative;\r\n  padding-bottom: 56.25%;/* 16:9 */\r\n  height: 0;\r\n\r\n}\r\n\r\n.youtube-widget iframe{\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--arrow mark-->\r\n    <p class=\"navbar-text pull-left \">\r\n      <a [routerLink]=\"['/profile','website',wId,'page']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n\r\n    <!--heading on the nav bar-->\r\n    <div class=\".left-custom\">\r\n      <p class=\"navbar-header pull-left \">\r\n        <a class=\"navbar-brand thick \">\r\n          <b>Widgets</b>\r\n        </a>\r\n      </p>\r\n    </div>\r\n\r\n\r\n    <!--plus mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile','website',wId,'page',pId,'widget','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-plus\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<!-- Footer -->\r\n<nav class=\"nav navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n    <!--play mark-->\r\n    <p class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/profile','website','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-play\"></span>\r\n      </a>\r\n    </p>\r\n    <!--eye open mark-->\r\n    <p class=\"navbar-text left-to-object\">\r\n      <a [routerLink]=\"['/profile','website','new']\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid top-custom \"  >\r\n  <ul class=\"list-group\" appSortable (newIndexes)=\"reorderWidgets($event)\">\r\n\r\n    <li *ngFor=\"let widget of widgets \"\r\n        class=\"list-group-item\">\r\n\r\n      <div [ngSwitch]=\"widget.widgetType\">\r\n\r\n        <div *ngSwitchCase=\"'HEADING'\">\r\n          <div class=\"container-fluid top-custom\">\r\n            <div class=\"webdev-widget\">\r\n              <div class=\"webdev-widget-toolbar\">\r\n                <p class=\"glyphicon\">\r\n                  <a [routerLink]=\"['/profile','website',wId,'page',pId,'widget',widget._id]\" class=\"navbar-link\">\r\n                    <span class=\"glyphicon glyphicon-cog\"></span>\r\n                  </a>\r\n                  <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n                </p>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <h1>{{widget.text}}</h1>\r\n\r\n\r\n        <div *ngSwitchCase=\"'IMAGE'\">\r\n          <div class=\"webdev-widget\">\r\n            <div class=\"webdev-widget-toolbar\">\r\n              <p class=\"glyphicon\">\r\n                <a [routerLink]=\"['/profile','website',wId,'page',pId,'widget',widget._id]\" class=\"navbar-link\">\r\n                  <span class=\"glyphicon glyphicon-cog\"></span>\r\n                </a>\r\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n              </p>\r\n            </div>\r\n            <img  [style.width] = \"widget.width\" [src] =\"updateImageUrl(widget.url)\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div *ngSwitchCase=\"'YOUTUBE'\" >\r\n          <div class=\"webdev-widget\">\r\n            <div class=\"webdev-widget-toolbar\" >\r\n              <p class=\"glyphicon\">\r\n                <a [routerLink]=\"['/profile','website',wId,'page',pId,'widget',widget._id]\" class=\"navbar-link\">\r\n                  <span class=\"glyphicon glyphicon-cog\"></span>\r\n                </a>\r\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n              </p>\r\n            </div>\r\n            <div class =\"youtube-widget\">\r\n              <p><iframe width={{widget.width}} height=\"315\" [src]='sanitizer.bypassSecurityTrustResourceUrl(widget.url)' frameborder=\"0\" allowfullscreen></iframe></p>\r\n            </div>\r\n          </div>\r\n          <h1>youtube</h1>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'HTML'\" >\r\n          <div class=\"webdev-widget\">\r\n            <div class=\"webdev-widget-toolbar\">\r\n              <p class=\"glyphicon\">\r\n                <a [routerLink]=\"['/profile','website',wId,'page',pId,'widget',widget._id]\" class=\"navbar-link\">\r\n                  <span class=\"glyphicon glyphicon-cog\"></span>\r\n                </a>\r\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n              </p>\r\n            </div>\r\n            <div  [innerHTML]=\"widget.text\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"'TEXT'\">\r\n          <div class=\"webdev-widget\">\r\n            <div class=\"webdev-widget-toolbar\">\r\n              <p class=\"glyphicon\">\r\n                <a [routerLink]=\"['/profile','website',wId,'page',pId,'widget',widget._id]\" class=\"navbar-link\">\r\n                  <span class=\"glyphicon glyphicon-cog\"></span>\r\n                </a>\r\n                <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n              </p>\r\n            </div>\r\n\r\n            <div *ngIf=\"widget.formatted\">\r\n              <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\r\n            </div>\r\n\r\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\r\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\r\n\r\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\r\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\r\n                      class=\"form-control\">{{widget.text}}</textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetListComponent = (function () {
    function WidgetListComponent(sharedService, _widgetService, activatedRoute, sanitizer) {
        this.sharedService = sharedService;
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetListComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
    };
    WidgetListComponent.prototype.updateImageUrl = function (string) {
        var newurl = '';
        if (string.substring(1, 4) == 'ass') {
            newurl = this.baseUrl + string;
        }
        else {
            newurl = string;
        }
        return newurl;
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wId = params['wid'];
            // this.userId = params['uid'];
            _this.pId = params['pid'];
            _this._widgetService
                .findAllWidgetsForPage(_this.userId, _this.wId, _this.pId).subscribe(function (widgets) {
                _this.widgets = widgets;
                console.log(_this.widgets);
            });
        });
        // this.widgets = this._widgetService.findWidgetByPageId(this.pId);
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this._widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pId)
            .subscribe(function (data) { return console.log(data); });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, firstname, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstname;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/omdb-test/omdbtest/omdbtest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/omdb-test/omdbtest/omdbtest.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> News API Test</h1>\r\n\r\n<label>News Title</label>\r\n<input [(ngModel)]=\"title\" class = \"form-control\"/>\r\n<button (click) = \"searchMovie(title)\"\r\n        class = \"btn btn-primary btn-block\">\r\n  Search\r\n</button>\r\n\r\n<ul class = \"list-group\">\r\n  <li class = \"list-group-item\" *ngFor = \"let news of result.articles\">\r\n    {{news.title}}\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/omdb-test/omdbtest/omdbtest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmdbtestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__ = __webpack_require__("../../../../../src/app/services/omdb.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OmdbtestComponent = (function () {
    function OmdbtestComponent(omdbService) {
        this.omdbService = omdbService;
    }
    OmdbtestComponent.prototype.searchMovie = function (title) {
        var _this = this;
        this.omdbService.searchMovieByTitle(title)
            .subscribe(function (result) {
            _this.result = result;
            console.log(result);
        });
    };
    OmdbtestComponent.prototype.ngOnInit = function () {
    };
    return OmdbtestComponent;
}());
OmdbtestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-omdbtest',
        template: __webpack_require__("../../../../../src/app/omdb-test/omdbtest/omdbtest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/omdb-test/omdbtest/omdbtest.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__["a" /* OmdbServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__["a" /* OmdbServiceClient */]) === "function" && _a || Object])
], OmdbtestComponent);

var _a;
//# sourceMappingURL=omdbtest.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = 'b380c08a1cafdd396ca2db76d233f026';
        this.secret = 'cc3d245bb4eec4fb';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])() // needed as we're injecting Http service into this service
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/omdb.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmdbServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OmdbServiceClient = (function () {
    function OmdbServiceClient(http) {
        this.http = http;
    }
    OmdbServiceClient.prototype.searchMovieByTitle = function (title) {
        var url = 'https://newsapi.org/v2/top-headlines?sources=' + title + '&apiKey=9a540554d49b44e3ad4458f8bae3e747';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return OmdbServiceClient;
}());
OmdbServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], OmdbServiceClient);

var _a;
//# sourceMappingURL=omdb.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.findAllPagesForWebsite = function (uid, wid) {
        var url = this.baseUrl + '/api/website/' + wid + '/page';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (wid, pid) {
        var url = this.baseUrl + '/api/website/' + wid + '/page/' + pid;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.createPage = function (wid, page) {
        var url = this.baseUrl + '/api/website/' + wid + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
    };
    PageService.prototype.updatePage = function (wid, newPage) {
        var url = this.baseUrl + '/api/website/' + wid + '/page/' + newPage._id;
        return this.http.put(url, newPage)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (wid, pid) {
        var url = this.baseUrl + '/api/website/' + wid + '/page/' + pid;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = (function () {
    function UserService(sharedService, http, router) {
        this.sharedService = sharedService;
        this.http = http;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                alert('Please login first');
                return false;
            }
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', {}, this.options)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (uid) {
        var url = this.baseUrl + '/api/user/' + uid;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (updateUser) {
        var url = this.baseUrl + '/api/user/' + updateUser._id;
        return this.http.put(url, updateUser)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.mock.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEBSITES; });
var WEBSITES = [
    { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
];
//# sourceMappingURL=website.mock.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__website_mock_client__ = __webpack_require__("../../../../../src/app/services/website.mock.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// injecting service into module
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.websites = __WEBPACK_IMPORTED_MODULE_4__website_mock_client__["a" /* WEBSITES */];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite,
            'findAllWebsites': this.findAllWebsites,
        };
    }
    WebsiteService.prototype.updateWebsite = function (uid, newWebsite) {
        var url = this.baseUrl + '/api/user/' + uid + '/website/' + newWebsite._id;
        return this.http.put(url, newWebsite)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (uid) {
        var url = this.baseUrl + '/api/user/' + uid + '/website';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findAllWebsites = function () {
        return this.http.get(this.baseUrl + '/api/website')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.createWebsite = function (uid, website) {
        var url = this.baseUrl + '/api/user/' + uid + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (uid, websiteId) {
        var url = this.baseUrl + '/api/user/' + uid + '/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId, uid) {
        var url = this.baseUrl + '/api/user/' + uid + '/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.findAllWidgetsForPage = function (uid, wid, pid) {
        var url = this.baseUrl + '/api/page/' + pid + '/widget';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.createWidget = function (pid, widget) {
        var url = this.baseUrl + '/api/page/' + pid + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.createWidgetHeader = function (pageId) {
    };
    WidgetService.prototype.createWidgetImage = function (pageId) {
    };
    WidgetService.prototype.createWidgetYoutube = function (pageId) {
    };
    WidgetService.prototype.findWidgetById = function (wgid) {
        var url = this.baseUrl + '/api/widget/' + wgid;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (pid, wgid, newWidget) {
        var url = this.baseUrl + '/api/page/' + pid + '/widget/' + wgid;
        return this.http.put(url, newWidget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (pid, wgid) {
        var url = this.baseUrl + '/api/page/' + pid + '/widget/' + wgid;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '')
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map