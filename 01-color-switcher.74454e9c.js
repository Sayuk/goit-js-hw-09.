const e=document.querySelector(".start"),t=document.querySelector(".stop");let d=[];e.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.74454e9c.js.map
