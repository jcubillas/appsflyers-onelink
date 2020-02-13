/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/image/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/blocksdk/blocksdk.js":
/*!*******************************************!*\
  !*** ./node_modules/blocksdk/blocksdk.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * Copyright (c) 2018, salesforce.com, inc.\n * All rights reserved.\n * Licensed under the BSD 3-Clause license.\n * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause\n */\n\nvar SDK = function (config, whitelistOverride, sslOverride) {\n\t// config has been added as the primary parameter\n\t// If it is provided ensure that the other paramaters are correctly assigned\n\t// for backwards compatibility\n\tif (Array.isArray(config)) {\n\t\twhitelistOverride = config;\n\t\tsslOverride = whitelistOverride;\n\t\tconfig = undefined;\n\t}\n\n\tthis._whitelistOverride = whitelistOverride;\n\tthis._sslOverride = sslOverride;\n\tthis._messageId = 1;\n\tthis._messages = {\n\t\t0: function () {}\n\t};\n\tthis._readyToPost = false;\n\tthis._pendingMessages = [];\n\tthis._receiveMessage = this._receiveMessage.bind(this);\n\n\twindow.addEventListener('message', this._receiveMessage, false);\n\n\twindow.parent.postMessage({\n\t\tmethod: 'handShake',\n\t\torigin: window.location.origin,\n\t\tpayload: config\n\t}, '*');\n};\n\nSDK.prototype.execute = function execute (method, options) {\n\toptions = options || {};\n\n\tvar self = this;\n\tvar payload = options.data;\n\tvar callback = options.success;\n\n\tif (!this._readyToPost) {\n\t\tthis._pendingMessages.push({\n\t\t\tmethod: method,\n\t\t\tpayload: payload,\n\t\t\tcallback: callback\n\t\t});\n\t} else {\n\t\tthis._post({\n\t\t\tmethod: method,\n\t\t\tpayload: payload\n\t\t}, callback);\n\t}\n};\n\nSDK.prototype.getCentralData = function (cb) {\n\tthis.execute('getCentralData', {\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.getContent = function (cb) {\n\tthis.execute('getContent', {\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.getData = function (cb) {\n\tthis.execute('getData', {\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.getUserData = function (cb) {\n\tthis.execute('getUserData', {\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.getView = function (cb) {\n\tthis.execute('getView', {\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.setBlockEditorWidth = function (value, cb) {\n\tthis.execute('setBlockEditorWidth', {\n\t\tdata: value,\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.setCentralData = function (dataObj, cb) {\n\tthis.execute('setCentralData', {\n\t\tdata: dataObj,\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.setContent = function (content, cb) {\n\tthis.execute('setContent', {\n\t\tdata: content,\n\t\tsuccess: cb});\n};\n\nSDK.prototype.setData = function (dataObj, cb) {\n\tthis.execute('setData', {\n\t\tdata: dataObj,\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.setSuperContent = function (content, cb) {\n\tthis.execute('setSuperContent', {\n\t\tdata: content,\n\t\tsuccess: cb\n\t});\n};\n\nSDK.prototype.triggerAuth = function (appID) {\n\tthis.getUserData(function (userData) {\n\t\tvar stack = userData.stack;\n\t\tif (stack.indexOf('qa') === 0) {\n\t\t\tstack = stack.substring(3,5) + '.' + stack.substring(0,3);\n\t\t}\n\t\tvar iframe = document.createElement('IFRAME');\n\t\tiframe.src = 'https://mc.' + stack + '.exacttarget.com/cloud/tools/SSO.aspx?appId=' + appID + '&restToken=1&hub=1';\n\t\tiframe.style.width= '1px';\n\t\tiframe.style.height = '1px';\n\t\tiframe.style.position = 'absolute';\n\t\tiframe.style.top = '0';\n\t\tiframe.style.left = '0';\n\t\tiframe.style.visibility = 'hidden';\n\t\tiframe.className = 'authframe';\n\t\tdocument.body.appendChild(iframe);\n\t});\n};\n\nSDK.prototype.triggerAuth2 = function (authInfo) {\n\tvar iframe = document.createElement('IFRAME');\n\tvar scope = '';\n\tvar state = '';\n\tif(Array.isArray(authInfo.scope)) {\n\t\tscope = '&scope=' + authInfo.scope.join('%20');\n\t}\n\tif(authInfo.state) {\n\t\tstate = '&state=' + authInfo.state;\n\t}\n\tiframe.src = authInfo.authURL + (authInfo.authURL.endsWith('/') ? '':'/') + 'v2/authorize?response_type=code&client_id=' + authInfo.clientId + '&redirect_uri=' + encodeURIComponent(authInfo.redirectURL) + scope + state;\n\tiframe.style.width= '1px';\n\tiframe.style.height = '1px';\n\tiframe.style.position = 'absolute';\n\tiframe.style.top = '0';\n\tiframe.style.left = '0';\n\tiframe.style.visibility = 'hidden';\n\tiframe.className = 'authframe';\n\tdocument.body.appendChild(iframe);\n};\n\n/* Internal Methods */\n\nSDK.prototype._executePendingMessages = function _executePendingMessages () {\n\tvar self = this;\n\n\tthis._pendingMessages.forEach(function (thisMessage) {\n\t\tself.execute(thisMessage.method, {\n\t\t\tdata: thisMessage.payload,\n\t\t\tsuccess: thisMessage.callback\n\t\t});\n\t});\n\n\tthis._pendingMessages = [];\n};\n\nSDK.prototype._post = function _post (payload, callback) {\n\tthis._messages[this._messageId] = callback;\n\tpayload.id = this._messageId;\n\tthis._messageId += 1;\n\t// the actual postMessage always uses the validated origin\n\twindow.parent.postMessage(payload, this._parentOrigin);\n};\n\nSDK.prototype._receiveMessage = function _receiveMessage (message) {\n\tmessage = message || {};\n\tvar data = message.data || {};\n\n\tif (data.method === 'handShake') {\n\t\tif (this._validateOrigin(data.origin)) {\n\t\t\tthis._parentOrigin = data.origin;\n\t\t\tthis._readyToPost = true;\n\t\t\tthis._executePendingMessages();\n\t\t\treturn;\n\t\t}\n\t}\n\n\t// if the message is not from the validated origin it gets ignored\n\tif (!this._parentOrigin || this._parentOrigin !== message.origin) {\n\t\treturn;\n\t}\n\t// when the message has been received, we execute its callback\n\t(this._messages[data.id || 0] || function () {})(data.payload);\n\tdelete this._messages[data.id];\n};\n\n// the custom block should verify it is being called from the marketing cloud\nSDK.prototype._validateOrigin = function _validateOrigin (origin) {\n\t// Make sure to escape periods since these strings are used in a regular expression\n\tvar allowedDomains = this._whitelistOverride || ['exacttarget\\\\.com', 'marketingcloudapps\\\\.com', 'blocktester\\\\.herokuapp\\\\.com'];\n\n\tfor (var i = 0; i < allowedDomains.length; i++) {\n\t\t// Makes the s optional in https\n\t\tvar optionalSsl = this._sslOverride ? '?' : '';\n\t\tvar mcSubdomain = allowedDomains[i] === 'exacttarget\\\\.com' ? 'mc\\\\.' : '';\n\t\tvar whitelistRegex = new RegExp('^https' + optionalSsl + '://' + mcSubdomain + '([a-zA-Z0-9-]+\\\\.)*' + allowedDomains[i] + '(:[0-9]+)?$', 'i');\n\n\t\tif (whitelistRegex.test(origin)) {\n\t\t\treturn true;\n\t\t}\n\t}\n\n\treturn false;\n};\n\nif (typeof(window) === 'object') {\n\twindow.sfdc = window.sfdc || {};\n\twindow.sfdc.BlockSDK = SDK;\n}\nif (true) {\n\tmodule.exports = SDK;\n}\n\n\n//# sourceURL=webpack:///./node_modules/blocksdk/blocksdk.js?");

/***/ }),

