(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{198:function(e,t,n){e.exports=n(423)},203:function(e,t,n){},204:function(e,t,n){},216:function(e,t,n){},232:function(e,t){},234:function(e,t){},264:function(e,t){},265:function(e,t){},330:function(e,t){},423:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(83),c=n.n(i),o=(n(203),n(13)),l=n(14),u=n(16),s=n(15),m=n(17),f=n(40),b=n(46),d=n(1),h=(n(204),n(2)),p="@media (max-width: 1000px)",g="@media (max-width: 700px)",v="@media (min-width: 701px)",j="#008080",O="black",E="white",x={heading:"Quicksand",body:"Nunito"},y={heading:"Alegreya",body:"Alegreya"},w={heading:"Avenir Next",body:"Avenir Next"};function k(){var e=Object(d.a)(["\n              font-family: ",";\n              font-size: 72px;\n              text-align: center;\n              margin: 80px;\n              "," {\n                font-size: 60px;\n                margin: 80px 40px;\n              }\n            "]);return k=function(){return e},e}var N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",(function(e){var t=Array.from(document.querySelectorAll(".parallax-layer")),n=window.pageYOffset;t.forEach((function(e){var t=e.getAttribute("data-speed"),a=-n*t/100;e.style.transform="translateY(".concat(a,"px)")}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Parallax",ref:function(t){return e.container=t}},r.a.createElement("div",{className:"parallax-layer",id:"layer-0","data-speed":"40"},r.a.createElement("div",{className:Object(h.a)(k(),y.heading,g)},"The Story of Max Wu")),r.a.createElement("div",{className:"parallax-layer",id:"layer-1","data-speed":"100"}))}}]),t}(r.a.Component),S=n(24),C=n(3),I=n(69);function D(){var e=Object(d.a)(["\n          position: -webkit-sticky;\n          width: 100%;\n          position: sticky;\n          top: 0;\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          font-family: ",";\n          pointer-events: auto;\n          z-index: 100;\n          overflow: scroll;\n          ","\n        "]);return D=function(){return e},e}function R(){var e=Object(d.a)(["\n  width: 10px;\n"]);return R=function(){return e},e}function F(){var e=Object(d.a)(["\n        display: flex;\n        text-decoration: none;\n        align-items: center;\n        padding: 20px 25px;\n        text-decoration: none;\n        ","\n        &:hover {\n          ",";\n        }\n      "]);return F=function(){return e},e}I.scroller.scrollTo("bottomNavbar",{smooth:"easeInQuart"});var A=function(e){var t=e.itemStyle,n=e.itemHoverStyle,r=e.to;return a.createElement(f.b,{to:r,className:Object(h.a)(F(),t&&Object(S.a)({},t),n&&Object(S.a)({},n))},e.children)},M=function(e){var t=e.itemStyle,n=e.itemHoverStyle,r=e.to;return e.scroll?a.createElement(I.Link,{activeClass:"active",to:"bottomNavbar",spy:!0,smooth:!0,duration:2e3,ignoreCancelEvents:!0},a.createElement(A,{itemStyle:t,itemHoverStyle:n,to:r,children:e.children})):a.createElement(A,{itemStyle:t,itemHoverStyle:n,to:r,children:e.children})},z=Object(C.a)("div")(R()),V=function(e){var t=Object(b.f)().url,n=e.itemStyle,r=e.itemHoverStyle,i=e.scroll,c=e.style;return a.createElement(a.Fragment,null,a.createElement("nav",{className:Object(h.a)(D(),x.heading,c&&Object(S.a)({},c))},a.createElement(z,null),a.createElement(M,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"/",scroll:i},"go back"),a.createElement(M,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"".concat(t),scroll:i},"home"),a.createElement(M,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"".concat(t,"/art"),scroll:i},"art"),a.createElement(M,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"".concat(t,"/photography"),scroll:i},"photography"),a.createElement(M,{itemStyle:Object(S.a)({},n),itemHoverStyle:Object(S.a)({},r),to:"".concat(t,"/friends"),scroll:i},"friends' stories")))},H=n(124),L=n.n(H),W=(n(216),n(45)),P=n.n(W);function T(){var e=Object(d.a)(["\n  "," {\n    display: none;\n  }\n"]);return T=function(){return e},e}function _(){var e=Object(d.a)(["\n  "," {\n    display: none;\n  }\n"]);return _=function(){return e},e}var B=Object(C.a)("div")(_(),g),G=Object(C.a)("div")(T(),v),Y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sheetsData:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.sheetId;P.a.init({key:t,callback:function(t){e.setState({sheetsData:t})},simpleSheet:!0})}},{key:"getAutoResponsiveProps",value:function(){return{itemMargin:10,containerWidth:10,itemClassName:"item",gridWidth:100,transitionDuration:".5"}}},{key:"render",value:function(){var e=this,t=this.props.columns;return r.a.createElement("div",null,r.a.createElement(G,null,r.a.createElement(L.a,{breakpointCols:1,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},this.state.sheetsData&&this.state.sheetsData.map((function(t){return r.a.createElement(e.props.cardComponent,{value:t})})))),r.a.createElement(B,null,r.a.createElement(L.a,{breakpointCols:t,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},this.state.sheetsData&&this.state.sheetsData.map((function(t){return r.a.createElement(e.props.cardComponent,{value:t})})))))}}]),t}(r.a.Component),U=n(30);function Q(){var e=Object(d.a)(["\n            /* margin: 5px; */\n            padding: 15px;\n            background-color: ",";\n            font-style: ",";\n          "]);return Q=function(){return e},e}function K(){var e=Object(d.a)(["\n          height: auto;\n          width: 100%;\n          box-shadow: 5px 5px 5px black;\n        "]);return K=function(){return e},e}var Z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:Object(h.a)(K())},a.createElement("div",{className:Object(h.a)(Q(),E,y.body)},this.props.children))}}]),t}(a.Component);function J(){var e=Object(d.a)(["\n              font-size: 20px;\n              margin: 10px;\n              color: ",";\n              text-align: center;\n            "]);return J=function(){return e},e}function X(){var e=Object(d.a)(["\n            height: 100%;\n            width: 100%;\n          "]);return X=function(){return e},e}function q(){var e=Object(d.a)(["\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return q=function(){return e},e}function $(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  height: auto;\n  position: relative;\n"]);return $=function(){return e},e}function ee(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  height: auto;\n"]);return ee=function(){return e},e}var te=Object(C.a)("img")(ee()),ne=Object(C.a)("div")($()),ae=(Object(C.a)("div")(q(),j),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showModal:!1},n.setModalVisibility=n.setModalVisibility.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setModalVisibility",value:function(e){this.setState({showModal:e})}},{key:"render",value:function(){var e=this.props.value,t=e.caption,n=e.imageURL,r=e.imageAlt;return a.createElement(Z,null,a.createElement("div",{className:Object(h.a)(X())},a.createElement(ne,null,a.createElement(te,{src:n,alt:r})),a.createElement("div",{className:Object(h.a)(J(),O)},t)))}}]),t}(a.Component));function re(){var e=Object(d.a)(["\n        width: 90%;\n        margin: 0 auto;\n      "]);return re=function(){return e},e}var ie=function(){return r.a.createElement("div",{className:Object(h.a)(re())},r.a.createElement(Y,{sheetId:"1EwIwb7Vf8hwD80Bj4fW9OlBi-TjNZ7XXRVHx_Ow7lQo",columns:3,cardComponent:ae}))};function ce(){var e=Object(d.a)(["\n        text-align: center;\n        line-height: 400px;\n      "]);return ce=function(){return e},e}var oe=function(){return r.a.createElement("div",{className:Object(h.a)(ce())},"coming soon")};function le(){var e=Object(d.a)(["\n            height: 100%;\n            width: 100%;\n          "]);return le=function(){return e},e}function ue(){var e=Object(d.a)(["\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(d.a)(["\n  width: 100%;\n  height: auto;\n  position: relative;\n"]);return se=function(){return e},e}function me(){var e=Object(d.a)(["\n  width: 100%;\n  height: auto;\n"]);return me=function(){return e},e}var fe=Object(C.a)("img")(me()),be=Object(C.a)("div")(se()),de=(Object(C.a)("div")(ue(),j),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showModal:!1},n.setModalVisibility=n.setModalVisibility.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setModalVisibility",value:function(e){this.setState({showModal:e})}},{key:"render",value:function(){var e=this.props.value,t=e.imageURL,n=e.imageAlt;return a.createElement(Z,null,a.createElement("div",{className:Object(h.a)(le())},a.createElement(be,null,a.createElement(fe,{src:t,alt:n}))))}}]),t}(a.Component));function he(){var e=Object(d.a)(["\n        width: 90%;\n        margin: 0 auto;\n      "]);return he=function(){return e},e}var pe=function(){return r.a.createElement("div",{className:Object(h.a)(he())},r.a.createElement(Y,{sheetId:"1Ku9E9p1u52nVzTF71DNqSOCuecB2UK8Odyi8paDw9PI",columns:4,cardComponent:de}))};function ge(){var e=Object(d.a)([""]);return ge=function(){return e},e}function ve(){var e=Object(d.a)([""]);return ve=function(){return e},e}function je(){var e=Object(d.a)([""]);return je=function(){return e},e}function Oe(){var e=Object(d.a)(["\n        width: 90%;\n        margin: 0 auto;\n      "]);return Oe=function(){return e},e}function Ee(){var e=Object(d.a)(["\n  display: flex;\n  text-decoration: none;\n  text-align: center;\n  color: white;\n  align-items: center;\n  padding: 20px 25px;\n  text-decoration: none;\n  &:hover {\n    /* font-weight: 700; */\n    text-shadow: 0px 0px 10px white;\n  }\n"]);return Ee=function(){return e},e}var xe=Object(C.a)(f.b)(Ee()),ye=function(){return r.a.createElement("div",{className:Object(h.a)(Oe())},r.a.createElement(xe,{to:"/emir",className:Object(h.a)(je())},"Emir's Food Ratings"),r.a.createElement(xe,{to:"/patrick",className:Object(h.a)(ve())},"Patrick's Book Ratings"),r.a.createElement(xe,{to:"/cindy",className:Object(h.a)(ge())},"Cindy's Homemade Smoothies"))};function we(){var e=Object(d.a)(["\n          height: 100px;\n          width: 100%;\n          background-image: linear-gradient(",", #010220);\n          z-index: 10;\n          color: white;\n\n          line-height: 100px;\n          text-align: center;\n        "]);return we=function(){return e},e}function ke(){var e=Object(d.a)(["\n                text-align: center;\n                width: 100%;\n              "]);return ke=function(){return e},e}function Ne(){var e=Object(d.a)(["\n          min-height: 80vh;\n          width: 100%;\n          background-color: ",";\n          z-index: 10;\n          color: white;\n        "]);return Ne=function(){return e},e}function Se(){var e=Object(d.a)(["\n          height: 15vh;\n          width: 100%;\n          background-image: linear-gradient(#010220, ",");\n          color: white;\n          margin-top: -50px;\n          border-top: 50px solid #010220;\n          /* outline: 300px solid #010220; */\n          /* z-index: -200 !important; */\n        "]);return Se=function(){return e},e}var Ce=function(){var e=Object(b.f)().path;return r.a.createElement("div",null,r.a.createElement(V,{style:{position:"absolute",backgroundColor:"transparent"},itemStyle:{color:O,fontWeight:"bold"},itemHoverStyle:{color:E},scroll:!0}),r.a.createElement(N,null),r.a.createElement(I.Element,{name:"bottomNavbar"}),r.a.createElement(V,{style:{backgroundColor:"rgba(1, 2, 32, 0.7)"},itemStyle:{color:E},itemHoverStyle:{textShadow:"-0.06ex 0 white, 0.06ex 0 white;",backgroundColor:"rgba(255, 255, 255, 0.1)",transition:"0.3s"}}),r.a.createElement("div",{className:Object(h.a)(Se(),"#003366")}),r.a.createElement("div",{className:Object(h.a)(Ne(),"#003366")},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:e},r.a.createElement("div",{className:Object(h.a)(ke())},"(WIP) here i will put stuff about me because i'm a narc pls don't judge ;-; also i luv parallax scrolling")),r.a.createElement(b.a,{path:""+"".concat(e,"/projects")},r.a.createElement(oe,null)),r.a.createElement(b.a,{path:""+"".concat(e,"/art")},r.a.createElement(ie,null)),r.a.createElement(b.a,{path:""+"".concat(e,"/photography")},r.a.createElement(pe,null)),r.a.createElement(b.a,{path:""+"".concat(e,"/friends")},r.a.createElement(ye,null)))),r.a.createElement("div",{className:Object(h.a)(we(),"#003366")},"hi this is a footer"))};function Ie(){var e=Object(d.a)(["\n                color: ",";\n                text-decoration: none;\n                &:hover {\n                  /* filter: brightness(140%); */\n                  text-decoration: underline;\n                }\n              "]);return Ie=function(){return e},e}function De(){var e=Object(d.a)(["\n  font-weight: 600;\n  margin: 0;\n  font-family: ",";\n"]);return De=function(){return e},e}function Re(){var e=Object(d.a)(["\n  width: 400px;\n  box-sizing: border-box;\n  padding: 30px;\n  "," {\n    width: 320px;\n  }\n"]);return Re=function(){return e},e}function Fe(){var e=Object(d.a)(["\n  object-fit: cover;\n  width: 400px;\n  filter: grayscale(45%) brightness(110%);\n  "," {\n    width: 320px;\n    height: 100%;\n  }\n"]);return Fe=function(){return e},e}function Ae(){var e=Object(d.a)(["\n  "," {\n    display: none;\n  }\n"]);return Ae=function(){return e},e}function Me(){var e=Object(d.a)(["\n  "," {\n    display: none;\n  }\n"]);return Me=function(){return e},e}function ze(){var e=Object(d.a)(["\n  margin: 20px;\n  "," {\n    margin: 16px;\n  }\n  font-family: ",";\n"]);return ze=function(){return e},e}function Ve(){var e=Object(d.a)(["\n  list-style-type: none;\n  list-style-position: inside;\n  text-indent: -0.9em;\n  padding-left: 1em;\n  font-family: ",';\n  font-weight: 400;\n  margin: 0;\n  margin-top: 5px;\n  &::before {\n    content: "-\xa0\xa0";\n  }\n'],["\n  list-style-type: none;\n  list-style-position: inside;\n  text-indent: -0.9em;\n  padding-left: 1em;\n  font-family: ",';\n  font-weight: 400;\n  margin: 0;\n  margin-top: 5px;\n  &::before {\n    content: "-\\xa0\\xa0";\n  }\n']);return Ve=function(){return e},e}function He(){var e=Object(d.a)(["\n  font-family: ",";\n  font-weight: 400;\n  margin: 0;\n  margin-top: 15px;\n  "," {\n  }\n"]);return He=function(){return e},e}function Le(){var e=Object(d.a)(["\n  height: 200px;\n  width: 200px;\n  margin: 15px;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 1px dotted gray;\n  "," {\n    display: none;\n  }\n"]);return Le=function(){return e},e}function We(){var e=Object(d.a)(["\n  color: ",";\n  font-family: ",';\n  font-weight: 400;\n  text-decoration: none;\n  &:hover {\n    /* filter: brightness(140%); */\n    text-decoration: underline;\n  }\n  /* &::before {\n    content: "\u2192 ";\n  } */\n']);return We=function(){return e},e}function Pe(){var e=Object(d.a)(["\n  height: auto;\n  width: calc(100% - 220px);\n  "," {\n    width: 100%;\n  }\n  "," {\n    font-size: 14px;\n  }\n"]);return Pe=function(){return e},e}function Te(){var e=Object(d.a)(["\n  background-color: white;\n\n  height: 100vh;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  box-sizing: border-box;\n  "," {\n    padding: 0;\n    flex-direction: column;\n    height: auto;\n  }\n"]);return Te=function(){return e},e}function _e(){var e=Object(d.a)(["\n  width: 100%;\n  height: 10px;\n"]);return _e=function(){return e},e}var Be="#0078ed",Ge=C.a.div(_e()),Ye=Object(C.a)("div")(Te(),g),Ue=(Object(C.a)("div")(Pe(),p,g),Object(C.a)("a")(We(),Be,w.body)),Qe=(Object(C.a)("img")(Le(),p),Object(C.a)("p")(He(),w.body,g)),Ke=Object(C.a)("li")(Ve(),w.body),Ze=(Object(C.a)("h1")(ze(),g,w.heading),Object(C.a)("div")(Me(),g)),Je=Object(C.a)("div")(Ae(),v),Xe=Object(C.a)("img")(Fe(),g),qe=Object(C.a)("div")(Re(),g),$e=Object(C.a)("h1")(De(),w.heading),et=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,{target:"_top",href:"mailto:chengmaxwu@gmail.com?subject=Email me about anything"},"Email")," | ",r.a.createElement(Ue,{target:"_blank",href:"https://www.linkedin.com/in/maxcwu/"},"LinkedIn")," | ",r.a.createElement(Ue,{target:"_blank",href:"https://github.com/legitmaxwu"},"Github"))},tt=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Ye,null,r.a.createElement(Ze,null,r.a.createElement(Xe,{src:"https://i.imgur.com/Vjd0fNb.png"}),r.a.createElement("div",null,r.a.createElement(Ge,null),r.a.createElement(et,null))),r.a.createElement(Je,null,r.a.createElement(Xe,{src:"https://i.imgur.com/Vjd0fNb.png"})),r.a.createElement(qe,null,r.a.createElement($e,null,"Max Wu"),r.a.createElement(Je,null,r.a.createElement(et,null)),r.a.createElement(Qe,null,"Hi! I'm 20 years old and currently studying computer science at UCLA. I'm happiest when creating new things and feeling inspired by those around me. My goal is to make waves in interesting ways."),r.a.createElement(Qe,null,r.a.createElement("b",null,"Current")),r.a.createElement(Ke,null,r.a.createElement(Ue,{target:"_blank",href:"https://novaforgood.org/"},"Nova (tech for social good)")),r.a.createElement(Qe,null,r.a.createElement("b",null,"Past")),r.a.createElement(Ke,null,r.a.createElement(Ue,{target:"_blank",href:"https://covidstories.dailybruin.com/"},"COVID-19 Student Stories")),r.a.createElement(Ke,null,r.a.createElement(Ue,{target:"_blank",href:"https://developer.ibm.com/callforcode/blogs/call-for-code-2019-finalist-rove/"},"Natural disaster response routing")),r.a.createElement(Ke,null,r.a.createElement(Ue,{target:"_blank",href:"https://youtu.be/mrbjgF5SDc4"},"Efficient ocean-wave energy turbine")),r.a.createElement(Qe,null,r.a.createElement("b",null,"Other")),r.a.createElement(Ke,null,r.a.createElement(Ue,{target:"_blank",href:"https://maxcwu.home.blog/2017/12/12/lily-pads/"},"A poem about frogs & life")),r.a.createElement(Ke,null,r.a.createElement(f.b,{to:"/story",className:Object(h.a)(Ie(),Be)},"Dig deeper...")),r.a.createElement(Ze,null,r.a.createElement(Ge,null),r.a.createElement(Ge,null),r.a.createElement(Ge,null)),r.a.createElement(Ge,null)))}}]),t}(r.a.Component);function nt(){var e=Object(d.a)(["\n        height: 100%;\n        color: black;\n      "]);return nt=function(){return e},e}function at(){var e=Object(d.a)(["\n                    transition: 0.3s;\n                    max-height: ",";\n                    object-fit: cover;\n                    width: 300px;\n                  "]);return at=function(){return e},e}function rt(){var e=Object(d.a)(["\n                      height: 20px;\n                      background-color: hsl(",", 70%, 50%);\n                      width: ","%;\n                    "]);return rt=function(){return e},e}function it(){var e=Object(d.a)([""]);return it=function(){return e},e}function ct(){var e=Object(d.a)(["\n                  background-color: ",";\n                "]);return ct=function(){return e},e}function ot(){var e=Object(d.a)(["\n              position: sticky;\n              top: 0;\n              background-color: lightcoral;\n              padding: 10px;\n              border-bottom: 5px solid black;\n            "]);return ot=function(){return e},e}function lt(){var e=Object(d.a)([""]);return lt=function(){return e},e}function ut(){var e=Object(d.a)(["\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-x: scroll;\n"]);return ut=function(){return e},e}function st(){var e=Object(d.a)(["\n  width: 300px;\n"]);return st=function(){return e},e}function mt(){var e=Object(d.a)(["\n  width: 100px;\n"]);return mt=function(){return e},e}function ft(){var e=Object(d.a)(["\n  width: 300px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]);return ft=function(){return e},e}function bt(){var e=Object(d.a)(["\n  width: 200px;\n"]);return bt=function(){return e},e}function dt(){var e=Object(d.a)(["\n  width: 200px;\n"]);return dt=function(){return e},e}var ht=Object(C.a)("div")(dt()),pt=Object(C.a)("div")(bt()),gt=Object(C.a)("div")(ft()),vt=Object(C.a)("div")(mt()),jt=Object(C.a)("div")(st()),Ot=Object(C.a)("div")(ut()),Et=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sheetsData:[],showImages:!0},n.sort=n.sort.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.sheetId;P.a.init({key:t,callback:function(t){e.setState({sheetsData:t})},simpleSheet:!0})}},{key:"sort",value:function(e,t){var n=t?1:-1;this.setState({sheetsData:this.state.sheetsData.sort((function(t,a){var r=parseFloat(t[e]),i=parseFloat(a[e]);return r>i?n:r==i?0:-n}))})}},{key:"toggleImages",value:function(){this.setState({showImages:!this.state.showImages})}},{key:"render",value:function(){var e=this,t=(this.props.sheetId,this.state.sheetsData);return 0==t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Object(h.a)(lt())},r.a.createElement("div",{className:Object(h.a)(ot())},r.a.createElement("h3",null,"Emir's Food Ratings (WIP)"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!1)}},"Rating (high to low)"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!0)}},"Rating (low to high)"),r.a.createElement("button",{onClick:function(){return e.toggleImages()}},"Toggle Showing Images")),t.map((function(t,n){var a=parseFloat(t.Rating)/10*100;return r.a.createElement(Ot,{className:Object(h.a)(ct(),n%2==0?"rgba(0,0,0,0.1)":"white")},r.a.createElement(ht,null,t.Food),r.a.createElement(pt,null,t.Place),r.a.createElement(gt,{className:Object(h.a)(it())},r.a.createElement("div",{className:Object(h.a)(rt(),a+10,.9*a)})),r.a.createElement(vt,null,t.Rating," / 10"),r.a.createElement(jt,null,t.Description),r.a.createElement("img",{src:t.imageURL,className:Object(h.a)(at(),e.state.showImages?"150px":0)}))}))))}}]),t}(r.a.Component),xt=function(){return r.a.createElement("div",{className:Object(h.a)(nt())},r.a.createElement(Et,{sheetId:"1aoWRD5c43OAZpBvhxSLx6r00zhunzVTdBf3Wfr9DKy8"}))},yt=n(86);function wt(){var e=Object(d.a)(["\n        height: 100%;\n        color: black;\n      "]);return wt=function(){return e},e}function kt(){var e=Object(d.a)(["\n                    transition: 0.3s;\n                    max-height: ",";\n                    object-fit: contain;\n                    width: 300px;\n                  "]);return kt=function(){return e},e}function Nt(){var e=Object(d.a)(["\n                    ","\n                  "]);return Nt=function(){return e},e}function St(){var e=Object(d.a)(["\n                      display: inline-block;\n                      font-size: 12;\n                      font-family: Times; // make sure \u2605 appears correctly\n                      line-height: 1;\n                      letter-spacing: 3px;\n                      background: linear-gradient(\n                        90deg,\n                        #fc0 ","%,\n                        #fff ","%\n                      );\n                      /* background-color: red; */\n                      -webkit-background-clip: text;\n                      -webkit-text-fill-color: transparent;\n                    "]);return St=function(){return e},e}function Ct(){var e=Object(d.a)([""]);return Ct=function(){return e},e}function It(){var e=Object(d.a)(["\n                  background-color: ",";\n                "]);return It=function(){return e},e}function Dt(){var e=Object(d.a)(["\n              position: sticky;\n              top: 0;\n              background-color: lightcyan;\n              padding: 10px;\n              border-bottom: 5px solid black;\n            "]);return Dt=function(){return e},e}function Rt(){var e=Object(d.a)([""]);return Rt=function(){return e},e}function Ft(){var e=Object(d.a)(["\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-x: scroll;\n"]);return Ft=function(){return e},e}function At(){var e=Object(d.a)(["\n  width: 500px;\n"]);return At=function(){return e},e}function Mt(){var e=Object(d.a)(["\n  width: 100px;\n"]);return Mt=function(){return e},e}function zt(){var e=Object(d.a)(["\n  width: 150px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]);return zt=function(){return e},e}function Vt(){var e=Object(d.a)(["\n  width: 60px;\n  margin-right: 20px;\n"]);return Vt=function(){return e},e}function Ht(){var e=Object(d.a)(["\n  width: 140px;\n  margin-right: 20px;\n"]);return Ht=function(){return e},e}function Lt(){var e=Object(d.a)(["\n  width: 140px;\n  margin-right: 20px;\n"]);return Lt=function(){return e},e}function Wt(){var e=Object(d.a)(["\n  width: 200px;\n  margin-right: 20px;\n"]);return Wt=function(){return e},e}var Pt=Object(C.a)("div")(Wt()),Tt=Object(C.a)("div")(Lt()),_t=Object(C.a)("div")(Ht()),Bt=Object(C.a)("div")(Vt()),Gt=Object(C.a)("div")(zt()),Yt=Object(C.a)("div")(Mt()),Ut=Object(C.a)("div")(At()),Qt=Object(C.a)("div")(Ft()),Kt=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sheetsData:[],showImages:!0,showNotes:!0,genres:[],selectedGenre:"All"},n.sort=n.sort.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.sheetId;P.a.init({key:t,callback:function(t){var n=["All"].concat(Object(yt.a)(t.map((function(e){return e.Genre.split(",")})).flat().map((function(e){return e.trim()})).filter((function(e,t,n){return n.indexOf(e)===t}))));e.setState({sheetsData:t,genres:n})},simpleSheet:!0})}},{key:"sort",value:function(e,t){var n=t?1:-1;this.setState({sheetsData:this.state.sheetsData.sort((function(t,a){var r=parseFloat(t[e]),i=parseFloat(a[e]);return r>i?n:r==i?0:-n}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.genres,a=t.selectedGenre;if(0==this.state.sheetsData.length)return r.a.createElement(r.a.Fragment,null);var i=this.state.sheetsData;return"All"!=a&&(i=i.filter((function(e){return e.Genre.split(",").map((function(e){return e.trim()})).includes(a)}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Object(h.a)(Rt())},r.a.createElement("div",{className:Object(h.a)(Dt())},r.a.createElement("h3",null,"Patrick's Book Ratings (WIP)"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!1)}},"Rating \u2193"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!0)}},"Rating \u2191"),r.a.createElement("button",{onClick:function(){return e.sort("Length",!1)}},"Length \u2193"),r.a.createElement("button",{onClick:function(){return e.sort("Length",!0)}},"Length \u2191"),r.a.createElement("button",{onClick:function(){return e.sort("Year",!1)}},"Year \u2193"),r.a.createElement("button",{onClick:function(){return e.sort("Year",!0)}},"Year \u2191"),r.a.createElement("select",{id:"genres",onChange:function(t){e.setState({selectedGenre:t.target.value})}},n.map((function(e){return r.a.createElement("option",null,e)}))),r.a.createElement("button",{onClick:function(){return e.setState({showNotes:!e.state.showNotes})}},"Toggle Showing Notes"),r.a.createElement("button",{onClick:function(){return e.setState({showImages:!e.state.showImages})}},"Toggle Showing Images")),i.map((function(t,n){var a=parseFloat(t.Rating)/5*100;return r.a.createElement(Qt,{className:Object(h.a)(It(),n%2==0?"rgba(0,0,0,0.3)":"rgba(0, 0, 0, 0.2)")},r.a.createElement(Pt,null,t.Title),r.a.createElement(Tt,null,t.Author),r.a.createElement(_t,null,t.Genre),r.a.createElement(Bt,null,t.Length),r.a.createElement(Bt,null,t.Year),r.a.createElement(Gt,{className:Object(h.a)(Ct())},r.a.createElement("div",{className:Object(h.a)(St(),a,a)},"\u2605\u2605\u2605\u2605\u2605")),r.a.createElement(Yt,null,t.Rating),r.a.createElement(Ut,{className:Object(h.a)(Nt(),!e.state.showNotes&&"display: none;")},t.Thoughts),r.a.createElement("img",{src:t.imageURL,className:Object(h.a)(kt(),e.state.showImages?"150px":0)}))}))))}}]),t}(r.a.Component),Zt=function(){return r.a.createElement("div",{className:Object(h.a)(wt())},r.a.createElement(Kt,{sheetId:"1mVLLG9JurON2fcSdVu6Xr3Bbx_Tn5niQ3trRl67OeCQ"}))};function Jt(){var e=Object(d.a)(["\n        height: 100%;\n        color: black;\n      "]);return Jt=function(){return e},e}function Xt(){var e=Object(d.a)(["\n                    transition: 0.3s;\n                    max-height: ",";\n                    object-fit: cover;\n                    width: 300px;\n                  "]);return Xt=function(){return e},e}function qt(){var e=Object(d.a)(["\n                      height: 20px;\n                      background-color: hsl(",", 70%, 50%);\n                      width: ","%;\n                    "]);return qt=function(){return e},e}function $t(){var e=Object(d.a)([""]);return $t=function(){return e},e}function en(){var e=Object(d.a)(["\n                  background-color: ",";\n                "]);return en=function(){return e},e}function tn(){var e=Object(d.a)(["\n              position: sticky;\n              top: 0;\n              background-color: lightsteelblue;\n              padding: 10px;\n              border-bottom: 5px solid black;\n            "]);return tn=function(){return e},e}function nn(){var e=Object(d.a)([""]);return nn=function(){return e},e}function an(){var e=Object(d.a)(["\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-x: scroll;\n"]);return an=function(){return e},e}function rn(){var e=Object(d.a)(["\n  width: 300px;\n"]);return rn=function(){return e},e}function cn(){var e=Object(d.a)(["\n  width: 100px;\n"]);return cn=function(){return e},e}function on(){var e=Object(d.a)(["\n  width: 300px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]);return on=function(){return e},e}function ln(){var e=Object(d.a)(["\n  width: 200px;\n"]);return ln=function(){return e},e}function un(){var e=Object(d.a)(["\n  width: 50px;\n"]);return un=function(){return e},e}var sn=Object(C.a)("div")(un()),mn=(Object(C.a)("div")(ln()),Object(C.a)("div")(on())),fn=Object(C.a)("div")(cn()),bn=Object(C.a)("div")(rn()),dn=Object(C.a)("div")(an()),hn=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={sheetsData:[],showImages:!0,selectedIngredient:"All",ingredients:[]},n.sort=n.sort.bind(Object(U.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.sheetId;P.a.init({key:t,callback:function(t){console.log(t);var n=["All"].concat(Object(yt.a)(t.map((function(e){return e.Recipe.split("\n").map((function(e){return e.split(" ").slice(-1)[0]}))})).flat().map((function(e){return e.trim()})).filter((function(e,t,n){return n.indexOf(e)===t})).filter((function(e){return""!=e}))));e.setState({sheetsData:t,ingredients:n})},simpleSheet:!0})}},{key:"sort",value:function(e,t){var n=t?1:-1;this.setState({sheetsData:this.state.sheetsData.sort((function(t,a){var r=parseFloat(t[e]),i=parseFloat(a[e]);return r>i?n:r==i?0:-n}))})}},{key:"toggleImages",value:function(){this.setState({showImages:!this.state.showImages})}},{key:"render",value:function(){var e=this,t=(this.props.sheetId,this.state),n=t.selectedIngredient,a=t.ingredients;if(0==this.state.sheetsData.length)return r.a.createElement(r.a.Fragment,null);var i=this.state.sheetsData;return"All"!=n&&(i=i.filter((function(e){return e.Recipe.split("\n").map((function(e){return e.split(" ").slice(-1)[0]})).flat().map((function(e){return e.trim()})).filter((function(e,t,n){return n.indexOf(e)===t})).filter((function(e){return""!=e})).includes(n)}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Object(h.a)(nn())},r.a.createElement("div",{className:Object(h.a)(tn())},r.a.createElement("h3",null,"Cindy's Smoothies (WIP)"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!1)}},"Rating (high to low)"),r.a.createElement("button",{onClick:function(){return e.sort("Rating",!0)}},"Rating (low to high)"),r.a.createElement("button",{onClick:function(){return e.toggleImages()}},"Toggle Showing Images"),r.a.createElement("select",{id:"ingredients",onChange:function(t){e.setState({selectedIngredient:t.target.value})}},a.map((function(e){return r.a.createElement("option",null,e)})))),i.map((function(t,a){var i=parseFloat(t.Rating)/10*100;return r.a.createElement(dn,{className:Object(h.a)(en(),a%2==0?"rgba(0,0,0,0.1)":"white")},r.a.createElement(sn,null,t["Day #"]),r.a.createElement(mn,{className:Object(h.a)($t())},r.a.createElement("div",{className:Object(h.a)(qt(),i+10,.9*i)})),r.a.createElement(fn,null,t.Rating," / 10"),r.a.createElement(bn,null,t.Recipe.split("\n").map((function(e){return e.split(" ").splice(-1)==n?r.a.createElement("div",null,r.a.createElement("b",null,e)):r.a.createElement("div",null,e)}))),r.a.createElement(bn,null,t.Comments.split("\n").map((function(e){return r.a.createElement("div",null,e)}))),r.a.createElement("img",{src:t.Pic,className:Object(h.a)(Xt(),e.state.showImages?"150px":0)}))}))))}}]),t}(r.a.Component),pn=function(){return r.a.createElement("div",{className:Object(h.a)(Jt())},r.a.createElement(hn,{sheetId:"1WvDHjCARh07KkYMVGtEcxZxUjVBPziiFb5oS6wvkjZc"}))},gn=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/story",component:Ce}),r.a.createElement(b.a,{exact:!0,path:"/",component:tt}),r.a.createElement(b.a,{path:"/emir",component:xt}),r.a.createElement(b.a,{path:"/patrick",component:Zt}),r.a.createElement(b.a,{path:"/cindy",component:pn}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[198,1,2]]]);
//# sourceMappingURL=main.58f91447.chunk.js.map