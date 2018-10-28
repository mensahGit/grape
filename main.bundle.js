webpackJsonp([0,3],{

/***/ 368:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 368;


/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(477);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/mensah/Desktop/grape/src/main.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services_firebase__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Content} from './Content';
var AppComponent = (function () {
    function AppComponent(_fs) {
        this._fs = _fs;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.appState = 'default';
        var _this = this;
        //GET BOOKS FEED
        this._fs.getBooks().subscribe(function (books) {
            _this.books = books;
        });
        //GET AUTHORS FEED
        this._fs.getAuthors().subscribe(function (authors) {
            _this.authors = authors;
        });
        //GET CONTENTS FEED
        //this._fs.getContents().subscribe(contents => {
        // this.contents = contents;
        //});
        //GET BLURBS FEED
        // this._fs.getBlurbs().subscribe(blurbs => {
        // this.blurbs = blurbs;
        //});
    };
    AppComponent.prototype.changeState = function (state, key) {
        console.log('Changing STATE to:' + state);
        if (key) {
            console.log('Changing KEY to:' + key);
            this.activeKey = key;
        }
        this.appState = state;
    };
    AppComponent.prototype.filterTheme = function (book) {
        var _this = this;
        this._fs.getBooks(book).subscribe(function (books) {
            _this.books = books;
            console.log(book);
        });
    };
    /*getBooks(){
        console.log(this.books);
        console.log(this.authors);
        console.log(this.contents);
        console.log(this.blurbs);
    }*/
    AppComponent.prototype.addBook = function (theme, issuedate, month, year, coverimg, objective, summary, bio, firstname, lastname, img, chilevocab, japanphrases, notes, pois, proverbs, articletypes, flavorcolors, kanjis, quotes, bcphotos, ecpphotos, fcphotos, ofdphotos, storya, storyb, storyc, storybl, storyli, storyaf) {
        var created_at = new Date().toString();
        var newBook = {
            issuedate: issuedate,
            theme: theme,
            month: month,
            year: year,
            coverimg: coverimg,
            objective: objective,
            summary: summary,
            bio: bio,
            firstname: firstname,
            lastname: lastname,
            img: img,
            chilevocab: chilevocab,
            japanphrases: japanphrases,
            notes: notes,
            pois: pois,
            proverbs: proverbs,
            articletypes: articletypes,
            flavorcolors: flavorcolors,
            kanjis: kanjis,
            quotes: quotes,
            bcphotos: bcphotos,
            ecpphotos: ecpphotos,
            fcphotos: fcphotos,
            ofdphotos: ofdphotos,
            storya: storya,
            storyb: storyb,
            storyc: storyc,
            storybl: storybl,
            storyli: storyli,
            storyaf: storyaf,
            created_at: created_at
        };
        console.log(newBook);
        this._fs.addBook(newBook);
        this.changeState('default', null);
    };
    AppComponent.prototype.showEdit = function (book) {
        this.changeState('edit', book.$key);
        this.activeIssueDate = book.issuedate;
        this.activeTheme = book.theme;
        this.activeMonth = book.month;
        this.activeYear = book.year;
        this.activeCoverImage = book.coverimg;
        this.activeObjective = book.objective;
        this.activeSummary = book.summary;
        this.activeAuthorBio = book.bio;
        this.activeFirstName = book.firstname;
        this.activeLastName = book.lastname;
        this.activeAuthorImage = book.img;
        this.activeOneFineDay = book.ofdphotos;
        this.activeChileVocab = book.chilevocab;
        this.activeJapanPhrase = book.japanphrases;
        this.activeNotes = book.notes;
        this.activePersonOfInterest = book.pois;
        this.activeProverb = book.proverbs;
        this.activeArticleType = book.articletypes;
        this.activeFlavorColor = book.flavorcolors;
        this.activeKanji = book.kanjis;
        this.activeQuote = book.quotes;
        this.activeFrontCoverPhoto = book.fcphotos;
        this.activeBackCoverPhoto = book.bcphotos;
        this.activeEverydayChilePhoto = book.ecpphotos;
        this.activeStoryA = book.storya;
        this.activeStoryB = book.storyb;
        this.activeStoryC = book.storyc;
        this.activeStoryBlender = book.storybl;
        this.activeStoryLive = book.storyli;
        this.activeStoryAftereffects = book.storyaf;
    };
    AppComponent.prototype.updateBook = function () {
        var updBook = {
            theme: this.activeTheme,
            issuedate: this.activeIssueDate,
            month: this.activeMonth,
            year: this.activeYear,
            coverimg: this.activeCoverImage,
            objective: this.activeObjective,
            summary: this.activeSummary,
            bio: this.activeAuthorBio,
            firstname: this.activeFirstName,
            lastname: this.activeLastName,
            img: this.activeAuthorImage,
            ofdphotos: this.activeOneFineDay,
            chilevocab: this.activeChileVocab,
            japanphrases: this.activeJapanPhrase,
            notes: this.activeNotes,
            pois: this.activePersonOfInterest,
            proverbs: this.activeProverb,
            articletypes: this.activeArticleType,
            flavorcolors: this.activeFlavorColor,
            kanjis: this.activeKanji,
            quotes: this.activeQuote,
            fcphotos: this.activeFrontCoverPhoto,
            bcphotos: this.activeBackCoverPhoto,
            ecpphotos: this.activeEverydayChilePhoto,
            storya: this.activeStoryA,
            storyb: this.activeStoryB,
            storyc: this.activeStoryC,
            storybl: this.activeStoryBlender,
            storyli: this.activeStoryLive,
            storyaf: this.activeStoryAftereffects,
        };
        this._fs.updateBook(this.activeKey, updBook);
        this.changeState('default', null);
    };
    AppComponent.prototype.deleteBook = function (key) {
        this._fs.deleteBook(key);
        this.changeState('default', null);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(647),
            styles: [__webpack_require__(641)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_services_firebase__["a" /* FirebaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_services_firebase__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_services_firebase__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/mensah/Desktop/grape/src/app.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(476);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Must export the config
var firebaseConfig = {
    apiKey: "AIzaSyD3ErQzSwDD7sE2LuavYGk5mj3JCBFMemk",
    authDomain: "grapes-be493.firebaseapp.com",
    databaseURL: "https://grapes-be493.firebaseio.com",
    storageBucket: "grapes-be493.appspot.com"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/mensah/Desktop/grape/src/app.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Content} from '../Content';
var FirebaseService = (function () {
    //contents:FirebaseListObservable<Content[]>;
    //blurbs:FirebaseListObservable<Content[]>;
    function FirebaseService(_fs) {
        this._fs = _fs;
    }
    FirebaseService.prototype.getBooks = function (book) {
        if (book === void 0) { book = null; }
        if (book != null) {
            this.books = this._fs.database.list('/books', {
                query: {
                    orderByChild: 'theme',
                    equalTo: book
                }
            });
        }
        else {
            this.books = this._fs.database.list('/books');
        }
        return this.books;
    };
    FirebaseService.prototype.getAuthors = function () {
        this.authors = this._fs.database.list('/authors');
        return this.authors;
    };
    // getContents(){
    //   this.contents = this._fs.database.list('/contents') as
    //   FirebaseListObservable<Content[]>
    //   return this.contents;
    // }
    // getBlurbs(){
    //   this.blurbs = this._fs.database.list('/contents' +'/0'+ '/blurbs') as
    //   FirebaseListObservable<Content[]>
    //   return this.blurbs;
    // }
    FirebaseService.prototype.addBook = function (newBook) {
        return this.books.push(newBook);
    };
    FirebaseService.prototype.updateBook = function (key, updBook) {
        return this.books.update(key, updBook);
    };
    FirebaseService.prototype.deleteBook = function (key) {
        return this.books.remove(key);
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a;
}());
//# sourceMappingURL=/Users/mensah/Desktop/grape/src/services.firebase.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/mensah/Desktop/grape/src/environment.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/mensah/Desktop/grape/src/polyfills.js.map

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(227)();
// imports


// module
exports.push([module.i, "h1 {\n  font-family: 'Libre Baskerville',serif;\n  color: #FFFFFF;\n}\n\nth, h4, .filterlabel {\n  font-family: 'Merriweather',serif;\n  font-size: 16pt;\n  color: #000000;\n}\n\n.jumbotron {\n    background-color: #421E5E;\n}\n.jumbotron p {\n    color: #000000;\n}\n\n.totalwrapper {\n    background-color: #9A4A9C;\n}\n\ntr {\n    padding: 10px;\n}\n\ntd {\n    padding: 10px;\n}\n\n.editbackground{\n    background-color: #FF9900;\n}\n\n.mensah {\n    background-color: #421E5E;\n}\n\n\n\n.hamhead {\n    background-color: #271238;\n    padding: 25px;\n    border: 5px dashed #FFFFFF;\n}\n\n#myCarousel {\n    background-color: #271238;\n    padding: 25px;\n    border: 15px solid #000000;\n}\n.eggstender {\n    background-color: #271238;\n    padding: 25px;\n    border: 5px dashed #FFFFFF;\n}\n\n.eggstender h3, p {\n    color: #FFFFFF;\n}\n\n.eggstender h4, li {\n    color: #9A4A9C;\n}\n\n.whitetype {\n    color: #FFFFFF;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

module.exports = "<div class=\"totalwrapper\">\n<div class=\"jumbotron text-center\">\n\n<a href=\"http://localhost:4200/\">\n\n<img src =\"http://www.mensahdesigns.com/images/logoTeeth_grapes.png\" alt=\"logoTeeth\" width=\"165px\" height=\"128px\">\n</a>\n  <h1>KODOSUICHA DB APP:</h1>\n  <p>MENSAHDESIGNS | CREATIVELY.</p>\n</div>\n\n<div class=\"container\">\n\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_1_2018-01.png\" alt=\"one\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_2_2018-01.png\" alt=\"two\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_3_2018-01.png\" alt=\"three\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_4_2018-01.png\" alt=\"four\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_5_2018-01.png\" alt=\"five\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_6_2018-01.png\" alt=\"six\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_7_2018-01.png\" alt=\"seven\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_8_2018-01.png\" alt=\"eight\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover2018/KODO_9_2018-01.png\" alt=\"nine\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover/KODO_910_2018-01.png\" alt=\"ten\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover/KODO_911_2018-01.png\" alt=\"eleven\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"http://www.mensahdesigns.com/images/kodokover/KODO_912_2018-01.png\" alt=\"twelve\">\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<!--\n<div class=\"navbar navbar-default\">\n    <div class=\"row\">\n          <div class=\"navbar-left\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"\"><a href=\"http://localhost:4200\">MENSAHDESIGNS</a></li>\n              </ul>\n          </div>\n            <div class=\"navbar-text navbar-left\">\n              <h2>KODOSUICHA:DB APP</h2>\n            </div>\n    </div>\n</div>\n-->\n<br>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-6\">\n    <button (click)=\"changeState('add')\"class=\"btn btn-success\">Add Book</button>\n  </div>\n  <div class=\"col-sm-6\">\n    <label class=\"filterlabel\">Filter Theme\n      <select (change)=\"filterTheme (filteredTheme.value)\" #filteredTheme>\n        <option value=\"0\">Select</option>\n        <option *ngFor=\"let book of books\" value=\"{{book.theme}}\">{{book.theme}}</option>\n      </select>\n    </label>\n  </div>\n</div>\n\n\n<div *ngIf=\"appState == 'add' \" class=\"hamhead\">\n\n<!-- ADD FORM -->\n <!-- FORM VARS ORDER MATTERS: KEEP THE SAME ORDER AS FUNCTION -->\n      <form (submit)=\"addBook(\n        theme.value,\n        issuedate.value,\n        month.value,\n        year.value,\n        coverimg.value,\n        objective.value,\n        summary.value,\n        bio.value,\n        firstname.value,\n        lastname.value,\n        img.value,\n        firstname.value,\n    chilevocab.value,\n    japanphrases.value,\n    notes.value,\n    pois.value,\n    proverbs.value,\n    articletypes.value,\n    flavorcolors.value,\n    kanjis.value,\n    quotes.value,\n    bcphotos.value,\n    ecpphotos.value,\n    fcphotos.value,\n    ofdphotos.value,\n    storya.value,\n    storyb.value,\n    storyc.value,\n    storybl.value,\n    storyli.value,\n    storyaf.value\n        )\">\n<table class=\"table\">\n\n    <tbody>\n    <tr>\n    <th>HAPPY</th>\n    <th>NEW</th>\n    <th>YEAR:-)!</th>\n  </tr>\n      <tr class=\"success\">\n        <td> <label>Theme:\n              <input type=\"text\" placeholder=\"Theme\" #theme>\n          </label></td>\n        <td> <label>Issue Date:\n               <input type=\"text\" placeholder=\"Issue Date\" #issuedate>\n          </label></td>\n        <td> <label>Month:\n              <input type=\"text\" placeholder=\"Month\" #month>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Year:\n               <input type=\"text\" placeholder=\"Year\" #year>\n          </label></td>\n        <td> <label>Cover Image:\n              <input type=\"text\" placeholder=\"Cover Image\" #coverimg>\n          </label></td>\n        <td> <label>Objective:\n              <input type=\"text\" placeholder=\"Objective\" #objective>\n          </label></td>\n      </tr>\n      <tr class=\"info\">\n        <td> <label>Summary:\n              <input type=\"text\" placeholder=\"Summary\" #summary>\n          </label></td>\n        <td> <label>First Name:\n               <input type=\"text\" placeholder=\"First Name\" #firstname>\n          </label></td>\n        <td> <label>Last Name:\n             <input type=\"text\" placeholder=\"Last Name\" #lastname>\n          </label></td>\n      </tr>\n       <tr class=\"danger\">\n        <td> <label>Author Image:\n              <input type=\"text\" placeholder=\"Author Image\" #img>\n            </label></td>\n        <td> <label>Author Biography:\n              <input type=\"text\" placeholder=\"Author Bio\" #bio>\n            </label></td>\n        <td> <label>One Fine Day Photo:\n              <input type=\"text\" placeholder=\"One Fine Day Photo\" #ofdphotos>\n          </label></td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Chile Vocab:\n              <input type=\"text\" placeholder=\"Chile Vocab\" #chilevocab>\n          </label></td>\n        <td> <label>Japan Phrase:\n               <input type=\"text\" placeholder=\"Japan Phrase\" #japanphrases>\n          </label></td>\n        <td> <label>Notes:\n              <input type=\"text\" placeholder=\"Notes\" #notes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Person Of Interest:\n               <input type=\"text\" placeholder=\"Person Of Interest\" #pois>\n          </label></td>\n        <td> <label>Proverbs:\n              <input type=\"text\" placeholder=\"Proverbs\" #proverbs>\n          </label></td>\n        <td><label>Article Type:\n              <input type=\"text\" placeholder=\"Article Type\" #articletypes>\n            </label>\n        </td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Flavor Color:\n              <input type=\"text\" placeholder=\"Flavor Color\" #flavorcolors>\n          </label></td>\n        <td> <label>Kanji:\n               <input type=\"text\" placeholder=\"Kanji\" #kanjis>\n          </label></td>\n        <td> <label>Quote:\n              <input type=\"text\" placeholder=\"Quotes\" #quotes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Front Cover Photo:\n               <input type=\"text\" placeholder=\"Front Cover Photo\" #fcphotos>\n          </label></td>\n        <td> <label>Back Cover Photo:\n              <input type=\"text\" placeholder=\"Back Cover Photo\" #bcphotos>\n          </label></td>\n        <td> <label>Everyday Chile Photo:\n              <input type=\"text\" placeholder=\"Everyday Chile Photo\" #ecpphotos>\n          </label></td>\n        </tr>\n      <tr class=\"success\">\n        <td> <label>Story A:<br/>\n              <textarea placeholder=\"Paste Story A here...\" #storya></textarea>\n          </label></td>\n        <td> <label>Story B:<br/>\n               <textarea placeholder=\"Paste Story B here...\" #storyb></textarea>\n          </label></td>\n        <td> <label>Story C:<br/>\n              <textarea placeholder=\"Paste Story C here...\" #storyc></textarea>\n          </label></td>\n      </tr>\n      <tr class=\"success\">\n        <td> <label>Story Blender:<br/>\n              <textarea placeholder=\"Paste Story Blender here...\" #storybl></textarea>\n          </label></td>\n        <td> <label>Story Live:<br/>\n               <textarea placeholder=\"Paste Story Live here...\" #storyli></textarea>\n          </label></td>\n        <td> <label>Story AfterEffects:<br/>\n              <textarea placeholder=\"Paste Story Aftereffects here...\" #storyaf></textarea>\n          </label></td>\n      </tr>\n    </tbody>\n\n  </table>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n<button (click)=\"changeState('default')\" class=\"btn btn-danger\">Cancel</button>\n  </form>\n\n</div> <!--NGIF ADD BUTTON PUSHED ENDS HERE; HAMHEAD CLASS ENDS HERE-->\n\n\n\n<!--EDIT FORM GOES HERE-->\n\n<div *ngIf=\"appState == 'edit' \" class=\"hamhead\">\n  <!-- FORM VARS ORDER MATTERS: KEEP THE SAME ORDER AS FUNCTION -->\n    <form (submit)=\"updateBook()\">\n<table class=\"table\">\n\n    <tbody>\n    <tr>\n    <th>EDIT</th>\n    <th>FORM</th>\n    <th>HERE:</th>\n  </tr>\n      <tr class=\"danger\">\n        <td> <label>Theme:\n              <input type=\"text\" [(ngModel)]=\"activeTheme\" name=\"activeTheme\" placeholder=\"Theme\" #theme>\n          </label></td>\n        <td> <label>Issue Date:\n               <input type=\"text\" [(ngModel)]=\"activeIssueDate\" name=\"activeIssueDate\" placeholder=\"Issue Date\" #issuedate>\n          </label></td>\n        <td> <label>Month:\n              <input type=\"text\" [(ngModel)]=\"activeMonth\" name=\"activeMonth\" placeholder=\"Month\" #month>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Year:\n               <input type=\"text\" [(ngModel)]=\"activeYear\" name=\"activeYear\" placeholder=\"Year\" #year>\n          </label></td>\n        <td> <label>Cover Image:\n              <input type=\"text\" [(ngModel)]=\"activeCoverImage\" name=\"activeCoverImage\" placeholder=\"Cover Image\" #coverimg>\n          </label></td>\n        <td> <label>Objective:\n              <input type=\"text\" [(ngModel)]=\"activeObjective\" name=\"activeObjective\" placeholder=\"Objective\" #objective>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Summary:\n              <input type=\"text\" [(ngModel)]=\"activeSummary\" name=\"activeSummary\" placeholder=\"Summary\" #summary>\n          </label></td>\n        <td> <label>First Name:\n               <input type=\"text\" [(ngModel)]=\"activeFirstName\" name=\"activeFirstName\" placeholder=\"First Name\" #firstname>\n          </label></td>\n        <td> <label>Last Name:\n             <input type=\"text\" [(ngModel)]=\"activeLastName\" name=\"activeLastName\" placeholder=\"Last Name\" #lastname>\n          </label></td>\n      </tr>\n       <tr class=\"danger\">\n        <td> <label>Author Image:\n              <input type=\"text\" [(ngModel)]=\"activeAuthorImage\" name=\"activeAuthorImage\" placeholder=\"Author Image\" #img>\n            </label></td>\n        <td> <label>Author Biography:\n              <input type=\"text\" [(ngModel)]=\"activeAuthorBio\" name=\"activeAuthorBio\" placeholder=\"Author Bio\" #bio>\n            </label></td>\n        <td> <label>One Fine Day Photo:\n              <input type=\"text\" [(ngModel)]=\"activeOneFineDay\" name=\"activeOneFineDay\" placeholder=\"One Fine Day Photo\" #ofdphotos>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Chile Vocab:\n              <input type=\"text\" [(ngModel)]=\"activeChileVocab\" name=\"activeChileVocab\" placeholder=\"Chile Vocab\" #chilevocab>\n          </label></td>\n        <td> <label>Japan Phrase:\n               <input type=\"text\" [(ngModel)]=\"activeJapanPhrase\" name=\"activeJapanPhrase\" placeholder=\"Japan Phrase\" #japanphrases>\n          </label></td>\n        <td> <label>Notes:\n              <input type=\"text\" [(ngModel)]=\"activeNotes\" name=\"activeNotes\" placeholder=\"Notes\" #notes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Person Of Interest:\n               <input type=\"text\" [(ngModel)]=\"activePersonOfInterest\" name=\"activePersonOfInterest\" placeholder=\"Person Of Interest\" #pois>\n          </label></td>\n        <td> <label>Proverb:\n              <input type=\"text\" [(ngModel)]=\"activeProverb\" name=\"activeProverb\" placeholder=\"Proverb\" #proverbs>\n          </label></td>\n        <td><label>Article Type:\n              <input type=\"text\" [(ngModel)]=\"activeArticleType\" name=\"activeArticleType\" placeholder=\"Article Type\" #articletypes>\n            </label>\n        </td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Flavor Color:\n              <input type=\"text\" [(ngModel)]=\"activeFlavorColor\" name=\"activeFlavorColor\" placeholder=\"Flavor Color\" #flavorcolors>\n          </label></td>\n        <td> <label>Kanji:\n               <input type=\"text\" [(ngModel)]=\"activeKanji\" name=\"activeKanji\" placeholder=\"Kanji\" #kanjis>\n          </label></td>\n        <td> <label>Quote:\n              <input type=\"text\" [(ngModel)]=\"activeQuote\" name=\"activeQuote\" placeholder=\"Quotes\" #quotes>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Front Cover Photo:\n               <input type=\"text\" [(ngModel)]=\"activeFrontCoverPhoto\" name=\"activeFrontCoverPhoto\" placeholder=\"Front Cover Photo\" #fcphotos>\n          </label></td>\n        <td> <label>Back Cover Photo:\n              <input type=\"text\" [(ngModel)]=\"activeBackCoverPhoto\" name=\"activeBackCoverPhoto\" placeholder=\"Back Cover Photo\" #bcphotos>\n          </label></td>\n        <td> <label>Everyday Chile Photo:\n              <input type=\"text\" [(ngModel)]=\"activeEverydayChilePhoto\" name=\"activeEverydayChilePhoto\" placeholder=\"Everyday Chile Photo\" #ecpphotos>\n          </label></td>\n        </tr>\n      <tr class=\"danger\">\n        <td> <label>Story A:<br/>\n              <textarea [(ngModel)]=\"activeStoryA\" name=\"activeStoryA\" placeholder=\"Paste Story A here...\" #storya></textarea>\n          </label></td>\n        <td> <label>Story B:<br/>\n               <textarea [(ngModel)]=\"activeStoryB\" name=\"activeStoryB\" placeholder=\"Paste Story B here...\" #storyb></textarea>\n          </label></td>\n        <td> <label>Story C:<br/>\n              <textarea [(ngModel)]=\"activeStoryC\" name=\"activeStoryC\"placeholder=\"Paste Story C here...\" #storyc></textarea>\n          </label></td>\n      </tr>\n      <tr class=\"danger\">\n        <td> <label>Story Blender:<br/>\n              <textarea [(ngModel)]=\"activeStoryBlender\" name=\"activeStoryBlender\"placeholder=\"Paste Story Blender here...\" #storybl></textarea>\n          </label></td>\n        <td> <label>Story Live:<br/>\n               <textarea [(ngModel)]=\"activeStoryLive\" name=\"activeStoryLive\" placeholder=\"Paste Story Live here...\" #storyli></textarea>\n          </label></td>\n        <td> <label>Story AfterEffects:<br/>\n              <textarea [(ngModel)]=\"activeStoryAftereffects\" name=\"activeStoryAftereffects\" placeholder=\"Paste Story Aftereffects here...\" #storyaf></textarea>\n          </label></td>\n      </tr>\n    </tbody>\n\n  </table>\n <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\">\n<button (click)=\"changeState('default')\" class=\"btn btn-danger\">Cancel</button>\n</form>\n<br/>\n<br/>\n\n</div> <!--END .HAMHEAD CLASS DIV-->\n\n\n<div *ngIf=\"appState == 'extend' \" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <button (click)=\"changeState('default')\" class=\"btn btn-danger\">Go Back</button>\n\n    </div>\n  </div>\n\n\n  <div *ngFor=\"let book of books\">\n      <div *ngIf=\"book.$key == activeKey\" class=\"eggstender\">\n            <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <h3>{{book.theme}}</h3>\n                          <p>Issue Date: {{book.issuedate}}</p>\n                          <p>Year: {{book.year}}</p>\n                          <p>Summary: {{book.summary}}</p>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <h4>Book Information</h4>\n                          <ul>\n                            <li><b>Theme:</b> {{book.theme}}</li>\n                            <li><b>Issue Date:</b> {{book.issuedate}}</li>\n                            <li><b>Month:</b> {{book.month}}</li>\n                            <li><b>Year:</b> {{book.year}}</li>\n                            <li><b>Cover Image:</b> {{book.coverimg}}</li>\n                            <li><b>Objective:</b> {{book.objective}}</li>\n                            <li><b>Summary:</b> {{book.summary}}</li>\n                            <li><b>ImageTest:</b>\n                              <img src=\"{{book.coverimg}}\" style=\"width:30px;height:30px;\">\n                            </li>\n                            </ul>\n\n                      </div>\n\n            </div>\n      </div>\n  </div><!-- *NGFOR BOOKS ENDS HERE -->\n\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div *ngIf=\"books\">\n      <table class=\"table\">\n        <thead >\n          <tr class=\"mensah\">\n            <th>Theme:</th>\n            <th>Issue Date:</th>\n            <th>Year:</th>\n            <th></th>\n          </tr >\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let book of books\" class=\"mensah\">\n            <td><h1>{{book.theme}}</h1></td>\n            <td><h1>{{book.issuedate}}</h1></td>\n            <td><h1>{{book.year}}</h1></td>\n            <td>\n              <button (click)=\"changeState('extend', book.$key)\"class=\"btn btn-primary\">More</button>\n              <button (click)=\"showEdit(book)\" class=\"btn btn-warning\">Edit</button>\n              <button (click)=\"deleteBook(book.$key)\" class=\"btn btn-danger\">Delete</button>\n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n</div>\n</div>\n\n\n\n\n</div> <!--END CONTAINER DIV-->\n\n</div> <!--END TOTAL WRAPPER DIV-->\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(369);


/***/ })

},[673]);
//# sourceMappingURL=main.bundle.js.map