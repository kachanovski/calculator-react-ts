(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),E_alex_pc_JS_PROJECTS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_App_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_App_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),allButtons=["MC","M+","M-","MR","C","+/-","/","*","7","8","9","-","4","5","6","+","1","2","3","=","<","0","."],App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(E_alex_pc_JS_PROJECTS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),inputValue=_useState2[0],setInputValue=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState4=Object(E_alex_pc_JS_PROJECTS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),history=_useState4[0],setHistory=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState6=Object(E_alex_pc_JS_PROJECTS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),action=_useState6[0],setAction=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState8=Object(E_alex_pc_JS_PROJECTS_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),memmoryValue=_useState8[0],setMemmoryValue=_useState8[1],onChangeInput=function(e){var _,t,a,s,u,r=e.target.value.replace(/[^\d.]*/g,"");(null===(_=r.match(/\./g))||void 0===_?void 0:_.length)>1?r=r.substr(0,r.lastIndexOf(".")):(null===(t=r.match(/\-/g))||void 0===t?void 0:t.length)>1?r=r.substr(0,r.lastIndexOf("-")):(null===(a=r.match(/\+/g))||void 0===a?void 0:a.length)>1?r=r.substr(0,r.lastIndexOf("+")):(null===(s=r.match(/\*/g))||void 0===s?void 0:s.length)>1?r=r.substr(0,r.lastIndexOf("*")):(null===(u=r.match(/\/\//g))||void 0===u?void 0:u.length)>1&&(r=r.substr(0,r.lastIndexOf("/"))),setInputValue(r)},resultHandler=function resultHandler(){"0"===inputValue?(setHistory(""),setAction(""),setInputValue("Error")):inputValue&&history&&action&&(setHistory(""),setAction(""),setInputValue(eval(history+"".concat(action)+inputValue)))},checkHandler=function checkHandler(){""!==inputValue&&(setHistory(inputValue),setInputValue("")),""===inputValue&&setHistory(history),""!==history&&""!==inputValue&&(setInputValue(""),setHistory(eval(history+"".concat(action)+inputValue))),""===inputValue&&""===history&&setAction("")},onKeyPressCharCodeHandler=function(e){setInputValue(""),setAction(e),setHistory(inputValue),checkHandler()},onKeyPressHandler=function(e){42===e.charCode?onKeyPressCharCodeHandler("*"):43===e.charCode?onKeyPressCharCodeHandler("+"):45===e.charCode?onKeyPressCharCodeHandler("-"):47===e.charCode?onKeyPressCharCodeHandler("/"):13===e.charCode&&resultHandler()},onClick=function(e){switch(e){case"=":setInputValue(history),setHistory(""),setAction(""),resultHandler();break;case"+":case"-":case"*":checkHandler(),setAction(e);break;case"/":setAction(e),checkHandler();break;case"C":setInputValue(""),setHistory(""),setAction("");break;case"+/-":inputValue&&setInputValue(-inputValue);break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":setInputValue(inputValue+e);break;case".":inputValue.toString().includes(e)&&(e=""),setInputValue(inputValue+e);break;case"<":setInputValue(inputValue.toString().slice(0,-1));break;case"M+":setInputValue(Number(inputValue)+Number(memmoryValue));break;case"M-":setInputValue(Number(inputValue)-Number(memmoryValue));break;case"MR":localStorage.setItem("MR",JSON.stringify(inputValue));var _=localStorage.getItem("MR");setMemmoryValue(JSON.parse(_));break;case"MC":localStorage.removeItem("MR"),setMemmoryValue("")}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"calc",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"result",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:"input-history",value:history,readOnly:!0,type:"text"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:"input-action",value:action,readOnly:!0,type:"text"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:"input-result",type:"text",autoFocus:!0,onKeyPress:onKeyPressHandler,value:inputValue,onChange:onChangeInput})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"buttons-table",children:allButtons.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__.a,{value:e,onClick:onClick},e)}))})]})})]})};__webpack_exports__.a=App},function(e,_,t){"use strict";t.d(_,"a",(function(){return s}));var a=t(0),s=(t(1),function(e){return Object(a.jsx)("div",{onClick:function(){return e.onClick(e.value)},className:"button",children:e.value})})},,,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),s=t(1),u=t.n(s),r=t(4),n=t.n(r),c=(t(12),t(5)),l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(_){var t=_.getCLS,a=_.getFID,s=_.getFCP,u=_.getLCP,r=_.getTTFB;t(e),a(e),s(e),u(e),r(e)}))};n.a.render(Object(a.jsx)(u.a.StrictMode,{children:Object(a.jsx)(c.a,{})}),document.getElementById("root")),l()}],[[14,1,2]]]);
//# sourceMappingURL=main.511e6e43.chunk.js.map