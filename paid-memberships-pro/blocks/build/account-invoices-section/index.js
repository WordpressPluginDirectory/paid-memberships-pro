(()=>{"use strict";const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},t.apply(this,arguments)}const o=window.wp.element,r=window.wp.i18n,i=window.wp.blockEditor,n=JSON.parse('{"UU":"pmpro/account-invoices-section"}');(0,e.registerBlockType)(n.UU,{icon:{background:"#FFFFFF",foreground:"#1A688B",src:"archive"},edit:function({attributes:e,setAttributes:n}){const s=(0,i.useBlockProps)({});return[(0,o.createElement)("div",t({className:"pmpro-block-element"},s),(0,o.createElement)("span",{className:"pmpro-block-title"},(0,r.__)("Paid Memberships Pro","paid-memberships-pro")),(0,o.createElement)("span",{className:"pmpro-block-subtitle"}," ",(0,r.__)("Membership Account: Invoices","paid-memberships-pro")),(0,o.createElement)("input",{placeholder:(0,r.__)("No title will be shown.","paid-memberships-pro"),type:"text",value:e.title,className:"block-editor-plain-text",onChange:e=>{n({title:e.target.value})}}))]}})})();