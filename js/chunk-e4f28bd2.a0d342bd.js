(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4f28bd2"],{dc6d:function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var s=c("7a23"),a={class:"container"},i={class:"row mt-5"},o={class:"col-md-6"},n=["src"],r={class:"col-md-6"},d={class:"ff-r2"},b={class:"badge d-md-flex d-block"},l={class:"badgegroup1 mb-2 mb-md-0 text-start"},h={class:"badge me-2 bg-danger fs-6"},u={class:"badge me-2 bg-danger fs-6"},j=Object(s["h"])("div",{class:"badgegrou text-start"},[Object(s["h"])("span",{class:"badge me-2 bg-primary fs-6"},"會員專屬優惠"),Object(s["h"])("span",{class:"badge me-2 bg-primary fs-6"},"精細保養"),Object(s["h"])("span",{class:"badge me-2 bg-primary fs-6"},"進口")],-1),p=Object(s["h"])("h2",{class:"mt-3"},"基本數據",-1),O={class:"mt-3"},g={class:"row mb-5"},m={class:"col-md-6 mt-5"},f=Object(s["h"])("h2",{class:"mt-3"},[Object(s["h"])("i",{class:"bi bi-megaphone-fill fs-3 text-info"}),Object(s["j"])(" 詳細介紹")],-1),v={class:"fs-6 lh-lg"},y={class:"col-md-6 mt-5"},x=Object(s["h"])("h2",{class:"mt-3"},[Object(s["h"])("i",{class:"bi bi-exclamation-diamond-fill fs-3 text-warning"}),Object(s["j"])("注意事項")],-1),w=Object(s["h"])("p",null,"禁止在非鋪裝道路騎乘(off-road)、孤輪、空檔拉轉、過度超速等等",-1),J=Object(s["h"])("p",null,[Object(s["j"])("新手不建議騎乘 600 "),Object(s["h"])("i",{class:"bi bi-badge-cc"}),Object(s["j"])(" 以上大牌量重機")],-1),k=Object(s["j"])("租車須簽本票(還車完即歸回),價格為 NT$ "),S={class:"text-danger"},$=Object(s["h"])("p",null,[Object(s["j"])("租車時間 "),Object(s["h"])("span",{class:"text-danger"},"PM 9:00 ~ AM 21:30")],-1),L={class:"row mb-5"},T=Object(s["h"])("div",{class:"col-md-6"},null,-1),M={class:"col-md-6 d-flex justify-content-between align-items-end border border-5 p-3 rounded"},G={class:"price"},N={class:"mb-0 fs-3 text-danger"},C={class:"gobuy"},F=["disabled"],_={key:0,class:"spinner-border spinner-border-sm",role:"status"},q=Object(s["h"])("span",{class:"visually-hidden"},null,-1),A=[q],I=Object(s["j"])("馬上租! ");function P(t,e,c,q,P,U){var z=this,B=Object(s["G"])("Loading"),D=Object(s["G"])("ToastMessages"),E=Object(s["G"])("Footer");return Object(s["y"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(B,{active:P.isLoading},null,8,["active"]),Object(s["h"])("div",a,[Object(s["h"])("div",i,[Object(s["h"])("div",o,[Object(s["h"])("img",{src:P.product.imageUrl,alt:"",class:"h-350 bgCover mb-3 mb-md-0 card-img"},null,8,n)]),Object(s["h"])("div",r,[Object(s["h"])("h1",d,Object(s["J"])(P.product.title),1),Object(s["h"])("div",b,[Object(s["h"])("div",l,[Object(s["h"])("span",h,Object(s["J"])(P.product.unit),1),Object(s["h"])("span",u,Object(s["J"])(P.product.category),1)]),j]),p,Object(s["h"])("p",O,Object(s["J"])(P.product.description),1)])]),Object(s["h"])("div",g,[Object(s["h"])("div",m,[f,Object(s["h"])("h3",v,Object(s["J"])(P.product.content),1)]),Object(s["h"])("div",y,[x,w,J,Object(s["h"])("p",null,[k,Object(s["h"])("span",S,Object(s["J"])(U.currency(200*P.product.price)),1)]),$])]),Object(s["h"])("div",L,[T,Object(s["h"])("div",M,[Object(s["h"])("div",G,[Object(s["h"])("del",null,"原價NT $ "+Object(s["J"])(U.currency(P.product.origin_price)),1),Object(s["h"])("p",N,"特價 NT $ "+Object(s["J"])(U.currency(P.product.price)),1)]),Object(s["h"])("div",C,[Object(s["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=function(t){return U.addcart(z.id)}),disabled:this.status.lodingitem===this.id},[this.status.lodingitem===this.id?(Object(s["y"])(),Object(s["g"])("div",_,A)):Object(s["f"])("",!0),I],8,F)])])])]),Object(s["k"])(D),Object(s["k"])(E)],64)}c("99af"),c("a15b");var U=c("fd2d"),z=c("f367"),B=c("9bb9"),D={data:function(){return{id:"",product:{},isLoading:!1,status:{lodingitem:""}}},components:{Footer:U["a"],ToastMessages:z["a"]},inject:["emitter"],methods:{currency:B["a"],getoneproduct:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/product/").concat(this.id);this.axios.get(e).then((function(e){console.log(e),t.product=e.data.product,t.isLoading=!1}))},addcart:function(t){var e=this;this.status.lodingitem=t;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("rubxx40734","/cart"),s={product_id:t,qty:1};this.axios.post(c,{data:s}).then((function(t){e.status.lodingitem="",console.log(t),t.data.success?e.emitter.emit("push-message",{style:"success",title:"已將租車券加入購物車!"}):e.rmitter.emit("pish-message",{style:"danger",title:"加入購物車失敗><",content:t.data.message.join("、")})}))}},created:function(){this.id=this.$route.params.productId,this.getoneproduct()}},E=c("d959"),H=c.n(E);const K=H()(D,[["render",P]]);e["default"]=K},e01a:function(t,e,c){"use strict";var s=c("23e7"),a=c("83ab"),i=c("da84"),o=c("1a2d"),n=c("1626"),r=c("861d"),d=c("9bf2").f,b=c("e893"),l=i.Symbol;if(a&&n(l)&&(!("description"in l.prototype)||void 0!==l().description)){var h={},u=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof u?new l(t):void 0===t?l():l(t);return""===t&&(h[e]=!0),e};b(u,l);var j=u.prototype=l.prototype;j.constructor=u;var p=j.toString,O="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;d(j,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=p.call(t);if(o(h,t))return"";var c=O?e.slice(7,-1):e.replace(g,"$1");return""===c?void 0:c}}),s({global:!0,forced:!0},{Symbol:u})}}}]);
//# sourceMappingURL=chunk-e4f28bd2.a0d342bd.js.map