/***/ "./src/image/main.js":
/*!***************************!*\
  !*** ./src/image/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SDK = __webpack_require__(/*! blocksdk */ \"./node_modules/blocksdk/blocksdk.js\");\r\nvar sdk = new SDK({ blockEditorWidth: 300, tabs: ['htmlblock'] });\r\nvar ContentBlockID = uuidv4();\r\nvar selectedFile = {};\r\n\r\n\r\nfunction componentes() {\r\n\tthis.imagen = function (data) {\r\n\r\n\t\tvar html = '<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">'\r\n\t\thtml += '<tr>'\r\n\t\thtml += '<td align=\"center\">'\r\n\t\thtml += '<a href=\"' + data.LinkUrl + '\"><img src=\"' + data.Url + '\" width=\"' + data.Width + '\" height=\"' + data.Height + '\" alt=\"' + data.AltText + '\" style=\"display: block; text-align: center;\"/></a>'\r\n\t\thtml += '</td>'\r\n\t\thtml += '</tr>'\r\n\t\thtml += '</table>'\r\n\t\treturn html;\r\n\t}\r\n}\r\n\r\ndocument.getElementById('workspace').addEventListener(\"input\", function () {\r\n\tconsole.log('workspace');\r\n\r\n\tvar data = getInputsData()\r\n\r\n\tsdk.setData(data);\r\n\r\n\tsave(data);\r\n});\r\nfunction getInputsData() {\r\n\r\n\treturn {\r\n\t\tContentBlockID: ContentBlockID,\r\n\t\tfilename: $(\"#onelinkImage\")[0].files[0].name,\r\n\t\tUrl: $(\"#urlImage\").val(),\r\n\t\tLinkID: $(\"#linkId\").val(),\r\n\t\tAltText: $(\"#imagealt\").val(),\r\n\t\tWidth: $(\"#imagewidth\").val(),\r\n\t\tHeight: $(\"#imageheight\").val(),\r\n\t\tLinkUrl: $(\"#urlLink\").val(),\r\n\t\tLinkName: $(\"#onelink\").val(),\r\n\t\trefresh_token: $(\"#rt\").val()\r\n\t}\r\n}\r\n\r\nsdk.getContent(function (content) {\r\n\tsdk.setContent(content);\r\n\tsdk.setSuperContent(content);\r\n\tconsole.log(\"getContent\");\r\n\tconsole.log(content);\r\n});\r\n\r\n\r\n\r\nsdk.getData(function (data) {\r\n\r\n\tthis.ContentBlockID = data.contentBlockID == '' || data.contentBlockID == undefined ? uuidv4() : data.contentBlockID;\r\n\t$(\"#urlImage\").val(data.url);\r\n\t$(\"#onelink\").val(data.linkName);\r\n\t$(\"#imagealt\").val(data.altText);\r\n\t$(\"#imagewidth\").val(data.width);\r\n\t$(\"#imageheight\").val(data.height);\r\n\t$(\"#urlLink\").val(data.linkUrl);\r\n\t$(\"#linkId\").val(data.linkID);\r\n});\r\n\r\n\r\nfunction save() {\r\n\tvar data = getInputsData();\r\n\tconsole.log(data);\r\n\tvar cmp = new componentes();\r\n\tvar html;\r\n\thtml = cmp.imagen(data);\r\n\tsdk.setContent(html);\r\n\tsdk.setSuperContent(html);\r\n\t$('.spinner').hide();\r\n    $(\"#step1\").show();\r\n}\r\n\r\nfunction readURL(input) {\r\n\tif (input.files && input.files[0]) {\r\n\t\tvar reader = new FileReader();\r\n\r\n\t\treader.onload = function (e) {\r\n\t\t\t$('#urlImage').val(e.target.result);\r\n\t\t\tsave();\r\n\t\t}\r\n\t\t$('#filename').val(input.files[0].name);\r\n\t\treader.readAsDataURL(input.files[0]);\r\n\t\tsave();\r\n\t}\r\n}\r\n\r\n$(\"#onelinkImage\").on(\"change\", function () {\r\n\treadURL(this);\r\n\t\r\n});\r\n\r\n$(\"#urlImage\").on(\"change\", function () {\r\n\tsave();\r\n});\r\n\r\n$(\"#onelink\").on(\"change\", function () {\r\n\tsave();\r\n});\r\n\r\n$(\"#imagealt\").on(\"change\", function () {\r\n\tsave();\r\n});\r\n\r\n$(\"#imagewidth\").on(\"change\", function () {\r\n\tsave();\r\n});\r\n\r\n$(\"#imageheight\").on(\"change\", function () {\r\n\tsave();\r\n});\r\n\r\n$(\"#urlLink\").on(\"change\", function () {\r\n\tsave();\r\n});\r\n\r\n$(\"#linkId\").on(\"change\", function () {\r\n\tsave();\r\n});\r\n\r\n$(function () {\r\n\t$('#previewContent').click(function () {\r\n\t\t$('.spinner').show();\r\n\t\t$(\"#step1\").hide();\r\n\t\tvar form_data = JSON.stringify({\r\n\t\t\tname: uuidv4(),\r\n\t\t\trefresh_token: $(\"#rt\").val(),\r\n\t\t\tfileBase64: $('#urlImage').val()\r\n\t\t});\r\n\t\t//form_data.append('file', file_data);\r\n\t\t//MOSTRAR SPINNER\r\n\t\t$.ajax({\r\n\t\t\turl: '/sfmc/SaveImage',\r\n\t\t\theaders: {\r\n\t\t\t\t\"Content-Type\": \"application/json\"\r\n\t\t\t},\r\n\t\t\tdata: form_data,\r\n\t\t\tmethod: 'POST',\r\n\t\t\tsuccess: function (response) {\r\n\t\t\t\tif (response !== undefined && response !== '') {\r\n\t\t\t\t\tvar objResponse = JSON.parse(response);\r\n\r\n\t\t\t\t\tif (objResponse.fileProperties !== undefined) {\r\n\t\t\t\t\t\tvar imageId = objResponse.id;\r\n\t\t\t\t\t\tconsole.log(imageId);\r\n\t\t\t\t\t\tvar publishedURL = objResponse.fileProperties.publishedURL\r\n\t\t\t\t\t\t$('#urlImage').val(publishedURL);\r\n\t\t\t\t\t\tcheckImageStatus(imageId);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (objResponse.validationErrors != undefined) {\r\n\t\t\t\t\t\talert(objResponse.validationErrors[0].message);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tconsole.log(response); // display success response from the server\r\n\t\t\t},\r\n\t\t\terror: function (response) {\r\n\t\t\t\tconsole.log(response); // display error response from the server\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tSaveDataExtensionRow();\r\n\t});\r\n});\r\n\r\nfunction checkImageStatus(imageId) {\r\n\tsetTimeout(function() {\r\n\t\t$.post('/sfmc/GetImageStatus', { id: imageId, refresh_token: $(\"#rt\").val() })\r\n\t\t\t.done(function (data) {\r\n\t\t\t\tconsole.log(\"data .done\",data);\r\n\t\t\t\tif(data.refresh_token != undefined){\r\n\t\t\t\t\t$(\"#rt\").val(data.refresh_token)\r\n\t\t\t\t}\r\n\t\t\t\tvar imageObj = data.body;\r\n\t\t\t\tif (imageObj.items[0].status.name !== \"Published\") {\r\n\t\t\t\t\tcheckImageStatus(imageId);\r\n\t\t\t\t} else {\r\n\t\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\tsave()\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t},10000);\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\t\t\t\r\n\t\t, 3000);\r\n}\r\nfunction uuidv4() {\r\n\treturn 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\r\n\t\tvar r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\r\n\t\treturn v.toString(16);\r\n\t});\r\n}\r\n\r\nfunction SaveDataExtensionRow() {\r\n\tvar data = getInputsData();\r\n\r\n\tsdk.getData(function (data) {\r\n\t\tsdk.setData(getInputsData());\r\n\t});\r\n\r\n\tvar link = {};\r\n\tlink.LinkID = data.LinkID;\r\n\tlink.contentsCount = $(\"#contentsCount\").val();\r\n\r\n\t$.ajax({\r\n\t\turl: '/sfmc/UpsertImageRow',\r\n\t\tmethod: 'POST',\r\n\t\tasync: false,\r\n\t\tdata: data,\r\n\t\tsuccess: function (data) {\r\n\t\t\tlink.refresh_token = data.refresh_token;\r\n\t\t\t\t$.ajax({\r\n\t\t\t\t\turl: '/sfmc/UpsertLink',\r\n\t\t\t\t\tmethod: 'POST',\r\n\t\t\t\t\tasync: false,\r\n\t\t\t\t\tdata: link,\r\n\t\t\t\t\tsuccess: function (data) {\r\n\t\t\t\t\t\tconsole.log(data);\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\tconsole.log(data);\r\n\t\t}\r\n\t});\r\n}\n\n//# sourceURL=webpack:///./src/image/main.js?");

/***/ })

/******/ });