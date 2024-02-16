import{a as Dt}from"./chunk-6MZ4GF4H.js";import{a as Tt,b as Nt,c as Ot,d as Pt}from"./chunk-6HWE66LG.js";import{d as jt}from"./chunk-I2DYVE7M.js";import{V as q,a as bt,b as Mt,c as Et,d as Ft,e as wt,f as xt,g as k,h as A,i as At,ia as Lt,j as b,ja as kt,k as Rt,l as j}from"./chunk-ACG6Z66O.js";import"./chunk-WOTB2A3J.js";import{$ as v,Ab as y,C as et,Da as lt,Db as It,Eb as Ct,Ec as L,G as nt,J as it,Mb as u,Nb as Y,P as ot,Pa as x,Ra as mt,Sb as D,Ta as dt,Ua as ut,Wa as P,X as O,Xa as V,Y as rt,Ya as d,Za as ht,_ as w,a as Z,ab as pt,da as $,db as ft,ea as C,fa as S,gb as gt,ha as st,ia as h,ja as _,jb as vt,kb as _t,mc as St,n as F,o as Q,r as g,ra as at,rb as l,sb as m,sc as R,tb as I,ua as ct,x as tt,xc as yt}from"./chunk-2OKAN6CQ.js";import"./chunk-CQCHLVVT.js";var G=(()=>{let n=class n{constructor(t,e,i){this.afAuth=t,this.location=e,this.router=i,this.titulo="",this.nmUsuario="",this.getNomeUsuario(),i.events.subscribe(r=>{r instanceof xt&&this.getTitle()})}ngOnInit(){}getNomeUsuario(){this.afAuth.currentUser.then(t=>{this.nmUsuario=t?.displayName??""})}getTitle(){var t=this.location.prepareExternalUrl(this.location.path());switch(t.charAt(0)==="#"&&(t=t.slice(1)),t){case"/treinos-diarios":this.titulo="Treinos Di\xE1rios";break;case"/treinos-preset":this.titulo="Treinos Predefinidos";break;case"/conta":this.titulo="Conta";break;default:this.titulo="Treinos Di\xE1rios"}}};n.\u0275fac=function(e){return new(e||n)(d(j),d(yt),d(A))},n.\u0275cmp=h({type:n,selectors:[["title-bar"]],decls:6,vars:2,consts:[["id","titleBar"],["id","titulo"],["id","nome"]],template:function(e,i){e&1&&(l(0,"div",0),I(1,"div"),l(2,"div",1),u(3),m(),l(4,"div",2),u(5),m()()),e&2&&(V(3),Y(i.titulo),V(2),Y(i.nmUsuario))},styles:["#titleBar[_ngcontent-%COMP%]{padding:5px}div[_ngcontent-%COMP%]{display:flex;flex:1}#titulo[_ngcontent-%COMP%]{justify-content:center;font-size:26px;white-space:nowrap;margin:0 10px}#nome[_ngcontent-%COMP%]{justify-content:end;align-self:center}"]});let o=n;return o})();var ie=["*"],B;function oe(){if(B===void 0&&(B=null,typeof window<"u")){let o=window;o.trustedTypes!==void 0&&(B=o.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return B}function T(o){return oe()?.createHTML(o)||o}function Ut(o){return Error(`Unable to find icon with the name "${o}"`)}function re(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function Bt(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function zt(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var f=class{constructor(n,a,t){this.url=n,this.svgText=a,this.options=t}},se=(()=>{let n=class n{constructor(t,e,i,r){this._httpClient=t,this._sanitizer=e,this._errorHandler=r,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=i}addSvgIcon(t,e,i){return this.addSvgIconInNamespace("",t,e,i)}addSvgIconLiteral(t,e,i){return this.addSvgIconLiteralInNamespace("",t,e,i)}addSvgIconInNamespace(t,e,i,r){return this._addSvgIconConfig(t,e,new f(i,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,i,r){let s=this._sanitizer.sanitize(x.HTML,i);if(!s)throw zt(i);let c=T(s);return this._addSvgIconConfig(t,e,new f("",c,r))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,i){return this._addSvgIconSetConfig(t,new f(e,null,i))}addSvgIconSetLiteralInNamespace(t,e,i){let r=this._sanitizer.sanitize(x.HTML,e);if(!r)throw zt(e);let s=T(r);return this._addSvgIconSetConfig(t,new f("",s,i))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(x.RESOURCE_URL,t);if(!e)throw Bt(t);let i=this._cachedIconsByUrl.get(e);return i?F(z(i)):this._loadSvgIconFromConfig(new f(t,null)).pipe(O(r=>this._cachedIconsByUrl.set(e,r)),g(r=>z(r)))}getNamedSvgIcon(t,e=""){let i=Ht(e,t),r=this._svgIconConfigs.get(i);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(e,t),r)return this._svgIconConfigs.set(i,r),this._getSvgFromConfig(r);let s=this._iconSetConfigs.get(e);return s?this._getSvgFromIconSetConfigs(t,s):Q(Ut(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?F(z(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(g(e=>z(e)))}_getSvgFromIconSetConfigs(t,e){let i=this._extractIconWithNameFromAnySet(t,e);if(i)return F(i);let r=e.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(et(c=>{let E=`Loading icon set URL: ${this._sanitizer.sanitize(x.RESOURCE_URL,s.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(E)),F(null)})));return tt(r).pipe(g(()=>{let s=this._extractIconWithNameFromAnySet(t,e);if(!s)throw Ut(t);return s}))}_extractIconWithNameFromAnySet(t,e){for(let i=e.length-1;i>=0;i--){let r=e[i];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(r),c=this._extractSvgIconFromSet(s,t,r.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(O(e=>t.svgText=e),g(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?F(null):this._fetchIcon(t).pipe(O(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,i){let r=t.querySelector(`[id="${e}"]`);if(!r)return null;let s=r.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,i);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),i);let c=this._svgElementFromString(T("<svg></svg>"));return c.appendChild(s),this._setSvgAttributes(c,i)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let i=e.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let e=this._svgElementFromString(T("<svg></svg>")),i=t.attributes;for(let r=0;r<i.length;r++){let{name:s,value:c}=i[r];s!=="id"&&e.setAttribute(s,c)}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[r].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:i}=t,r=i?.withCredentials??!1;if(!this._httpClient)throw re();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let s=this._sanitizer.sanitize(x.RESOURCE_URL,e);if(!s)throw Bt(e);let c=this._inProgressUrlFetches.get(s);if(c)return c;let M=this._httpClient.get(s,{responseType:"text",withCredentials:r}).pipe(g(E=>T(E)),it(()=>this._inProgressUrlFetches.delete(s)),ot());return this._inProgressUrlFetches.set(s,M),M}_addSvgIconConfig(t,e,i){return this._svgIconConfigs.set(Ht(t,e),i),this}_addSvgIconSetConfig(t,e){let i=this._iconSetConfigs.get(t);return i?i.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let i=0;i<this._resolvers.length;i++){let r=this._resolvers[i](e,t);if(r)return ae(r)?new f(r.url,null,r.options):new f(r,null)}}};n.\u0275fac=function(e){return new(e||n)(C(bt,8),C(wt),C(R,8),C(P))},n.\u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();function z(o){return o.cloneNode(!0)}function Ht(o,n){return o+":"+n}function ae(o){return!!(o.url&&o.options)}var ce=new $("MAT_ICON_DEFAULT_OPTIONS"),le=new $("mat-icon-location",{providedIn:"root",factory:me});function me(){let o=S(R),n=o?o.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}var Wt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],de=Wt.map(o=>`[${o}]`).join(", "),ue=/^url\(['"]?#(.*?)['"]?\)$/,H=(()=>{let n=class n{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,i,r,s,c){this._elementRef=t,this._iconRegistry=e,this._location=r,this._errorHandler=s,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=Z.EMPTY,c&&(c.color&&(this.color=this._defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),i||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let i=t.childNodes[e];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),e.forEach(i=>t.classList.add(i)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((i,r)=>{i.forEach(s=>{r.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(de),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<e.length;r++)Wt.forEach(s=>{let c=e[r],M=c.getAttribute(s),E=M?M.match(ue):null;if(E){let N=i.get(c);N||(N=[],i.set(c,N)),N.push({name:s,value:E[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,i]=this._splitIconName(t);e&&(this._svgNamespace=e),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,e).pipe(nt(1)).subscribe(r=>this._setSvgElement(r),r=>{let s=`Error retrieving icon ${e}:${i}! ${r.message}`;this._errorHandler.handleError(new Error(s))})}}};n.\u0275fac=function(e){return new(e||n)(d(dt),d(se),at("aria-hidden"),d(le),d(P),d(ce,8))},n.\u0275cmp=h({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,i){e&2&&(gt("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),_t(i.color?"mat-"+i.color:""),vt("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[st.HasDecoratorInputTransform,"inline","inline",St],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[ft,D],ngContentSelectors:ie,decls:1,vars:0,template:function(e,i){e&1&&(It(),Ct(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let o=n;return o})(),$t=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=_({type:n}),n.\u0275inj=v({imports:[q,q]});let o=n;return o})();var J=(()=>{let n=class n{constructor(t,e,i){this.dialogRef=t,this.router=e,this.loginService=i}ngOnInit(){}navigate(t){this.router.navigateByUrl(t),this.dialogRef.close()}logout(){this.loginService.logout(),this.dialogRef.close()}};n.\u0275fac=function(e){return new(e||n)(d(Tt),d(A),d(Dt))},n.\u0275cmp=h({type:n,selectors:[["app-menu-dialog"]],decls:18,vars:0,consts:[[1,"mat-typography"],[3,"click"]],template:function(e,i){e&1&&(l(0,"mat-dialog-content",0)(1,"div")(2,"button",1),y("click",function(){return i.navigate("/treinos-preset")}),l(3,"mat-icon"),u(4,"assignment"),m(),u(5," Criar Treino Predefinido "),m(),l(6,"button",1),y("click",function(){return i.navigate("/treinos-diarios")}),l(7,"mat-icon"),u(8,"fitness_center"),m(),u(9," Criar Treino Di\xE1rio "),m(),l(10,"button",1),y("click",function(){return i.navigate("/conta")}),l(11,"mat-icon"),u(12,"account_circle"),m(),u(13," Conta "),m(),l(14,"button",1),y("click",function(){return i.logout()}),l(15,"mat-icon"),u(16,"exit_to_app"),m(),u(17," Logout "),m()()())},dependencies:[H,Ot],styles:["[_nghost-%COMP%]     button{display:flex;align-items:center;width:100%;height:85px;border:none!important;text-align:start;padding:0 6px!important;border-top:1px solid var(--background-active)!important;border-bottom:1px solid var(--background-active)!important}[_nghost-%COMP%]     button:first-child{border-top:none!important}[_nghost-%COMP%]     button:last-child{border-bottom:none!important}[_nghost-%COMP%]     .mdc-dialog__content{padding:0!important}[_nghost-%COMP%]     mat-icon{font-size:30px!important;width:auto!important;height:auto!important;margin-right:5px}"]});let o=n;return o})();var K=(()=>{let n=class n{constructor(t){this.dialog=t}ngOnInit(){}openDialog(){this.dialog.open(J,{id:"menu-dialog",width:"100%",maxWidth:"100%"})}};n.\u0275fac=function(e){return new(e||n)(d(Nt))},n.\u0275cmp=h({type:n,selectors:[["nav-bar"]],decls:11,vars:0,consts:[["id","navbar"],["mat-icon-button","","routerLink","/treinos-preset",1,"text-button"],["id","menuButton","mat-icon-button","",3,"click"],["mat-icon-button","","routerLink","/treinos-diarios",1,"text-button"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"div")(2,"button",1),u(3," Treinos Predefinidos "),m()(),l(4,"div")(5,"button",2),y("click",function(){return i.openDialog()}),l(6,"mat-icon"),u(7,"menu"),m()()(),l(8,"div")(9,"button",3),u(10," Treinos Di\xE1rios "),m()()())},dependencies:[H,Lt,At],styles:["[_nghost-%COMP%]     #navbar{display:flex;height:70px;align-items:center}[_nghost-%COMP%]     div{flex:1;text-align:center;margin:0 5px}[_nghost-%COMP%]     #menuButton{width:60px!important;height:60px!important;background-color:var(--background-contrast)!important;border-radius:100%!important;border:2px solid var(--background-active)!important}[_nghost-%COMP%]     .text-button{width:auto!important;height:auto!important;border-radius:10px!important}[_nghost-%COMP%]     .text-button .mat-mdc-button-persistent-ripple{border-radius:10px!important}[_nghost-%COMP%]     mat-icon{height:30px!important;width:30px!important;font-size:30px!important;margin-right:0!important;margin-left:0!important;color:var(--font-color)!important}[_nghost-%COMP%]     .mat-mdc-icon-button{font-size:20px!important}"]});let o=n;return o})();var Yt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=_({type:n}),n.\u0275inj=v({imports:[L,$t,kt,Pt]});let o=n;return o})();var qt=(()=>{let n=class n{constructor(){}ngOnInit(){}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=h({type:n,selectors:[["app-layout"]],standalone:!0,features:[D],decls:5,vars:0,consts:[["id","layout"],[1,"card"]],template:function(e,i){e&1&&(l(0,"div",0),I(1,"title-bar"),l(2,"div",1),I(3,"router-outlet"),m(),I(4,"nav-bar"),m())},dependencies:[L,b,k,Yt,G,K],styles:["#layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}title-bar[_ngcontent-%COMP%]{display:flex;background-color:var(--background-contrast)}nav-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;background-color:var(--background-contrast)}.card[_ngcontent-%COMP%]{position:relative;padding:5px;height:calc(100% - 122px)}"]});let o=n;return o})();var Gt=(()=>{let n=class n{constructor(t){this.afAuth=t}isLogado(){return this.afAuth.authState.pipe(g(t=>!!t))}};n.\u0275fac=function(e){return new(e||n)(C(j))},n.\u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();var W=(o,n)=>{let a=S(A),t=S(Gt);return new Promise(e=>{t.isLogado().subscribe(i=>{if(i){e(!0);return}a.navigateByUrl("/login"),e(!1)})})};var fe=[{path:"login",loadChildren:()=>import("./chunk-KT3LCFGW.js").then(o=>o.LoginModule)},{path:"",redirectTo:"treinos-diarios",pathMatch:"full"},{path:"",children:[{path:"",component:qt,children:[{path:"treinos-diarios",loadChildren:()=>import("./chunk-YQPBIX3R.js").then(o=>o.TreinosDiariosModule),canActivate:[W]},{path:"treinos-preset",loadChildren:()=>import("./chunk-LCJSH6DD.js").then(o=>o.TreinosPresetModule),canActivate:[W]},{path:"conta",loadChildren:()=>import("./chunk-7ZSHJSJV.js").then(o=>o.ContaModule),canActivate:[W]}]}]},{path:"**",redirectTo:"treinos-diarios",pathMatch:"full"}],Jt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=_({type:n}),n.\u0275inj=v({imports:[b.forRoot(fe),b]});let o=n;return o})();var Kt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=h({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&I(0,"router-outlet")},dependencies:[k]});let o=n;return o})();var Xt={production:!1,firebase:{apiKey:"AIzaSyARODJj7_Op0OprqU_aYxIhMmlPeag4ci8",authDomain:"treinos-gym.firebaseapp.com",projectId:"treinos-gym",storageBucket:"treinos-gym.appspot.com",messagingSenderId:"1049567299374",appId:"1:1049567299374:web:e62269ceb3c282242d1cbf"}};var ge="@",ve=(()=>{let n=class n{constructor(t,e,i,r,s){this.doc=t,this.delegate=e,this.zone=i,this.animationType=r,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=S(mt,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-NRL655EP.js")).catch(e=>{throw new rt(5300,!1)}).then(({\u0275createEngine:e,\u0275AnimationRendererFactory:i})=>{this._engine=e(this.animationType,this.doc,this.scheduler);let r=new i(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(t,e){let i=this.delegate.createRenderer(t,e);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let r=new X(i);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(t,e);r.use(c)}).catch(s=>{r.use(i)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};n.\u0275fac=function(e){ht()},n.\u0275prov=w({token:n,factory:n.\u0275fac});let o=n;return o})(),X=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let a of this.replay)a(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,a){return this.delegate.createElement(n,a)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,a){this.delegate.appendChild(n,a)}insertBefore(n,a,t,e){this.delegate.insertBefore(n,a,t,e)}removeChild(n,a,t){this.delegate.removeChild(n,a,t)}selectRootElement(n,a){return this.delegate.selectRootElement(n,a)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,a,t,e){this.delegate.setAttribute(n,a,t,e)}removeAttribute(n,a,t){this.delegate.removeAttribute(n,a,t)}addClass(n,a){this.delegate.addClass(n,a)}removeClass(n,a){this.delegate.removeClass(n,a)}setStyle(n,a,t,e){this.delegate.setStyle(n,a,t,e)}removeStyle(n,a,t){this.delegate.removeStyle(n,a,t)}setProperty(n,a,t){this.shouldReplay(a)&&this.replay.push(e=>e.setProperty(n,a,t)),this.delegate.setProperty(n,a,t)}setValue(n,a){this.delegate.setValue(n,a)}listen(n,a,t){return this.shouldReplay(a)&&this.replay.push(e=>e.listen(n,a,t)),this.delegate.listen(n,a,t)}shouldReplay(n){return this.replay!==null&&n.startsWith(ge)}};function Zt(o="animations"){return ct([{provide:ut,useFactory:(n,a,t)=>new ve(n,a,t,o),deps:[R,Mt,pt]},{provide:lt,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Qt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=_({type:n,bootstrap:[Kt]}),n.\u0275inj=v({providers:[Zt()],imports:[Ft,b,Jt,Rt.initializeApp(Xt.firebase),jt]});let o=n;return o})();Et().bootstrapModule(Qt).catch(o=>console.error(o));
