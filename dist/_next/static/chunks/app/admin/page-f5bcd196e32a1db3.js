(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{4655:function(e,t,r){Promise.resolve().then(r.bind(r,2581))},2581:function(e,t,r){"use strict";let a;r.r(t),r.d(t,{default:function(){return j}});var n=r(7437),o=r(2265),c=r(2998),s=r.n(c),l=e=>{let[t,r]=(0,o.useState)(""),[a,c]=(0,o.useState)(""),[l,i]=(0,o.useState)("");return(0,n.jsx)("section",{className:s().formWrapper,children:(0,n.jsxs)("form",{className:s().form,onSubmit:r=>{r.preventDefault(),"irfanshaheen"===t&&"irfanshaheen@hgc#2024"===a?(i(""),e.setLoginSuccess(!0)):i("Invalid username or password")},children:[(0,n.jsx)("h1",{className:s().formHeading,children:"Login"}),(0,n.jsx)("input",{placeholder:"username",required:!0,type:"text",value:t,onChange:e=>r(e.target.value)}),(0,n.jsx)("input",{placeholder:"password",required:!0,type:"password",value:a,onChange:e=>c(e.target.value)}),l?(0,n.jsx)("p",{className:s().error,children:l}):"",(0,n.jsx)("button",{className:"primary-button",type:"submit",children:"Login"})]})})},i=r(3047),d=r(8903),u=r(516),p=r(9854),h=r(177),f=r(7485),m={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let _=new Uint8Array(16),g=[];for(let e=0;e<256;++e)g.push((e+256).toString(16).slice(1));var v=function(e,t,r){if(m.randomUUID&&!t&&!e)return m.randomUUID();let n=(e=e||{}).random||(e.rng||function(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(_)})();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]}(n)},x=()=>{let[e,t]=(0,o.useState)(""),[r,a]=(0,o.useState)(""),[c,l]=(0,o.useState)(""),[m,_]=(0,o.useState)(!0),[g,x]=(0,o.useState)(""),[y,j]=(0,o.useState)(""),[b,N]=(0,o.useState)(""),[k,S]=(0,o.useState)(""),[w,I]=(0,o.useState)(""),[C,D]=(0,o.useState)(""),[A,F]=(0,o.useState)(!1),P=(0,d.Gh)(i.u),[W,U]=(0,o.useState)(null);async function O(){let e;if(null===W){alert("Please select an image");return}let t=(0,p.iH)(h.t,"products/".concat(v()));try{await (0,p.KV)(t,W);let r=await (0,p.Jt)(t);D(r),e={upload_success:!0,url:r}}catch(t){console.log(t),e={upload_success:!1}}return e}let q=async n=>{n.preventDefault(),F(!0),S(""),I("");try{let n=await O();if(n.upload_success){let o={product_name:e,code:r,weight:c,in_stock:m,description:g,category:y,price:b,product_image_url:n.url},s=(0,u.iH)(h.db,"products"),i=(0,u.VF)(s);await (0,u.t8)(i,o),t(""),a(""),l(""),_(!0),x(""),j(""),N(""),I("Data added successfully!"),props.setNewProductAdded(!0)}else console.log(first)}catch(e){console.log(e)}F(!1)};return(0,n.jsx)("section",{className:s().formWrapper,children:(0,n.jsxs)("form",{style:{paddingBottom:"0"},className:s().form,onSubmit:A?()=>{}:q,children:[(0,n.jsx)("h1",{className:s().formHeading,children:"Add a Product"}),(0,n.jsx)("input",{placeholder:"product name",required:!0,type:"text",value:e,onChange:e=>t(e.target.value)}),(0,n.jsx)("input",{placeholder:"code",required:!0,type:"text",value:r,onChange:e=>a(e.target.value)}),(0,n.jsx)("input",{placeholder:"weight",required:!0,type:"text",value:c,onChange:e=>l(e.target.value)}),(0,n.jsxs)("div",{className:s().optionFieldWrapper,children:[(0,n.jsx)("input",{placeholder:"in stock",id:"in_stock",type:"checkbox",defaultChecked:!0,onChange:e=>_(e.target.checked)}),(0,n.jsx)("label",{htmlFor:"in_stock",className:s().fieldName,children:"In Stock"})]}),(0,n.jsxs)("div",{className:s().fieldWrapper,children:[(0,n.jsx)("label",{className:s().fieldName,children:"Category"}),P.map((e,t)=>(0,n.jsxs)("div",{className:s().optionFieldWrapper,children:[(0,n.jsx)("input",{type:"radio",name:"category",value:e,id:e,checked:e===y,onClick:e=>j(e.target.value)}),(0,n.jsx)("label",{htmlFor:e,className:s().fieldName,children:e})]},"category_".concat(t)))]}),(0,n.jsx)("input",{placeholder:"price",required:!0,type:"number",value:b,onChange:e=>N(e.target.value)}),(0,n.jsx)("textarea",{value:g,placeholder:"description",onChange:e=>x(e.target.value)}),(0,n.jsx)("input",{label:"Image",placeholder:"Choose image",accept:"image/png,image/jpeg",type:"file",onChange:e=>{U(e.target.files[0])}}),k?(0,n.jsx)("p",{className:s().error,children:k}):"",w?(0,n.jsx)("p",{className:s().success,children:w}):"",(0,n.jsx)("button",{disabled:!(e&&r&&c&&g&&y&&b&&W),className:"primary-button",type:"submit",children:A?(0,n.jsx)(f.Nx,{visible:A,width:"40",color:"var(--white)",ariaLabel:"infinity-spin-loading"}):"Add"})]})})},y=r(8945),j=()=>{let[e,t]=(0,o.useState)(!1),[r,a]=(0,o.useState)(!1);return e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{setNewProductAdded:a}),(0,n.jsx)(y.default,{newProductAdded:r,setNewProductAdded:a,admin:!0,home:!0})]}):(0,n.jsx)(l,{setLoginSuccess:t})}},3047:function(e,t,r){"use strict";r.d(t,{default:function(){return u},u:function(){return d}});var a=r(7437),n=r(2265),o=r(6674),c=r.n(o),s=r(6648),l=r(1169),i=r(8903);let d=[{name:"Qurbani ".concat(i.VK),link:"qurbani"},{name:"Aqeeqa",link:"aqeeqa"},{name:"Meat",link:"meat"}];var u=()=>{let e=(0,l.useRouter)(),t=(0,l.usePathname)().split("/"),[r,o]=(0,n.useState)(t[t.length-1]),i=t=>{(null==t?void 0:t.is_home)?(o(""),e.push("/")):(o(null==t?void 0:t.link),e.push("/".concat(null==t?void 0:t.link)))};return(0,a.jsxs)("nav",{className:c().nav,children:[(0,a.jsx)("button",{onClick:()=>i({is_home:!0}),href:"/",children:(0,a.jsx)(s.default,{alt:"logo",style:{borderRadius:"100px"},src:"/logo.jpeg",width:90,height:90})}),(0,a.jsxs)("ul",{children:[d.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)("button",{onClick:()=>i({link:e.link}),className:r===e.link?c().active:"",href:"/".concat(e.link),children:e.name})},"navigation_".concat(t))),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://wa.me/923316660067",target:"_blank",children:" 24/7 Whatsapp / Call +92 312 3900290"})})]})]})}},8945:function(e,t,r){"use strict";r.d(t,{default:function(){return x}});var a=r(7437),n=r(2265),o=r(4910),c=r.n(o),s=r(7138),l=r(4605),i=r(699),d=r(9407),u=r(3591),p=r(8903),h=r(6648),f=r(111),m=e=>{let t=p.ar.format(null==e?void 0:e.price),[r,o]=(0,n.useState)(null==e?void 0:e.in_stock),m=async t=>{t.preventDefault(),await (0,f.V)({in_stock:!r},"products/".concat(null==e?void 0:e.id)),o(!r)};return(0,a.jsxs)("div",{className:c().product,children:[(0,a.jsx)("div",{className:c().productImage,children:(0,a.jsx)(s.default,{href:"/".concat(null==e?void 0:e.category,"/").concat(null==e?void 0:e.id),children:(0,a.jsx)(h.default,{alt:null==e?void 0:e.product_name,src:null==e?void 0:e.product_image_url,width:300,height:300,priority:!0,quality:80})})}),(0,a.jsxs)("div",{className:c().productDetails,children:[(0,a.jsx)(s.default,{href:"/".concat(null==e?void 0:e.category,"/").concat(null==e?void 0:e.id),children:(0,a.jsx)("h2",{className:c().productTitle,children:null==e?void 0:e.product_name})}),(0,a.jsx)("div",{className:c().productOtherDetails,children:(0,a.jsxs)("h4",{className:c().productOtherShortInfo,children:[(0,a.jsxs)("span",{className:c().productIconStyles,children:[(0,a.jsx)(l.Z,{}),null==e?void 0:e.weight]})," ",(0,a.jsx)(i.Z,{className:"circle-dot-styles"})," ",(0,a.jsxs)("span",{className:c().productIconStyles,children:[(0,a.jsx)(d.Z,{}),null==e?void 0:e.category]}),(0,a.jsx)(i.Z,{className:"circle-dot-styles"})," ",(0,a.jsxs)("span",{className:r?c().inStock:c().outOfStock,children:[r?"In":"Out of"," Stock"]})]})}),(0,a.jsx)("h3",{className:c().productPrice,children:t}),e.admin?(0,a.jsxs)("button",{style:{background:"var(--black)"},onClick:m,className:"primary-button",children:[" ",r?"Out of":"In"," Stock "]}):"",(0,a.jsxs)("div",{className:c().productActionButtons,children:[(0,a.jsx)(s.default,{href:"/".concat(null==e?void 0:e.category,"/").concat(null==e?void 0:e.id),className:"primary-button",children:"Details"}),(0,a.jsxs)("a",{href:(0,p.Gi)({product_name:null==e?void 0:e.product_name,code:null==e?void 0:e.code,price:t,service:null==e?void 0:e.category,id:null==e?void 0:e.id}),target:"_blank",className:"whatsapp-button",children:[(0,a.jsx)(u.Z,{}),"Whatsapp"]})]})]})]})},_=r(4979),g=r.n(_),v=r(7485);function x(e){let[t,r]=(0,n.useState)({loading:!0,data:[],server_error:!1,data_found:!1}),o=async()=>{let a=await (0,f.w)({category:e.service});r({...t,...a,loading:!1})};return(0,n.useEffect)(()=>{o()},[]),e.newProductAdded&&(o(),e.setNewProductAdded(!1)),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:g().productsWrapper,children:[(0,a.jsx)("h1",{children:e.service}),(0,a.jsx)("div",{className:g().products,children:t.loading?(0,a.jsx)(v.Nx,{visible:!0,width:"140",color:"var(--primary)",ariaLabel:"infinity-spin-loading"}):t.server_error?(0,a.jsx)("h1",{children:"Server Error"}):t.data_found?t.data.map((t,r)=>(0,a.jsx)(m,{admin:e.admin,id:null==t?void 0:t.id,product_name:null==t?void 0:t.product_name,description:null==t?void 0:t.description,product_image_url:null==t?void 0:t.product_image_url,code:null==t?void 0:t.code,category:null==t?void 0:t.category,price:null==t?void 0:t.price,weight:null==t?void 0:t.weight,in_stock:null==t?void 0:t.in_stock,featured_image:null==t?void 0:t.featured_image},"product_".concat(r))):(0,a.jsx)("h1",{style:{color:"var(--dark-gray"},children:"No Data Found"})})]})})}},177:function(e,t,r){"use strict";r.d(t,{db:function(){return s},t:function(){return l}});var a=r(5236),n=r(516),o=r(9854);let c=(0,a.ZF)({apiKey:"AIzaSyAfoFbEjqpaT20lhF7IjahJPpdldXVSIc0",authDomain:"hasangoatclub-f08e8.firebaseapp.com",databaseURL:"https://hasangoatclub-f08e8-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"hasangoatclub-f08e8",storageBucket:"hasangoatclub-f08e8.appspot.com",messagingSenderId:"487141998126",appId:"1:487141998126:web:948f2f7f321af1ae7a29bf",measurementId:"G-T3DTFDX8D9"}),s=(0,n.N8)(c),l=(0,o.cF)(c)},111:function(e,t,r){"use strict";r.d(t,{V:function(){return c},w:function(){return o}});var a=r(516),n=r(177);let o=async e=>{let t="products".concat((null==e?void 0:e.id)?"/"+e.id:"");try{let r=(0,a.iH)(n.db,t),o=await (0,a.U2)(r);if(null==e?void 0:e.id){let t=o.val();if(t)return{data_found:!0,server_error:!1,data:{...t,id:e.id}};return{data_found:!1,server_error:!1,data:[]}}if(!o.exists())return{data_found:!1,server_error:!1,data:[]};{let t=Object.entries(o.val()).map(e=>{let[t,r]=e;return{id:t,...r}});if(null==e||!e.category)return{data_found:!0,server_error:!1,data:t};{let r=t.filter(t=>t.category===e.category);if(0===r.length)return{data_found:!1,server_error:!1,data:[]};return{data_found:!0,server_error:!1,data:r}}}}catch(e){return{data_found:!1,server_error:!0,error:e}}},c=async(e,t)=>{try{let r=(0,a.iH)(n.db,t);return await (0,a.Vx)(r,e),{update_success:!0}}catch(e){return{update_success:!1}}}},8903:function(e,t,r){"use strict";r.d(t,{Gh:function(){return c},Gi:function(){return o},VK:function(){return n},ar:function(){return a}});let a=new Intl.NumberFormat("en-US",{style:"currency",currency:"PKR"}),n=new Date().getFullYear(),o=e=>{let t="https://hasangoatclub.io/hasangoatclub/".concat(e.service,"/").concat(e.id),r="السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ   \n    %0a%0aI am interested in buying ".concat(null==e?void 0:e.product_name," [").concat(null==e?void 0:e.code,"] of ").concat(null==e?void 0:e.price,". Kindly share further details.%0a%0aLink: ").concat(t,"\n    ");return"https://wa.me/".concat("923133102636","?text=").concat(r)},c=e=>{let t=[];for(let r of e)r.hasOwnProperty("link")&&t.push(r.link);return t}},2998:function(e){e.exports={formWrapper:"form_formWrapper__guE6y",form:"form_form__6XzkO",error:"form_error__Cz9g1",success:"form_success__jGup5",fieldWrapper:"form_fieldWrapper__0OyHc",optionFieldWrapper:"form_optionFieldWrapper__KApr4",fieldName:"form_fieldName__eZBtT",formHeading:"form_formHeading__d5Q1Z"}},6674:function(e){e.exports={nav:"navbar_nav__ga3Q_",logo:"navbar_logo__IUgwh",active:"navbar_active__93cHx"}},4910:function(e){e.exports={product:"product_product__4AUKP",productImage:"product_productImage__XrAX8",productDetails:"product_productDetails__a__9l",productTitle:"product_productTitle____GiM",productPrice:"product_productPrice__TDcIE",productOtherShortInfo:"product_productOtherShortInfo__A50nR",productIconStyles:"product_productIconStyles__w8Cf3",productActionButtons:"product_productActionButtons__Y3Iwr",inStock:"product_inStock__k3hTk",outOfStock:"product_outOfStock__77tuQ"}},4979:function(e){e.exports={productsWrapper:"products_productsWrapper__w5yXy",products:"products_products__hEzWM"}}},function(e){e.O(0,[586,537,481,571,648,674,138,971,23,744],function(){return e(e.s=4655)}),_N_E=e.O()}]);