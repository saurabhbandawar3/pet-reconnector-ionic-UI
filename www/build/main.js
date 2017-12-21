webpackJsonp([11],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card padding>\n      <p class="para">\n        We are a non-profit organization,trying to make our world better \n        by giving people a platform where they can be reunited with their \n        lost pets with the help of people.We have put this application due \n        to  the lots of lost pets were found stranded in their owner\'s house\n        during the past natural   disasters. Giving people this platform to \n        reunite with their pets.\n        <br>\n        Our way to give back to the World.\n      </p>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccDetailsPage = (function () {
    function AccDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccDetailsPage');
    };
    AccDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acc-details',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/acc-details/acc-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class= "main">\n    <ion-item>\n        <ion-label>Register Lost/Found Pet</ion-label>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>View Registered Lost/Found Pet</ion-label>\n    </ion-item>\n    \n    <ion-item>\n        <ion-label stacked><h2>Update Contact Information</h2></ion-label>\n        <ion-label>New Contact</ion-label>\n        <ion-input type = "text" [(ngModel)]="contact" placeholder="(000)000-0000"></ion-input> \n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/acc-details/acc-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccDetailsPage);
    return AccDetailsPage;
}());

//# sourceMappingURL=acc-details.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>contact</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p> You can Contact us by filling the following form  & we will try to get back to you as soon as we can.</p>\n  \n\n  <ion-item>\n    <ion-label>Full Name</ion-label>\n    <ion-input type="text" [(ngModel)]="name" placeholder=""></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="email" placeholder=""></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label stacked>Message</ion-label><br>\n    <ion-textarea name="message" rows="3" cols="5"></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n      <button ion-button round padding color="primary" class="btn-submit">\n          Submit\n      </button>\n      <button ion-button round padding color="primary" class="btn-Cancel">\n          Cancel\n      </button>\n  </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoantePage = (function () {
    function DoantePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DoantePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoantePage');
    };
    DoantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doante',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/doante/doante.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>doante</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>\nWe are non-profit organization, trying to help people reconnect with their lost pets.\nYou can donate from $1 to any amount you wish</h2>\n<ion-item>\n<ion-label>$</ion-label>\n<ion-input type="text" [(ngModel)]="donate" placeholder="Amount"></ion-input>\n</ion-item>\n\n<ion-item>\n    <button ion-button round padding color="primary" class="btn-donate">\n        Donate\n    </button>\n    <button ion-button round padding color="primary" class="btn-Cancel">\n        Cancel\n    </button>\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/doante/doante.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DoantePage);
    return DoantePage;
}());

//# sourceMappingURL=doante.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_found_list_found__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormFoundPage = (function () {
    function FormFoundPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FormFoundPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormFoundPage');
    };
    FormFoundPage.prototype.golist1 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__list_found_list_found__["a" /* ListFoundPage */]);
    };
    FormFoundPage.prototype.gotohome1 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    FormFoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form-found',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/form-found/form-found.html"*/'<ion-header>\n    \n    <ion-navbar>\n        <button ion-button menuToggle  end >\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Found Pet Form</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="main">\n    <ion-item>\n        <ion-label>Type Of Animal</ion-label>\n        <ion-select [(ngModel)]="typeOf">\n            <ion-option value="dog" selected>Dog</ion-option>\n            <ion-option value="cat">Cat</ion-option>\n            <ion-option value="horse">Horse</ion-option>\n            <ion-option value="other">Others</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Breed</ion-label>\n        <ion-select [(ngModel)]="breed">\n            <ion-option value="Pomerian" selected>Pomerian</ion-option>\n            <ion-option value="german_shepherd">german_shepherd</ion-option>\n            <ion-option value="buldog">Buldog</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Age</ion-label>\n        <ion-select [(ngModel)]="age">\n            <ion-option value="baby" selected>Baby</ion-option>\n            <ion-option value="young">Young</ion-option>\n            <ion-option value="Adult">Adult</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n            <ion-label >Sex</ion-label>\n            <ion-select [(ngModel)]="age">  \n                <ion-option value="baby" selected>Baby</ion-option>\n                <ion-option value="young">Young</ion-option>\n                <ion-option value="Adult">Adult</ion-option>\n            </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Size</ion-label>\n        <ion-select [(ngModel)]="size">\n            <ion-option value="small" selected>Small</ion-option>\n            <ion-option value="medium">Medium</ion-option>\n            <ion-option value="large">Large</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked><h2>Descirbe Found Pet</h2></ion-label>\n        <ion-textarea name="message" rows="2" cols="5"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n        <label style="color:#000">Image</label>\n        <button ion-button full color="light" (click)="uploadPhoto()">\n            <ion-icon name="add" style="margin-right:0.5em"></ion-icon>\n            Add a Picture\n        </button>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Found Address</ion-label>\n        <ion-input type="text" [(ngModel)]="laddr" placeholder="City,State"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Contact <br> Information</ion-label>\n        <ion-input type="number" [(ngModel)]="contact" placeholder="(000)000-0000"></ion-input>\n    </ion-item>\n\n    <ion-item>\n            <button ion-button round padding color="primary" class="btn-submit" (click)="golist1()">\n                Submit \n            </button>\n            <button ion-button round padding color="primary" class="btn-Cancle" (click)="gotohome1()" >\n                Cancel \n            </button>\n    </ion-item>\n\n</ion-content>'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/form-found/form-found.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], FormFoundPage);
    return FormFoundPage;
    var _a, _b;
}());

