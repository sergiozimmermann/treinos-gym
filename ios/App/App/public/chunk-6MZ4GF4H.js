import{ga as h,h as e,l as n}from"./chunk-ACG6Z66O.js";import{_ as o,ea as r}from"./chunk-2OKAN6CQ.js";var g=(()=>{let t=class t{constructor(i,s,u){this.afs=i,this.afAuth=s,this.router=u,this.dataBase=this.afs.collection("/Usuarios")}getUsuarios(){return this.dataBase.snapshotChanges()}login(i){this.afAuth.signInWithEmailAndPassword(i.email,"12345678").then(()=>this.router.navigateByUrl(""))}logout(){this.afAuth.signOut(),this.router.navigateByUrl("login")}};t.\u0275fac=function(s){return new(s||t)(r(h),r(n),r(e))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();export{g as a};