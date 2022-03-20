/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.wasm": function() {
/******/ 			return {
/******/ 				"./ergo_lib_wasm_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_json_parse": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_json_parse"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_json_serialize": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_json_serialize"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_string": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_is_string"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_fetch_fb26f738d9707b16": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_fetch_fb26f738d9707b16"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_fetch_fe54824ee845f6b4": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_fetch_fe54824ee845f6b4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_226d109446575877": function() {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_new_226d109446575877"]();
/******/ 					},
/******/ 					"__wbg_append_4d85f35672cbffa7": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_append_4d85f35672cbffa7"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_ea36d565358a42f7": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_instanceof_Response_ea36d565358a42f7"](p0i32);
/******/ 					},
/******/ 					"__wbg_url_6e564c9e212456f8": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_url_6e564c9e212456f8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_status_3a55bb50e744b834": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_status_3a55bb50e744b834"](p0i32);
/******/ 					},
/******/ 					"__wbg_headers_e4204c6775f7b3b4": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_headers_e4204c6775f7b3b4"](p0i32);
/******/ 					},
/******/ 					"__wbg_arrayBuffer_0e2a43f68a8b3e49": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_arrayBuffer_0e2a43f68a8b3e49"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_c07f0662ece15bc6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_newwithstrandinit_c07f0662ece15bc6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_3e46aa268da0fed1": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_getRandomValues_3e46aa268da0fed1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_59fcc2add91fe7b3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_randomFillSync_59fcc2add91fe7b3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_process_f2b73829dbd321da": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_process_f2b73829dbd321da"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_versions_cd82f79c98672a9f": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_versions_cd82f79c98672a9f"](p0i32);
/******/ 					},
/******/ 					"__wbg_node_ee3f6da4130bd35f": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_node_ee3f6da4130bd35f"](p0i32);
/******/ 					},
/******/ 					"__wbg_modulerequire_0a83c0c31d12d2c7": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_modulerequire_0a83c0c31d12d2c7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_crypto_9e3521ed42436d35": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_crypto_9e3521ed42436d35"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_c429c3f8f7a70bb5": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_msCrypto_c429c3f8f7a70bb5"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_f579424187aa1717": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_newnoargs_f579424187aa1717"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_c7a2a6b012059a5e": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_next_c7a2a6b012059a5e"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_dd1a890d37e38d73": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_next_dd1a890d37e38d73"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_982b1c7ac0cbc69d": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_done_982b1c7ac0cbc69d"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_2def2d1fb38b02cd": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_value_2def2d1fb38b02cd"](p0i32);
/******/ 					},
/******/ 					"__wbg_iterator_4b9cedbeda0c0e30": function() {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_iterator_4b9cedbeda0c0e30"]();
/******/ 					},
/******/ 					"__wbg_get_8bbb82393651dd9c": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_get_8bbb82393651dd9c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_89558c3e96703ca1": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_call_89558c3e96703ca1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_d3138911a89329b0": function() {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_new_d3138911a89329b0"]();
/******/ 					},
/******/ 					"__wbg_new_55259b13834a484c": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_new_55259b13834a484c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_94697a95cb7e239c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_call_94697a95cb7e239c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_4beacc9c71572250": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_new_4beacc9c71572250"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_4f8f547f26b30b27": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_resolve_4f8f547f26b30b27"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_a6860c82b90816ca": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_then_a6860c82b90816ca"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_58a04e42527f52c6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_then_58a04e42527f52c6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_self_e23d74ae45fb17d1": function() {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_self_e23d74ae45fb17d1"]();
/******/ 					},
/******/ 					"__wbg_window_b4be7f48b24ac56e": function() {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_window_b4be7f48b24ac56e"]();
/******/ 					},
/******/ 					"__wbg_globalThis_d61b1f48a57191ae": function() {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_globalThis_d61b1f48a57191ae"]();
/******/ 					},
/******/ 					"__wbg_global_e7669da72fd7f239": function() {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_global_e7669da72fd7f239"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_5e74a88a1424a2e0": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_buffer_5e74a88a1424a2e0"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_278ec7532799393a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_newwithbyteoffsetandlength_278ec7532799393a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_e3b800e570795b3c": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_new_e3b800e570795b3c"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_5b8081e9d002f0df": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_set_5b8081e9d002f0df"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_30803400a8f15c59": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_length_30803400a8f15c59"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_5f4ce114a24dfe1e": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_newwithlength_5f4ce114a24dfe1e"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_a68f835ca2af506f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_subarray_a68f835ca2af506f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_has_3850edde6df9191b": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_has_3850edde6df9191b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_set_c42875065132a932": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_set_c42875065132a932"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_stringify_f8bfc9e2d1e8b6a0": function(p0i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbg_stringify_f8bfc9e2d1e8b6a0"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper5021": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.js"].exports["__wbindgen_closure_wrapper5021"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./node_modules/ergo-lib-wasm-browser/ergo_lib_wasm_bg.wasm":"f58a49bd9bf82c5ac2ad"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\r\n// asynchronously. This `bootstrap.js` file does the single async import, so\r\n// that no one else needs to worry about it again.\r\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./index.js */ \"./src/index.js\"))\r\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\r\n\n\n//# sourceURL=webpack:///./src/bootstrap.js?");

/***/ })

/******/ });