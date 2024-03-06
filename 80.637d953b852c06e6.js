"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[80],{5080:(m,u,c)=>{c.r(u),c.d(u,{WishlistComponent:()=>E});var l=c(6814),d=c(1120),p=c(8129),t=c(4769),a=c(9196),g=c(2425),o=c(6286);function _(e,h){if(1&e){const s=t.EpF();t.TgZ(0,"i",19),t.NdJ("click",function(){t.CHM(s);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.addProductWishList(r._id))}),t.qZA()}}function f(e,h){if(1&e){const s=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){t.CHM(s);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.removeProductWishList(r._id))}),t.qZA()}}function v(e,h){if(1&e&&t._UZ(0,"i",21),2&e){const s=h.$implicit,i=t.oxw().$implicit;t.ekj("rating-color",i.ratingsAverage>=s)}}const C=function(e){return["/productDetails",e]},x=function(){return[1,2,3,4,5]};function T(e,h){if(1&e){const s=t.EpF();t.TgZ(0,"div",4)(1,"div",5),t.YNc(2,_,1,0,"i",6),t.YNc(3,f,1,0,"i",7),t.TgZ(4,"header",8),t._UZ(5,"img",9),t.TgZ(6,"h3",10),t._uU(7),t.ALo(8,"cuttext"),t.qZA(),t.TgZ(9,"h4",11),t._uU(10),t.qZA(),t.TgZ(11,"div",12)(12,"span",13),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"p",14),t.YNc(16,v,1,2,"i",15),t.TgZ(17,"span",16),t._uU(18),t.qZA()()()(),t.TgZ(19,"footer")(20,"button",17,18),t.NdJ("click",function(){const n=t.CHM(s).$implicit,D=t.MAs(21),O=t.oxw(2);return t.KtG(O.addProductCart(n._id,D))}),t._uU(22,"+ Add Product"),t.qZA()()()()}if(2&e){const s=h.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!i.wishListData.includes(s._id)),t.xp6(1),t.Q6J("ngIf",i.wishListData.includes(s._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(17,C,s._id)),t.xp6(1),t.Q6J("src",s.imageCover,t.LSH)("title",s.title)("alt",s.title),t.xp6(2),t.Oqu(t.xi3(8,11,s.title,3)),t.xp6(3),t.Oqu(s.category.name),t.xp6(3),t.Oqu(t.xi3(14,14,s.price,"e\xa3 ")),t.xp6(3),t.Q6J("ngForOf",t.DdM(19,x)),t.xp6(2),t.Oqu(s.ratingsAverage)}}function W(e,h){if(1&e&&(t.TgZ(0,"section",1)(1,"div",2),t.YNc(2,T,23,20,"div",3),t.qZA()()),2&e){const s=t.oxw();t.xp6(2),t.Q6J("ngForOf",s.products)}}let E=(()=>{class e{constructor(s,i,r,n){this._WishlistService=s,this._ToastrService=i,this._Renderer2=r,this._CartService=n,this.products=[],this.wishListData=[]}ngOnInit(){this._WishlistService.getWishList().subscribe({next:s=>{this.products=s.data;const i=s.data.map(r=>r._id);this.wishListData=i},error:s=>{console.log(s)}})}addProductCart(s,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.addToCart(s).subscribe({next:r=>{this._ToastrService.success(r.message),this._Renderer2.removeAttribute(i,"disabled"),this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{this._Renderer2.removeAttribute(i,"disabled"),this._ToastrService.error(r.error.message)}})}addProductWishList(s){this._WishlistService.addToWishList(s).subscribe({next:i=>{this._ToastrService.success(i.message),this.wishListData=i.data,this._WishlistService.wishListNum.next(i.data)},error:i=>{this._ToastrService.success(i.error.message)}})}removeProductWishList(s){this._WishlistService.removeItemWishlist(s).subscribe({next:i=>{this._ToastrService.warning(i.message),this.wishListData=i.data;const r=this.products.filter(n=>this.wishListData.includes(n._id));this.products=r,this._WishlistService.wishListNum.next(i.data)},error:i=>{this._ToastrService.success(i.error.message)}})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(a.M),t.Y36(g._W),t.Y36(t.Qsj),t.Y36(o.N))};static#s=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","overflow-hidden","cursor-pointer","h-100"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fas fa-heart heart",3,"click",4,"ngIf"],[3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"h6"],[1,"h6","text-main"],[1,"d-flex","justify-content-between","align-items-center","small"],[1,"fw-bolder"],[1,"m-0"],["class","fas fa-star rating-color",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"main-btn","w-100","mt-2",3,"click"],["disBtn",""],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fas","fa-heart","heart",3,"click"],[1,"fas","fa-star","rating-color"]],template:function(i,r){1&i&&t.YNc(0,W,3,1,"section",0),2&i&&t.Q6J("ngIf",r.products.length>0)},dependencies:[l.ez,l.sg,l.O5,l.H9,d.rH,p.r]})}return e})()},6286:(m,u,c)=>{c.d(u,{N:()=>t});var l=c(5619),d=c(4769),p=c(9862);let t=(()=>{class a{constructor(o){this._HttpClient=o,this.cartNumber=new l.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.userUrl="https://ahmedkomsan.github.io"}addToCart(o){return this._HttpClient.post(this.baseUrl+"cart",{productId:o})}getCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(o){return this._HttpClient.delete(this.baseUrl+`cart/${o}`)}updateCartItem(o,_){return this._HttpClient.put(this.baseUrl+`cart/${o}`,{count:_})}clearUserCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(o,_){return this.userUrl="https://ahmedkomsan.github.io"==this.userUrl?"https://ahmedkomsan.github.io/fresh-cart/":"https://localhost:4200",this._HttpClient.post(this.baseUrl+`orders/checkout-session/${o}?url=${this.userUrl}`,{shippingAddress:_})}static#t=this.\u0275fac=function(_){return new(_||a)(d.LFG(p.eN))};static#s=this.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);