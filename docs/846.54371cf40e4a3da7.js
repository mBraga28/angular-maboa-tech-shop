"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[846],{7846:(O,s,p)=>{p.r(s),p.d(s,{ProductsModule:()=>Z});var u=p(4755),d=p(7568),t=p(9523),a=p(5482);function _(o,r){if(1&o&&(t.TgZ(0,"a",5),t._UZ(1,"img",6),t.TgZ(2,"div",7)(3,"h3",8),t._uU(4),t.qZA()(),t.TgZ(5,"div",9)(6,"div",10)(7,"div",11)(8,"span",12),t._uU(9),t.ALo(10,"currency"),t.qZA()(),t.TgZ(11,"span",13),t._uU(12),t.qZA()(),t.TgZ(13,"p",14)(14,"span",15),t._uU(15),t.ALo(16,"currency"),t.qZA()()()()),2&o){const n=t.oxw().$implicit;t.MGl("routerLink","/products/",n.id,""),t.xp6(1),t.Q6J("src",n.image,t.LSH),t.xp6(3),t.Oqu(n.description),t.xp6(5),t.Oqu(t.lcZ(10,6,n.price)),t.xp6(3),t.hij(" ",n.offers[0].discount,"%"),t.xp6(3),t.Oqu(t.lcZ(16,8,n.price-n.price*(n.offers[0].discount/100)))}}function g(o,r){if(1&o&&(t.TgZ(0,"a",5),t._UZ(1,"img",6),t.TgZ(2,"h2",16),t._uU(3),t.qZA(),t.TgZ(4,"p",17),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"p",18),t._uU(8),t.qZA()()),2&o){const n=t.oxw().$implicit;t.MGl("routerLink","/products/",n.id,""),t.xp6(1),t.Q6J("src",n.image,t.LSH),t.xp6(2),t.hij(" ",n.description," "),t.xp6(2),t.hij(" ",t.lcZ(6,5,n.price)," "),t.xp6(3),t.hij(" ",n.priceDescription," ")}}function f(o,r){if(1&o&&(t.TgZ(0,"div",2),t.YNc(1,_,17,10,"a",3),t.YNc(2,g,9,7,"ng-template",null,4,t.W1O),t.qZA()),2&o){const n=r.$implicit,i=t.MAs(3);let e;t.xp6(1),t.Q6J("ngIf",null!==(e=null==n||null==n.offers||null==n.offers[0]?null:n.offers[0].discount)&&void 0!==e&&e)("ngIfElse",i)}}let m=(()=>{class o{constructor(n,i){this.productsService=n,this.route=i}ngOnInit(){const n=this.productsService.getAll();this.route.queryParamMap.subscribe(i=>{const e=i.get("description")?.toLowerCase();this.products=e?n.filter(c=>c.description.toLowerCase().includes(e)):n})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a.s),t.Y36(d.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],["class","product-list__link",3,"routerLink",4,"ngIf","ngIfElse"],["offerProduct",""],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"offers-name__container"],[1,"offers-item__name"],[1,"offers-price__container"],[1,"price-card"],[1,"offers-item__price"],[1,"normal-price"],[1,"offers-item__discount"],[1,"new-price"],[1,"new-price__for"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0),t.YNc(1,f,4,2,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.products))},dependencies:[u.sg,u.O5,d.rH,u.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;max-width:270px;background-color:#fff;box-shadow:#63636333 0 2px 8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--acadia);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;max-width:250px;display:block;border-radius:4px}.offers-item__name[_ngcontent-%COMP%]{font-size:18px;color:var(--brown-tumbleweed);margin-bottom:0;max-width:219px;overflow:hidden;white-space:nowwrap;text-overflow:ellipsis}.offers-price__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:left}.offers-item__discount[_ngcontent-%COMP%]{height:16px;padding:2px;border-radius:1rem;align-items:center;justify-content:right;color:var(--metalic-bronze);background-color:var(--peridot);font-size:12px;font-weight:700}.price-card[_ngcontent-%COMP%]{margin-bottom:10px;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-around}.offers-item__price[_ngcontent-%COMP%]{color:red;font-size:10px;font-weight:700;margin-right:10px;justify-content:space-evenly}.offers-item__price[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:12px;color:red;text-decoration:line-through}.new-price[_ngcontent-%COMP%]{color:var(--metalic-bronze);font-size:20px;font-weight:700}.new-price__for[_ngcontent-%COMP%]{color:var(--peridot);font-size:32px;font-weight:700}.product-item__name[_ngcontent-%COMP%]{font-size:18px;color:var(--brown-tumbleweed);margin-bottom:0;font-weight:400}.product-item__price[_ngcontent-%COMP%]{color:var(--peridot);font-size:32px;font-weight:700}.product-item__price-description[_ngcontent-%COMP%]{color:var(--metalic-bronze);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--brown-tumbleweed);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}@media (max-width: 550px){.product-list[_ngcontent-%COMP%]{flex-flow:row wrap;gap:10px}.offers-item__name[_ngcontent-%COMP%], .product-item__name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:109.6px}}@media (max-width: 768px){.product-list[_ngcontent-%COMP%]{flex-flow:row wrap;padding:40px 15px;width:90%}.product-list__card[_ngcontent-%COMP%]{flex-basis:calc(50% - 10px);height:269.2px;width:165px}img[_ngcontent-%COMP%]{width:155px;height:155px}.offers-item__name[_ngcontent-%COMP%]{font-size:.9rem}.offers-item__price[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:.6rem}.offers-item__discount[_ngcontent-%COMP%]{font-size:.6rem}.new-price__for[_ngcontent-%COMP%]{font-size:1rem}.product-item__name[_ngcontent-%COMP%]{font-size:.9rem}.product-item__price[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:0}.product-item__price-description[_ngcontent-%COMP%]{font-size:10px}}@media (min-width: 768px){.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:250px}}"]}),o})();var x=p(1645),h=p(4128),l=p(5030);function C(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"section",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"h2",6),t._uU(5),t.qZA(),t.TgZ(6,"h3",7),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",8)(10,"p",9),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"span",10),t._uU(14),t.qZA()(),t.TgZ(15,"p"),t._uU(16,"Stock available:"),t.qZA(),t.TgZ(17,"label"),t._uU(18," Quantity: "),t.TgZ(19,"button",11),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.quantity>1?e.quantity=e.quantity-1:null)}),t._UZ(20,"i",12),t.qZA(),t.TgZ(21,"input",13),t.NdJ("ngModelChange",function(e){t.CHM(n);const c=t.oxw();return t.KtG(c.quantity=e)}),t.qZA(),t.TgZ(22,"button",14),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.quantity=e.quantity+1)}),t._UZ(23,"i",15),t.qZA(),t._uU(24," unit(s) "),t.qZA(),t.TgZ(25,"p",16),t._uU(26),t.qZA(),t.TgZ(27,"button",17),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.addToCart())}),t._uU(28,"Add to cart"),t.qZA()()()}if(2&o){const n=t.oxw();let i;t.xp6(2),t.Q6J("src",null==n.product?null:n.product.image,t.LSH),t.xp6(3),t.Oqu(null==n.product?null:n.product.description),t.xp6(2),t.Oqu(t.lcZ(8,7,null==n.product?null:n.product.price)),t.xp6(4),t.Oqu(t.lcZ(12,9,n.product.price*(1-(null!==(i=null==n.product||null==n.product.offers||null==n.product.offers[0]?null:n.product.offers[0].discount)&&void 0!==i?i:0)/100))),t.xp6(3),t.hij("",null==n.product||null==n.product.offers||null==n.product.offers[0]?null:n.product.offers[0].discount,"% off"),t.xp6(7),t.Q6J("ngModel",n.quantity),t.xp6(5),t.hij(" ",null==n.product?null:n.product.inventoryQuantity," unit(s) in Stock ")}}function P(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"section",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"h2",6),t._uU(5),t.qZA(),t.TgZ(6,"h3",9),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Stock available:"),t.qZA(),t.TgZ(11,"label"),t._uU(12," Quantity: "),t.TgZ(13,"button",11),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.quantity>1?e.quantity=e.quantity-1:null)}),t._UZ(14,"i",12),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(e){t.CHM(n);const c=t.oxw();return t.KtG(c.quantity=e)}),t.qZA(),t.TgZ(16,"button",14),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.quantity=e.quantity+1)}),t._UZ(17,"i",15),t.qZA(),t._uU(18," unit(s) "),t.qZA(),t.TgZ(19,"p",16),t._uU(20),t.qZA(),t.TgZ(21,"button",17),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.addToCart())}),t._uU(22,"Add ao cart"),t.qZA()()()}if(2&o){const n=t.oxw();t.xp6(2),t.Q6J("src",null==n.product?null:n.product.image,t.LSH),t.xp6(3),t.Oqu(null==n.product?null:n.product.description),t.xp6(2),t.Oqu(t.lcZ(8,5,null==n.product?null:n.product.price)),t.xp6(8),t.Q6J("ngModel",n.quantity),t.xp6(5),t.hij(" ",null==n.product?null:n.product.inventoryQuantity," unit(s) in Stock ")}}const M=[{path:"",component:m},{path:":id",component:(()=>{class o{constructor(n,i,e,c){this.productsService=n,this.route=i,this.notificationService=e,this.cartService=c,this.quantity=1}ngOnInit(){const i=Number(this.route.snapshot.paramMap.get("id"));this.product=this.productsService.getOne(i)}addToCart(){this.notificationService.notify("The product has been added to the cart!");const n={...this.product,quantity:this.quantity};this.cartService.addToCart(n)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a.s),t.Y36(d.gz),t.Y36(x.g),t.Y36(h.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products-details"]],decls:3,vars:2,consts:[["class","product__container",4,"ngIf","ngIfElse"],["offerPrice",""],[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__old-price"],[1,"product__price-container"],[1,"product__price"],[1,"product__offers-discount"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-minus"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"add-button",3,"click"],[1,"fa-solid","fa-plus"],[1,"product__avaiability"],[1,"add-to-cart",3,"click"]],template:function(n,i){if(1&n&&(t.YNc(0,C,29,11,"section",0),t.YNc(1,P,23,7,"ng-template",null,1,t.W1O)),2&n){const e=t.MAs(2);let c;t.Q6J("ngIf",null!==(c=null==i.product||null==i.product.offers||null==i.product.offers[0]?null:i.product.offers[0].discount)&&void 0!==c&&c)("ngIfElse",e)}},dependencies:[u.O5,l.Fj,l.wV,l.JJ,l.qQ,l.On,u.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price-container[_ngcontent-%COMP%]{display:flex;flex-direction:grid row}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product__old-price[_ngcontent-%COMP%]{font-size:14px;font-weight:400;margin:20px 0 0;color:var(--venetian-red);text-decoration:line-through}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-grey);border-radius:8px;padding:15px;flex:1}.product__offers-discount[_ngcontent-%COMP%]{color:var(--dark-mint-green);font-weight:100;display:flex;align-items:center;margin-left:20px}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.add-to-cart[_ngcontent-%COMP%]{background-color:var(--acadia);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}.add-to-cart[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}.add-button[_ngcontent-%COMP%], .remove-button[_ngcontent-%COMP%]{color:var(--acadia);background-color:transparent;border:none;transition:.2s all}@media (max-width: 700px){.product__container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.product-image__container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:250px;height:250px}}"]}),o})()}];let w=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(M),d.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,w,l.u5]}),o})()}}]);