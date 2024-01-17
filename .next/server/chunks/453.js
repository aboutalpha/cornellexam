exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 8274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Banner() {
    const [bannerOpen, setBannerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: bannerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-slate-500 inline-flex",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "font-medium hover:underline text-slate-50",
                                href: "https://github.com/cruip/tailwind-landing-page-template",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                    "Download",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: " on GitHub"
                                    })
                                ]
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "italic px-1.5",
                                children: "or"
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "font-medium hover:underline text-emerald-400",
                                href: "https://cruip.com/simple/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Check Premium Version"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700",
                        onClick: ()=>setBannerOpen(false),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-4 h-4 shrink-0 fill-current",
                                viewBox: "0 0 16 16",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 1599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/ui/logo.tsx
var logo = __webpack_require__(7220);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 18 modules
var transition = __webpack_require__(7516);
;// CONCATENATED MODULE: ./components/ui/mobile-menu.tsx




function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = (0,react_.useState)(false);
    const trigger = (0,react_.useRef)(null);
    const mobileNav = (0,react_.useRef)(null);
    // close the mobile menu on click outside
    (0,react_.useEffect)(()=>{
        const clickHandler = ({ target  })=>{
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return ()=>document.removeEventListener("click", clickHandler);
    });
    // close the mobile menu if the esc key is pressed
    (0,react_.useEffect)(()=>{
        const keyHandler = ({ keyCode  })=>{
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return ()=>document.removeEventListener("keydown", keyHandler);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex md:hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                ref: trigger,
                className: `hamburger ${mobileNavOpen && "active"}`,
                "aria-controls": "mobile-nav",
                "aria-expanded": mobileNavOpen,
                onClick: ()=>setMobileNavOpen(!mobileNavOpen),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only",
                        children: "Menu"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "w-6 h-6 fill-current text-gray-900",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "4",
                                width: "24",
                                height: "2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "11",
                                width: "24",
                                height: "2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "18",
                                width: "24",
                                height: "2"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: mobileNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                    show: mobileNavOpen,
                    as: "nav",
                    id: "mobile-nav",
                    className: "absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white",
                    enter: "transition ease-out duration-200 transform",
                    enterFrom: "opacity-0 -translate-y-2",
                    enterTo: "opacity-100 translate-y-0",
                    leave: "transition ease-out duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "px-5 py-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/signin",
                                    className: "flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center",
                                    onClick: ()=>setMobileNavOpen(false),
                                    children: "Sign in"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/signup",
                                    className: "btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2",
                                    onClick: ()=>setMobileNavOpen(false),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Sign up"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1",
                                            viewBox: "0 0 12 12",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",
                                                fill: "#999",
                                                fillRule: "nonzero"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/header.tsx





function Header() {
    const [top, setTop] = (0,react_.useState)(true);
    // detect whether user has scrolled the page down by 10px
    const scrollHandler = ()=>{
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    (0,react_.useEffect)(()=>{
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return ()=>window.removeEventListener("scroll", scrollHandler);
    }, [
        top
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? "bg-white backdrop-blur-sm shadow-lg" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-6xl mx-auto px-5 sm:px-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between h-16 md:h-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shrink-0 mr-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "hidden md:flex md:grow",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex grow justify-end flex-wrap items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/signin",
                                        className: "font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "Sign in"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/signup",
                                        className: "btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Sign up"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1",
                                                viewBox: "0 0 12 12",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",
                                                    fillRule: "nonzero"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 7220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function Logo() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        className: "block",
        "aria-label": "Cruip",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: "w-8 h-8",
            viewBox: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                        cx: "21.152%",
                        cy: "86.063%",
                        fx: "21.152%",
                        fy: "86.063%",
                        r: "79.941%",
                        id: "footer-logo",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#4FD1C5",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#81E6D9",
                                offset: "25.871%"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#338CF5",
                                offset: "100%"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    width: "32",
                    height: "32",
                    rx: "16",
                    fill: "url(#footer-logo)",
                    fillRule: "nonzero"
                })
            ]
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

/***/ 8787:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8274));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1599))

/***/ }),

/***/ 9519:
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

;// CONCATENATED MODULE: ./components/banner.tsx

const banner_proxy = (0,module_proxy.createProxy)("/Users/yunhanluo/Documents/Work/SDE/cornell exam website/components/banner.tsx")

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: banner_esModule, $$typeof: banner_$$typeof } = banner_proxy;
/* harmony default export */ const banner = (banner_proxy.default);

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
                    children,
                    /*#__PURE__*/ jsx_runtime.jsx(banner, {})
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