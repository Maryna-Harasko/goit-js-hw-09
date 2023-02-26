const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null,r=!1;t.addEventListener("click",(()=>{r||(o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),r=!0)})),e.addEventListener("click",(()=>{clearInterval(o),r=!1}));
//# sourceMappingURL=01-color-switcher.f3b23035.js.map
