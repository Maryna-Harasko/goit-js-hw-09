!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r={formEl:document.querySelector(".form"),inputDelayEl:document.querySelector("input[name = delay]"),inputStepEl:document.querySelector("input[name = step]"),inputAmountEl:document.querySelector("input[name = amount]")};function u(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}r.formEl.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(r.inputDelayEl.value),o=Number(r.inputStepEl.value),t=Number(r.inputAmountEl.value),l=1;l<=t;l+=1)u(l,n).then((function(e){var n=e.position,o=e.delay;i.Notify.success("Fulfilled ".concat(n," promise ").concat(o,"ms")),console.log("Fulfilled ".concat(n," promise ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("Rejected ".concat(n," promise ").concat(o,"ms")),console.log("Rejected ".concat(n," promise ").concat(o,"ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.7a493da4.js.map