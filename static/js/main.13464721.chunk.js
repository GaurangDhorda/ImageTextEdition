(this.webpackJsonpimageeditor=this.webpackJsonpimageeditor||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(4),c=a.n(o),l=a(1),r=(a(11),a(5)),s=a.n(r),m=a(2),d=function(e){var t=e.toBlob,a=e.close,n=e.setFields,o=e.fields;return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"form-container"},i.a.createElement("div",{className:"close"},i.a.createElement("span",{onClick:function(){return a(!1)}}," X ")),i.a.createElement("div",{className:"form-field"},i.a.createElement("label",null," Pieces "),i.a.createElement("input",{type:"text",maxLength:"8",value:o.pieces,onChange:function(e){return n(Object(m.a)(Object(m.a)({},o),{},{pieces:e.target.value}))}})),i.a.createElement("div",{className:"form-field"},i.a.createElement("label",null," Size "),i.a.createElement("input",{type:"text",maxLength:"15",value:o.size,onChange:function(e){return n(Object(m.a)(Object(m.a)({},o),{},{size:e.target.value}))}})),i.a.createElement("div",{className:"form-field"},i.a.createElement("label",null," Weight "),i.a.createElement("input",{type:"text",maxLength:"15",value:o.weight,onChange:function(e){return n(Object(m.a)(Object(m.a)({},o),{},{weight:e.target.value}))}})),i.a.createElement("div",{className:"form-field"},i.a.createElement("label",null," Stamp "),i.a.createElement("input",{type:"text",maxLength:"15",value:o.stamp,onChange:function(e){return n(Object(m.a)(Object(m.a)({},o),{},{stamp:e.target.value}))}})),i.a.createElement("div",{className:"form-field"},i.a.createElement("button",{className:"btn-primary",onClick:function(){n(o),t(),a(!1)}}," add "))))},u=function(e){var t=e.blob;return i.a.createElement("div",null,i.a.createElement("div",{className:"webshare"},i.a.createElement("i",{className:"fa fa-share-alt shadow","aria-hidden":"true",onClick:function(){if(console.log("web-share ",t),navigator.share){var e=[new File([t],"picture.png",{type:"image/png"})];navigator.share({title:"Image Share",text:"Check out",files:e}).then((function(){console.log("Successfully shared"),alert("Successfully shared ")})).catch((function(e){console.error("Something went wrong sharing the blog",e),alert("Something went wrong "+e)}))}}})))},g=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1];Object(n.useEffect)((function(){var e=o();i(e)}),[]);var o=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),console.log("from function",t),t};return a?[a]:""};function h(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),r=Object(l.a)(c,2),m=r[0],h=r[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),b=f[0],v=f[1],w=Object(n.useState)(),E=Object(l.a)(w,2),k=E[0],y=E[1],x=Object(n.useState)(),j=Object(l.a)(x,2),O=j[0],C=j[1],S=g(),z=Object(l.a)(S,1)[0],N=Object(n.useState)({pieces:"",size:"",weight:"",stamp:""}),I=Object(l.a)(N,2),T=I[0],B=I[1];Object(n.useEffect)((function(){a&&R()}),[a]),Object(n.useEffect)((function(){a&&W()}),[T]);var R=function(){var e=document.getElementById("img"),t=document.getElementById("canvas");t.width=e.width+200,t.height=e.height,t.getContext("2d").drawImage(e,0,0)},W=function(){var e=document.getElementById("canvas"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),R(),t.font="bold 14pt Arial",t.fillStyle="black",t.fillText(T.pieces+" pieces",e.width-185,20),t.fillText("size "+T.size+" inch",e.width-185,40),t.fillText("weight "+T.weight+" gram",e.width-185,70),t.fillText("stamp "+T.stamp,e.width-185,90),v(!0),console.log("blob ",k)},A=function(e,t){var a=e.getContext("2d");a.save(),a.globalCompositeOperation="destination-over",a.fillStyle=t,a.fillRect(0,0,e.width,e.height),a.restore()};return i.a.createElement("div",null,i.a.createElement("h3",null,"Image Text Edition "),z&&b&&i.a.createElement(u,{blob:O}),i.a.createElement("div",{className:"input-label"},i.a.createElement("label",{htmlFor:"fileUpload",className:"btn-primary"}," Open File "),i.a.createElement("div",{className:"input-label-action-button"},a&&i.a.createElement("button",{className:"btn-primary btn-text",onClick:function(){return h(!0)},style:{marginRight:"0.5em",backgroundColor:"green"}}," Add Text "),b&&i.a.createElement("button",{id:"save",className:"btn-primary btn-save",style:{backgroundColor:"blue"},onClick:function(){var e,t=document.getElementById("canvas");A(t,"white"),e=t.toDataURL("image/png",1);var a=document.createElement("a");a.href=e,a.download="untitled.png",document.body.appendChild(a),a.click()}}," save "),m&&i.a.createElement(d,{toBlob:function(){console.log("toBlob called");var e=document.getElementById("canvas");e.getContext("2d");A(e,"white"),e.toBlob((function(e){return y(e)})),console.log("blob us ",k);var t=document.getElementById("copyCanvas"),a=t.getContext("2d"),n=new Image;n.onload=function(){t.width=n.width-250,t.width+=800,t.height=n.height,a.drawImage(n,0,0),A(t,"white"),a.font="bold 32pt Arial",a.fillStyle="black",a.fillText(T.pieces+" pieces",t.width-540,140),a.fillText("size: "+T.size+" inch",t.width-540,190),a.fillText("W/G: "+T.weight+" grm",t.width-540,240),a.fillText("stamp: "+T.stamp,t.width-540,290),t.toBlob((function(e){return C(e)}))},n.src=URL.createObjectURL(O)},close:h,setFields:B,fields:T}))),i.a.createElement("input",{id:"fileUpload",type:"file",onChange:function(e){var t=!1;e.target.files[0]&&(t=!0,C(e.target.files[0])),t&&(B({pieces:"",size:"",weight:"",stamp:""}),s.a.imageFileResizer(e.target.files[0],250,250,"JPEG",130,0,(function(e){o(e)}),"base64",250,250))},accept:"image/*",hidden:!0}),i.a.createElement("img",{id:"img",src:a,hidden:!0}),i.a.createElement("canvas",{id:"copyCanvas",hidden:!0}),i.a.createElement("div",{className:"canvas-container"},a?i.a.createElement("canvas",{id:"canvas",className:"canvas"}," "):""))}var p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ImageTextEdition",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ImageTextEdition","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.13464721.chunk.js.map