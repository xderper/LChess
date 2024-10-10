/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("const socket = io();\r\n\r\nconst send_btn = document.getElementById('send_btn');\r\nconst code_input = document.getElementById('code_input');\r\n\r\n\r\nsend_btn.addEventListener('click', async () => {\r\n    const data = {\r\n        code_text: code_input.value\r\n    }\r\n    await fetch('/login/game/check', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify(data)\r\n    })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (data.success) {\r\n                room = code_input.value;\r\n                window.location.href = '../public/game.html#roomId=' + encodeURIComponent(room);\r\n            } else {\r\n                alert('Your code is incorrect!')\r\n            }\r\n        }\r\n        )\r\n        .catch(error => console.error(error))\r\n        ;\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;