//# sourceMappingURL=form-found.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormlostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listlost_listlost__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormlostPage = (function () {
    function FormlostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FormlostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormlostPage');
    };
    FormlostPage.prototype.gotolostPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listlost_listlost__["a" /* ListlostPage */]);
    };
    FormlostPage.prototype.gotophomePage1 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    FormlostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-formlost',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/formlost/formlost.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lost Pet Form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="main">\n    <ion-item>\n        <ion-label >Type Of Animal</ion-label>\n        <ion-select [(ngModel)]="typeOf">  \n            <ion-option value="dog" selected>Dog</ion-option>\n            <ion-option value="cat">Cat</ion-option>\n            <ion-option value="horse">Horse</ion-option>\n            <ion-option value="other">Others</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n            <ion-label>Breed</ion-label>\n            <ion-select [(ngModel)]="breed">\n                <ion-option value="Pomerian" selected>Pomerian</ion-option>\n                <ion-option value="german_shepherd">german_shepherd</ion-option>\n                <ion-option value="buldog">Buldog</ion-option>\n            </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Age</ion-label>\n      <ion-select [(ngModel)]="age">  \n            <ion-option value="baby" selected>Baby</ion-option>\n            <ion-option value="young">Young</ion-option>\n            <ion-option value="Adult">Adult</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n            <ion-label >Sex</ion-label>\n            <ion-select [(ngModel)]="sex">  \n                    <ion-option value="baby" selected>Male</ion-option>\n                    <ion-option value="young">Female</ion-option>\n            </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Size</ion-label>\n      <ion-select [(ngModel)]="size">  \n          <ion-option value="small" selected>Small</ion-option>\n          <ion-option value="medium">Medium</ion-option>\n          <ion-option value="large">Large</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked><h2>Descirbe Your Pet</h2></ion-label>\n      <ion-textarea name="message" rows="2" cols="5"></ion-textarea>\n    </ion-item>\n\n    <ion-item >\n    <label style="color:#000">Image</label>\n    <button ion-button full color="light"> \n        <ion-icon name="add" style="margin-right:0.5em"></ion-icon>\n         Add a Picture\n    </button> \n    </ion-item>\n\n    <ion-item>\n        <ion-label >Lost Address</ion-label>\n        <ion-input type = "text" [(ngModel)]="laddr" placeholder="City,State"></ion-input> \n    </ion-item>\n\n    <ion-item>\n        <ion-label >Contact <br> Information</ion-label>\n        <ion-input type = "number" [(ngModel)]="number" placeholder="(000)000-0000"></ion-input> \n    </ion-item>\n\n    <ion-item>\n        <button ion-button round padding color="primary" class="btn-submit" (click)="gotolostPage()">\n            Submit \n        </button>\n        <button ion-button round padding color="primary" class="btn-Cancle" (click)="gotophomePage1()" >\n            Cancel \n        </button>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/formlost/formlost.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], FormlostPage);
    return FormlostPage;
    var _a, _b;
}());

