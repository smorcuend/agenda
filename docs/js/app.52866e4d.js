(function(e){function a(a){for(var n,s,i=a[0],c=a[1],l=a[2],d=0,m=[];d<i.length;d++)s=i[d],o[s]&&m.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,s=1;s<t.length;s++){var c=t[s];0!==o[c]&&(n=!1)}n&&(r.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"0cc3d2db"}[e]+".js"}function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var a=[],t=o[e];if(0!==t)if(t)a.push(t[2]);else{var n=new Promise(function(a,n){t=o[e]=[a,n]});a.push(t[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e),r=function(a){c.onerror=c.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");s.type=n,s.request=r,t[1](s)}o[e]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/agenda/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var u=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"09ab":function(e,a,t){},"09d7":function(e,a,t){e.exports=t.p+"img/parrot.e4d958b3.gif"},"480c":function(e,a,t){"use strict";var n=t("f564"),o=t.n(n);o.a},"56d7":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("f751"),t("097d");var n=t("2b0e"),o=t("9f7b"),r=t.n(o),s=t("ecee"),i=t("f2d1"),c=t("c074"),l=t("ad3d"),d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("b-container",[t("router-view")],1)],1)},u=[],m=(t("7faf"),t("2877")),p={},h=Object(m["a"])(p,d,u,!1,null,null,null),b=h.exports,f=t("8c4f"),g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("BaseHeader",{attrs:{title:e.data.title}}),t("ScheduleList",{attrs:{tracks:e.data.tracks}}),t("BaseFooter")],1)},v=[],y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("header",[t("div",{staticClass:"base-header d-flex justify-content-between"},[t("h1",{staticClass:"title"},[e._v("\n      "+e._s(e.title)+"\n      "),t("small",{staticClass:"time"},[t("b-badge",{attrs:{variant:"info"}},[e._v(e._s(e.data.startTime))]),t("span",{staticClass:"text-muted px-2"},[e._v("-")]),t("b-badge",{attrs:{variant:"info"}},[e._v(e._s(e.data.endTime))])],1)]),t("b-button",{staticClass:"align-self-center",attrs:{variant:"primary"},on:{click:e.goBack}},[e._v("Volver a OSW")])],1)])},_=[],k=t("5176"),w=t.n(k),T={title:"Agenda Marzo 2019",date:"30/03/2019",description:"xxx",startTime:"10:00",endTime:"14:30",tracks:[{name:"Auditorio",content:[{title:"Recepción y café ☕️",startTime:{h:"10",m:"00"},endTime:{h:"10",m:"30"},type:1},{title:"KeyNote 📜",description:["- Novedades y noticias","- Hackerspace","- The amazing guilds showoff"],startTime:{h:"10",m:"30"},endTime:{h:"11",m:"00"},type:1},{title:"Kubernetes: más allá de Minikube",duration:45,description:["Últimamente Kubernetes está en todas partes, parece que es la tendencia en cualquier evento o charla techie que se precie. Y como siempre que un tema es tan popular, hay miles de tutoriales, publicaciones en blogs y charlas sobre cómo comenzar con Kubernetes. Parece que todo es perfecto en el mundo de los contenedores, ¿verdad?","Bueno, para ser honestos, no es así; sobre todo debido a que la gran mayoría de estos tutoriales, artículos y charlas se detienen justo después del * Hello Kube *, justo cuando ya tienes algunas aplicaciones ejecutándose en MiniKube en tu portátil. Y aquí no está el final, sino apenas el principio ...","En esta charla, hablaré sobre esta brecha entre MiniKube y una infraestructura de producción, las ventajas de las infraestructuras de Kubernetes administradas, las trampas y el bloqueo de algunos proveedores que no promueven estándares realmente abiertos, cómo obtener suficiente confianza en tu solución para ejecutar Kubernetes sobre Kubernetes y otros temas de este tipo. Y voy a aprovechar la oportunidad para contar cómo hemos montado nuestra solución alternativa de Managed Kubernetes en OVH, desarrollada en colaboración con los usuarios y fiel a los estándares open source."],startTime:{h:"11",m:"00"},endTime:{h:"11",m:"45"},type:2,authors:[{name:"Horacio González",avatar:"https://pbs.twimg.com/profile_images/1106247883542663169/HYOPGJMb_400x400.jpg",bio:["DevRel en OVH y Google Developer Expert. Español perdido en Bretaña, programador, orador y sobre todo geek. Ingeniero de software y DevRel durante el día, líder de FinistDevs y organizador del DevFest du Bout du Monde por la noche, Horacio comenzó su andadura en el mundo de la programación en 1997 y nunca lo ha abandonado.","Después de algunos años como líder de frontend @ warp10io como Cityzen Data, actualmente trabaja como Evangelist Developer en OVH. Además, es orador frecuente en conferencias como Devoxx, Codemotion, DevFest Nantes o BreizhCamp."],social:{twitter:"https://twitter.com/LostInBrittany",github:"https://github.com/LostInBrittany",url:"https://lostinbrittany.org/"}}]},{title:"La vida secreta de un DevOps",startTime:{h:"11",m:"45"},endTime:{h:"12",m:"30"},type:2,authors:[{name:"Jorge Vidal",avatar:"https://pbs.twimg.com/profile_images/1105462688363302913/EbKIXJuI_400x400.png",social:{twitter:"https://twitter.com/imsysadmin",linkedin:"https://www.linkedin.com/in/jvidalsysadmin/"},bio:['Jorge tiene más de 15 años de experiencia en el sector IT. Ha sido administrador de sistemas durante muchos años, pero el mundo del emprendimiento le aporto habilidades adicionales como "comercial", "preventa", "evangelizador", "desarrollo de negocio" y "charlatán".',"En sus ratos libres se dedica a conectar y mentorizar personas, y en OSW se le conoce como Goku, pero no por los pelos (que también), si no por liderar la guild de sistemas/devops que sostiene actualmente todas las guilds desarrolladas en esta comunidad.Actualmente trabaja Intelygenz como experto en DevOps/SRE"]}],description:["En la charla voy a desmentir mitos, voy a contar lo que hace un devops de verdad, que habilidades deberías tener para ejercer y por donde debería empezar un perfil de desarrollador para llegar a serlo."]},{title:"Licencias Open Source",description:["Las licencias de software son contratos. Hablaremos de qué son, para qué sirven y en qué se diferencian entre ellas las principales licencias Open Source. Veremos los problemas habituales y soluciones creativas desde un punto de vista legal.","Al final de la charla presentaremos un proyecto en colaboración con los Guilds de OSW para favorecer la elección de la mejor licencia para tu proyecto :-)"],startTime:{h:"12",m:"30"},endTime:{h:"13",m:"15"},type:2,authors:[{name:"No legal tech",avatar:"https://pbs.twimg.com/profile_images/900095133340905473/lnaQ7LKx_400x400.jpg",bio:["Law x Tech 🖱️ Talk is cheap, show me the code!! #legaltech #codingthelaw LegalLab💙"],social:{twitter:"https://twitter.com/NoLegalTech",url:"https://www.nolegaltech.com/es-ES"}},{name:"Bárbara Román",avatar:"https://www.nolegaltech.com/img/avatar_yAvMgUfV.jpg?1553522292",bio:["Bárbara es la autora intelectual de NoLegaltech, cofounder y CEO","Viene del mundo de la abogacía internacional, buscando un lugar más tranquilo para trabajar. Jajajaja más tranquilo, una consultora. Qué ilusa. Le encanta viajar, el rollo legal, los aguacates y la novela negra."]},{name:"María Cerviño",social:{twitter:"https://twitter.com/Mcervinho"},bio:["María es abogada especialista en empresas (derecho mercantil y laboral). En Nolegaltech se encarga de asesorar a empresas tech en la parte legal junto con Kuartillo.  Le encanta el derecho procesal, el mar y la música funky."]}]},{title:"Networking 🤗",startTime:{h:"13",m:"15"},endTime:{h:"14",m:"30"},type:1,authors:[],note:""}]},{name:"Planta 1 (Cafetería)",content:[{title:"BlockMAD",description:["En la edición de enero de 2018, BlockMAD tuvo su puesta de largo en OS Weekends, en la que se presentó un proyecto que relacionaba blockchain y administraciones públicas.\n            Poco más de un año después y en el mismo marco, tenemos el placer de presentar nuestro nuevo proyecto: BlockMAD Labs.\n            Este laboratorio de desarrollo de Blockchain va a tratar de llevar a cabo distintos proyectos de colaboración, principalmente a nivel de comunidad, con entidades y startups del sector, interesadas en explorar tecnologías punta y que tengan aplicación inmediata en las mismas.\n            Para ello, las entidades participantes ofrecerán charlas y talleres en las que expongan detalles de sus soluciones tecnológicas y en qué ámbitos necesitan de la colaboración de la comunidad, así como se integrarán a las distintas reuniones de los grupos de trabajo que se formen, aportando su experiencia y sus consejos.\n            Todos aquellos desarrolladores, técnicos o investigadores, entre otros, interesados en participar, en la medida de sus posibilidades, serán bienvenidos.","Dentro de los proyectos ya en marcha cabe destacar:","- Blockledger: en este Guild y a iniciativa de BlockMAD, se está desarrollando un blockchain permisionado para el intercambio de valor, mediante tokens, entre distintas comunidades tecnológicas con sus patrocinadores y proveedores.","- Ethic Hub y BlockMAD: junto con la startup Ethic Hub, uno de los pocos proyectos de éxito de la aplicación de blockchain y con impacto social, hemos empezado una colaboración en la que se espera que sirva tanto para mejorar sus infraestructuras de virtualización, como en otros aspectos de sus desarrollos.","- Brainrex: Está previsto organizar próximamente un taller para trabajar con sus herramientas avanzadas de análisis sintáctico mediante Inteligencia Artificial, sobre su propio Data Lake.","Y otros que iremos dando a conocer posteriormente."],authors:[{name:"BlockMAD",avatar:"https://pbs.twimg.com/profile_images/977557690749681665/kKiKMn0W_400x400.jpg",bio:["BlockMAD es una comunidad dedicada principalmente a la tecnología Blockchain, sobre todo en sus aspectos técnicos y a la elaboración de proyectos. Organizamos distintas actividades, entre ellas: presentaciones, talleres, code-exchange y hack-a-thons.","BlockMAD es una comunidad abierta, que se mantiene firme en la defensa del software libre, descentralizado y distribuido.","Únete a nuestra comunidad si tienes ganas de aprender, aportar tus conocimientos y crecer en este fascinante ecosistema."],social:{twitter:"https://twitter.com/blockmad",meetup:"https://www.meetup.com/es-ES/BlockMAD/"}}],startTime:{h:"11",m:"00"},endTime:{h:"11",m:"30"},type:3},{title:"La pastilla Roja/Azul del Cloud",description:["Al contratar los servicios cloud para el almacenamiento de nuestros archivos, permite disponer de estos en cualquier parte del mundo, pero, qué pasa si se vulnera la seguridad del cloud. ","kneda demostrará como se puede llegar a vulnerar la seguridad del cloud, consiguiendo información personal, y Lórien intentará a través de la forénsica, desenmascarar al autor."],authors:[{name:"kneda",avatar:"https://pbs.twimg.com/profile_images/474070021350518785/-MjulZL2_400x400.jpeg",bio:["Postgrado en Informática Forense y Delitos Informáticos + Master en Seguridad Informática y Hacking. ",'Trabaja como Black Box Pentester. Le encanta el mundo que rodea al Hacking, y se ha especializado en Ingeniería Social y Black Box test. Formador en varias materias de ciberseguridad, lo que llamamos "hacker" en las trincheras.',"Cofundadores de @Hack4ensicTeam - Co-organizadores HackMadrid %27"],social:{twitter:"https://twitter.com/JR_kneda",url:"http://kneda.net/"}},{name:"Lórien",avatar:"https://pbs.twimg.com/profile_images/931417271909736448/tRWQd6qD_400x400.jpg",bio:["Ingeniero Informático. Trabaja de Senior Incident Responder en Minsait","Es un apasionado de la Seguridad de la Información en varios ámbitos que se ha especializado en Informática forense y DFIR en entornos Cloud. Imparte cursos de análisis forense","Cofundadores de @Hack4ensicTeam - Co-organizadores HackMadrid %27"],social:{twitter:"https://twitter.com/loriendr"}}],startTime:{h:"11",m:"30"},endTime:{h:"12",m:"30"},type:3}]},{name:"Planta 0 (Cafetería)",content:[{title:"Guilds",description:["Dejamos este espacio para que los Guilds se sienten cara a cara y se arremanguen para empezar a planificar sus proyectos, idear, definir...lo que sea! Seguido de cerca por algunos mentores de la comunidad OSWeekends ;)"],startTime:{h:"11",m:"00"},endTime:{h:"14",m:"00"},type:1}]},{name:"Meetup Space (Sótano)",content:[{title:"Machine Learning para profanos",description:["Hoy en día es imposible no haber oído del Machine Learning y la Inteligencia Artificial, pero ... ¿en qué consiste realmente todo esto? ¿Es este mundo tan oscuro y complejo como parece?","Sin abusar de fórmulas y teoremas para que no se me duerma nadie, pretendo que aprovechemos al máximo estos escasos 45 minutos para que salgáis con una idea mucho más clara sobre en qué consiste esta nueva ciencia y como aplicarla."],startTime:{h:"11",m:"00"},endTime:{h:"11",m:"45"},type:2,authors:[{name:"Ángel Luengo Egido",avatar:"https://pbs.twimg.com/profile_images/986582889390333953/py32YOYM_400x400.jpg",social:{twitter:"https://twitter.com/BSaurius",linkedin:"https://www.linkedin.com/in/%C3%A1ngel-luengo-egido-7347a6130/"},bio:["BigDataSaurio (Ingeniero de Telecomunicaciones amante de los dinosaurios). Actualmente trabaja en el equipo de Cubelizer desarrollando algoritmos para el análisis de comportamiento de clientes en espacios retail físicos.","Apasionado de los datos y la estadística, además de conocer más de 200 especies de dinosaurios, Ángel domina diversas técnicas y tecnologías relacionadas con la ingeniería de datos, el IoT, la visión artificial y el machine learning."]}]},{title:"Introducción a la Visión Artificial con OpenCV",description:["Daremos un repaso por las técnicas de visión artificial que se aplican hoy en día en investigación y a productos comerciales. Si, por ejemplo, quieres saber cómo funcionan por dentro las redes neuronales convolucionales o la detección facial, esta es tu charla.","Los ejemplos vendrán acompañados de código en OpenCV para que se pueda experimentar durante la charla y también a posteriori."],startTime:{h:"11",m:"45"},endTime:{h:"12",m:"30"},type:2,authors:[{name:"Clara Luis",avatar:"https://pbs.twimg.com/profile_images/1092797236260601856/Qn5xPUb-_400x400.jpg",bio:["Audiovisual Systems Engineering @UC3M • @T3chFest organizer 👩‍💻 • Love #MachineLearning, #ComputerVision and #MusicInformationRetrieval • 📢#Feminism • #INFP"],social:{twitter:"https://twitter.com/vocalyre",instagram:"https://www.instagram.com/vocalyree/",url:"https://www.smule.com/vocalyre"}}]},{title:"Hackeando tu memoria.",startTime:{h:"12",m:"30"},endTime:{h:"14",m:"00"},type:2,authors:[{name:"Francisco Valdesoiro Gil",avatar:"https://pbs.twimg.com/profile_images/1072016049976107008/tydn73g7_400x400.jpg",bio:["Mi pasión siempre ha estado en torno a la tecnología y la enseñanza, soy una persona muy curiosa y siempre me ha gustado investigar sobre el funcionamiento de la mente y el cómo adquirimos nuevos conocimientos.","Estas inquietudes me llevaron desde aprender nuevas tecnologías desarrollando aplicaciones de realidad aumentada y virtual entre otras, a jugar con herramientas de memorización o mnemotecnia.","Gracias a este hobbie me vi envuelto sin darme cuenta en ayudar a gente a memorizar más rápido para pasar sus oposiciones y exámenes e impartir talleres en escuelas de pilotos, empresas y colegios."],social:{twitter:"https://twitter.com/GilValdesoiro",linkedin:"https://www.linkedin.com/in/francisco-valdesoiro-gil-711209118/",github:"https://github.com/FranciscoValdesoiro"}}],description:["¿Te ha pasado alguna vez que te has preparado un examen durante semanas y el día del examen te has quedado en blanco?","¿Por qué hay gente que recuerda todo lo que lee o escucha y es capaz de recordar detalles que para el resto de la gente pasan desapercibidos?","El objetivo de este taller es descubrir cómo funciona la memoria y conocer las herramientas que nos permitirán memorizar todo tipo de datos como nombres, listas de palabras, fechas y como preparar cualquier tipo de examen u oposición de una manera divertida y en mucho menos tiempo de lo que imaginas."]}]},{name:"Planta 0 (Corner)",content:[{title:"Taller de NodeSchool Madrid",description:["Taller de Node.js y JavaScript. Paso a paso siguiendo tutoriales"],startTime:{h:"12",m:"00"},endTime:{h:"14",m:"00"},type:2,authors:[{name:"Carlos Azaustre",avatar:"https://pbs.twimg.com/profile_images/1072016049976107008/tydn73g7_400x400.jpg",bio:["Senior Front End Software Engineer at @IBMResearch #IBMQ"],social:{twitter:"https://github.com/carlosazaustre",youtube:"https://www.youtube.com/channel/UCJgGc8pQO1lv04VXrBxA_Hg",twitch:"https://www.twitch.tv/carlosazaustre",instagram:"https://www.instagram.com/carlosazaustre/",github:"https://github.com/carlosazaustre",url:"https://carlosazaustre.es/"}},{name:"Jacinto J. C. Nieto",avatar:"https://pbs.twimg.com/profile_images/974735865418256384/bwfz8Z5q_400x400.jpg",bio:["Core: Be a best version of me. Heart: @OpcionTIC @os_weekends @OSWGuilds @SmartAreasTech #aprendizaje #luchador #constante #proactivo"],social:{twitter:"https://twitter.com/jacintoj_IT"}}]}]}]},j=T,q={name:"BaseHeader",props:{title:{type:String,required:!0}},data:function(){return{data:j}},methods:{goBack:function(){w()(document.createElement("a"),{target:"_blank",href:"https://osweekends.com"}).click()}}},x=q,C=(t("480c"),Object(m["a"])(x,y,_,!1,null,null,null)),S=C.exports,O=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e._l(e.tracks,function(e,a){return[t("ScheduleTable",{key:a,attrs:{track:e}})]})],2)},E=[],z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mb-5"},[t("b-table",{attrs:{items:e.track.content,fields:e.fields,outlined:"",hover:""},scopedSlots:e._u([{key:"startTime",fn:function(e){return[t("ScheduleTableColTime",{attrs:{data:e}})]}},{key:"title",fn:function(a){return[t("TalkTitle",{attrs:{title:a.item.title,type:a.item.type}}),a.item.description?t("TalkDescription",{attrs:{data:a.item.description}}):e._e(),a.item.authors?t("TalkAuthors",{attrs:{data:a.item.authors}}):e._e()]}}])})],1)},B=[],M=(t("7f7f"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"time-col"},[t("div",{staticClass:"time"},[t("span",{staticClass:"time--h"},[e._v(e._s(e.data.item.startTime.h))]),t("span",{staticClass:"colon"},[e._v(":")]),t("span",{staticClass:"time--m"},[e._v(e._s(e.data.item.startTime.m))])]),t("div",{staticClass:"time"},[t("span",{staticClass:"time--h"},[e._v(e._s(e.data.item.endTime.h))]),t("span",{staticClass:"colon"},[e._v(":")]),t("span",{staticClass:"time--m"},[e._v(e._s(e.data.item.endTime.m))])])])}),A=[],D={name:"ScheduleTableColTime",props:{data:{required:!0,type:Object||Array}}},I=D,L=Object(m["a"])(I,M,A,!1,null,"1b943ddc",null),H=L.exports,P=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h4",[e.type?t("b-badge",{attrs:{variant:e.badgeVariant(e.type)}},[e._v(" · ")]):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1)])},V=[],K=["primary","success","danger"],$={props:{type:{required:!1},title:{type:String,required:!0}},methods:{badgeVariant:function(e){return K[e-1]}}},F=$,G=Object(m["a"])(F,P,V,!1,null,"74070a21",null),J=G.exports,N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",e._l(e.data,function(a,n){return t("p",{key:n,staticClass:"lead"},[e._v("\n    "+e._s(a)+"\n  ")])}),0)},R=[],W={props:{data:{type:Array,required:!0}}},U=W,Y=Object(m["a"])(U,N,R,!1,null,"4853fa50",null),Q=Y.exports,X=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e._l(e.data,function(a,n){return[t("div",{key:"auth_"+n},[t("h5",[e._v(e._s(a.name))]),a.social?t("AuthorsSocial",{attrs:{social:a.social}}):e._e(),a.bio?t("AuthorsBio",{attrs:{bio:a.bio}}):e._e()],1)]})],2)},Z=[],ee=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"list-inline"},e._l(e.social,function(a,n){return t("li",{key:n,staticClass:"list-inline-item"},[t("a",{staticClass:"ico-link",class:"ico-"+n,attrs:{href:a}},[t("font-awesome-icon",{attrs:{icon:e.getIcon(n)}})],1)])}),0)},ae=[],te={twitch:["fab","twitch"],github:["fab","github"],twitter:["fab","twitter-square"],youtube:["fab","youtube-square"],facebook:["fab","facebook-square"],linkedin:["fab","linkedin"],instagram:["fab","instagram"],meetup:["fab","meetup"],url:"link"},ne={name:"AuthorsSocial",props:{social:{type:Object}},methods:{getIcon:function(e){return te[e]}}},oe=ne,re=Object(m["a"])(oe,ee,ae,!1,null,"8c470a8a",null),se=re.exports,ie=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",e._l(e.bio,function(a,n){return t("p",{key:n,staticClass:"lead text-muted"},[e._v("\n    "+e._s(a)+"\n  ")])}),0)},ce=[],le={name:"AuthorsBio",props:{bio:{type:Array}}},de=le,ue=Object(m["a"])(de,ie,ce,!1,null,"655bb19a",null),me=ue.exports,pe={components:{AuthorsSocial:se,AuthorsBio:me},props:{data:{type:Array,reuired:!0}}},he=pe,be=(t("8d19"),Object(m["a"])(he,X,Z,!1,null,null,null)),fe=be.exports,ge={name:"ScheduleTable",components:{ScheduleTableColTime:H,TalkTitle:J,TalkDescription:Q,TalkAuthors:fe},props:{track:{type:Object,required:!0}},data:function(){return{fields:[{key:"startTime",label:"Hora",class:"time-column"},{key:"title",label:this.track.name}]}},methods:{}},ve=ge,ye=(t("9be5"),Object(m["a"])(ve,z,B,!1,null,null,null)),_e=ye.exports,ke={name:"ScheduleList",components:{ScheduleTable:_e},props:{tracks:{type:Array,required:!0}},data:function(){return{key:"value"}}},we=ke,Te=Object(m["a"])(we,O,E,!1,null,null,null),je=Te.exports,qe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("footer",{staticClass:"text-center"},[e._m(0),t("p",[e._m(1),t("b-button",{attrs:{variant:"link"},on:{click:function(a){return e.goUrl("https://github.com/OSWeekends/agenda?ref=agenda")}}},[e._v("Editar en Github")]),t("b-button",{attrs:{variant:"link"},on:{click:function(a){return e.goUrl("https://osweekends.com/?ref=agenda")}}},[e._v("OSW")]),t("b-button",{attrs:{variant:"link"},on:{click:function(a){return e.goUrl("https://invitations-osweekends.herokuapp.com/?ref=agenda")}}},[e._v("#Slack")]),e._m(2)],1)])},xe=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Made with 💙 by OSWeekends "),t("a",{attrs:{href:"https://github.com/OSWeekends/agenda/graphs/contributors",target:"_blank"}},[e._v("Guilders")]),e._v(" 🦄")])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:t("09d7"),alt:"parrot"}})])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("span",{staticClass:"parrot-img"},[n("img",{attrs:{src:t("68f2"),alt:"parrot"}})])}],Ce={name:"BaseFooter",methods:{goUrl:function(e){w()(document.createElement("a"),{target:"_blank",href:e}).click()}}},Se=Ce,Oe=(t("e4a9"),Object(m["a"])(Se,qe,xe,!1,null,null,null)),Ee=Oe.exports,ze={name:"home",components:{BaseHeader:S,ScheduleList:je,BaseFooter:Ee},data:function(){return{data:j}}},Be=ze,Me=Object(m["a"])(Be,g,v,!1,null,null,null),Ae=Me.exports;n["a"].use(f["a"]);var De=new f["a"]({routes:[{path:"/",name:"home",component:Ae},{path:"/about",name:"about",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}}]}),Ie=t("2f62");n["a"].use(Ie["a"]);var Le=new Ie["a"].Store({state:{},mutations:{},actions:{}});t("f9e3"),t("2dd8");s["c"].add(i["g"],i["b"],i["a"],i["h"],i["d"],i["c"],i["f"],c["a"],i["e"]),n["a"].component("font-awesome-icon",l["a"]),n["a"].use(r.a),n["a"].config.productionTip=!1,new n["a"]({router:De,store:Le,render:function(e){return e(b)}}).$mount("#app")},"68f2":function(e,a,t){e.exports=t.p+"img/parrotright.db57bf97.gif"},"6b30":function(e,a,t){},"7faf":function(e,a,t){"use strict";var n=t("8fba"),o=t.n(n);o.a},"871f":function(e,a,t){},"8d19":function(e,a,t){"use strict";var n=t("6b30"),o=t.n(n);o.a},"8fba":function(e,a,t){},"9be5":function(e,a,t){"use strict";var n=t("871f"),o=t.n(n);o.a},e4a9:function(e,a,t){"use strict";var n=t("09ab"),o=t.n(n);o.a},f564:function(e,a,t){}});
//# sourceMappingURL=app.52866e4d.js.map