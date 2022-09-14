"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 2483:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4975dbd0.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createButtonActiveGesture; }
/* harmony export */ });
/* harmony import */ var _index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-1a99aeb7.js */ 4895);
/* harmony import */ var _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-683b3b3c.js */ 634);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
  var currentTouchedButton;
  var initialTouchedButton;

  var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
    if (typeof document === 'undefined') {
      return;
    }

    var target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    var buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
      return buttonToModify.classList.add('ion-activated');
    });
    hapticFeedbackFn();
  };

  var clearActiveButton = function clearActiveButton() {
    var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!currentTouchedButton) {
      return;
    }

    var buttonToModify = currentTouchedButton;
    (0,_index_1a99aeb7_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
      return buttonToModify.classList.remove('ion-activated');
    });
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el: el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: function onStart(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.a);
    },
    onMove: function onMove(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.b);
    },
    onEnd: function onEnd() {
      clearActiveButton(true);
      (0,_haptic_683b3b3c_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ 7481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": function() { return /* binding */ isRTL; }
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
var isRTL = function isRTL(hostEl) {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }

  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};



/***/ }),

/***/ 9013:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-5ad6825d.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": function() { return /* binding */ startFocusVisible; }
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var ION_FOCUSED = 'ion-focused';
var ION_FOCUSABLE = 'ion-focusable';
var FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

var startFocusVisible = function startFocusVisible(rootEl) {
  var currentFocus = [];
  var keyboardMode = true;
  var ref = rootEl ? rootEl.shadowRoot : document;
  var root = rootEl ? rootEl : document.body;

  var setFocus = function setFocus(elements) {
    currentFocus.forEach(function (el) {
      return el.classList.remove(ION_FOCUSED);
    });
    elements.forEach(function (el) {
      return el.classList.add(ION_FOCUSED);
    });
    currentFocus = elements;
  };

  var pointerDown = function pointerDown() {
    keyboardMode = false;
    setFocus([]);
  };

  var onKeydown = function onKeydown(ev) {
    keyboardMode = FOCUS_KEYS.includes(ev.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  };

  var onFocusin = function onFocusin(ev) {
    if (keyboardMode && ev.composedPath) {
      var toFocus = ev.composedPath().filter(function (el) {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }

        return false;
      });
      setFocus(toFocus);
    }
  };

  var onFocusout = function onFocusout() {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);

  var destroy = function destroy() {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return {
    destroy: destroy,
    setFocus: setFocus
  };
};



/***/ }),

/***/ 2668:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-ce4f806c.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ CoreDelegate; },
/* harmony export */   "a": function() { return /* binding */ attachComponent; },
/* harmony export */   "d": function() { return /* binding */ detachComponent; }
/* harmony export */ });
/* harmony import */ var _home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 8277);
/* harmony import */ var _home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 1803);
/* harmony import */ var _home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);




/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


var attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee(delegate, container, component, cssClasses, componentProps, inline) {
    var _a, el;

    return (0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!delegate) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

          case 2:
            if (!(!inline && typeof component !== 'string' && !(component instanceof HTMLElement))) {
              _context.next = 4;
              break;
            }

            throw new Error('framework delegate is missing');

          case 4:
            el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

            if (cssClasses) {
              cssClasses.forEach(function (c) {
                return el.classList.add(c);
              });
            }

            if (componentProps) {
              Object.assign(el, componentProps);
            }

            container.appendChild(el);
            _context.next = 10;
            return new Promise(function (resolve) {
              return (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_3__.c)(el, resolve);
            });

          case 10:
            return _context.abrupt("return", el);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

var detachComponent = function detachComponent(delegate, element) {
  if (element) {
    if (delegate) {
      var container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

var CoreDelegate = function CoreDelegate() {
  var BaseComponent;
  var Reference;

  var attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2(parentElement, userComponent) {
      var userComponentProps,
          cssClasses,
          _a,
          _b,
          el,
          _el,
          app,
          _args2 = arguments;

      return (0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userComponentProps = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
              cssClasses = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : [];
              BaseComponent = parentElement;
              /**
               * If passing in a component via the `component` props
               * we need to append it inside of our overlay component.
               */

              if (!userComponent) {
                _context2.next = 12;
                break;
              }

              /**
               * If passing in the tag name, create
               * the element otherwise just get a reference
               * to the component.
               */
              el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
              /**
               * Add any css classes passed in
               * via the cssClasses prop on the overlay.
               */

              cssClasses.forEach(function (c) {
                return el.classList.add(c);
              });
              /**
               * Add any props passed in
               * via the componentProps prop on the overlay.
               */

              Object.assign(el, userComponentProps);
              /**
               * Finally, append the component
               * inside of the overlay component.
               */

              BaseComponent.appendChild(el);
              _context2.next = 10;
              return new Promise(function (resolve) {
                return (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_3__.c)(el, resolve);
              });

            case 10:
              _context2.next = 13;
              break;

            case 12:
              if (BaseComponent.children.length > 0) {
                // If there is no component, then we need to create a new parent
                // element to apply the css classes to.
                _el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
                cssClasses.forEach(function (c) {
                  return _el.classList.add(c);
                }); // Move each child from the original template to the new parent element.

                _el.append.apply(_el, (0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseComponent.children)); // Append the new parent element to the original parent element.


                BaseComponent.appendChild(_el);
              }

            case 13:
              /**
               * Get the root of the app and
               * add the overlay there.
               */
              app = document.querySelector('ion-app') || document.body;
              /**
               * Create a placeholder comment so that
               * we can return this component to where
               * it was previously.
               */

              Reference = document.createComment('ionic teleport');
              BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
              app.appendChild(BaseComponent);
              return _context2.abrupt("return", BaseComponent);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  var removeViewFromDom = function removeViewFromDom() {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom: attachViewToDom,
    removeViewFromDom: removeViewFromDom
  };
};



/***/ }),

/***/ 634:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-683b3b3c.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ hapticSelectionStart; },
/* harmony export */   "b": function() { return /* binding */ hapticSelectionChanged; },
/* harmony export */   "c": function() { return /* binding */ hapticSelection; },
/* harmony export */   "d": function() { return /* binding */ hapticImpact; },
/* harmony export */   "h": function() { return /* binding */ hapticSelectionEnd; }
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var HapticEngine = {
  getEngine: function getEngine() {
    var _a;

    var win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },
  available: function available() {
    return !!this.getEngine();
  },
  isCordova: function isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor: function isCapacitor() {
    var win = window;
    return !!win.Capacitor;
  },
  impact: function impact(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style: style
    });
  },
  notification: function notification(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style: style
    });
  },
  selection: function selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart: function selectionStart() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged: function selectionChanged() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd: function selectionEnd() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

var hapticSelection = function hapticSelection() {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


var hapticSelectionStart = function hapticSelectionStart() {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


var hapticSelectionChanged = function hapticSelectionChanged() {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


var hapticSelectionEnd = function hapticSelectionEnd() {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


var hapticImpact = function hapticImpact(options) {
  HapticEngine.impact(options);
};



/***/ }),

/***/ 2286:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-33ffec25.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ win; }
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * When accessing the window, it is important
 * to account for SSR applications where the
 * window is not available. Code that accesses
 * window when it is not available will crash.
 * Even checking if `window === undefined` will cause
 * apps to crash in SSR.
 *
 * Use win below to access an SSR-safe version
 * of the window.
 *
 * Example 1:
 * Before:
 * if (window.innerWidth > 768) { ... }
 *
 * After:
 * import { win } from 'path/to/this/file';
 * if (win?.innerWidth > 768) { ... }
 *
 * Note: Code inside of this if-block will
 * not run in an SSR environment.
 */
var win = typeof window !== 'undefined' ? window : undefined;


/***/ }),

/***/ 7288:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3413f7be.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ ION_CONTENT_ELEMENT_SELECTOR; },
/* harmony export */   "a": function() { return /* binding */ findIonContent; },
/* harmony export */   "b": function() { return /* binding */ ION_CONTENT_CLASS_SELECTOR; },
/* harmony export */   "c": function() { return /* binding */ scrollByPoint; },
/* harmony export */   "d": function() { return /* binding */ disableContentScrollY; },
/* harmony export */   "f": function() { return /* binding */ findClosestIonContent; },
/* harmony export */   "g": function() { return /* binding */ getScrollElement; },
/* harmony export */   "i": function() { return /* binding */ isIonContent; },
/* harmony export */   "p": function() { return /* binding */ printIonContentErrorMsg; },
/* harmony export */   "r": function() { return /* binding */ resetContentScrollY; },
/* harmony export */   "s": function() { return /* binding */ scrollToTop; }
/* harmony export */ });
/* harmony import */ var _home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ 1803);
/* harmony import */ var _home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-c4b11676.js */ 9273);



/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


var ION_CONTENT_TAG_NAME = 'ION-CONTENT';
var ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
var ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */

var ION_CONTENT_SELECTOR = "".concat(ION_CONTENT_ELEMENT_SELECTOR, ", ").concat(ION_CONTENT_CLASS_SELECTOR);

var isIonContent = function isIonContent(el) {
  return el && el.tagName === ION_CONTENT_TAG_NAME;
};
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */


var getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(el) {
    return (0,_home_user_vestapp_arnaldo_Projetos_vestapp_aplicativo_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isIonContent(el)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return new Promise(function (resolve) {
              return (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_2__.c)(el, resolve);
            });

          case 3:
            return _context.abrupt("return", el.getScrollElement());

          case 4:
            return _context.abrupt("return", el);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */


var findIonContent = function findIonContent(el) {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  var customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

  if (customContentHost) {
    return customContentHost;
  }

  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */


var findClosestIonContent = function findClosestIonContent(el) {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */


var scrollToTop = function scrollToTop(el, durationMs) {
  if (isIonContent(el)) {
    var content = el;
    return content.scrollToTop(durationMs);
  }

  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */


var scrollByPoint = function scrollByPoint(el, x, y, durationMs) {
  if (isIonContent(el)) {
    var content = el;
    return content.scrollByPoint(x, y, durationMs);
  }

  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */


var printIonContentErrorMsg = function printIonContentErrorMsg(el) {
  return (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_3__.a)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */


var disableContentScrollY = function disableContentScrollY(contentEl) {
  if (isIonContent(contentEl)) {
    var ionContent = contentEl;
    var initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */

    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};

var resetContentScrollY = function resetContentScrollY(contentEl, initialScrollY) {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};



/***/ }),

/***/ 2002:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-40bb69ee.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ arrowBackSharp; },
/* harmony export */   "b": function() { return /* binding */ closeCircle; },
/* harmony export */   "c": function() { return /* binding */ chevronBack; },
/* harmony export */   "d": function() { return /* binding */ closeSharp; },
/* harmony export */   "e": function() { return /* binding */ searchSharp; },
/* harmony export */   "f": function() { return /* binding */ checkmarkOutline; },
/* harmony export */   "g": function() { return /* binding */ ellipseOutline; },
/* harmony export */   "h": function() { return /* binding */ caretBackSharp; },
/* harmony export */   "i": function() { return /* binding */ arrowDown; },
/* harmony export */   "j": function() { return /* binding */ reorderThreeOutline; },
/* harmony export */   "k": function() { return /* binding */ reorderTwoSharp; },
/* harmony export */   "l": function() { return /* binding */ chevronDown; },
/* harmony export */   "m": function() { return /* binding */ chevronForwardOutline; },
/* harmony export */   "n": function() { return /* binding */ ellipsisHorizontal; },
/* harmony export */   "o": function() { return /* binding */ chevronForward; },
/* harmony export */   "p": function() { return /* binding */ caretUpSharp; },
/* harmony export */   "q": function() { return /* binding */ caretDownSharp; },
/* harmony export */   "r": function() { return /* binding */ removeOutline; },
/* harmony export */   "s": function() { return /* binding */ searchOutline; },
/* harmony export */   "t": function() { return /* binding */ close; },
/* harmony export */   "u": function() { return /* binding */ menuOutline; },
/* harmony export */   "v": function() { return /* binding */ menuSharp; }
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/* Ionicons v6.0.3, ES Modules */
var arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
var arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
var caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
var caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
var caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
var checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
var chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
var chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
var chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
var close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
var closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
var closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
var ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
var menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
var removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
var searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 6524:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-4d5544a0.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": function() { return /* binding */ KEYBOARD_DID_CLOSE; },
/* harmony export */   "KEYBOARD_DID_OPEN": function() { return /* binding */ KEYBOARD_DID_OPEN; },
/* harmony export */   "copyVisualViewport": function() { return /* binding */ copyVisualViewport; },
/* harmony export */   "keyboardDidClose": function() { return /* binding */ keyboardDidClose; },
/* harmony export */   "keyboardDidOpen": function() { return /* binding */ keyboardDidOpen; },
/* harmony export */   "keyboardDidResize": function() { return /* binding */ keyboardDidResize; },
/* harmony export */   "resetKeyboardAssist": function() { return /* binding */ resetKeyboardAssist; },
/* harmony export */   "setKeyboardClose": function() { return /* binding */ setKeyboardClose; },
/* harmony export */   "setKeyboardOpen": function() { return /* binding */ setKeyboardOpen; },
/* harmony export */   "startKeyboardAssist": function() { return /* binding */ startKeyboardAssist; },
/* harmony export */   "trackViewportChanges": function() { return /* binding */ trackViewportChanges; }
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
var KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
var KEYBOARD_THRESHOLD = 150;
var previousVisualViewport = {};
var currentVisualViewport = {};
var keyboardOpen = false;
/**
 * This is only used for tests
 */

var resetKeyboardAssist = function resetKeyboardAssist() {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};

var startKeyboardAssist = function startKeyboardAssist(win) {
  startNativeListeners(win);

  if (!win.visualViewport) {
    return;
  }

  currentVisualViewport = copyVisualViewport(win.visualViewport);

  win.visualViewport.onresize = function () {
    trackViewportChanges(win);

    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */


var startNativeListeners = function startNativeListeners(win) {
  win.addEventListener('keyboardDidShow', function (ev) {
    return setKeyboardOpen(win, ev);
  });
  win.addEventListener('keyboardDidHide', function () {
    return setKeyboardClose(win);
  });
};

var setKeyboardOpen = function setKeyboardOpen(win, ev) {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};

var setKeyboardClose = function setKeyboardClose(win) {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */


var keyboardDidOpen = function keyboardDidOpen() {
  var scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */


var keyboardDidResize = function keyboardDidResize(win) {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */


var keyboardDidClose = function keyboardDidClose(win) {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */


var fireKeyboardOpenEvent = function fireKeyboardOpenEvent(win, nativeEv) {
  var keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  var ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight: keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */


var fireKeyboardCloseEvent = function fireKeyboardCloseEvent(win) {
  var ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */


var trackViewportChanges = function trackViewportChanges(win) {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */


var copyVisualViewport = function copyVisualViewport(visualViewport) {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};



/***/ }),

/***/ 3963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createKeyboardController; }
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 2286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */

var createKeyboardController = function createKeyboardController(keyboardChangeCallback) {
  var keyboardWillShowHandler;
  var keyboardWillHideHandler;
  var keyboardVisible;

  var init = function init() {
    keyboardWillShowHandler = function keyboardWillShowHandler() {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };

    keyboardWillHideHandler = function keyboardWillHideHandler() {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };

    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };

  var destroy = function destroy() {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };

  var isKeyboardVisible = function isKeyboardVisible() {
    return keyboardVisible;
  };

  init();
  return {
    init: init,
    destroy: destroy,
    isKeyboardVisible: isKeyboardVisible
  };
};



/***/ }),

/***/ 3844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ SPINNERS; }
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: function fn(dur, index, total) {
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      var angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: "".concat(9 * Math.sin(angle), "px"),
          left: "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: function fn(dur, index, total) {
      var step = index / total;
      var animationDelay = "".concat(dur * step - dur, "ms");
      var angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: "".concat(9 * Math.sin(angle), "px"),
          left: "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: function fn() {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: function fn() {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: function fn(_, index) {
      var animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: "".concat(9 - 9 * index, "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(360 / total * index + (index < total / 2 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(360 / total * index + (index < total / 2 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
var SPINNERS = spinners;


/***/ }),

/***/ 1812:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-fa30a130.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": function() { return /* binding */ createSwipeBackGesture; }
/* harmony export */ });
/* harmony import */ var _helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-4d272360.js */ 9158);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 7481);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2172);
/* harmony import */ var _gesture_controller_17e82006_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17e82006.js */ 607);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





var createSwipeBackGesture = function createSwipeBackGesture(el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) {
  var win = el.ownerDocument.defaultView;
  var rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */

  var isAtEdge = function isAtEdge(detail) {
    var threshold = 50;
    var startX = detail.startX;

    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }

    return startX <= threshold;
  };

  var getDeltaX = function getDeltaX(detail) {
    return rtl ? -detail.deltaX : detail.deltaX;
  };

  var getVelocityX = function getVelocityX(detail) {
    return rtl ? -detail.velocityX : detail.velocityX;
  };

  var canStart = function canStart(detail) {
    return isAtEdge(detail) && canStartHandler();
  };

  var onMove = function onMove(detail) {
    // set the transition animation's progress
    var delta = getDeltaX(detail);
    var stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };

  var onEnd = function onEnd(detail) {
    // the swipe back gesture has ended
    var delta = getDeltaX(detail);
    var width = win.innerWidth;
    var stepValue = delta / width;
    var velocity = getVelocityX(detail);
    var z = width / 2.0;
    var shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    var missing = shouldComplete ? 1 - stepValue : stepValue;
    var missingDistance = missing * width;
    var realDur = 0;

    if (missingDistance > 5) {
      var dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    /**
     * TODO: stepValue can sometimes return negative values
     * or values greater than 1 which should not be possible.
     * Need to investigate more to find where the issue is.
     */


    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_4d272360_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };

  return (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el: el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart: canStart,
    onStart: onStartHandler,
    onMove: onMove,
    onEnd: onEnd
  });
};



/***/ })

}]);
//# sourceMappingURL=common.js.map