(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c8110cd"],{"0160":function(t,e,s){},"0481":function(t,e,s){"use strict";var i=s("23e7"),o=s("a2bf"),r=s("7b0b"),a=s("07fa"),n=s("5926"),l=s("65f0");i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=r(this),s=a(e),i=l(e,0);return i.length=o(i,e,e,s,0,void 0===t?1:n(t)),i}})},"20f6":function(t,e,s){},"2c44":function(t,e,s){},"2fa4":function(t,e,s){"use strict";s("20f6");var i=s("80d2");e["a"]=Object(i["e"])("spacer","div","v-spacer")},"35df":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"overflow-hidden",attrs:{id:"recent-projects"}},[s("v-row",{attrs:{"no-gutters":"",align:"center"}},[s("v-col",{staticClass:"mt-14",class:{"pa-5 pr-0":t.$vuetify.breakpoint.mdAndUp},attrs:{cols:"12",md:"8"}},[s("base-heading",{staticClass:"accent--text",attrs:{align:"center"}},[t._v("Demo проекты")]),s("div",{staticClass:"overflow"},[s("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(e,i){var o=e.date,r=e.title,a=e.preview,n=e.api,l=e.about,c=e.desctiption,d=e.capabilityes,p=e.realization,u=e.viewComponents,v=e.technologyes,m=e.db;return s("v-timeline-item",{key:i,attrs:{color:t.fillColors[i],small:"",align:t.$vuetify.breakpoint.smAndDown?"":i%2!==0?"right":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[s("span",{staticClass:"headline font-weight-bold",style:{color:t.fillColors[i]},domProps:{textContent:t._s(o)}})]},proxy:!0}],null,!0)},[s("div",{staticClass:"py-4"},[t.$vuetify.breakpoint.smAndDown?s("h2",{style:{color:t.fillColors[i]},domProps:{textContent:t._s(o)}}):t._e(),s("h3",{staticClass:"font-weight-light mb-4",style:{color:t.fillColors[i]},domProps:{textContent:t._s(r)}}),s("div",[s("v-btn",{attrs:{"x-small":"",color:"secondary",href:a,target:"_blank",dark:""}},[t._v(" Preview "),s("v-icon",{staticClass:"ml-2",attrs:{dark:""}},[t._v("mdi-link")])],1)],1),s("div",[n?s("v-btn",{staticClass:"mt-2",attrs:{"x-small":"",color:"secondary",href:n,target:"_blank",dark:""}},[t._v(" API "),s("v-icon",{staticClass:"ml-2",attrs:{dark:""}},[t._v("mdi-link")])],1):t._e()],1),s("div",[l?s("v-btn",{staticClass:"mt-2",attrs:{"x-small":"",color:"secondary",href:l,target:"_blank",dark:""}},[t._v(" About "),s("v-icon",{staticClass:"ml-2",attrs:{dark:""}},[t._v("mdi-link")])],1):t._e()],1),s("v-spacer",{staticClass:"mt-4"}),c?s("div",{domProps:{innerHTML:t._s(c)}}):t._e(),d&&d.length?s("div",{staticClass:"-secondary--text mt-2"},[s("v-spacer",{staticClass:"mt-4"}),s("div",{staticClass:"accent--text"},[t._v("Возможности:")]),"string"===typeof d?s("ul",[s("li",{domProps:{textContent:t._s(d)}})]):t._e(),Array.isArray(d)?s("ul",t._l(d,(function(e){return s("li",{key:e,domProps:{textContent:t._s(e)}})})),0):t._e()],1):t._e(),p&&p.length?s("div",{staticClass:"-secondary--text mt-2"},[s("v-spacer",{staticClass:"mt-4"}),s("div",{staticClass:"accent--text"},[t._v("Особенности реализации:")]),"string"===typeof p?s("ul",[s("li",{domProps:{textContent:t._s(p)}})]):t._e(),Array.isArray(p)?s("ul",t._l(p,(function(e){return s("li",{key:e,domProps:{textContent:t._s(e)}})})),0):t._e()],1):t._e(),u&&u.length?s("div",{staticClass:"-secondary--text mt-2"},[s("v-spacer",{staticClass:"mt-4"}),s("div",{staticClass:"accent--text"},[t._v("Список компонентов:")]),"string"===typeof u?s("ul",[s("li",{domProps:{textContent:t._s(u)}})]):t._e(),Array.isArray(u)?s("ul",t._l(u,(function(e){return s("li",{key:e,domProps:{textContent:t._s(e)}})})),0):t._e()],1):t._e(),v?s("div",{staticClass:"-secondary--text mt-2"},[s("v-spacer",{staticClass:"mt-4"}),s("div",{staticClass:"accent--text"},[t._v("Технологии:")]),"string"===typeof v?s("ul",[s("li",{domProps:{textContent:t._s(v)}})]):Array.isArray(v)?s("ul",t._l(v,(function(e){return s("li",{key:e,domProps:{textContent:t._s(e)}})})),0):Object.keys(v).length?s("ul",t._l(Object.entries(v),(function(e){return s("li",{key:e[0],domProps:{textContent:t._s(""+t.qoute+e[0]+t.qoute+" : "+t.qoute+e[1]+t.qoute)}})})),0):t._e()],1):t._e(),m&&m.length?s("div",{staticClass:"info--text mt-2"},[s("v-spacer",{staticClass:"mt-4"}),s("div",{staticClass:"secondary--text"},[t._v("Базы данных:")]),"string"===typeof m?s("ul",[s("li",{domProps:{textContent:t._s(m)}})]):t._e(),Array.isArray(m)?s("ul",t._l(m,(function(e){return s("li",{key:e,domProps:{textContent:t._s(e)}})})),0):t._e()],1):t._e()],1)])})),1)],1)],1),s("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[s("base-bubble-1",{staticStyle:{transform:"rotate(180deg) translateX(-35%)"}}),s("div",{staticClass:"pa-5"},[s("base-heading",{staticClass:"accent--text"},[t._v(" Добр"+t._s(t.welcome)+"! ")]),s("base-text",{staticClass:"secondary--text"},[t._v("Вас приветствует страница с демо проектами разработчика фронтенда")]),s("div",{staticClass:"subtitle-1"},[t._v(" Здесь представлены демо проекты для ознакомления работодателям, единомышленникам и всем, кому это интересно ")])],1)],1)],1)],1)},o=[],r=(s("0481"),s("4069"),s("cb29"),[{date:"28.07.2021",title:"Fire Blog",preview:"https://fire-blog-vue-js.web.app/",api:"//firebase.google.com/docs/reference/rest/database?hl=uk",desctiption:"Блог для создания и редактирования статей на платформе Firebase",capabilityes:["просмотр статей","создавать/редактировать/удалять свои статьи","регистрация/логин/логаут на платформе","редактирование личных данных"],technologyes:{"@tiptap/extension-highlight":"^2.0.0-beta.30","@tiptap/extension-text-align":"^2.0.0-beta.28","@tiptap/starter-kit":"^2.0.0-beta.145","@tiptap/vue-2":"^2.0.0-beta.69","core-js":"^3.19.1",firebase:"^9.5.0",vue:"^2.6.14","vue-router":"^3.5.3",vuex:"^3.6.2"}},{date:"11.04.2021",title:"Приложение Music Player",preview:"http://darqus.ru/_d/music-player/",technologyes:"JavaScript (ES6+)"},{date:"08.12.2020",title:"Сервис Medium Clone",preview:"http://darqus.ru/_d/medium_clone_vue",api:"//conduit.productionready.io/api/articles",about:"http://darqus.ru/_d/medium_clone_vue/#/about",desctiption:"Имплементация базового функционала платформы для шаринга знаний Medium",technologyes:{axios:"^0.21.0",bootstrap:"^4.5.3","core-js":"^3.6.5","query-string":"^6.13.7",vue:"^2.6.11","vue-router":"^3.2.0",vuex:"^3.4.0"}},{date:"24.05.2020",title:'Игра "Угадайте число"',preview:"http://darqus.ru/_d/guess-number/",technologyes:"JavaScript (ES6+)"},{date:"15.03.2020",title:"Приложение для отображения и добавления коментариев",preview:"http://darqus.ru/_d/vuex_coments",api:'href="//jsonplaceholder.typicode.com/posts/1/comments',desctiption:"По умолчанию (payload = 3) отображается три коментария из API<br>",technologyes:{"core-js":"^3.6.4",vue:"^2.6.10",vuex:"^3.1.1"}},{date:"26.10.2019",title:"Приложение Генератор паролей",preview:"http://darqus.ru/_d/jspassgen",technologyes:"JavaScript (ES6+)"},{date:"03.07.2019",title:"Приложение Список заказов из сервиса",preview:"http://darqus.ru/_d/vue-playground/",desctiption:'Приложение сортирует заказы по времени в обратном порядке, группирует их по дням<br>Если день даты заказа равен текущему дню в заголовке даты заказа выводится текст "Сегодня", если вчерашнему дню - "Вчера", в остальных случаях выводится дата',technologyes:{axios:"^0.19.0","core-js":"^2.6.5",moment:"^2.24.0",vue:"^2.6.10"}},{date:"16.06.2019",title:"Приложение Стартовая страница",preview:"http://darqus.ru/_d/start-page/",desctiption:"Приложение отображает погоду, время, цель и приветствует в зависимости от времени суток сменой full-hd изображений фона, а также напоминает о цели на сегодня. Имя и цель редактируемы. Данные хранятся в локальном хранилище. Можно использовать в качестве стартовой страницы в браузере",technologyes:["JavaScript (ES6+)","CSS grid"]},{date:"10.06.2019",title:"Приложение для ведения счета игроков",preview:"http://darqus.ru/_d/svelte-scoreboard/",technologyes:{svelte:"^3.19.2"}},{date:"29.05.2019",title:"PWA Приложение Поиск Zipcode",preview:"//vue-zip-finder.firebaseapp.com/",api:"//api.zippopotam.us/us/",desctiption:"Пример запроса 90210, 30302",technologyes:{"@ionic/vue":"0.0.4","core-js":"^2.6.5","register-service-worker":"^1.6.2",vue:"^2.6.10","vue-router":"^3.0.3"}},{date:"25.05.2019",title:"Приложение Список задач Svelte",preview:"http://darqus.ru/_d/svelte-todo/",api:"//jsonplaceholder.typicode.com/todos?_limit=4",desctiption:"Приложение позволяет создавать, модифицировать (двойной клик по задаче), помечать как выполненные, помечать все, фильтровать: (все, активные , завершенные), очищать завершенные и удалять задачи",technologyes:{svelte:"^3.19.2"}},{date:"22.05.2019",title:"3d анимация вращение куба с текстурой",preview:"http://darqus.ru/_d/threejs-cube/",technologyes:["JavaScript (ES6+)","threejs"]},{date:"15.05.2019",title:"Приложение Интернет Магазин Книг",preview:"http://darqus.ru/_d/react-redux-store/",desctiption:"Реализована демонстрация с помощью redux-thunk, чтобы в консоли браузера можно было видеть все действия и текущее состояние модели без дополнительно подключаемых средств разработки",viewComponents:["actions","services","reducers","app","book-list","book-list-item","bookstore-service-context","error-boundry","error-indicatior","hoc","pages","shop-footer","shop-header","shopping-cart-table","spinner"],technologyes:{bootstrap:"^4.3.1","node-sass":"^4.12.0","prop-types":"^15.7.2",react:"^16.8.6","react-dom":"^16.8.6","react-redux":"^7.0.3","react-router-dom":"^5.0.0","react-scripts":"3.0.0",redux:"^4.0.1","redux-thunk":"^2.3.0"}},{date:"28.04.2019",title:"Приложение Поиск карточек людей",preview:"http://darqus.ru/_d/search-people/",api:"//jsonplaceholder.typicode.com/users",desctiption:'Приложение позволяет осуществлять поиск карточек по имени пользователя или названию компании (для примера введите в поиске "c" на латинице)',realization:["реализует pattern mvc","чистый js (не требует фреймворка и системы сборки проекта)","легкое масштабирование","задержка времени после ввода запроса составляет 500 мс"],viewComponents:["main - точка входа (рендеринг начального состояния приложения, подключение компонентов)","config - конфигурация проекта","template - статические и динамические шаблоны","utils - дополнительный функционал","api-service - класс сервиса для работы с api","controller - контроллер (хранилище, инициализация и методы работы с моделью)"],technologyes:["JavaScript (ES6+)","bootsprap 4.3.1"]},{date:"23.04.2019",title:"Приложение Star DB",preview:"http://darqus.ru/_d/react-sw-db/",api:"//swapi.co/api",desctiption:"Приложение позволяет отображать различные данные по запросу к API из представленного списка категорий",viewComponents:["app","bootstrap","error-boundry","error-button","error-indicator","header","hoc-helpers","item-details","item-list","pages","planet-details","random-planet","row","spinner","swapi-service-context","sw-components"],technologyes:{"node-sass":"^4.14.1","prop-types":"^15.7.2",react:"^16.8.6","react-dom":"^16.8.6","react-router-dom":"^5.0.0","react-scripts":"^3.4.4","react-scroll-up-button":"^1.6.4"}},{date:"28.03.2019",title:"Приложение React PlayerList",preview:"http://darqus.ru/_d/react-redux-player-list/",desctiption:"Воспроизводит функционал мызыкального проигрывателя",viewComponents:["ButtonComp","PlayerListComp","PlayButtonsComp","Player","mainReducer","playerListReducer","playerStateReducer","fancyTimeFormat"],technologyes:{react:"^16.4.1","react-dom":"^16.4.1","react-redux":"^5.0.7","react-router-dom":"^5.0.0","react-scripts":"^2.1.8",redux:"^4.0.0"}},{date:"17.03.2019",title:"Приложение Диспетчер задач",preview:"http://darqus.ru/_d/vuex-todo-manager/",desctiption:"Позволяет работать с задачами",viewComponents:["AddTodo - компонент добавления задачи","FilterTodo - компонент отображения задач","Todos - компонент задач","Store - хранилище vuex","Todos - модуль для операций над задачами (state, getters, actions, mutations)"],technologyes:{axios:"^0.18.0","core-js":"^3.6.4",vue:"^2.6.6",vuex:"^3.1.0"}},{date:"21.02.2019",title:"Приложение микроблог (fullstack)",preview:"//fullstack-vue-express-x5.herokuapp.com/",api:"//fullstack-vue-express-x5.herokuapp.com/api/posts",desctiption:"Приложение позволяет создавать сообщения и удалять любые сообщения (двойным кликом)",technologyes:["JavaScript (ES6+)","nodejs","express","vuejs","axios"],db:"MongoDB.Atlas"},{date:"18.02.2019",title:"Приложение Список задач React",preview:"http://darqus.ru/_d/react-todo/",desctiption:"Позволяет работать с задачами",viewComponents:["Header - компонент шапка с меню","AddTodo - компонент добавления задачи","TodoItem - компонент задачи","Todos - контейнер для компонентов задач"],technologyes:{axios:"^0.18.0",react:"^16.8.2","react-dom":"^16.8.2","react-router-dom":"^4.3.1","react-scripts":"2.1.5",uuid:"^3.3.2"}},{date:"08.02.2019",title:"Сервис Server Node.js v11.9.0",preview:"//darqus-node-js-server.herokuapp.com/",technologyes:["JavaScript (ES6+)","Node.js","uuid","router"]},{date:"04.01.2019",title:"Сервис API Node.js",preview:"",viewComponents:["server","db","model","controller"],technologyes:["JavaScript (ES5)","body-parser","express","mongodb","router"]},{date:"31.01.2019",title:"Приложение Список задач Vue",preview:"http://darqus.ru/_d/vue-todos/",desctiption:"Позволяет работать с задачами",viewComponents:["Header - компонент шапка с меню","AddTodo - компонент добавления задачи","TodoItem - компонент задачи","Todos - контейнер для компонентов задач"],technologyes:{axios:"^0.18.0",uuid:"^3.3.2",vue:"^2.5.21","vue-router":"^3.0.1"}},{date:"19.01.2019",title:"SPA Landing Page",preview:"http://darqus.ru/_d/spa/",desctiption:"Landing Page с возможностью переключаться между страницами как в многостраничнике",realization:["Навигацию можно осуществлять как в многостраничнике, история серфинга при этом будет работать как в обычном многостраничнике (реализовано с помощью History API)","Проект адаптивен и отлично смотрится и читается на всех устройствах","Цветовая гамма автоматически расчитывается из переменной базового цвета (корпоративный цвет)","При недостатке контента футер в любом случае будет прижат к нижней части сайта (решение с помощью свойства CSS Grid)","Графическая часть реализована с помощью формата svg (в проекте полностью отсутствует растровая графика, кроме галереи и заглушки карты)","Есть возможность загрузки контента извне (из файлов), однако здесь используется редко ввиду простоты проекта","В разделе Контакты есть два вида карт: обычная и интерактивная с возможностью переключаться между ними","Реализованы две формы обратной связи: на странице и всплывающая","В формах реализованы: автоподстановка ФИО и email, автоматическая маска для телефона и валидация всех полей перед отправкой данных на сервер","Можно протестировать форму, введя любые данные и в поле email указав почтовый ящик, куда придет тестовое сообщение с формы"],technologyes:["JavaScript (ES5)","SASS","CSS Grid"]},{date:"01.01.2019",title:"Приложение Личный кабинет",preview:"",desctiption:"Страницы ЛК:<br> - Главная<br> - Вход<br> - Регистрация",technologyes:["Node.js (ES6+)","Express","Passport","Mongoose","EJS","bcryptjs","connect-flash","routes","Bootstrap (Bootswatch)"],db:"MongoDB.Atlas"},{date:"12.2018",title:"Приложение для ведения счета в игре Настольный теннис",preview:"http://darqus.ru/_d/tts/",desctiption:"Возможности:<br>стандартное управление мышью (нажатием кнопок)*<br>управление с клавиатуры (перехват клавиатуры)* **<br>управление мышью нажатием на кнопки мыши в любом месте документа (перехват мыши)**<br>звуковое сопровождение приложения<br>настройки хранятся в браузере и будут прочитаны даже при перезагрузке браузера с очисткой кеша<br>возможность выбора цвета индикаторов табло<br>отображение подсказок<br>отображение общего числа сетов<br>возможность сбросить настройки<br>возможность использовать приложение в полноэкранном режиме<br>возможность использовать на всех устройствах, включая мобильные<br>* в этих режимах есть возможность отнять ошибочно прибавленное игроку очко во время игры<br>** в модале Справка есть подробное описание<br>Особенности: в приложении отсутствуют подключаемые извне графические файлы",technologyes:["JavaScript(ES6+)","CSS (root, var, grid, transition)"]},{date:"08.2018",title:"Приложение Счетчик обратного отсчета",preview:"http://darqus.ru/_d/fc/",technologyes:"JavaScript (ES6+)"},{date:"07.2018",title:"Приложение Математический тренажер",preview:"http://darqus.ru/_d/vue-math-training/",desctiption:"Число уровней сложности и число ответов динамически определяется из начального массива данных",viewComponents:["StartScreen - начальный экран","Question - вопрос","Message - сообщение-ответ на вопрос","ResultScreen - результат"],technologyes:["JavaScript (Vue 2x)","Bootstrap 4.1.3"]},{date:"07.2018",title:"Приложение - тестовый стенд",preview:"http://darqus.ru/_d/vue-key/",desctiption:"отображает клавиатурные события:<br>keydown, keypress, keyup",technologyes:["JavaScript (Vue 2x)","Bootstrap 4.1.3"]},{date:"06.2018",title:"Приложение для добавления и просмотра сериалов",preview:"http://darqus.ru/_d/vue-random-list/",desctiption:"Регистрация пользователя осуществляется через email<br>Данные пользователей хранятся на сервисе Google Firebase",technologyes:["JavaScript (Vue 2x)","Firebase","Bootstrap 4.1.3"]},{date:"06.2018",title:"Сервис для подбора и заказа товара",preview:"http://darqus.ru/_d/vue-cake-calc/",desctiption:"Приложение для заказа любого типа товара (в данном примере пирога)",technologyes:["JavaScript (Vue 2x)","Bootstrap 4.1.3"]},{date:"02.2017",title:"Приложение чат",preview:"http://darqus.ru/_d/chat/",desctiption:"Пользовательский чат с использованием MVC-паттерна и двусторонней привязки данных через сервис Google Firebase<br>Аутентификация пользователя осуществляется через аккаунт Google+",technologyes:["angular 1.5","firebase","gulp","sass"]},{date:"05.2014",title:"Flash версия демо проектов",preview:"http://darqus.ru/_d/flash/",desctiption:"Данные проекта загружается из внешних xml-файлов<br>Фоновая музыка: мастеринг FL Studio, формат mp3, битрейт 320 kb/s, sample rate 44100-48000",technologyes:["Flash","ActionScript","xml"]}]),a=function(){var t=(new Date).getHours();return t>4&&t<12?"ое утро":t>11&&t<19?"ый день":t>18&&t<24?"ый вечер":t>23||t<5?"ой ночи":t},n={name:"RecentProjects",data:function(){return{colors:["#76d7c4","#edbb99","#85c1e9","#f1948a","#73c6b6","#f4d03f"],items:r,qoute:'"',welcome:a()}},computed:{fillColors:function(){return new Array(Math.ceil(this.items.length/this.colors.length)).fill(this.colors).flat()}}},l=n,c=(s("3dfe"),s("2877")),d=s("6544"),p=s.n(d),u=s("8336"),v=s("62ad"),m=s("132d"),h=s("0fd9"),g=s("2fa4"),y=s("5530"),f=(s("0160"),s("58df")),b=s("7560"),_=Object(f["a"])(b["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(y["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),C=(s("c96a"),s("9d26")),x=s("a9ad"),w=Object(f["a"])(x["a"],b["a"]),S=w.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(C["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(y["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(y["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),k=Object(c["a"])(l,i,o,!1,null,"5d21ae59",null);e["default"]=k.exports;p()(k,{VBtn:u["a"],VCol:v["a"],VIcon:m["a"],VRow:h["a"],VSpacer:g["a"],VTimeline:_,VTimelineItem:S})},"3dfe":function(t,e,s){"use strict";s("2c44")},4069:function(t,e,s){var i=s("44d2");i("flat")},"9d26":function(t,e,s){"use strict";var i=s("132d");e["a"]=i["a"]},a2bf:function(t,e,s){"use strict";var i=s("da84"),o=s("e8b5"),r=s("07fa"),a=s("0366"),n=i.TypeError,l=function(t,e,s,i,c,d,p,u){var v,m,h=c,g=0,y=!!p&&a(p,u);while(g<i){if(g in s){if(v=y?y(s[g],g,e):s[g],d>0&&o(v))m=r(v),h=l(t,e,v,m,h,d-1)-1;else{if(h>=9007199254740991)throw n("Exceed the acceptable array length");t[h]=v}h++}g++}return h};t.exports=l}}]);
//# sourceMappingURL=chunk-2c8110cd.c50be190.js.map