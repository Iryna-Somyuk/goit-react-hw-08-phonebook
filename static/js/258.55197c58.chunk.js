"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[258],{8258:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(5705),a=n(2797),o=n(9434),s="NOT_FOUND";var c=function(e,t){return e===t};function l(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?c:r,o=n.maxSize,l=void 0===o?1:o,i=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),d=1===l?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:s},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return s}return{get:r,put:function(t,a){r(t)===s&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(l,u);function m(){var t=d.get(arguments);if(t===s){if(t=e.apply(null,arguments),i){var n=d.getEntries(),r=n.find((function(e){return i(e.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return m.clearCache=function(){return d.clear()},m}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,s=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var u=c,d=u.memoizeOptions,m=void 0===d?n:d,f=Array.isArray(m)?m:[m],x=i(r),p=e.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(f)),h=e((function(){for(var e=[],t=x.length,n=0;n<t;n++)e.push(x[n].apply(null,arguments));return o=p.apply(null,e)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:p,dependencies:x,lastResult:function(){return o},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),h};return a}var d=u(l),m=function(e){return e.contacts.items},f=function(e){return e.filter},x=function(e){return e.contacts.isLoading},p=function(e){return e.contacts.error},h=d([m,f],(function(e,t){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),b=n(3402),v=n(2561),g=n(184),y=a.Ry().shape({name:a.Z_().required(),number:a.Z_().required()}),j={name:"",number:""},w=function(){var e=(0,o.v9)(m),t=(0,o.I0)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.J9,{initialValues:j,validationSchema:y,onSubmit:function(n,r){var a=r.resetForm;console.log(n),e.find((function(e){return e.name===n.name}))?b.ZP.error("Attention, this contact is already in the phonebook!",{duration:4e3}):(t((0,v.uK)(n)),a())},children:(0,g.jsxs)(r.l0,{className:"flex flex-col",children:[(0,g.jsxs)("label",{className:"flex flex-col gap-1 mb-3 font-normal text-lg",children:["Name",(0,g.jsx)(r.gN,{className:"p-1 text-lg border-2 rounded w-72",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,g.jsx)(r.Bc,{className:"text-rose-700 text-xs font-normal",name:"name",component:"span"})]}),(0,g.jsxs)("label",{className:"flex flex-col gap-1 mb-3 font-normal text-lg",children:["Number"," ",(0,g.jsx)(r.gN,{className:"p-1 text-lg border-2 rounded w-72",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,g.jsx)(r.Bc,{className:"text-rose-700 text-xs font-normal",name:"number",component:"span"})]}),(0,g.jsx)("button",{className:"p-1 justify-center items-center w-28 h-8 border-2 rounded text-black text-sm bg-[#bd9247] hover:bg-transparent hover:border-[#bd9247]",type:"submit",children:"Add contact"})]})}),(0,g.jsx)(b.x7,{position:"top-center",reverseOrder:!0})]})},N=n(9439),k=n(2791),C=n(4164),A=document.querySelector("#modal-root"),z=function(e){var t=e.onClose,n=e.children;(0,k.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return(0,C.createPortal)((0,g.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-transparent z-10",onClick:function(e){e.target===e.currentTarget&&t()},children:(0,g.jsx)("div",{className:"bg-white m-auto p-10 rounded z-0",children:n})}),A)},E=function(e){var t=e.id,n=e.onClose,r=(0,o.I0)(),a=(0,o.v9)(m).find((function(e){return e.id===t})),s=a.name,c=a.number,l=(0,k.useState)(s),i=(0,N.Z)(l,2),u=i[0],d=i[1],f=(0,k.useState)(c),x=(0,N.Z)(f,2),p=x[0],h=x[1],b=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":d(r);break;case"number":h(r);break;default:return}};return(0,g.jsxs)(g.Fragment,{children:[" ",(0,g.jsxs)("form",{className:" w-72 flex flex-col items-center border-2 p-5 rounded my-0 mx-auto ",onSubmit:function(e){e.preventDefault(),r((0,v.Mt)({id:t,name:u,number:p})),n()},autoComplete:"off",children:[(0,g.jsxs)("label",{className:"w-52  flex flex-col gap-1 mb-4 text-xs font-normal capitalize text-black",children:["Name",(0,g.jsx)("input",{className:" w-full p-1 text-xs font-normal border-2 border-solid  rounded",name:"name",value:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b,placeholder:"Enter name"})]}),(0,g.jsxs)("label",{className:"w-52 flex flex-col gap-1 mb-4 text-xs font-normal capitalize text-black",children:["Number",(0,g.jsx)("input",{className:" w-full p-1 text-xs font-normal border-2 border-solid  rounded",type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b,placeholder:"000-00-00"})]}),(0,g.jsxs)("ul",{className:"flex justify-around w-full mt-5",children:[(0,g.jsx)("li",{children:(0,g.jsx)("button",{className:"text-gray-dark w-20 h-8 px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer",type:"submit",text:"Edit",children:"Edit"})}),(0,g.jsx)("li",{children:(0,g.jsx)("button",{className:"text-gray-dark w-20 h-8 px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer",type:"button",text:"Cancel",onClick:n,children:"Cancel"})})]})]})]})},Z=function(e){var t=e.contact,n=t.id,r=t.name,a=t.number,s=(0,o.I0)(),c=(0,k.useState)(""),l=(0,N.Z)(c,2),i=l[0],u=l[1],d=(0,k.useState)(""),m=(0,N.Z)(d,2),f=m[0],x=m[1];(0,k.useEffect)((function(){i&&(document.body.style.overflow="hidden")}),[i]);var p=function(){u(""),x(""),document.body.style.overflow="unset"};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("li",{className:" inline-flex flex-row gap-5 items-center justify-between",children:[(0,g.jsxs)("span",{className:"text-sm font-medium text-black",children:[r,": ",a]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("button",{className:"p-1 justify-center items-center w-14 h-6 text-xs md:w-16 md:h-7 border-2 rounded text-black md:text-sm bg-[#bd9247] hover:bg-transparent hover:border-[#bd9247]",type:"button",name:"edit",onClick:function(e){var t=e.currentTarget.name;x(t),u(n)},children:"Edit"}),(0,g.jsx)("button",{className:"p-1 ml-2 justify-center items-center w-14 h-6 text-xs md:w-16 md:h-7 border-2 rounded text-black md:text-sm bg-[#bd9247] hover:bg-transparent hover:border-[#bd9247]",onClick:function(){return s((0,v.GK)(n))},children:"Delete"})]})]}),i&&"edit"===f&&(0,g.jsx)(z,{onClose:p,children:(0,g.jsx)(E,{id:i,onClose:p})})]})},F=function(){var e=(0,o.v9)(h);return(0,g.jsx)("ul",{className:"flex flex-col gap-2",children:e.map((function(e){return(0,g.jsx)(Z,{contact:e},e.id)}))})},q=n(1473),S=function(){var e=(0,o.v9)(f),t=(0,o.I0)();return(0,g.jsxs)("label",{className:"flex flex-col gap-1 mb-3 font-medium text-lg",children:["Find contacts by name",(0,g.jsx)("input",{className:"p-1 border-2 rounded w-72 text-base",type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){t((0,q.Tv)(e.target.value))}})]})},_=function(e){var t=e.title,n=e.children;return(0,g.jsxs)("div",{className:" flex flex-col items-center px-5 py-4",children:[(0,g.jsx)("h1",{className:"text-black mb-5 font-bold uppercase text-xl",children:t}),n]})},I=function(){var e=(0,o.I0)(),t=(0,o.v9)(x),n=(0,o.v9)(p);return(0,k.useEffect)((function(){e((0,v.yF)())}),[e]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"flex flex-col gap-5 justify-center items-center mx-auto my-0 w-[500px] border-none rounded-md bg-gradient-to-b from-[#f79d00] to-[#387a4d]",children:[(0,g.jsx)(_,{title:"Phonebook",children:(0,g.jsx)(w,{})}),(0,g.jsxs)(_,{title:"Contacts",children:[(0,g.jsx)(S,{}),t&&!n&&(0,g.jsx)("b",{children:"Request in progress..."}),!t&&(0,g.jsx)(F,{})]})]})})}}}]);
//# sourceMappingURL=258.55197c58.chunk.js.map