//# sourceMappingURL=formlost.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__l_pet_details_l_pet_details__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListFoundPage = (function () {
    function ListFoundPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { "img": "dog2.jpg", "pet": "Dog", "age": "Baby", "sex": "Male", "size": "small", "desc": "Has a mark on nose" },
            { "img": "cat1.jpg", "pet": "Cat", "age": "Young", "sex": "Female", "size": "medium", "desc": "Likes to be pampered" },
            { "img": "horse.jpg", "pet": "Horse", "age": "Young", "sex": "female", "size": "large", "desc": "Always up for run" },
            { "img": "dog3.jpg", "pet": "Dog", "age": "Adult", "sex": "male", "size": "small", "desc": "Fetches Newspaper" },
            { "img": "cat2.jpg", "pet": "Cat", "age": "Young", "sex": "male", "size": "medium", "desc": "Mark on head" },
        ];
    }
    ListFoundPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListFoundPage');
    };
    ListFoundPage.prototype.gotoLostDetails = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__l_pet_details_l_pet_details__["a" /* LPetDetailsPage */]);
    };
    ListFoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-list-found',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/list-found/list-found.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>List of Found Pets</ion-title>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-scroll scrollY="true" style="height:50em">\n        <ion-item *ngFor="let p of pages">\n            <ion-avatar item-start >\n                <img src="../assets/imgs/{{p.img}}" alt="Found">\n            </ion-avatar>\n            <p>{{p.pet}} | {{p.age}} | {{p.sex}} | {{p.size}}  </p>\n            <p>{{p.desc}}</p>\n            <a style="font-size:12px;"(click)=gotoLostDetails()>Read More ...</a>\n        </ion-item>\n    </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/list-found/list-found.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ListFoundPage);
    return ListFoundPage;
    var _a, _b;
}());

//# sourceMappingURL=list-found.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListlostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__l_pet_details_l_pet_details__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListlostPage = (function () {
    function ListlostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { "img": "dog2.jpg", "pet": "Dog", "age": "Baby", "sex": "Male", "size": "small", "desc": "Has a mark on nose" },
            { "img": "cat1.jpg", "pet": "Cat", "age": "Young", "sex": "Female", "size": "medium", "desc": "Likes to be pampered" },
            { "img": "horse.jpg", "pet": "Horse", "age": "Young", "sex": "female", "size": "large", "desc": "Always up for run" },
            { "img": "dog3.jpg", "pet": "Dog", "age": "Adult", "sex": "male", "size": "small", "desc": "Fetches Newspaper" },
            { "img": "cat2.jpg", "pet": "Cat", "age": "Young", "sex": "male", "size": "medium", "desc": "Mark on head" },
        ];
    }
    ListlostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListlostPage');
    };
    ListlostPage.prototype.gotoLostDetails = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__l_pet_details_l_pet_details__["a" /* LPetDetailsPage */]);
    };
    ListlostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listlost',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/listlost/listlost.html"*/'<ion-header>\n        \n          <ion-navbar>\n            <ion-title>List of Lost Pets</ion-title>\n            <button ion-button menuToggle end>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-navbar>\n        \n        </ion-header>\n        \n        \n        <ion-content padding>\n            <ion-scroll scrollY="true" style="height:50em">\n                <ion-item *ngFor="let p of pages">\n                    <ion-avatar item-start >\n                        <img src="../assets/imgs/{{p.img}}" alt="Lost">\n                    </ion-avatar>\n                    <p>{{p.pet}} | {{p.age}} | {{p.sex}} | {{p.size}}  </p>\n                    <p>{{p.desc}}</p>\n                    <a style="font-size:12px;"(click)=gotoLostDetails()>Read More ...</a>\n                </ion-item>\n            </ion-scroll>\n        </ion-content>\n        '/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/listlost/listlost.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ListlostPage);
    return ListlostPage;
    var _a, _b;
}());

