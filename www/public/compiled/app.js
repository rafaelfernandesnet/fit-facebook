(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
"use strict";
"use strict";
var ngModule = angular.module('FitFacebook', ['ff.coreModule']);
require('./modules/ff-core/ff.core.app.js');


//# sourceURL=/Users/rafaelfernandes/Projects/fit-facebook/www/public/app.js
},{"./modules/ff-core/ff.core.app.js":2}],2:[function(require,module,exports){
"use strict";
"use strict";
"use strict";
angular.module('ff.coreModule', []).controller('ffCoreController', require('./ff.core.controller.js'));


//# sourceURL=/Users/rafaelfernandes/Projects/fit-facebook/www/public/modules/ff-core/ff.core.app.js
},{"./ff.core.controller.js":3}],3:[function(require,module,exports){
"use strict";
"use strict";
"use strict";
module.exports = ['$scope', ffCoreController];
function ffCoreController($scope) {
  var vm = this;
}


//# sourceURL=/Users/rafaelfernandes/Projects/fit-facebook/www/public/modules/ff-core/ff.core.controller.js
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9hcHAuanMiLCIuLi9tb2R1bGVzL2ZmLWNvcmUvZmYuY29yZS5hcHAuanMiLCIuLi9tb2R1bGVzL2ZmLWNvcmUvZmYuY29yZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFBQSxXQUFXLENBQUM7QUFDWixXQUFXLENBQUM7QUFDWixBQUFJLEVBQUEsQ0FBQSxRQUFPLEVBQUksQ0FBQSxPQUFNLE9BQU8sQUFBQyxDQUFDLGFBQVksQ0FBRyxFQUFDLGVBQWMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsTUFBTSxBQUFDLENBQUMsa0NBQWlDLENBQUMsQ0FBQztBQUdnQzs7OztBQ04zRTtBQUFBLFdBQVcsQ0FBQztBQUNaLFdBQVcsQ0FBQztBQUNaLE1BQU0sT0FBTyxBQUFDLENBQUMsZUFBYyxDQUFHLEdBQUMsQ0FBQyxXQUFXLEFBQUMsQ0FBQyxrQkFBaUIsQ0FBRyxDQUFBLE9BQU0sQUFBQyxDQUFDLHlCQUF3QixDQUFDLENBQUMsQ0FBQztBQUdIOzs7O0FDTG5HO0FBQUEsV0FBVyxDQUFDO0FBQ1osV0FBVyxDQUFDO0FBQ1osS0FBSyxRQUFRLEVBQUksRUFBQyxRQUFPLENBQUcsaUJBQWUsQ0FBQyxDQUFDO0FBQzdDLE9BQVMsaUJBQWUsQ0FBRSxNQUFLLENBQUc7QUFDaEMsQUFBSSxJQUFBLENBQUEsRUFBQyxFQUFJLEtBQUcsQ0FBQztBQUNmO0FBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdGaXRGYWNlYm9vaycsIFsnZmYuY29yZU1vZHVsZSddKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9mZi1jb3JlL2ZmLmNvcmUuYXBwLmpzJyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaUwxVnpaWEp6TDNKaFptRmxiR1psY201aGJtUmxjeTlRY205cVpXTjBjeTltYVhRdFptRmpaV0p2YjJzdmQzZDNMM0IxWW14cFl5OWhjSEF1YW5NaUxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OXlZV1poWld4bVpYSnVZVzVrWlhNdlVISnZhbVZqZEhNdlptbDBMV1poWTJWaWIyOXJMM2QzZHk5d2RXSnNhV012WVhCd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlFVRXNWMEZCVnl4RFFVRkRPMEZCUTFvc1FVRkJTU3hGUVVGQkxFTkJRVUVzVVVGQlR5eEZRVUZKTEVOQlFVRXNUMEZCVFN4UFFVRlBMRUZCUVVNc1EwRkJReXhoUVVGWkxFTkJRVWNzUlVGQlF5eGxRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXk5RUxFMUJRVTBzUVVGQlF5eERRVUZETEd0RFFVRnBReXhEUVVGRExFTkJRVU03UVVGSFowTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDNKaFptRmxiR1psY201aGJtUmxjeTlRY205cVpXTjBjeTltYVhRdFptRmpaV0p2YjJzdmQzZDNMM0IxWW14cFl5OGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpjSW5WelpTQnpkSEpwWTNSY0lqdGNiblpoY2lCdVowMXZaSFZzWlNBOUlHRnVaM1ZzWVhJdWJXOWtkV3hsS0NkR2FYUkdZV05sWW05dmF5Y3NJRnNuWm1ZdVkyOXlaVTF2WkhWc1pTZGRLVHRjYm5KbGNYVnBjbVVvSnk0dmJXOWtkV3hsY3k5bVppMWpiM0psTDJabUxtTnZjbVV1WVhCd0xtcHpKeWs3WEc1Y2JpOHZJeUJ6YjNWeVkyVk5ZWEJ3YVc1blZWSk1QV1JoZEdFNllYQndiR2xqWVhScGIyNHZhbk52Ymp0aVlYTmxOalFzWlhsS01scFlTbnBoVnpsMVNXcHZla3hEU20xaFYzaHNTV3B2YVV3eFZucGFXRXA2VEROS2FGcHRSbXhpUjFwc1kyMDFhR0p0VW14amVUbFJZMjA1Y1ZwWFRqQmplVGx0WVZoUmRGcHRSbXBhVjBwMllqSnpkbVF6WkROTU0wSXhXVzE0Y0ZsNU9XaGpTRUYxWVc1TmFVeERTbnBpTTFaNVdUSldla2xxY0dKSmFUbFdZekpXZVdONU9YbFpWMXBvV2xkNGJWcFlTblZaVnpWcldsaE5kbFZJU25aaGJWWnFaRWhOZGxwdGJEQk1WMXBvV1RKV2FXSXlPWEpNTTJRelpIazVkMlJYU25OaFYwMTJXVmhDZDB4dGNIcEpiREJ6U1cwMWFHSlhWbnBKYW5CaVdGTjNhV0pYUm5kalIyeDFXak5OYVU5cFNrSlJWV3hDVHpCR1FsRlZSWE5SVlVaQ1UxTjRSbEZWUmtKTVJVNUNVVlZGYzFWVlJrSlVlWGhHVVZWR1NreEZUa0pSVlVWelZEQkdRbFJUZUZCUlZVWlFURVZHUWxGVlRYTlJNRVpDVVhsNGFGRlZSbHBNUlU1Q1VWVmpjMUpWUmtSTlZVMXpXbFZHUWxsNWVFUlJWVTV4VVdsNFJGRlZSa1JNUlU1Q1VWVkZOMUZWUmxKU1EzaE9VVlZHVGt4RlJrSlJWVTF6VVRCR1FsRjVlSEpSTUVaQ1lWVk5jMUV3UmtKUmVYaEVVVlZHUkU4d1JrSlJlazVFU1dsM2FXTXlPVEZqYlU1c1ZXMDVkbVJEU1RaSmFUbFdZekpXZVdONU9YbFpWMXBvV2xkNGJWcFlTblZaVnpWcldsaE5kbFZJU25aaGJWWnFaRWhOZGxwdGJEQk1WMXBvV1RKV2FXSXlPWEpNTTJRelpIazVkMlJYU25OaFYwMTJTV2wzYVdNeU9URmpiVTVzWXpCT2RtSnVVbXhpYmxGcFQyeHphVXg1YjNGWVJ6Um5TMmxDVGxsWGJIVkpSekYyV2toV2MxcFRkMmRqTW1oMlpGZDRhMGxIU214SlNGWjZXbGRSWjJGWE5HZGtSMmhzU1VjMWJreFhSbmRqUXpWalltbEJjVWxGUW5SaU1sSXhZa2RWWjFKdGJEQlNiVVpxV2xkS2RtSXljMmRZUnpSblMyazVZMkp1V21oamFVSjFXakF4ZGxwSVZuTmFVMEU1U1VkR2RWb3pWbk5aV0VsMVlsYzVhMlJYZUd4TFEyUkhZVmhTUjFsWFRteFpiVGwyWVhsamMwbEdkR05pYVVGblNVTmtiVnBwTldwaU0wcHNWRmM1YTJSWGVHeEtlVUpqWW13d2NGaEhOV05pYkhoMVRIbHZjVmhITkdkTGFVSktWR3R3UmxFeFVXZGtSMmhzU1VjeGRscElWbk5hVTBKd1ltbENNR0ZIVldkU2JXd3dVbTFHYWxwWFNuWmlNbk5uVkZjNWEyUlhlR3hNUTBKQ1ZYbENTbFpEUWtwVmVVSkNVV3M1VjFKVE5XTmlhVUZ4U1VWNFVGRlZVV2RrUjJoc1NVY3hkbHBJVm5OYVUzZG5WVEE0WjFOV1VXZFRWazFuVVd0V1RWUkZPVmhNYkhoMVNVTnZkbGhITldOaWJrcHNZMWhXY0dOdFZXOUtlVFIyWWxjNWEyUlhlR3hqZVRsdFdta3hhbUl6U214TU1scHRURzFPZG1OdFZYVlpXRUozVEcxd2VrcDVhemRZUnpScFdGZ3dQVnh1THk4aklITnZkWEpqWlZWU1REMHZWWE5sY25NdmNtRm1ZV1ZzWm1WeWJtRnVaR1Z6TDFCeWIycGxZM1J6TDJacGRDMW1ZV05sWW05dmF5OTNkM2N2Y0hWaWJHbGpMMkZ3Y0M1cWN5SmRmUT09XG4vLyMgc291cmNlVVJMPS9Vc2Vycy9yYWZhZWxmZXJuYW5kZXMvUHJvamVjdHMvZml0LWZhY2Vib29rL3d3dy9wdWJsaWMvYXBwLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBzdHJpY3RcIjtcbmFuZ3VsYXIubW9kdWxlKCdmZi5jb3JlTW9kdWxlJywgW10pLmNvbnRyb2xsZXIoJ2ZmQ29yZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL2ZmLmNvcmUuY29udHJvbGxlci5qcycpKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pTDFWelpYSnpMM0poWm1GbGJHWmxjbTVoYm1SbGN5OVFjbTlxWldOMGN5OW1hWFF0Wm1GalpXSnZiMnN2ZDNkM0wzQjFZbXhwWXk5dGIyUjFiR1Z6TDJabUxXTnZjbVV2Wm1ZdVkyOXlaUzVoY0hBdWFuTWlMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTl5WVdaaFpXeG1aWEp1WVc1a1pYTXZVSEp2YW1WamRITXZabWwwTFdaaFkyVmliMjlyTDNkM2R5OXdkV0pzYVdNdmJXOWtkV3hsY3k5bVppMWpiM0psTDJabUxtTnZjbVV1WVhCd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlFVRXNWMEZCVnl4RFFVRkRPMEZCUTFvc1RVRkJUU3hQUVVGUExFRkJRVU1zUTBGQlF5eGxRVUZqTEVOQlFVY3NSMEZCUXl4RFFVRkRMRmRCUVZjc1FVRkJReXhEUVVGRExHdENRVUZwUWl4RFFVRkhMRU5CUVVFc1QwRkJUU3hCUVVGRExFTkJRVU1zZVVKQlFYZENMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSMGdpTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwzSmhabUZsYkdabGNtNWhibVJsY3k5UWNtOXFaV04wY3k5bWFYUXRabUZqWldKdmIyc3ZkM2QzTDNCMVlteHBZeTl0YjJSMWJHVnpMMlptTFdOdmNtVXZJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVoYm1kMWJHRnlMbTF2WkhWc1pTZ25abVl1WTI5eVpVMXZaSFZzWlNjc0lGdGRLUzVqYjI1MGNtOXNiR1Z5S0NkbVprTnZjbVZEYjI1MGNtOXNiR1Z5Snl3Z2NtVnhkV2x5WlNnbkxpOW1aaTVqYjNKbExtTnZiblJ5YjJ4c1pYSXVhbk1uS1NrN1hHNWNiaTh2SXlCemIzVnlZMlZOWVhCd2FXNW5WVkpNUFdSaGRHRTZZWEJ3YkdsallYUnBiMjR2YW5OdmJqdGlZWE5sTmpRc1pYbEtNbHBZU25waFZ6bDFTV3B2ZWt4RFNtMWhWM2hzU1dwdmFVd3hWbnBhV0VwNlRETkthRnB0Um14aVIxcHNZMjAxYUdKdFVteGplVGxSWTIwNWNWcFhUakJqZVRsdFlWaFJkRnB0Um1wYVYwcDJZakp6ZG1RelpETk1NMEl4V1cxNGNGbDVPWFJpTWxJeFlrZFdla3d5V20xTVYwNTJZMjFWZGxwdFdYVlpNamw1V2xNMWFHTklRWFZoYmsxcFRFTktlbUl6Vm5sWk1sWjZTV3B3WWtscE9WWmpNbFo1WTNrNWVWbFhXbWhhVjNodFdsaEtkVmxYTld0YVdFMTJWVWhLZG1GdFZtcGtTRTEyV20xc01FeFhXbWhaTWxacFlqSTVja3d6WkROa2VUbDNaRmRLYzJGWFRYWmlWemxyWkZkNGJHTjVPVzFhYVRGcVlqTktiRXd5V20xTWJVNTJZMjFWZFZsWVFuZE1iWEI2U1d3d2MwbHROV2hpVjFaNlNXcHdZbGhUZDJsaVYwWjNZMGRzZFZvelRXbFBhVXBDVVZaR1FrOHdSa0pSVlVWelZGVkdRbFJUZUZCUlZVWlFURVZHUWxGVlRYTlJNRVpDVVhsNGJGRlZSbXBNUlU1Q1VWVmpjMUl3UmtKUmVYaEVVVlZHUkV4R1pFSlJNMEpEVEVWR1FsRlZUWE5STUVaQ1VYbDRjbEZyUmtKaFZVbHpVVEJHUWxKNWVFUlJWVVpDVEVVNVFsRlZNSE5SVlVaQ1VYbDRSRkZWUmtSTVNHeERVVlZHTTFGcGVFUlJWVVpFVEVWT1FsRlZUWE5STUVaQ1VWUjBRbEZWVGpCU1UwbHpTVzVPZG1SWVNtcGFWa3AyWWpOUmFVOXBTWFpXV0U1c1kyNU5kbU50Um0xWlYxWnpXbTFXZVdKdFJuVmFSMVo2VERGQ2VXSXljR3haTTFKNlRESmFjR1JETVcxWlYwNXNXVzA1ZG1GNU9UTmtNMk4yWTBoV2FXSkhiR3BNTWpGMldraFdjMXBZVFhaYWJWbDBXVEk1ZVZwVE9HbE1RMHA2WWpOV2VWa3lWbnBSTWpsMVpFZFdkV1JEU1RaWGVVbDJTMmx3WTJKcFFYRkpSa3BzWTBoS2JHTXlWblZrU0UxblpFZG9iRWxIVG5aamJWVm5ZbGM1YTJSWGVHeEpTRXBzWXpOQ2RtSnVUbkJaYlhoc1dFYzBaMHRwUW0xaU0wbG5aRWRvYkVsSVpIWmpiWFJ0WWtjNU0wbEhPVzFhYVVJd1lVZFZaMWxZUW5kTWJIaDFTVU53WTJKcFFYRkpSVUowWWpKU01XSkhWV2RhYlZsMVdUSTVlVnBWTVhaYVNGWnpXbE5DWTJKcFFYRkpSVUo2V2xkVloxcHRXa1JpTTBwc1VUSTVkV1JJU25aaVIzaHNZMng0ZFVsRGIyZFJTRTVzV2xOQ2JWcHJUblpqYlZaVVdsaEtNbUZYVG14WVJ6Um5TMms1WTJKdFJuVmFNMVp6V1ZoSmRXSlhPV3RrVjNoc1MwTmtiVnBwTldwaU0wcHNWRmM1YTJSWGVHeEtlWGRuVnpFd2NGaEhOR2RKUTBGblRHMU9kbUp1VW5saU1uaHpXbGhKYjBveVdtMVJNamw1V2xWT2RtSnVVbmxpTW5oeldsaEpia3hEUW5sYVdFWXhZVmhLYkV0RFkzVk1NbHB0VEcxT2RtTnRWWFZaTWpsMVpFaEtkbUpIZUd4amFUVnhZM2xqY0V0V2VIVkpiREU1WEc0dkx5TWdjMjkxY21ObFZWSk1QUzlWYzJWeWN5OXlZV1poWld4bVpYSnVZVzVrWlhNdlVISnZhbVZqZEhNdlptbDBMV1poWTJWaWIyOXJMM2QzZHk5d2RXSnNhV012Ylc5a2RXeGxjeTltWmkxamIzSmxMMlptTG1OdmNtVXVZWEJ3TG1weklsMTlcbi8vIyBzb3VyY2VVUkw9L1VzZXJzL3JhZmFlbGZlcm5hbmRlcy9Qcm9qZWN0cy9maXQtZmFjZWJvb2svd3d3L3B1YmxpYy9tb2R1bGVzL2ZmLWNvcmUvZmYuY29yZS5hcHAuanMiLCJcInVzZSBzdHJpY3RcIjtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBbJyRzY29wZScsIGZmQ29yZUNvbnRyb2xsZXJdO1xuZnVuY3Rpb24gZmZDb3JlQ29udHJvbGxlcigkc2NvcGUpIHtcbiAgdmFyIHZtID0gdGhpcztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pTDFWelpYSnpMM0poWm1GbGJHWmxjbTVoYm1SbGN5OVFjbTlxWldOMGN5OW1hWFF0Wm1GalpXSnZiMnN2ZDNkM0wzQjFZbXhwWXk5dGIyUjFiR1Z6TDJabUxXTnZjbVV2Wm1ZdVkyOXlaUzVqYjI1MGNtOXNiR1Z5TG1weklpd2ljMjkxY21ObGN5STZXeUl2VlhObGNuTXZjbUZtWVdWc1ptVnlibUZ1WkdWekwxQnliMnBsWTNSekwyWnBkQzFtWVdObFltOXZheTkzZDNjdmNIVmliR2xqTDIxdlpIVnNaWE12Wm1ZdFkyOXlaUzltWmk1amIzSmxMbU52Ym5SeWIyeHNaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZCUVN4WFFVRlhMRU5CUVVNN1FVRkRXaXhMUVVGTExGRkJRVkVzUlVGQlNTeEZRVUZETEZGQlFVOHNRMEZCUnl4cFFrRkJaU3hEUVVGRExFTkJRVU03UVVGRE4wTXNUMEZCVXl4cFFrRkJaU3hEUVVGRkxFMUJRVXNzUTBGQlJ6dEJRVU5vUXl4QlFVRkpMRWxCUVVFc1EwRkJRU3hGUVVGRExFVkJRVWtzUzBGQlJ5eERRVUZETzBGQlEyWTdRVUZCUVNJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZjbUZtWVdWc1ptVnlibUZ1WkdWekwxQnliMnBsWTNSekwyWnBkQzFtWVdObFltOXZheTkzZDNjdmNIVmliR2xqTDIxdlpIVnNaWE12Wm1ZdFkyOXlaUzhpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKY0luVnpaU0J6ZEhKcFkzUmNJanRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnV3lja2MyTnZjR1VuTENCbVprTnZjbVZEYjI1MGNtOXNiR1Z5WFR0Y2JtWjFibU4wYVc5dUlHWm1RMjl5WlVOdmJuUnliMnhzWlhJb0pITmpiM0JsS1NCN1hHNGdJSFpoY2lCMmJTQTlJSFJvYVhNN1hHNTlYRzVjYmk4dkl5QnpiM1Z5WTJWTllYQndhVzVuVlZKTVBXUmhkR0U2WVhCd2JHbGpZWFJwYjI0dmFuTnZianRpWVhObE5qUXNaWGxLTWxwWVNucGhWemwxU1dwdmVreERTbTFoVjNoc1NXcHZhVXd4Vm5wYVdFcDZURE5LYUZwdFJteGlSMXBzWTIwMWFHSnRVbXhqZVRsUlkyMDVjVnBYVGpCamVUbHRZVmhSZEZwdFJtcGFWMHAyWWpKemRtUXpaRE5NTTBJeFdXMTRjRmw1T1hSaU1sSXhZa2RXZWt3eVdtMU1WMDUyWTIxVmRscHRXWFZaTWpsNVdsTTFhbUl5TlRCamJUbHpZa2RXZVV4dGNIcEphWGRwWXpJNU1XTnRUbXhqZVVrMlYzbEpkbFpZVG14amJrMTJZMjFHYlZsWFZuTmFiVlo1WW0xR2RWcEhWbnBNTVVKNVlqSndiRmt6VW5wTU1scHdaRU14YlZsWFRteFpiVGwyWVhrNU0yUXpZM1pqU0ZacFlrZHNha3d5TVhaYVNGWnpXbGhOZGxwdFdYUlpNamw1V2xNNWJWcHBOV3BpTTBwc1RHMU9kbUp1VW5saU1uaHpXbGhKZFdGdVRXbFlVM2RwWW0xR2RGcFlUV2xQYkhSa1RFTktkRmxZUW5kaFZ6VnVZM2xKTmtsclJrSlJWVVUzVVZWR1FsRlRlRXhSVlVaTVRFWkdRbEZXUlhOU1ZVWkNVMU40UmxGVlJrUk1Sa1pDVVZVNGMxRXdSa0pTZVhod1VXdEdRbHBUZUVSUlZVWkVURVZPUWxGVlJUZFJWVVpVVGxWTmMxUXdSa0pWZVhod1VXdEdRbHBUZUVSUlZVWkdURVV4UWxGVmMzTlJNRVpDVW5wMFFsRlZUbTlSZVhoQ1VWVkdTa3hGYkVKUlZVVnpVVEJHUWxGVGVFWlJWVVpFVEVWV1FsRlZhM05UTUVaQ1VubDRSRkZWUmtSUE1FWkNVVEpaTjFGVlJrSlJVMGx6U1c1T2RtUllTbXBhVmtwMllqTlJhVTlwU1haV1dFNXNZMjVOZG1OdFJtMVpWMVp6V20xV2VXSnRSblZhUjFaNlRERkNlV0l5Y0d4Wk0xSjZUREphY0dSRE1XMVpWMDVzV1cwNWRtRjVPVE5rTTJOMlkwaFdhV0pIYkdwTU1qRjJXa2hXYzFwWVRYWmFiVmwwV1RJNWVWcFRPR2xNUTBwNllqTldlVmt5Vm5wUk1qbDFaRWRXZFdSRFNUWlhlVXAwWWpKU01XSkhWWFZhV0doM1lqTktNR041UVRsSlJuTnVTa2hPYW1JelFteEtlWGRuV20xYVJHSXpTbXhSTWpsMVpFaEtkbUpIZUd4amJEQm5XRWMxWTJKcE9IRkxiSGgxU1VOdloxVnRWbmRqYlZaNldsYzFNR041UWpCaFIxVm5XVEk1ZVZwVFFtcGlNalV3WTIwNWMySkhWbmxNUTBJelkyMUdkMk5IYkhWYWVVSXdZVWRWWjFoSE5HZExhVUl6WVVjNWMxcFRRbWhqU0VGblpFYzRaMWxZVG5waFdFNHdTVWhrY0dSSFoyZFpNamwwWWxjNWRVbEhXbXhaV0ZJeFkyMVdla3hwUW1OaWFVRnhXRWMwWjB0cFFrRlpNbmhvWXpOTloxcHRXa1JpTTBwc1VUSTVkV1JJU25aaVIzaHNZMng0ZFVsRGIyZFJTRTVzV2xOQ2JWcHBOV3BpTTBwc1ZGYzVhMlJYZUd4WVJ6Um5TMms1WTJKdFdqRmliVTR3WVZjNWRVbEhXbTFSTWpsNVdsVk9kbUp1VW5saU1uaHpXbGhKYjBwSVRtcGlNMEpzUzFOQ04xaEhOR2RKU0Zwb1kybENNbUpUUVRsSlNGSnZZVmhOTjBsR2VIVm1WbmgxU1d3eE9WeHVMeThqSUhOdmRYSmpaVlZTVEQwdlZYTmxjbk12Y21GbVlXVnNabVZ5Ym1GdVpHVnpMMUJ5YjJwbFkzUnpMMlpwZEMxbVlXTmxZbTl2YXk5M2QzY3ZjSFZpYkdsakwyMXZaSFZzWlhNdlptWXRZMjl5WlM5bVppNWpiM0psTG1OdmJuUnliMnhzWlhJdWFuTWlYWDA9XG4vLyMgc291cmNlVVJMPS9Vc2Vycy9yYWZhZWxmZXJuYW5kZXMvUHJvamVjdHMvZml0LWZhY2Vib29rL3d3dy9wdWJsaWMvbW9kdWxlcy9mZi1jb3JlL2ZmLmNvcmUuY29udHJvbGxlci5qcyJdfQ==
