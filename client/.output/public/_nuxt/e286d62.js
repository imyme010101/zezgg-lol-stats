(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{452:function(e,t,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("4653b119",content,!0,{sourceMap:!1})},488:function(e,t,r){"use strict";r(452)},489:function(e,t,r){var o=r(47)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n.record-card[data-v-10b9b75a]{\n  max-width:11rem\n}\n.record-card[data-v-10b9b75a]:hover{\n  filter:brightness(1.2)\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},521:function(e,t,r){"use strict";r.r(t);r(14),r(8),r(9),r(3),r(19),r(13),r(22);var o=r(5),c=r(2),n=(r(39),r(21),r(25),r(11)),d={components:{SquareLoader:r(439).SquareLoader}},l=r(10),m=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full flex flex-col justify-center items-center"},[t("SquareLoader"),e._v(" "),t("div",{staticClass:"text-base font-bold text-teal-600 py-2"},[e._v("로딩중입니다...")])],1)}),[],!1,null,null,null).exports,f=r(158),x=r(27),v={props:{borderColor:{type:String,required:!0},color:{type:String,required:!0},textColor:{type:String,required:!0},record:{type:Object,required:!0},title:{type:String,required:!0}},data:function(){return{gradient:"linear-gradient(180deg, rgba(42, 67, 101, 0.8) 0%, rgba(42, 67, 101, 0.95) 60%, rgba(42, 67, 101, 1) 100%)",gradientHover:"linear-gradient(rgba(42, 67, 101, 0.1) 0%, rgba(42, 67, 101, 0.3) 60%, rgba(42, 67, 101, 0.5) 100%)",hover:!1,gameModes:f.b}},methods:{timeDifference:x.e}};r(488);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={components:{RecordLoader:m,RecordCard:Object(l.a)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative w-full flex items-center justify-between px-4 py-2 bg-white border border-teal-600 rounded-sm shadow-sm text-teal-600 mt-4"},[t("div",{staticClass:"flex items-center font-medium leading-4 transition-colors duration-500 ease-in-out border border-transparent rounded-md"},[t("span",{staticClass:"w-40 font-bold",class:e.textColor},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"w-16"},[t("img",{staticClass:"block w-full h-16 mx-auto transition duration-500 ease-in transform border-2 rounded-full",class:[{"opacity-0 scale-125":e.hover},e.borderColor],attrs:{src:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/".concat(e.record.champion_id,".png"),alt:"Champion Played"}})]),e._v(" "),t("span",{staticClass:"ml-4 text-4xl",style:{textShadow:"-2px 1px 6px ".concat(e.color)}},[e._v(e._s(e.record.champion.name))])]),e._v(" "),t("div",{staticClass:"flex text-4xl"},[t("div",{staticClass:"w-40 text-right text-4xl",style:{textShadow:"-2px 1px 6px ".concat(e.color)}},[e._v(e._s(e.record.amount))])])])}),[],!1,null,"10b9b75a",null).exports},computed:_(_({},Object(n.c)("summoner",["summonerFound"])),Object(n.d)({account:function(e){return e.summoner.basic.account},records:function(e){return e.summoner.records.list},recordsLoaded:function(e){return e.summoner.records.recordsLoaded}})),asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,o=e.params,"found"===r.state.summoner.basic.status){t.next=4;break}return t.next=4,r.dispatch("summoner/basicRequest",{summoner:o.name,region:o.region});case 4:if(0!=r.state.summoner.records.recordsLoaded){t.next=7;break}return t.next=7,r.dispatch("summoner/recordsRequest");case 7:case"end":return t.stop()}}),t)})))()},methods:_({fetchData:function(){!this.recordsLoaded&&this.summonerFound&&this.recordsRequest()}},Object(n.b)("summoner",["recordsRequest"])),head:function(){return{title:("found"===this.$store.state.summoner.basic.status?"".concat(this.account.name):"sss")+" - 소환사 챔피언 기록 | ".concat("롤 전적 검색 ZEM.GG"),meta:[{hid:"title",name:"title",content:("found"===this.$store.state.summoner.basic.status?"".concat(this.account.name):"")+" - 소환사 챔피언 기록 | ".concat("롤 전적 검색 ZEM.GG")},{hid:"og:title",name:"og:title",content:("found"===this.$store.state.summoner.basic.status?"".concat(this.account.name):"")+" - 소환사 챔피언 기록 | ".concat("롤 전적 검색 ZEM.GG")},{hid:"og:url",property:"og:url",content:"https://zem.gg/summoner/".concat(this.$route.params.region,"/").concat(this.$route.params.name,"/records")}],link:[{rel:"canonical",href:"https://zem.gg/summoner/".concat(this.$route.params.region,"/").concat(this.$route.params.name,"/records")}]}}},y=Object(l.a)(w,(function(){var e=this,t=e._self._c;return t("div",{key:"records"},[!e.recordsLoaded||e.recordsLoaded&&e.records.assists?[t("div",{staticClass:"relative w-full flex flex-col items-start justify-between px-4 py-4 bg-white border border-teal-600 rounded-sm shadow-sm text-teal-600"},[t("div",{staticClass:"relative text-2xl"},[e._v("소환사 챔피언 기록실")]),e._v(" "),t("div",{staticClass:"flex flex-col w-full"},[e.recordsLoaded?[t("RecordCard",{attrs:{color:"#63b3ed","text-color":"text-teal-400","border-color":"border-teal-400",record:e.records.kda,title:"KDA"}}),e._v(" "),t("RecordCard",{attrs:{color:"#68D391","text-color":"text-green-500","border-color":"border-green-500",record:e.records.kills,title:"최대 킬"}}),e._v(" "),t("RecordCard",{attrs:{color:"#9F7AEA","text-color":"text-purple-500","border-color":"border-purple-500",record:e.records.assists,title:"최대 어시스트"}}),e._v(" "),t("RecordCard",{attrs:{color:"#F56565","text-color":"text-red-500","border-color":"border-red-500",record:e.records.deaths,title:"최대 뎃"}}),e._v(" "),t("RecordCard",{attrs:{color:"#38b2ac","text-color":"text-blue-500","border-color":"border-teal-500",record:e.records.damage_dealt_champions,title:"최대 딜량"}}),e._v(" "),t("RecordCard",{attrs:{color:"#78716c","text-color":"text-blue-500","border-color":"border-teal-500",record:e.records.kp,title:"최대 킬관여"}})]:[t("RecordLoader")]],2)])]:e._e(),e._v(" "),e.recordsLoaded&&!e.records.assists?[e._m(0)]:e._e()],2)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center mt-4"},[t("div",[e._v("No records have been found.")]),e._v(" "),t("div",[e._v("😕")])])}],!1,null,null,null);t.default=y.exports}}]);