(()=>{"use strict";const e=window.wp.blocks;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},r.apply(this,arguments)}const s=window.wp.element,t=window.wp.i18n,o=window.wp.blockEditor,n=JSON.parse('{"UU":"pmpro/levels-page"}');(0,e.registerBlockType)(n.UU,{icon:{background:"#FFFFFF",foreground:"#658B24",src:"list-view"},edit:function(){const e=(0,o.useBlockProps)({});return[(0,s.createElement)("div",r({className:"pmpro-block-element"},e),(0,s.createElement)("span",{className:"pmpro-block-title"},(0,t.__)("Paid Memberships Pro","paid-memberships-pro")),(0,s.createElement)("span",{className:"pmpro-block-subtitle"},(0,t.__)("Membership Levels List","paid-memberships-pro")))]}})})();