exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 2118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6789);



function Header() {
    const [top, setTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    // detect whether user has scrolled the page down by 10px
    const scrollHandler = ()=>{
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return ()=>window.removeEventListener("scroll", scrollHandler);
    }, [
        top
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: `fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? "bg-white backdrop-blur-sm shadow-lg" : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-6xl mx-auto px-5 sm:px-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-start h-16 md:h-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "shrink-0 mr-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-xl font-extrabold leading-tighter tracking-tighter",
                        children: "Cornell Exam Schedule Viewer"
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 6789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Logo)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/Cornell Exam 128.png
/* harmony default export */ const Cornell_Exam_128 = ({"src":"/_next/static/media/Cornell Exam 128.05f000a7.png","height":128,"width":128,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42g2JS0oDQRBAq6pnej5JG01wFW/gZ+VGEHQvKOQcnsC1C8EziOARPIIgirMyG48wUXCMmW+mp6syj/dWD6Hn+ub2Qls7Y8QVgvTCMBJ+6dcTzgHOv45Pn0tjQiUiKAyt1rj39mHHxc+VV17O9qfCpqvWAgIIOgQQYTo78TulDrzg7r6xLDDdHfMw1GTrGhSRFFUDi2XekEQxBcUKsscHKOefGG8ZDAcx6D5mIVLGSJ0kMNgZSTCZMDvHrsilSVNQUSgkzvlqewTt4tvj5R81bUdplnulIPi9nqur9+jwKMl/M1+1zKqs4N860kHUKXavG1b1ecI+YjKhAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/ui/logo.tsx




function Logo() {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        className: "block",
        "aria-label": "Cruip",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: Cornell_Exam_128,
            width: 32,
            height: 32,
            alt: "Logo"
        })
    });
}


/***/ }),

/***/ 4807:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7144, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7914, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5110, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3682, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1390, 23))

/***/ }),

/***/ 4554:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2118))

/***/ }),

/***/ 789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3146);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter","display":"swap"}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_ = __webpack_require__(4257);
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_);
// EXTERNAL MODULE: ./app/css/style.css
var style = __webpack_require__(1893);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./components/ui/header.tsx

const proxy = (0,module_proxy.createProxy)("/Users/yunhanluo/Documents/Work/SDE/cornell exam website/components/ui/header.tsx")

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const header = (proxy.default);

;// CONCATENATED MODULE: ./app/layout.tsx




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime.jsx("body", {
            className: `${(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default()).variable} font-inter antialiased bg-white text-gray-900 tracking-tight`,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(header, {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 1893:
/***/ (() => {



/***/ })

};
;