//# sourceMappingURL=listlost.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		281,
		10
	],
	"../pages/acc-details/acc-details.module": [
		282,
		9
	],
	"../pages/contact/contact.module": [
		283,
		8
	],
	"../pages/doante/doante.module": [
		284,
		7
	],
	"../pages/f-pet-details/f-pet-details.module": [
		285,
		6
	],
	"../pages/filter-search/filter-search.module": [
		286,
		0
	],
	"../pages/form-found/form-found.module": [
		287,
		5
	],
	"../pages/formlost/formlost.module": [
		288,
		4
	],
	"../pages/l-pet-details/l-pet-details.module": [
		289,
		3
	],
	"../pages/list-found/list-found.module": [
		290,
		2
	],
	"../pages/listlost/listlost.module": [
		291,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formlost_formlost__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_found_form_found__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.gotoPage1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__formlost_formlost__["a" /* FormlostPage */]);
    };
    HomePage.prototype.gotoPage2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__form_found_form_found__["a" /* FormFoundPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle  end >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pet Reconnector</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="main">\n  <ion-card>\n    <img src="../assets/imgs/logo1.jpg" alt="Logo"/>\n  </ion-card>\n  <button ion-button full round (click)="gotoPage1()" class="btn-lost">\n    Lost a Pet\n  </button>\n  <button ion-button full round (click)="gotoPage2()" class="btn-found">\n    Found a Pet\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FPetDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FPetDetailsPage = (function () {
    function FPetDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FPetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FPetDetailsPage');
    };
    FPetDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-f-pet-details',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/f-pet-details/f-pet-details.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button menuToggle end>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Pet Details</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n        <ion-item>\n            <button ion-button round padding color="primary" class="btn-pdf">\n                Export Pdf\n            </button>\n            <button ion-button round padding color="primary" class="btn-share">\n                Share\n            </button>\n            <button ion-button round padding color="primary" class="btn-Cancle">\n                Back\n            </button>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label >Animal</ion-label>\n            <ion-input type = "text" [(ngModel)]="animal" placeholder="Dog" ></ion-input> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label >Breed</ion-label>\n            <ion-input type = "text" [(ngModel)]="breed" placeholder="German Sheperd" ></ion-input> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label>Size</ion-label>\n            <ion-input type = "text" [(ngModel)]="size" placeholder="Large" ></ion-input> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label>Sex</ion-label>\n            <ion-input type = "text" [(ngModel)]="sex" placeholder="Male" ></ion-input> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label>Age</ion-label>\n            <ion-input type = "text" [(ngModel)]="age" placeholder="Age" ></ion-input> \n        </ion-item>\n    \n        <ion-item>\n            <ion-label >Description</ion-label>\n            <ion-textarea name="message" rows="3" cols="5" placeholder="Has a mark on Nose"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Contact Information</ion-label>\n            <ion-input type = "text" [(ngModel)]="contact" placeholder="(212)917-2121" ></ion-input> \n        </ion-item>\n    </ion-content>\n    '/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/f-pet-details/f-pet-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FPetDetailsPage);
    return FPetDetailsPage;
}());

//# sourceMappingURL=f-pet-details.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_formlost_formlost__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_form_found_form_found__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_l_pet_details_l_pet_details__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_f_pet_details_f_pet_details__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_acc_details_acc_details__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_doante_doante__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_found_list_found__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_listlost_listlost__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_formlost_formlost__["a" /* FormlostPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_form_found_form_found__["a" /* FormFoundPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_acc_details_acc_details__["a" /* AccDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_doante_doante__["a" /* DoantePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_found_list_found__["a" /* ListFoundPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listlost_listlost__["a" /* ListlostPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_l_pet_details_l_pet_details__["a" /* LPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_f_pet_details_f_pet_details__["a" /* FPetDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acc-details/acc-details.module#AccDetailsPageModule', name: 'AccDetailsPage', segment: 'acc-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doante/doante.module#DoantePageModule', name: 'DoantePage', segment: 'doante', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/f-pet-details/f-pet-details.module#FPetDetailsPageModule', name: 'FPetDetailsPage', segment: 'f-pet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-search/filter-search.module#FilterSearchPageModule', name: 'FilterSearchPage', segment: 'filter-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form-found/form-found.module#FormFoundPageModule', name: 'FormFoundPage', segment: 'form-found', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formlost/formlost.module#FormlostPageModule', name: 'FormlostPage', segment: 'formlost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/l-pet-details/l-pet-details.module#LPetDetailsPageModule', name: 'LPetDetailsPage', segment: 'l-pet-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-found/list-found.module#ListFoundPageModule', name: 'ListFoundPage', segment: 'list-found', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listlost/listlost.module#ListlostPageModule', name: 'ListlostPage', segment: 'listlost', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_formlost_formlost__["a" /* FormlostPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_form_found_form_found__["a" /* FormFoundPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_l_pet_details_l_pet_details__["a" /* LPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_f_pet_details_f_pet_details__["a" /* FPetDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_acc_details_acc_details__["a" /* AccDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_doante_doante__["a" /* DoantePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_found_list_found__["a" /* ListFoundPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_listlost_listlost__["a" /* ListlostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_acc_details_acc_details__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_doante_doante__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_found_list_found__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listlost_listlost__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_5__pages_acc_details_acc_details__["a" /* AccDetailsPage */] },
            { title: 'List of Lost Pets', component: __WEBPACK_IMPORTED_MODULE_10__pages_listlost_listlost__["a" /* ListlostPage */] },
            { title: 'List of Found Pets', component: __WEBPACK_IMPORTED_MODULE_9__pages_list_found_list_found__["a" /* ListFoundPage */] },
            { title: 'Donate', component: __WEBPACK_IMPORTED_MODULE_8__pages_doante_doante__["a" /* DoantePage */] },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/app/app.html"*/'<ion-menu [content]="content" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LPetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LPetDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LPetDetailsPage = (function () {
    function LPetDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LPetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LPetDetailsPage');
    };
    LPetDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-l-pet-details',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/pet/src/pages/l-pet-details/l-pet-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pet Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <button ion-button round padding color="primary" class="btn-pdf">\n            Export Pdf\n        </button>\n        <button ion-button round padding color="primary" class="btn-share">\n            Share\n        </button>\n        <button ion-button round padding color="primary" class="btn-Cancle">\n            Back\n        </button>\n    </ion-item>\n\n    <ion-item>\n        <ion-label >Animal</ion-label>\n        <ion-input type = "text" [(ngModel)]="animal" placeholder="Dog" ></ion-input> \n    </ion-item>\n\n    <ion-item>\n        <ion-label >Breed</ion-label>\n        <ion-input type = "text" [(ngModel)]="breed" placeholder="German Sheperd" ></ion-input> \n    </ion-item>\n\n    <ion-item>\n        <ion-label>Size</ion-label>\n        <ion-input type = "text" [(ngModel)]="size" placeholder="Large" ></ion-input> \n    </ion-item>\n\n    <ion-item>\n        <ion-label>Sex</ion-label>\n        <ion-input type = "text" [(ngModel)]="sex" placeholder="Male" ></ion-input> \n    </ion-item>\n\n    <ion-item>\n        <ion-label>Age</ion-label>\n        <ion-input type = "text" [(ngModel)]="age" placeholder="Age" ></ion-input> \n    </ion-item>\n\n    <ion-item>\n        <ion-label >Description</ion-label>\n        <ion-textarea name="message" rows="3" cols="5" placeholder="Has a mark on Nose"></ion-textarea>\n      </ion-item>\n    <ion-item>\n\n        <ion-label>Contact Information</ion-label>\n        <ion-input type = "text" [(ngModel)]="contact" placeholder="(212)917-2121" ></ion-input> \n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/pet/src/pages/l-pet-details/l-pet-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LPetDetailsPage);
    return LPetDetailsPage;
}());

//# sourceMappingURL=l-pet-details.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map