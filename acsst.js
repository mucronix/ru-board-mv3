var acsst = [
"",`
body, table {
	background: #104B76 url(` + chrome.runtime.getURL("bg.png") + `);
	cursor: default
}
a:link, a:visited, a:active {
    text-decoration: none;
    color: #333;
    font-family: Verdana, Arial, Helvetica, sans-serif
}
* {
	border-radius: 0!important
}
input[type=range] {
	position: relative;
	top: 2px
}
input[type=checkbox], input[type=radio] {
	display: inline-block;
	position: relative;
	top: 1px;
	background-color: #ddd;
	border-radius: 100%!important;
	box-shadow: inset 0 1px 1px 1px hsla(0,0%,100%,1),inset 0 -1px 1px 1px hsla(0,0%,0%,.25),0 1px 1px .5px hsla(0,0%,0%,.5);
	height: 20px;
	width: 20px;
	-webkit-appearance: none;
	outline: none;
	margin-right:5px;
	cursor:pointer
}
input[type=checkbox]:after, input[type=radio]:after {
	display: inline-block;
	content: "";
	position: relative;
	left: 3px;
	top: 3px;
	height: 12px;
	width: 12px;
	background-color: #766;
	border-radius: 100%!important;
	box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.4),0 1px 1px hsla(0,0%,100%,.9)
}
input[type=checkbox]:checked:after, input[type=radio]:checked:after {
	background-color: #0f7;
	box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.4),inset 0 2px 2px hsla(0,0%,100%,.4),0 1px 1px hsla(0,0%,100%,.8),0 0 2px 2px hsla(68,69%,76%,.4);
	transition:.4s
}
.dats input[type=checkbox], input[type=radio], #tm input[type=checkbox], #mpmd input[type=checkbox] {
	top: -2px
}
input[type=range] {
	background-image: linear-gradient(to right, hsla(0,0%,100%,.1) 45%, transparent 45%),linear-gradient(hsla(0,0%,0%,.1), hsla(0,0%,100%,.1)),linear-gradient(to right, #b0c43c, #f66);
	background-size: 3px 3px, 100% 100%, 100% 100%;
	border-radius: 25px!important;
	box-shadow: inset 0 1px 4px hsla(0,0%,0%,.5),inset 0 0 10px hsla(0,0%,0%,.5),0 0 0 1px hsla(0,0%,0%,.1),0 -1px 2px 1px hsla(0,0%,0%,.25),0 2px 2px 1px hsla(0,0%,100%,.5),0 -2px 5px 2px hsla(0,0%,100%,.75),0 2px 5px 2px hsla(0,0%,0%,.25);
	cursor: pointer;
	height: 10px;
	position: relative;
	width: 250px;
	outline: none;
	-webkit-appearance: none;
	transition: .15s
}
input[type=range]::-webkit-slider-thumb {
	background-color: #eee;
	background-image: linear-gradient(hsla(0,0%,100%,.1), hsla(0,0%,0%,.1));
	border-radius: 25px!important;
	box-shadow: inset 0 1px 1px 1px hsla(0,0%,100%,1),inset 0 -1px 1px 1px hsla(0,0%,0%,.25),0 1px 3px 1px hsla(0,0%,0%,.5),0 0 2px hsla(0,0%,0%,.25);
	content: "";
	display: block;
	height: 20px;
	left: 0;
	position: relative;
	top: -2px;
	width: 20px;
	-webkit-appearance: none;
	cursor:pointer
}
input[type=number], input[type=text], input[type=password], textarea, select {
	background: #cdc;
	background-size: 100% 100%, 200% 100%;
	background-position: 0% 0%, 5px 0%;
	border-radius: 5px;
	border: none;
	box-shadow: inset 0 1px 4px hsla(0,0%,0%,.1),inset 0 0 10px hsla(0,0%,0%,.1),0 0 0 1px hsla(0,0%,0%,.1),0 -1px 2px 1px hsla(0,0%,0%,.25),0 1px 2px 1px hsla(0,0%,100%,.5);
	padding: 5px 10px;
	color: #888;
	position: relative;
	outline: none;
	transition: .3s
}
input[type=number] {
	width: 39px;
	padding: 2px 3px 0;
	font: 13px/20px sans-serif
}
input[type=number]:focus, input[type=text]:focus, input[type=password]:focus, textarea:focus, select:focus {
	background: #fff;
	color: #000
}
input[type=submit], a img, a.tpc:visited, a.tpc:link, input.button, #pps * {
	background: linear-gradient(to bottom, #FFF 2%, #ECDFBC 10%);
	border-radius: 4px;
	color: #009;
	border: solid 1px #339;
	cursor:pointer
}
hr img {
	padding: 0;
	margin: 1px
}
input[type=submit]:hover, a img:hover, a.tpc:hover, input.button:hover {
	color: #000;
	border: solid 1px #f77;
	background: linear-gradient(to top, #ffc, #fefced)
}
input[type=submit]:active, a img:active, a.tpc:active {
	color: #f77;
	background-color: #fff;
	border: solid 1px #f77;
	box-shadow: 0 0 4px 0px #f77 inset
}
.sh1 a,.sh2 a  {
	font-family: georgia!important;
	font-size: 16px
}
.sh1 a,.sh2 a, .tit a {
	text-shadow: 2px 8px 6px rgba(0,0,0,.2),0px -5px 35px rgba(255,255,255,.3)!important;
	font-weight: bold
}
.sh1 a:hover, .sh2 a:hover, .tit a:hover {
	text-shadow: 0px 4px 3px rgba(0,0,0,.4),0px 8px 13px rgba(0,0,0,.1),0px 18px 23px rgba(0,0,0,.1)!important
}
.tit a {
	font-size: 12px
}
::-webkit-scrollbar {
	width: 8px;
	height: 8px
}
.scroll::-webkit-scrollbar {
	width: 12px;
	height: 12px
}
.content div {
	background: linear-gradient(to bottom,#ECE1C0,#FFEDB3)
}
.content table {
	margin: 2px
}
.obertka {
	box-shadow: 0 0 20px -1px #000;
	border-radius: 2px;
	padding: 8px
}
.shadow {
	display: none
}
.tit, .sh1, .sh2, #pt1 {
	background: linear-gradient(to bottom, rgb(199, 215, 255), rgb(203, 244, 255))
}
.post, .poster, .tpc, .tpc2 {
	background: #EADEC3
}
td, .dats, .dats2 {
	background: linear-gradient(to bottom, #B8CBCB, #D9E6E7)
}
.bottomline[bgcolor] {
	background: linear-gradient(to top, #C3CDCE, #E5F1F2)
}
.lgf {
	border-radius: 4px;
	background: linear-gradient(to bottom, rgb(200,255,244) 0%,rgb(100,233,206) 100%)
}
.lgf td {
	background: rgb(150,243,226)
}
.sing * {
	border-radius: 4px;
	background: linear-gradient(to bottom, #EAEE9B, #B8BD4C)
}
.tb {
	border: solid 0px #777!important;
	box-shadow: 0px 0px 0px 0px #333
}
.small {
	color: #900
}
td.small {
	background: #BEDEE1!important
}
form {
	margin-bottom: -1px
}
form[name=mt] td > img {
	background: none;
	background-image: linear-gradient(to left, hsla(0,0%,0%,.5) 45%, transparent 45%),linear-gradient(hsla(0,0%,0%,.1), hsla(0,0%,100%,.1)),linear-gradient(to left, #b0c43c, #f66);
	background-size: 3px 3px, 100% 100%, 100% 100%;
	border: 0
}
form[name=mt] table table td {
	padding: 0
}
table {
	border: none;
	border-radius: 4px;
	padding: 1px;
	margin: 2px auto;
	box-shadow: none
}
tbody, tr {
	background: none;
	box-shadow: none;
	border: none
}
img {
	border: solid 1px #777;
	border-radius: 6px;
	background: linear-gradient(to top,#ACA379,#E0DBB2,#ACA379)
}
span img, .tb img {
	padding: 5px;
	margin: 5px
}
td {
	border: solid 1px #D3E6EF;
	border-radius: 4px;
	padding: 5px 10px;
	margin: 5px;
	box-shadow: none
}
select, textarea, input {
	margin: 4px
}
select {
	padding: 4px
}
#tags_panel {
	background: linear-gradient(to bottom,#80A4FF,#ABEDFF)!important;
	border-radius: 8px!important
}
#tags_panel img, #fix_tg_pan img {
	padding: 0px;
	margin: 2px
}
.onl {
	background: linear-gradient(to bottom,#cdfeFF,#ABEDFF)
}
#panel:hover, #qmenu, #nbpanel0 {
	background: rgba(0,10,30,.5)!important
}
#fpost {
	padding: 0
}
#nbpanel0 table {
	margin: 1px 5px
}
#nbpanel0:hover {
	left: -10px
}
td[bgcolor] div.blp {
	background: linear-gradient(to bottom, #C3CDCE, #E5F1F2);
	padding: 6px;
	margin: -5px -10px 5px -10px;
	border-radius: 4px;
	border-bottom: solid 2px #777
}
.post table, .dats table, #rep table {
	margin: 5px
}
#lppic {
    margin-top: -8px
}
`,`
body {
	background: #ccc;
	color: #333;
	cursor: default
}
* {
	font-family: "Trebuchet MS", Helvetica, sans-serif !important
}
#blt{position:relative;left:-1px!important}
#cbac{margin-left:2px}
#pgour{top:34px}
#pgour a{padding: 7px 11px 5px 9px!important}
#sert{top:130px}
#sert img{left:-3px}

input[type=checkbox], input[type=radio] {
	display:inline-block;
	position:relative;
	top:-1px;
	height:16px;
	width:16px;
	margin-right:5px;
	background-color:#cecece;
	border:1px solid #777;
	border-radius:50%!important;
	cursor:pointer;
	-webkit-appearance:none;
	outline:none
}
input[type=checkbox]:after, input[type=radio]:after{
	display:inline-block;
	content:'';
	position:relative;
	top:2px;
	left:2px;
	height:10px;
	width:10px;
	background-color:#48648a;
	box-shadow:inset 0 1px 1px rgba(0,0,0,.55);
	border-radius:50%!important;
}
input[type=checkbox]:checked:after, input[type=radio]:checked:after{
	box-shadow:inset 0 1px 1px rgba(0,0,0,.4);
	background-color:#9FD468;
	transition:all .2s
}
.dats input[type=checkbox], input[type=radio]{
	top:-1px
}
input[type=submit], input[type=button] ,a img, a.tpc:visited, a.tpc:link, button, input.button, #pps * {
	display:inline-block;
	font-weight: 700;
	font-size:12px;
	color: #444 !important;
	padding:6px 10px;
	cursor:pointer;
	border:1px solid #999;
	border-radius:2px;
	background:linear-gradient(#e4e4e4, #d4d4d4);
	transition:all .2s ease-in-out;
	outline:none
}
input[type=submit]:hover, input[type=button]:hover, a img:hover, a.tpc:hover, button:hover, input.button:hover {
	color:#000 !important;
	text-shadow:none !important;
	border:1px solid #888;
	background:linear-gradient(#fafafa, #ccc);
	box-shadow:0 1px 3px rgba(0,0,0,.45)
}
input[type=submit]:active, input[type=button]:active, a img:active, a.tpc:active, button:active, input.button:active {
	color:#333;
	border:1px solid #444;
	background:linear-gradient(#f9f9f9, #ccc);
	box-shadow:0 1px 5px rgba(0,0,0,.5) inset
}
button{
	margin-left:5px;
	padding:5px 12px 6px
}
input[type=submit], input[type=reset]{
	margin:0;
	vertical-align:middle
}
input[type=number], textarea, select, input[type=text], input[type=password]{
	background:#f5f5f5;
	background-size: auto auto;
	background-position: 0 0, 5px 0;
	border-radius:2px;
	box-shadow: inset 0 1px 4px hsla(0,0%,0%,.1),inset 0 0 10px hsla(0,0%,0%,.1),0 0 0 1px hsla(0,0%,0%,.1),0 -1px 2px 1px hsla(0,0%,0%,.25),0 1px 2px 1px hsla(0,0%,100%,.5);
	vertical-align:middle;
	border:0;
	padding:6px 16px 6px 8px;
	margin:3px 9px 3px 3px !important;
	color: #333 !important;
	font-size:12px !important;
	position:relative;
	-webkit-appearance:none;
	transition:.15s
}
input[type=number] {
	padding: 2px 3px 0
}
select{
	padding: 5px 15px;
	margin-right:5px !important
}
input[type=number]:focus, input[type=text]:focus, input[type=password]:focus, textarea:focus, select:focus{
	background: #fefefe;
}
input[type=text]:before{
	content:''
}
SPAN.tpc{
	background:none;
	font-size:11px
}
.sing a:link{
	font-weight:300 !important;
	font-size:10px !important
}
small, .dats, span.small, .small a, .mini a{
	font-size:11px !important
}
.tpc a{
	font-weight:700!important;
	font-size:12px !important
}
.small, .dats a{
	font-size:12px !important
}
.pusto * {
	font-size: 11px;
	font-family: Verdana, Arial, Helvetica, sans-serif!important
}
/* .small b{
	color: #700070;
	font-weight: 700;
	font-size: 12px
} */
/* .pusto a, */.pusto b, .dats b{
	font-weight: 700;
	font-size: 13px
}
.m b{
	font-weight:700!important;
	font-size:14px!important
}
.tit a{
	font-size:15px !important;
	font-weight:700 !important
}
.sh1, .sh2{
    font-size:12px;
    color:#333;
    background-color:#FFF;
    padding:10px 10px 10px 0
}
.tit, .sh1, .sh2, #pt1 {
    background:linear-gradient(to bottom, #d3deed, #B0C4DE);
	padding-right:10px
}
td.small{
	background:linear-gradient(to bottom, #d3deed, #B0C4DE) !important;
	padding:6px
}
.poster, .dats, .dats2{
    background:linear-gradient(to bottom, #eaeaea, #c0c0c0) !important;
}
.tpc{
	background:linear-gradient(to bottom,#bebebe,#eaeaea,#eee,#f0f0f0)
}
td[bgcolor] .bottomline {
    background:linear-gradient(to top, #bebebe,#ccc,#eee,#f0f0f0)
}
.big a, .big b, .sh1 a, .sh2 a{
	text-shadow:2px 8px 6px rgba(0,0,0,0.2),0px -5px 35px rgba(255,255,255,0.3);
	font-size:16px;
	font-weight:700;
	background-color:transparent;
}
.big a:hover, .sh1 a:hover, .sh2 a:hover{
	text-shadow:0px 4px 3px rgba(0,0,0,0.4),
	0px 8px 13px rgba(0,0,0,0.1),
	0px 18px 23px rgba(0,0,0,0.1);
}
.lgf{
	border:0;
	background:#fafafa;
	font-size:13px !important;
	font-style:italic !important;
	color:#055 !important
}
.sing{
	border:1px solid #aaa !important;
	box-shadow:none;
	background:linear-gradient(rgb(234, 234, 234), rgb(192, 192, 192)) !important
}
form{
	margin:0;
	padding:0
}
form[name*="forumjump"] {
	padding:10px;
	background:linear-gradient(rgb(234, 234, 234), rgb(192, 192, 192)) !important
}
tbody {
	background-color:#eee
}
table {
	background-color:transparent;
	box-shadow: 0 0 1px #666, 0px 3px 5px rgba(85, 85, 85, 0.5)
}
tr {
	background: linear-gradient(rgb(234, 234, 234), rgb(192, 192, 192)) !important
}
td {
	background-color: transparent
}
.sh2 {
	padding-right: 10px
}
#tags_panel{
	background:#b0c4dE !important;
	border-radius:3px !important;
	width:200px !important
}
#tags_panel img{
	margin: 5px
}
a img{
	position:relative;
	top:7px;
	margin-bottom:15px;
	margin-left:5px
}
/* span.mini{
	line-height:22px
} */
.dats, .small{
	padding:10px 10px 10px 15px
}
.dats td{
	padding-bottom:1px !important
}
.onl{
	padding:6px
}
select[name*=menu]{
    background:#eee;
    border-radius:5px;
    border:0;
    padding:10px 15px;
    color:#333;
	font-size:13px;
	line-height:20px;
    position:relative;
    -webkit-appearance:none;
    transition:.15s;
    background-image:linear-gradient(hsla(0,0%,100%,.1), hsla(0,0%,0%,.1));
    box-shadow:inset 0 1px 1px 1px hsla(0,0%,100%,.25),
                inset 0 -1px 1px 1px hsla(0,0%,0%,.1),
                0 1px 3px 1px hsla(0,0%,0%,.1),
                0 0 2px hsla(0,0%,0%,.1)
}
input[type=url]:focus, input[type=number]:focus, select[name*=menu]:focus{
	color:#f00;
	background:#fefefe;
	outline:none
}
.clear-shadow {
	clear: both
}
.content{
    position:relative;
    width:100%;
    height:1px;
    z-index:5;
    border-top:solid 1px #eee;
}
.content div{
	background:#b3c8ff;
	-webkit-filter: opacity(0.9);
	filter: opacity(0.9);
	box-shadow:0 1px 1px #333;
    border-radius:3px;
}
::-webkit-scrollbar{
	height:12px;
	width:12px;
	background-color:#f5f5f5;
	border:1px solid #ccc
}
::-webkit-scrollbar-thumb:vertical{
	background-color:#ccc;
	border-left: 1px solid #ccc;
	border-right:1px solid #ccc;
	box-shadow:inset 0 0 0 1px #f5f5f5, inset 1px 0 1px 1px #aaa
}
::-webkit-scrollbar-thumb:horizontal{
	background-color:#ccc;
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
	box-shadow:inset 0 0 0 1px #f5f5f5, inset 1px 0 1px 1px #aaa
}
::-webkit-scrollbar-thumb:vertical:hover, ::-webkit-scrollbar-thumb:horizontal:hover{
	background-color:#bbb;
	box-shadow:inset 0 0 0 1px #f5f5f5, inset 0 0 0 2px #999
}
::-webkit-scrollbar-corner{
	background-color:#ddd
}
#panel:hover, #qmenu, #nbpanel0 {
	background: rgba(0,10,30,.5)!important
}
#nbpanel0 table {
	margin: 1px 5px
}
#nbpanel0:hover {
	left: -10px
}
#nbpanel6 {
	padding: 0;
	background: none!important
}
td[bgcolor] div.blp {
	background: linear-gradient(to bottom, #ccc, #eee);
	padding: 4px;
	margin: -4px -4px 4px;
}
#t1 {
	min-height: 67px
}
#lppic {
    margin-top: -12px
}

`
];