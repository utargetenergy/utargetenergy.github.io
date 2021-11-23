"use strict";angular.module("helloApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).filter("markdown",function(){var t=new showdown.Converter;return function(e){return t.setOption("tables",!0),t.makeHtml(e||" ")}}).config(["$routeProvider",function(e,t){var i="/hello";e.when("/params/:id",{template:"<h1>Param: {{ paramValue }}</h1>",controller:"ParamsCtrl"}).when("/Product/:productId/image/:imageId/markdown/:markdownId",{templateUrl:"views/product.html",controller:"ProductCtrl",controllerAs:"product"}).when("/Book/:bookId",{templateUrl:"book.html",controller:"BookCtrl",controllerAs:"book"}).when("/",{templateUrl:"views/main.html",controller:"HomeCtrl",controllerAs:"main",resolve:{delay:["$q","$timeout",function(e,t){var i=e.defer();return t(i.resolve,1e3),i.promise}]}}).when("/products",{templateUrl:"views/products.html",controller:"ProductsCtrl",controllerAs:"products",reloadOnSearch:!1}).when("/services",{templateUrl:"views/services.html",controller:"ServicesCtrl",controllerAs:"services"}).when("/hse",{templateUrl:"views/hse.html",controller:"HseCtrl",controllerAs:"hse"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when(i+"/",{templateUrl:"views/main.html",controller:"HomeCtrl",controllerAs:"main"}).when(i+"/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",controllerAs:"todo"}).when(i+"/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",controllerAs:"todo"}).otherwise({redirectTo:"/"})}]).factory("Page",function(){var t="default";return{title:function(){return t},setTitle:function(e){t=e}}}),angular.module("helloApp").controller("MainCtrl",["$scope","$route","$routeParams","$location","Page",function(e,t,i,r,l){this.$route=t,this.$location=r,this.$routeParams=i,e.useContact=!0,e.useServices=!1,console.log(" "+this.$route+"loc:"+this.$location+"route: "+this.$routeParams),e.isActive=function(e){return e===r.path()},e.Page=l}]).controller("HomeCtrl",["$scope","$http","Page",function(t,e,i){var r,l;i.setTitle("Home"),t.titleIntro="A Next Generation MWD/LWD Tool Company",t.titleDesc="Your Target, Our Goal.",e.get("https://uts-canada.com/main.md").then(function(e){t.p1=e.data}),t.ie=(r=window.navigator.userAgent,0<(l=r.indexOf("MSIE"))?parseInt(r.substring(l+5,r.indexOf(".",l))):navigator.userAgent.match(/Trident\/7\./)?11:0)}]),angular.module("helloApp").service("ProductService",["$http",function(r){this.getData=function(t,i,e){r.get("https://uts-canada.com/"+e).then(function(e){t(e)},function(e){i(e)})}}]).controller("ProductCtrl",["$routeParams","$http","ProductService","$scope","$sce",function(e,t,i,r,l){this.name="ProductCtrl",this.params=e,r.start="30%",r.name=e.productId,r.name.match(/Dual/)&&(r.name="Dual");var o=e.markdownId;"DualTelemetry"===e.productId&&(r.start="10%"),r.verbose=!1,r.gobturl="http://utargetenergy.github.io/docs/Near Bit Sub Data Sheet.pdf",i.getData(function(e){e,r.p=e.data},function(e){e,r.p="error"},o),r.clickMe=function(){var e=l.trustAsResourceUrl("http://uts-canada.com/docs/Near Bit Sub Data Sheet.pdf");t.post(e,{},{responseType:"arraybuffer",headers:{"Content-Type":"application/pdf",Accept:"application/pdf"}}).success(function(e){var t=new Blob([e],{type:"application/pdf"}),i=!!window.chrome&&!!window.chrome.webstore,r=!!document.documentMode,l=!r&&!!window.StyleMedia;if(i){var o=window.URL||window.webkitURL,s=angular.element("<a></a>");s.attr("href",o.createObjectURL(t)),s.attr("target","_self"),s.attr("download","invoice.pdf"),s[0].click()}else if(l||r)window.navigator.msSaveOrOpenBlob(t,"invoice.pdf");else{var a=URL.createObjectURL(t);window.open(a)}})}}]).controller("ProductsCtrl",["$route","$routeParams","$location","$scope","$http","Page",function(e,t,i,r,l,o){this.$route=e,this.$location=i,this.$routeParams=t,o.setTitle("Products"),r.productsArray=[{id:1,name:"ROT-Pulser",sname:"ROT-Pulser",desc:"Rotary MWD + Gamma (175°). Less Power Consumption, easy maintenance, works up to 175°C and 20000 psi.",href:"Product/UPulser/image/slide9740_image035.png/markdown/pulser"},{id:2,name:"MWD-EM",sname:"MWD-EM",desc:"EM MWD + Gamma (175°), Good for Air/Mist/foaming Drilling, transmitting rate up to 12bps.",href:"Product/UEM/image/em.png/markdown/em"},{id:3,name:"GOBT",sname:"GOBT",desc:"Near Bit Cont Inc & Focused  Gamma (175°). Good for thin pay zone geosteering, wellpath smoothness and formation identification. Max transmitting distance up to 100 meters.",href:"Product/GOBT/image/slide9740_image037.png/markdown/gobt"},{id:4,name:"DualTelemetry",sname:"Dual",desc:"(Pulse + EM) MWD + Gamma (175°). Two way communication between surface and downhole. ",href:"Product/DualTelemetry/image/slide9740_image041.jpg/markdown/duo"}];r.downloadInvoice=function(){console.log("invoice");l.post("http://uts-canada.com/docs/Near Bit Sub Data Sheet.pdf",requestData,{responseType:"arraybuffer",headers:header}).success(function(e){var t=new Blob([e],{type:"application/pdf"}),i=!!window.chrome&&!!window.chrome.webstore,r=!!document.documentMode,l=!r&&!!window.StyleMedia;if(i){var o=window.URL||window.webkitURL,s=angular.element("<a></a>");s.attr("href",o.createObjectURL(t)),s.attr("target","_self"),s.attr("download","invoice.pdf"),s[0].click()}else if(l||r)window.navigator.msSaveOrOpenBlob(t,"invoice.pdf");else{var a=URL.createObjectURL(t);window.open(a)}})},l.get("https://uts-canada.com/products.md").then(function(e){r.p1=e.data})}]),angular.module("helloApp").controller("ServicesCtrl",["$scope","$http","Page",function(t,e,i){i.setTitle("Services"),t.filter={filter_id:0,filter_name:"all"},t.selected=0,e.get("https://utargetenergy.github.io/services.md").then(function(e){t.p1=e.data}),t.filterList=[{id:0,name:"all",text:"Everything"},{id:1,name:"gobt",text:"GOBT"},{id:2,name:"pulser",text:"Pulser"},{id:3,name:"engineering",text:"Engineering"},{id:4,name:"decoder",text:"Decoder"}],t.itemList=[{id:"0",title:"GOBT",p:"Accurate Inc. Measurement",img:"slide9765_image082.jpg",filter:"gobt"},{id:"1",title:"GOBT",p:"Accurate Azimuth Measurement",img:"slide9765_image085.jpg",filter:"gobt"},{id:"2",title:"Pulser",p:"Special Rotor Design",img:"slide9765_image086.jpg",filter:"pulser"},{id:"3",title:"Engineering",p:"Axial and Lateral Vibration, Stick/Slip and RPM",img:"slide9765_image087.jpg",filter:"engineering"},{id:"4",title:"Engineering",p:"Anual Pressure and Bore Pressure",img:"slide9765_image088.jpg",filter:"engineering"},{id:"5",title:"Decoding",p:"Advanced Noise Algorithm",img:"DSC_0335.jpg",filter:"decoder"}],t.setFilter=function(e){t.filter.filter_id=e.id,t.filter.filter_name=e.name,console.log("current filter: "+t.filter.filter_name)},t.checkFilter=function(e){return e.name==t.filter.filter_name},t.isFilter=function(e){return console.log("item filt: "+e.filter+"current filter: "+t.filter.filter_name),e.filter==t.filter.filter_name},t.getClass=function(e){return console.log("itemClass: "+e.filter),e.filter},t.setSelected=function(e){t.selected=e,console.log(t.selected)},t.setStyle=function(e){return 1==t.isFilter(e)||"all"==t.filter.filter_name?(console.log("inline item ",e.p),{display:"inline-block"}):{display:"none"}},t.doParseToJson=function(e){return JSON.parse(e)}}]),angular.module("helloApp").controller("HseCtrl",["$scope","$http","Page",function(t,e,i){i.setTitle("HSE"),e.get("https://utenergy.ca/hse.md").then(function(e){t.p1=e.data})}]),angular.module("helloApp").controller("ContactCtrl",["$scope","$http","Page","$route",function(t,e,i,r){i.setTitle("Contact"),t.reload=function(){r.reload()},e.get("https://uts-canada.com/contact.md").then(function(e){t.p1=e.data,console.log(t.p1)})}]).controller("ParamsCtrl",["$scope","Page","$routeParams",function(e,t,i){t.setTitle("Params"),e.paramValue=i.id}]),angular.module("helloApp").controller("TodoCtrl",function(){this.todoList=["list item 1","list item 2","list item 3"]}),angular.module("helloApp").run(["$templateCache",function(e){e.put("views/about.html","<p>This is the about view.</p> "),e.put("views/contact.html",'<div id="global-header" class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <div class="row"> <div class="col-md-12"> <h1>Contact Us</h1> </div> </div> </div> </div> </div> <div class="container"> <div class="row"> <div class="col" ng-controller="ContactCtrl"> <section id="fog"> <div class="block"> <div ng-bind-html="p1 | markdown"></div> </div> </section> <div class="mapouter"> <div class="gmap_canvas"> <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=50.9589412%2C-113.9683045&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> </div> </div>a </div> <div class="col" ng-controller="ContactCtrl"> <div class="block"> <h2>Enquiry </h2> <form method="POST" action="https://formspree.io/bhu@uts-canada.com"> <div class="form-group"> <input type="text" name="name" class="form-control" placeholder="Your Name" required> </div> <div class="form-group"> <input type="email" name="email" class="form-control" placeholder="Your email"> </div> <div class="form-group"> <textarea name="message" class="form-control" rows="6" placeholder="Your Message"></textarea> </div> <div class="form-group"> <button type="submit" class="btn btn-primary">Send</button> </div> </form> </div> </div> </div> </div> '),e.put("views/hse.html",'<div id="global-header" class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <div class="row"> <div class="col-md-12"> <h1>Health, Safety and Environment (HSE)</h1> </div> </div> </div> </div> </div> <div class="container"> <div class="row"> </div> <div class="row"> <div class="col-md-5"> <div class="hse-rig"> </div> \x3c!--\r\n             <div style="width:270px;height:auto;margin:auto;background-color:#f8f9fa">\r\n                <img src="./images/rig.deb9297d.png" style="margin-right:0px;margin-left:10px;background-color:#f8f9fa"></img>\r\n             </div>\r\n--\x3e \x3c!-- <i class="fa fa-tree" style="font-size:144px;color:#0c2f52"></i> --\x3e </div> <div class="col-md-7"> \x3c!--\r\n             <div style="width:590px;height:auto;margin:auto;background-color:#0c2f52;border:20px solid #0c2f52;">\r\n                <img src="https://utenergy.ca/images/hse.0a6062c2.jpg" class="mybordercenter" ></img>\r\n             </div>\r\n              <div class="row">\r\n                   <br>            \r\n                   <br>            \r\n                   <br>            \r\n              </div>\r\n--\x3e <div ng-bind-html="p1 | markdown"></div> <div class="hse-cert"> </div> </div> </div> \x3c!--\r\n<svg width="450" height="200">\r\n  <defs>\r\n    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">\r\n      <stop offset="0%"\r\n      style="stop-color:rgb(255,255,0);stop-opacity:1" />\r\n      <stop offset="100%"\r\n      style="stop-color:rgb(255,0,0);stop-opacity:1" />\r\n    </linearGradient>\r\n  </defs>\r\n  <g  fill="red" stroke="green" stroke-width="5">\r\n    <polygon points="100,10 40,198 190,78 10,78 160,198"\r\n      style="fill:#0f2c52;stroke:#0f2c52;stroke-width:5;fill-rule:evenodd;" />\r\n    <ellipse cx="310" cy="100" rx="85" ry="55" fill="url(#grad1)" />\r\n    <text fill="#333333" font-size="45" font-family="Verdana"\r\n        x="260" y="110">HSE</text>\r\n  </g>\r\nSorry, your browser does not support inline SVG.\r\n</svg>\r\n   <defs>\r\n    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">\r\n      <stop offset="0%"\r\n      style="stop-color:rgb(255,255,0);stop-opacity:1" />\r\n      <stop offset="100%"\r\n      style="stop-color:rgb(255,0,0);stop-opacity:1" />\r\n    </linearGradient>\r\n  </defs>\r\n\r\n  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />\r\n  <text fill="#ffffff" font-size="45" font-family="Verdana"\r\n  x="50" y="86">HSE</text>\r\n             <svg viewBox="-10 -10 120 120" preserveAspectRatio="xMidYMid meet"> \r\n              <defs>\r\n                <clipPath id="myClip">\r\n                   <circle cx="40" cy="35" r="65" />\r\n                </clipPath>\r\n              </defs>\r\n                <text cx="10" cy="10">\r\n                  <textPath href="#heart" fill="#ca1f25">\r\n                     HSE\r\n                  </textPath>\r\n               </text>\r\n              <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />\r\n            \r\n              <use clip-path="url(#myClip)" xlink:href="#heart" style="stroke:no; fill:#ca1f25;" />\r\n          \r\n\r\n            </svg>\r\n\r\n\r\n<svg width="300" height="200">\r\n  <polygon points="100,10 40,198 190,78 10,78 160,198"\r\n  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />\r\nSorry, your browser does not support inline SVG.\r\n</svg>\r\n<svg height="130" width="500">\r\n  <defs>\r\n    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">\r\n      <stop offset="0%"\r\n      style="stop-color:rgb(255,255,0);stop-opacity:1" />\r\n      <stop offset="100%"\r\n      style="stop-color:rgb(255,0,0);stop-opacity:1" />\r\n    </linearGradient>\r\n  </defs>\r\n  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />\r\n  <text fill="#ffffff" font-size="45" font-family="Verdana"\r\n  x="50" y="86">HSE</text>\r\nSorry, your browser does not support inline SVG.\r\n</svg>\r\n--\x3e </div> '),e.put("views/main.html",'<div class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <h1 class="animated fadeInUp">{{titleIntro}}</h1> <p class="animated fadeInUp">{{titleDesc}}</p> </div> </div> </div> <section id="intro"> <div class="container"> <div class="row"> <div class="col-lg-7 col-md-12"> <div class="block"> <div ng-bind-html="p1 | markdown"> </div> </div> </div> <div class="col-lg-5 col-md-12"> <img src="https://uts-canada.com/images/ute.png" class="myborder"> </div> </div> </div> </section> <section id="my-feature"> <div class="container"> <div class="row"> <div class="col-md-6 offset-md-6"> <div class="block"> <h2>Reliable MWD & NearBit tools</h2> <ul class="icon"> <li class="right">ROT-Pulser. Less Power Consumption, works up to 175 &deg;C and 20000 psi.</li> <li class="right">MWD-EM. QPSK Decoding, transmitting rate up to 12bps.</li> <li class="right">NearBit. EM short hop, max transmitting distance up to 100 meters. </li> <li class="right">Dual Telemetry. Use EM-MWD at upper section, when EM signal is too weak, switch to Pulse MWD by EM downlink to improve drilling efficiency. </li> </ul> <br> <a href="#!/products" class="btn btn-view-works">View Products</a> </div> </div> </div> </div> </section> <section id="my-call-to-action" ng-show="useContact"> <div class="container"> <div class="row"> <div class="col-md-12"> <div class="block"> <h2>We believe Great Ideas</h2> <p>Read more about what we do and our philosophy of design and manufacture. Judge for yourself the work and results we\'ve achieved for the clients.</p> <a class="btn btn-default btn-call-to-action" href="#!/contact/">Drop Us a Note </a> </div> </div> </div> </div> </section> <section id="testimonial"> <div class="container"> <div class="row"> <div class="col-md-12"> <div style="width=100%"> <h2 style="color: #111;font-family:\'Open Sans\',sans-serif; font-size: 30px; font-weight: 300; line-height: 32px; margin: 0 0 72px; text-align: center;">Number Facts About Us</h2> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="block"> <ul class="counter-box clearfix"> <li> <div class="block"> <i class="ion-ios-baseball-outline"></i> <h4 class="counter">2013</h4> <span>Year Found</span> </div> </li> <ul class="counter-box clearfix"> <li> <div class="block"> <i class="ion-ios-compose-outline"></i> <h4 class="counter">230</h4> <span>Tools Sets Built</span> </div> </li> <ul class="counter-box clearfix"> <li> <div class="block"> <i class="ion-ios-timer-outline"></i> <h4 class="counter">8640</h4> <span>Downhole Hours</span> </div> </li> </ul> </ul> </ul> </div> </div> </div> </div></section> <div class="container" ng-hide="ie == 0"> <div class="block"> <p>Browser: IE {{ie}}</p> </div> </div> '),e.put("views/product.html",'<div class="container"> <div class="row"> <div class="col-lg-12"> <div id="product" style="padding-top:100px;"> <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#0f2c52"></rect><text x="30%" y="50%" fill="white" dy=".3em">{{name}}</text></svg> <img width="350" height="100%" ng-src="https://uts-canada.com/images//{{product.params.imageId}}"> <div class="block" ng-bind-html="p | markdown"></div> </div> </div> </div> <div class="row" ng-controller="ProductCtrl"> <div class="col-lg-12"> <p> <a class="btn btn-secondary" ng-href="http://uts-canada.com/docs/{{product.params.productId}}.pdf">Download</a> </p> <p><a class="btn btn-secondary" ng-href="#!/products" role="button" style="background:#0f2c52">Go Back</a></p> </div> </div> <div class="block diag" ng-show="verbose"> controller: {{product.sname}}<br> Product Id: {{product.params.productId}}<br> Image Id: {{product.params.imageId}}<br> Markdown Id: {{product.params.markdownId}}<br> <br> </div> </div> '),e.put("views/products.html",'<div id="global-header" class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <div class="row"> <div class="col-md-12"> <h1>MWD and Near Bit Products</h1> </div> </div> </div> </div> </div> \x3c!--<div id="products-kits" class="carousel slide" data-ride="carousel">\r\n     <ol class="carousel-indicators">\r\n            <li data-target="#products-kits" ng-repeat="img in productsArray" ng-class="{active: (img.id === 1)}" data-slide-to="{{img.id - 1}}"></li>\r\n          </ol>\r\n          <div class="carousel-inner">\r\n             <div class ="carousel-item" ng-repeat="img in productsArray" ng-class="{active : (img.id === 1)}"> \r\n               <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#0f2c52"></rect></svg>\r\n                <div class="container">\r\n                    <div class="carousel-caption text-left">\r\n                        <h1> {{img.name}} </h1>\r\n                        <p> {{img.desc}} </p>\r\n                        <a class="btn btn-lg btn-primary" ng-href="#!{{img.href}}.md" role="button">Learn More</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <a class="carousel-control-prev" href="#products-kits" role="button" data-slide="prev">\r\n            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\r\n            <span class="sr-only">Previous</span>\r\n          </a>\r\n          <a class="carousel-control-next" href="#products-kits" role="button" data-slide="next">\r\n            <span class="carousel-control-next-icon" aria-hidden="true"></span>\r\n            <span class="sr-only">Next</span>\r\n     </a>\r\n</div>\r\n--\x3e <div class="container"> <br> <div class="row"> <div class="col-md-12 col-lg-6"> <div class="block"> <div class="row"> <div class="col-md-4" style="border:1px solid white;"> <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#0f2c52"></rect><text x="25%" y="50%" fill="white" dy=".3em">ROT-Pulser</text></svg> </div> <div class="col-md-8" style="border:1px solid white;"> <img width="350" height="auto" src="https://uts-canada.com/images/slide9740_image035.png"> </div> </div> </div> <div id="product"> \x3c!-- <div class="block"> --\x3e <ul class="icon"> <li class="right">Less Power Consumption, 200-300 circulating hours per run</li> <li class="right">Easy maintenance</li> <li class="right">Works up to 175 &deg;C and 20000 psi</li> <li class="right">Focused Gamma for better Geosteering </li> <li class="right">Advanced DSP algorithms, high decoding rate </li> <li class="right">Special rotor design, very good signal at low pump rate and deep depth </li> <li class="right">Reliable and stable</li> </ul> <p><a class="btn btn-secondary" ng-href="#!Product/ROT-Pulser/image/slide9740_image035.png/markdown/pulser.md/" role="button" style="background:#0f2c52">View details &raquo;</a></p> </div> \x3c!-- </div>  --\x3e </div> <div class="col-md-12 col-lg-6"> <div class="block"> <div class="row"> <div class="col-md-4" style="border:1px solid white;"> <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#0f2c52"></rect><text x="25%" y="50%" fill="white" dy=".3em">MWD-EM</text></svg> </div> <div class="col-md-8" style="border:1px solid white;"> <img width="350" height="auto" src="https://uts-canada.com/images/em.png"> </div> </div> </div> <div id="product"> <ul class="icon"> <li class="right">Good for Air/Mist/foaming Drilling, no limitation for drilling mud </li> <li class="right">QPSK encoding, transmitting Rate up to 12bps </li> <li class="right">EM downlink, a real two way communication </li> </ul> <p><a class="btn btn-secondary" ng-href="#!Product/MWD-EM/image/em.png/markdown/em.md/" role="button" style="background:#0f2c52">View details &raquo;</a></p> </div> </div> </div> <div class="row"> <div class="col-md-12 col-lg-6"> <div class="block"> <div class="row"> <div class="col-md-4" style="border:1px solid white;"> <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#0f2c52"></rect><text x="30%" y="50%" fill="white" dy=".3em">Near Bit</text></svg> </div> <div class="col-md-8" style="border:1px solid white;"> <img width="350" height="auto" src="https://uts-canada.com/images/slide9740_image037.png"> </div> </div> </div> <div id="product"> <ul class="icon"> <li class="right">Sub length 1.1m long. Distance from sensor to bit 0.7m. Good for thin pay zone geosteering, wellpath smoothness and formation identification. </li> <li class="right">EM Short Hop, max transmitting distance up to 100 meter </li> </ul> <p><a class="btn btn-secondary" ng-href="#!Product/NearBit/image/slide9740_image037.png/markdown/gobt.md/" role="button" style="background:#0f2c52">View details &raquo;</a></p> </div> </div> <div class="col-md-12 col-lg-6"> <div class="block"> <div class="row"> <div class="col-md-4" style="border:1px solid white;"> <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#0f2c52"></rect><text x="15%" y="50%" fill="white" dy=".3em">Dual Telemetry</text></svg> </div> <div class="col-md-8" style="border:1px solid white;"> <img width="350" height="140" src="https://uts-canada.com/images/slide9740_image042.jpg" style="border:1px solid white;"> </div> </div> </div> <div id="product"> <ul class="icon"> <li class="right">Use EMMWD at upper section, when EM signal is too weak, switch to Pulse MWD by EM downlink to improve drilling efficiency </li> <li class="right">Two way communication between surface and downhole </li> <li class="right"> Focused Gamma</li> <li class="right"> Reliable and Stable</li> </ul> <p><a class="btn btn-secondary" ng-href="#!Product/DualTelemetry/image/slide9740_image041.jpg/markdown/duo.md/" role="button" style="background:#0f2c52">View details &raquo;</a></p> </div> </div> </div> </div> '),e.put("views/services.html",'<div id="global-header" class="jumbotron jumbotron-fluid"> <div class="container"> <div class="block"> <div class="row"> <div class="col-md-12"> <h1>Directional and Formation </h1> </div> </div> </div> </div> </div> <section id="portfolio-work" ng-show="useMenu"> <div class="container"> <div class="row"> <div class="col-md-12"> <div class="block"> <div class="portfolio-menu"> <ul> <input type="hidden" name="filter_id" ng-model="filter.filter_id"> <input type="hidden" name="filter_name" ng-model="filter.filter_name"> <li ng-repeat="item in filterList" ng-click="setFilter(item)" class="filter" ng-class="{active: checkFilter(item)}" data-filter="{{item.name}}">{{item.text}}</li> </ul> </div> <div class="portfolio-contant"> <ul id="portfolio-contant-active"> <li ng-repeat="item in itemList" class="mix" ng-class="getClass(item)" ng-style="setStyle(item)"> <a href="#"> <img ng-src="http://utargetenergy.github.io/images/{{item.img}}" alt=""> <div class="overly"> <div class="position-center"> <h2>{{item.title}}</h2> <p>{{item.p}}</p> </div> </div> </a> </li> </ul> </div> </div> </div> </div> </div> </section> <div class="container"> <div id="product"> <div class="row"> <div class="col-md-9"> <div class="block" ng-bind-html="p1 | markdown"></div> </div> <div class="col-md-3"> <div class="rig"></div> </div> </div> </div> </div> '),e.put("views/todo.html","<p>This is the todo view.</p> ")}]);