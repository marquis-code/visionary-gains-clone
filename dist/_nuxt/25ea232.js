(window.webpackJsonp=window.webpackJsonp||[]).push([[48,8],{559:function(t,e,n){"use strict";n.r(e);var r={},o=n(38),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{},[t("div",{staticClass:"rounded overflow-hidden shadow-lg animate-pulse"},[t("div",{staticClass:"bg-gray-300 h-72"})])])}],!1,null,null,null);e.default=component.exports},700:function(t,e,n){"use strict";n.r(e);n(10),n(30),n(32),n(8);var r=n(48),o=(n(94),n(13),{layout:"customer-dashboard",data:function(){return{depositType:"",imagePreview:null,adminData:{},processing:!1,loadingAdminInfo:!1,form:{amount:"",depositType:"",proof:"",walletAddress:""},depositTypeArray:[]}},computed:{computedWalletAddress:function(){return"bitcoin"===this.form.depositType?this.computed_wallet_info[0].code:"ethereum"===this.form.depositType?this.computed_wallet_info[1].code:"bank"===this.form.depositType?this.computed_wallet_info[2].code:""},isFormEnabled:function(){return!!(this.form.amount&&this.form.depositType&&this.form.proof)},computed_wallet_info:function(){var t,e,n,r;return Object.keys(this.adminData).length?[{name:"Bitcoin",code:null!==(t=null===(e=this.adminData)||void 0===e||null===(e=e.admin)||void 0===e?void 0:e.btc)&&void 0!==t?t:"N/A"},{name:"Ethereum erc-20",code:null!==(n=null===(r=this.adminData)||void 0===r||null===(r=r.admin)||void 0===r?void 0:r.eth)&&void 0!==n?n:"N/A"},{name:"Bank Account",code:""}]:[{name:"Bitcoin",code:""},{name:"Ethereum erc-20",code:""},{name:"Bank Account",code:""}]}},mounted:function(){this.getAdminInfo()},methods:{copy:function(t){var e=this;window.navigator.clipboard.writeText(t).then((function(){return e.$toastr.s("Copied to clipboard")}))},handleProofUpload:function(t){var e=this,n=t.target.files[0];if(n){var r=new FileReader;r.onload=function(t){var n;e.imagePreview=r.result,e.form.proof=null==t||null===(n=t.target)||void 0===n?void 0:n.result},r.readAsDataURL(n)}else this.imagePreview=null},handleDeposit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.processing=!0,n=JSON.parse(window.localStorage.getItem("auth")),e.prev=2,e.next=6,fetch("https://lucent-kq5b.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+n},body:JSON.stringify({query:"\n          mutation newTransaction($input: NewTransaction!) {\n            newTransaction(input: $input)\n          }\n        ",variables:{input:{amount:t.form.amount,transactionType:"Deposit",proof:t.form.proof,wallet:t.computedWalletAddress}}})});case 6:return r=e.sent,e.next=9,r.json();case 9:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):(t.$toastr.s("You have successfully initiated transaction"),t.form.amount="",t.form.depositType="",t.form.proof="",t.computedWalletAddress="");case 11:return e.prev=11,t.processing=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,,11,14]])})))()},getAdminInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingAdminInfo=!0,n=JSON.parse(window.localStorage.getItem("auth")),e.prev=3,e.next=6,fetch("https://lucent-kq5b.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+n},body:JSON.stringify({query:"\n        query {\n          getUser {\n            id\n            firstName\n            lastName\n            email\n            Status\n            PlanType\n            accountBalance\n            tradingBalance\n            profit\n            eth\n            btc\n            timeAdded\n            admin {\n              eth\n              btc\n            }\n          }\n        }\n      "})});case 6:return r=e.sent,e.next=9,r.json();case 9:null!=(data=e.sent)&&data.errors?t.$toastr.e(data.errors[0].message):(t.adminData=data.data.getUser,t.populateDepositArray(t.adminData));case 11:return e.prev=11,t.loadingAdminInfo=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[3,,11,14]])})))()},populateDepositArray:function(data){var t,e,n;null!==(t=data.admin)&&void 0!==t&&null!==(t=t.btc)&&void 0!==t&&t.length&&this.depositTypeArray.push({name:"Bitcoin",key:"bitcoin"}),null!==(e=data.admin)&&void 0!==e&&null!==(e=e.eth)&&void 0!==e&&e.length&&this.depositTypeArray.push({name:"Etheruem",key:"ethereum"}),null!=data&&null!==(n=data.admin)&&void 0!==n&&null!==(n=n.bank)&&void 0!==n&&n.length&&this.depositTypeArray.push({name:"Bank",key:"bank"})}}}),l=n(38),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"lg:flex h-screen overflow-y-auto justify-start items-start gap-x-10 space-y-10 lg:space-y-0"},[e("section",{staticClass:"bg-white lg:w-7/12 rounded-md border"},[t._m(0),t._v(" "),t.loadingAdminInfo?e("api-loader"):e("div",{staticClass:"p-10 space-y-6"},[t._l(t.computed_wallet_info,(function(r){var o=r.name,code=r.code;return code?e("div",{key:o,staticClass:"flex items-center justify-between w-full gap-x-6"},[e("div",{staticClass:"space-y-1 w-full"},[e("label",{staticClass:"text-xs text-gray-700 font-medium"},[t._v(t._s(o))]),t._v(" "),e("input",{ref:"myinput",refInFor:!0,staticClass:"py-3 border rounded-md w-full outline-none pl-6 text-sm font-light",attrs:{readonly:""},domProps:{value:code},on:{focus:function(t){return t.target.select()}}})]),t._v(" "),code?e("div",{staticClass:"flex justify-center items-center pt-7"},[e("img",{staticClass:"h-4 w-4 py cursor-pointer",attrs:{src:n(354),alt:""},on:{click:function(e){return t.copy(code)}}})]):t._e()]):t._e()})),t._v(" "),t._m(1)],2)],1),t._v(" "),e("section",{staticClass:"bg-white lg:w-5/12 rounded-md border"},[e("p",{staticClass:"border-b text-sm font-semibold py-4 pl-6"},[t._v("\n      Enter amount and upload proof of payment\n    ")]),t._v(" "),e("form",{staticClass:"p-6 space-y-6",on:{submit:function(e){return e.preventDefault(),t.handleDeposit.apply(null,arguments)}}},[e("div",{staticClass:"space-y-1"},[e("label",{staticClass:"text-xs text-gray-700 font-medium"},[t._v("Deposit Amount")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6",attrs:{placeholder:"Enter amount in USD",type:"number"},domProps:{value:t.form.amount},on:{input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"space-y-4"},[e("label",{staticClass:"text-xs text-gray-700 font-medium"},[t._v("Deposit Type")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.depositType,expression:"form.depositType"}],staticClass:"py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"depositType",e.target.multiple?n:n[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("---- Select deposit type -----")]),t._v(" "),t._l(t.depositTypeArray,(function(n,r){return e("option",{key:r,domProps:{value:n.key}},[t._v("\n            "+t._s(n.name)+"\n          ")])}))],2),t._v(" "),e("div",{staticClass:"space-y-1"},[e("label",{staticClass:"text-xs text-gray-700 font-medium"},[t._v("Wallet address")]),t._v(" "),e("input",{staticClass:"py-3 bg-gray-100 cursor-not-allowed border border-gray-600 text-sm rounded-md w-full outline-none pl-6",attrs:{readonly:""},domProps:{value:t.computedWalletAddress}})]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("label",{staticClass:"text-xs text-gray-700 font-medium"},[t._v("Upload Image")]),t._v(" "),t.imagePreview?e("div",[e("img",{staticClass:"w-full h-32 object-cover object-center",attrs:{src:t.imagePreview,alt:"image preview"}})]):e("div",{staticClass:"max-w-2xl mx-auto"},[e("div",{staticClass:"flex items-center justify-center w-full"},[e("label",{staticClass:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",attrs:{for:"dropzone-file"}},[e("div",{staticClass:"flex flex-col items-center justify-center pt-5 pb-6"},[e("svg",{staticClass:"w-10 h-10 mb-3 text-gray-400",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"}})]),t._v(" "),t._m(2),t._v(" "),e("p",{staticClass:"text-xs text-gray-500 dark:text-gray-400"},[t._v("\n                    SVG, PNG, JPG or GIF (MAX. 800x400px)\n                  ")])]),t._v(" "),e("input",{staticClass:"hidden",attrs:{id:"dropzone-file",type:"file"},on:{change:t.handleProofUpload}})])])])]),t._v(" "),e("div",{staticClass:"w-full"},[e("button",{staticClass:"w-full text-white disabled:cursor-not-allowed disabled:opacity-25 bg-black py-3 px-3 rounded-md",attrs:{disabled:!t.isFormEnabled||t.processing}},[t._v("\n            "+t._s(t.processing?"processing..":"Submit")+"\n          ")])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"border-b pl-6 py-4 text-sm font-semibold"},[e("h1",{staticClass:"text-lg text-gray-600"},[t._v("Fund Your Account")]),t._v(" "),e("p",{staticClass:"text-gray-500 text-sm font-light"},[t._v("\n        copy wallet address of your intended payment method\n      ")])])},function(){var t=this._self._c;return t("div",{},[t("a",{staticClass:"bg-black px-6 m-6 py-2.5 rounded-md text-white",attrs:{href:"http://bitcoin.com/",target:"_blank"}},[this._v("Buy Crypto")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-2 text-sm text-gray-500 dark:text-gray-400"},[e("span",{staticClass:"font-semibold"},[t._v("Click to upload")]),t._v(" or drag\n                    and drop\n                  ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ApiLoader:n(559).default})}}]);