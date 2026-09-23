var acsst = [
"",
`
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
`,
`
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

`,
`
body {
	background:url(${chrome.runtime.getURL("grid.jpg")})
!important}
input[type=submit], a img, a.tpc:visited, a.tpc:link, input.button, #pps * {
	cursor: pointer!important;
	border: 1px solid rgb(218, 218, 218)!important;
	box-shadow: inset 0 1px 0 0 #FFF, 0 1px 0 0 #BBB!important;
	border-radius: 1px!important;
	outline: none
!important}
input[type=submit]:hover, a img:hover, a.tpc:hover, input.button:hover {
	background: #fff!important;
	border: 1px solid rgb(218, 218, 218)
!important}
input[type=submit]:active, a img:active, a.tpc:active {
	color: #f77!important;
	background-color: #fff!important;
	border: 1px solid rgb(210, 210, 210)!important;
    box-shadow: inset 0 1px 0 0 #8E8E8E, 0 1px 0 0 #FFF
!important}
td[bgcolor="#FFFFFF"], td[bgcolor="#FFFFFF"] .blp, .bottomline[bgcolor="#FFFFFF"] {
	background: #DDE3E8
!important}
.bottomline[bgcolor="EEEEEE"]  {
	background: #eee
!important}
td {
	padding: 5px
!important}
.tit {
	background: linear-gradient(to bottom, #fff, #ddd)
!important}
.lgf {
	padding: 5px!important;
  background: #fff!important;
  border: 1px solid #C9C9C9!important;
  overflow: auto!important;
  margin-left: 10px!important;
  font-size: 11px!important;
  line-height: 140%!important;
  border-radius: 5px!important;
  -webkit-border-radius: 5px!important;
  box-shadow: 0px 1px 3px rgba(255,255,255,1) inset, 0px 1px 2px rgba(0,0,0,0.2)!important;
}
.tb td.dats  img {
	padding: 2px!important;
    background: rgba(255, 255, 255, .5)!important;
    box-shadow: 0 0 1px 1px #acccdd!important;
}
select, textarea, input[type=text], input[type=password], input[type=number] {
	box-shadow: rgba(0, 0, 0, 0.0980392) 0px 1px 1px inset, rgba(0, 0, 0, 0.0980392) 0px 0px 1px inset, rgba(0, 0, 0, 0.0980392) 0px 0px 0px 1px, rgba(0, 0, 0, 0.247059) 0px -1px 1px 1px, rgba(255, 255, 255, 0.498039) 0px 1px 1px 1px!important;
	padding: 5px!important;
	border: none!important;
    border-radius: 2px!important;
	margin: 2px!important;
	outline: none
!important}
select {
	padding: 4px
!important}
input[type=number]  {
	height: 24px!important;
	padding: 0 0 0 5px
!important}
#panel:hover, #qmenu, #nbpanel0 {
	background: rgba(221, 227, 232, 0.9)!important
}
input[type=checkbox], input[type=radio] {
	height: 16px!important;
	width: 16px!important;
	outline: none!important;
	cursor: pointer
!important}
.dats, .poster, .sh1, .sh2, td.small, form td, #pt1 {
	background: url(${chrome.runtime.getURL("4.gif")}) bottom repeat-x #FBFBFC
!important}
#t1 {
    text-shadow: -1px -.1px 1px #FFFFFF, 1px 1px 1px #6C6C6C!important;
    color: rgb(193, 211, 228)!important
}
.sh1 a,.sh2 a  {
	font-family: georgia!important;
	font-size: 14px
!important}
.sh1 a,.sh2 a, .tit a {
	text-shadow: 1px 4px 3px rgba(0,0,0,.2),0px -3px 15px rgba(255,255,255,.3)!important;
	font-weight: bold
!important}
.sh1 a:hover, .sh2 a:hover, .tit a:hover {
	text-shadow: 0px 1px 1px rgba(0,0,0,.4),0px 2px 2px rgba(0,0,0,.1),0px 2px 3px rgba(0,0,0,.1)!important
}
form {
	margin-bottom: -1px
!important}
/* .poster a,  */#nbpanel0 a {
  color: #145CA0!important
}
form[name=mt] td > img {
	background: url(${chrome.runtime.getURL("bg.png")})
!important}
div.blp {
	padding: 6px!important;
	margin: -5px -5px 5px -5px
!important}
table {
	background-color: #83989D!important
}
#lppic {
    margin-top: -12px
!important}
`,
`
body {
	background: #57606f!important;
	color: #34495E
!important}
.tb {
	border: 0!important
}
input[type=submit], a img, a.tpc:visited, a.tpc:link, input.button, #pps * {
	background: rgba(241, 242, 246, 0.5)!important;
	cursor: pointer!important;
	border: 0!important;
	border-radius: 2px!important;
	outline: none!important;
	margin: 0 .5px
!important}
td[bgcolor="#EEEEEE"] input[type=submit], td[bgcolor="#EEEEEE"] a img, td[bgcolor="#EEEEEE"] a.tpc:visited, td[bgcolor="#EEEEEE"] a.tpc:link, td[bgcolor="#EEEEEE"] input.button {
	background: #CED6E0
!important}
input[type=submit]:hover, a img:hover, a.tpc:hover, input.button:hover, #panel :hover {
	background: rgba(241, 242, 246, 1)!important;
	border: 0!important
}
td[bgcolor="#EEEEEE"] input[type=submit]:hover, td[bgcolor="#EEEEEE"]  a img:hover, td[bgcolor="#EEEEEE"]  a.tpc:hover, td[bgcolor="#EEEEEE"]  input.button:hover {
	background: rgba(241, 242, 246, 1)!important;
	border: 0!important
}
input[type=submit]:active, a img:active, a.tpc:active {
	color: #f77!important;
	background: #fff!important;
	border: 0!important;
    box-shadow: none
!important}
td[bgcolor="#FFFFFF"], td[bgcolor="#FFFFFF"] .blp, .bottomline[bgcolor="#FFFFFF"] {
	background: #ced6e0
!important}
td[bgcolor="#EEEEEE"], td[bgcolor="#EEEEEE"] .blp, .bottomline[bgcolor="#EEEEEE"] {
	background: #dfe4ea
!important}
td[bgcolor="#FFFFFF"] .lgf:not(.hljs) {
	background-color: #dfe4ea
!important}
.hlu2 {
	background: rgb(26, 188, 156)
!important}
td {
	padding: 5px
!important}
.tit {
	background: rgb(223, 228, 235)
!important}
#panel:hover, #qmenu, #nbpanel0 {
	background: rgba(221, 227, 232, 0.9)!important
}
tr:nth-child(odd), #pt1 {
	background-color: #ced6e0
!important}
tr:nth-child(even) {
	background-color: #B4C4CF
!important}
table {
	background-color: #ced6e0!important
}
select, textarea, input[type=text], input[type=password], input[type=number] {
	padding: 5px!important;
	border: 1px solid #A8C1CA!important;
    border-radius: 4px!important;
	margin: 1px!important;
	outline: none
!important}
select {
	padding: 4px
!important}
*[name]:focus:not(.tpc) {
	border: 1px solid #ffC1CA!important;
}
input[type=checkbox], input[type=radio] {
	height: 16px!important;
	width: 16px!important;
	border: 1px solid #A8C1CA!important;
	border-radius: 4px!important;
	outline: none!important;
	cursor: pointer
!important}
form {
	margin-bottom: -1px
!important}
input[type=number]  {
	height: 24px!important;
	padding: 0 0 0 5px
!important}
.sh1 a,.sh2 a  {
	color: #004890!important;
	font-family: georgia!important;
	font-size: 14px
!important}
.sh1 a,.sh2 a, .tit a {
	font-weight: bold
!important}
.sh1 a:hover, .sh2 a:hover, .tit a:hover {
	color: #f00!important
}
div.blp {
	padding: 6px!important;
	margin: -6px -6px 5px -6px
!important}
form[name=mt] td > img {
	margin: -5px
!important}
#t1 {
    text-shadow: -1px -.1px 1px #FFFFFF, 1px 1px 1px #6C6C6C!important;
    color: #747d8c!important
}
td {
	border: solid 1px rgba(0,0,0,0)!important
}
#lppic {
    margin-top: -14px
!important}
`,
`
body {
	background: #2E3133
!important}
#tm, #imex, #mpm, #mdata, #sigm, #sigm div, #rep0 td, #ujsm, #bfont, #bss {
	background: rgb(73, 77, 84)
!important}
#fpr {
  background: rgb(106, 110, 99)!important;
}
body, body .dats, body .lgf, #ujsm {
	color: #ADA17A
!important}
.tb {
	border: 0!important
}
SELECT, option, textarea, input[type] {
	text-shadow: none
!important}
SELECT:focus, option:focus, textarea:focus, input[type]:focus {
	background: #9DA99D
!important}
td[bgcolor="#EEEEEE"] a img, #nbpanel5 td {
	background: rgb(66, 69, 73)
!important}
input[type=submit], a img, a.tpc:visited, a.tpc:link, .flhead .tpc, input.button, #pps * {
	background: #444!important;
	color: #ADA17A!important;
	text-shadow: 0 1px #000!important;
	cursor: pointer!important;
	border: 0!important;
	border-radius: 2px!important;
	outline: none!important;
	margin: 0 .5px!important;
	box-shadow: 0 0 0 1px #716B58
!important}
#bbs, #dsms {
	box-shadow: 0 0 0 1px #716B58
!important}
#pps * {
	text-shadow: none!important;
	box-shadow: none
!important}
a.tpc *:not(.webd) {
	color: #ADA17A!important
}
input[type=submit]:hover, a img:hover, a.tpc:hover, .flhead .tpc:hover, input.button:hover, #panel :hover {
	background: #555!important;
	color: #ADA17A!important;
	text-shadow: 0 1px #000!important;
	border: 0!important;
	
}
input[type=submit]:active, a img:active, a.tpc:active {
	color: #f77!important;
	background: #fff!important;
	border: 0!important;
    box-shadow: none
!important}
td[bgcolor="#FFFFFF"], #res td[bgcolor="#FFFFFF"] {
	background: rgb(66, 69, 73)!important;
	color: #ADA17A!important;
	text-shadow: 0 1px #000
!important}
td[bgcolor="#FFFFFF"] .blp, .bottomline[bgcolor="#FFFFFF"] {
	background: rgb(66, 69, 73)
!important}
body .obertka, td[bgcolor="#EEEEEE"], #res td[bgcolor="#EEEEEE"] {
	background: rgb(73, 77, 84)!important;
	color: #ADA17A!important;
	text-shadow: 0 1px #000
!important}
td[bgcolor="#EEEEEE"] .blp, .bottomline[bgcolor="#EEEEEE"] {
	background: rgb(73, 77, 84)
!important}
.hlu2 {
	background: rgb(0, 119, 96)
!important}
.lp00 {
	background: #a00!important;
	color: #ccc
!important}
td {
	padding: 5px
!important}
td[bgcolor="#dedfdf"] {
	background: rgb(77, 78, 80)
!important}
td[bgcolor="#6699CC"] {
	background: #515e6b
!important}
tr:nth-child(odd) td[bgcolor="#f7f7f7"], td[bgcolor="#dddddd"] {
	background: #40464C
!important}
tr:nth-child(even) td[bgcolor="#f7f7f7"] {
	background: rgb(66, 69, 73)
!important}
body .big[bgcolor="#dddddd"], body .tit, body .sh1, body .flhead {
	background: #40464C!important;
	color: #5BB3BE
!important}
body .big {
	color: #5BB3BE
!important}
#panel:hover, #qmenu, #nbpanel0 {
	background: rgb(73, 77, 84)!important
}
body #qmenu * {
	color: #000
!important}
tr:nth-child(odd), #pt1 {
	background-color: rgb(66, 69, 73)
!important}
tr:nth-child(odd).lgf, .lgf {
	background-color: rgb(60, 73, 84)
!important}
tr:nth-child(even) {
	background-color: rgb(71, 75, 80)
!important}
table {
	background-color: rgb(66, 69, 73)!important
}
select, textarea, input[type=text], input[type=password], input[type=number] {
	background: #6A6E63!important;
	padding: 5px!important;
	border: 1px solid #A8C1CA!important;
    border-radius: 4px!important;
	margin: 1px!important;
	outline: none
!important}
select {
	padding: 4px
!important}
*[name]:focus:not(.tpc) {
	border: 1px solid #ffC1CA!important;
}
input[type=checkbox], input[type=radio] {
	height: 16px!important;
	width: 16px!important;
	border: 1px solid #A8C1CA!important;
	border-radius: 4px!important;
	outline: none!important;
	cursor: pointer!important;
	-webkit-filter: invert(80%)
!important}
form {
	margin-bottom: -1px
!important}
input[type=number]  {
	height: 24px!important;
	padding: 0 0 0 5px
!important}
.sh1 a,.sh2 a  {
	color: #8BB4DD!important;
	font-family: georgia!important;
	font-size: 14px
!important}
.sh1 a,.sh2 a, .tit a {
	font-weight: bold
!important}
.sh1 a:hover, .sh2 a:hover, .tit a:hover {
	color: #f00!important
}
div.blp {
	padding: 6px!important;
	margin: -6px -6px 5px -6px
!important}
form[name=mt] td > img {
	margin: -5px
!important}
#t1 {
    background-color: #A3A3A3!important;
    -webkit-background-clip: text!important;
    color: rgba(124, 124, 124, .5)!important;
    text-shadow: rgba(27, 27, 27, .5) 0px 3px 3px!important
}
td {
	border: solid 1px rgba(0,0,0,0)!important
}
body a:link, body a:visited, body a:active, body a.l:visited, body a.l:active, body a.l:link, body .hlu2 a *, .hsm, .himg, #res a {
	color: #84A5B3!important;
	text-shadow: 0 1px #000
!important}
body a:hover, #res a:hover {
	color: #9CD2D2!important;
}
.small a:visited, .mini a:visited {
	color: #8984B3
!important}
body .sing {
	color: #84A5B3
!important}
.sing a {
	color: #84A5B3!important
}
.pusto .small, body .post, #tm, .small, body a.m:link, #tpost, #res .post, #res .lgf {
	color: #ADA17A!important;
	text-shadow: 0 1px #000
!important}
body span.tpc {
	color: #999
!important}
a.tpc u, a.tpc b {
	color: #333
!important}
img, #pps, .prss {
	opacity: .7
!important}
img:hover, #pps:hover, .rss:hover {
	opacity: 1
!important}
form[name=mt] td > img {
  background: #b0c43c!important;
  background-size: 3px 3px, 100% 100%, 100% 100%!important;
  border: 0!important;
}
#lppic {
    margin-top: -13px
!important}
form[name="mlist"] .pusto {
	opacity: .7
!important}
.poster a:hover, .sh1 a:hover, .sh2 a:hover, .tit a:hover {
  color: rgb(255, 106, 71)!important
}
`,
`
/*
.tit - заголовки таблиц, текст "Компьютерный форум Ru.Board » " и т.д.
.sh1 - там где текст "Новости" на верху
.tb - граница постов
.tpc - кнопки и подсказка кнопкам, статистика под постом
.bottomline - статистика под постом (td)
.poster - ссылки в списке тем
.post - содержимое поста
.lgf - Цитата (table)
.dats - несколько мест (td), там где аватар, в заголовке, в подвале, в профиле
.content - всплывающее [?]
.mini - ссылки с номерами страниц в списке тем
.pusto - внедрённая ссылка на "пост"
.m - Ник слева
.big - в профиле фон заголовка таблицы с текстом "Послать личное сообщение для ..."
.onl - кто онлайн, на главной"
.sing - Подпись в посте"
.hlu2, sh2 - ?
          ---      регвыр для удаления комментариев из CSS
*/
#rep .dats2, #rep .tpc2, #bfont, #bss {
	background: #333
!important}
#fpr, select, textarea, input[type=text], input[type=password], input[type=number] {
  background: rgb(51, 51, 51)
!important}
/* Перебить всё
* {
	background: #333;
	color: #999;
}
 */
 
 html, body, table {
	background: #111111!important;
	color: #999!important;
}

/* инвертирование стиля, здесь к логотипу */
img[src$="remake1.gif"] {
	/* -webkit-filter: hue-rotate(180deg)invert(77%); */
	height: 0px!important;
	width: 0px!important;
}

img[src$="newthread.gif"] {
	-webkit-filter: invert(77%)!important;
}
img[src$="replytothread.gif"] {
	-webkit-filter: invert(77%)!important;
}
img[src$="newpoll.gif"] {
	-webkit-filter: invert(77%)!important;
}
/*
img[src$="newmail.gif"] {
	-webkit-filter: hue-rotate(180deg)invert(77%);
}
*/
/* Жёлтый 1 0 0 0 0 0 0.8 0 0 0 0 0 0 0 0 0 0 0 1 0 
Красный 1 0 0 0 0 0 0.4 0 0 0 0 0 0.4 0 0 0 0 0 1 0 */
img[src$="newmail.gif"] {
    filter: invert(88%) url('data:image/svg+xml!important;,<svg xmlns="http://www.w3.org/2000/svg"><filter id="balance"><feColorMatrix type="matrix" values="1 0 0 0 0 0 0.8 0 0 0 0 0 0 0 0 0 0 0 1 0"/></filter></svg>#balance') !important;
}

input[type=checkbox], input[type="radio"]  {
	-webkit-filter: invert(77%)!important;
}

/*
не нашёл этот стиль в html
#t1 {
	text-shadow: -1px -.1px 1px #353535, 1px 1px 1px #6C6C6C;
	color: #cc9977
}


body[bgcolor="#ffffff"] {
	background: #111111;
	color: #999;
}
 */
/* Голосование, стиль td внутри указанного table. Убирает чередование цвета в списке форумов */
table[bgcolor="#999999"] td {
	/* background: #25292A; */
	color: #999!important;
}
tbody {
	background: #25292B!important;
	box-shadow: none!important;
	border: none!important;
}
/*
b>font{
	-webkit-filter: hue-rotate(180deg)invert(100%);
	filter: hue-rotate(180deg)invert(100%);
}
*/
b {
	color: #A09078!important;
}
/* Ссылки с разных классов */
/* Ссылки (889bb0, 7D8FBD, 8888dd) */
a:link, a:visited, a:active, .mini a:link, .mini a:visited, .mini a:active, .pusto a:link, .pusto a:visited, .pusto a:active, .dats a:link, .dats a:visited, .dats a:active, .tit a:link, .tit a:visited, .tit a:active, .sh1 a:link, .sh1 a:visited, .sh1 a:active, .sh2 a:link, .sh2 a:visited, .sh2 a:active, .small a:link, .small a:active, a.small:link, a.small:active, .post a:link, .post a:visited, .post a:active, .poster a:link, .poster a:visited, .poster a:active, .content a:link, .content a:visited, .content a:active, a:link b, a:visited b, a:active b, .big a:link, .big a:visited, .big a:active, .sing a:link, .sing a:visited, .sing a:active
{text-decoration:none!important;color:#7D8FBD!important;}

/* Ссылки чтобы посещённые подсвечивались для номеров страниц */
.small a:visited
{text-decoration:none!important;color:#C188DD!important;}

/* Ссылки чтобы посещённые подсвечивались */
/* 
a:link, a:active, .mini a:link, .mini a:active, .pusto a:link, .pusto a:active, .dats a:link, .dats a:active, .tit a:link, .tit a:active, .sh1 a:link, .sh1 a:active, .sh2 a:link, .sh2 a:active, .small a:link, .small a:active, .post a:link, .post a:active, .poster a:link, .poster a:active, .content a:link, .content a:active, a:link b, a:active b
{text-decoration:none;color:#7D8FBD;}


a:visited, .mini a:visited, .pusto a:visited, .dats a:visited, .tit a:visited, .sh1 a:visited, .sh2 a:visited, .small a:visited, .post a:visited, .poster a:visited, .content a:visited, a:visited b
{text-decoration:none;color:#C188DD;}
 */

a:hover, .mini a:hover, .pusto a:hover, .dats a:hover, .tit a:hover, .sh1 a:hover, .sh2 a:hover, .small a:hover, a.small:hover, .post a:hover, .poster a:hover, .content a:hover, a:hover b, .big a:hover, .sing a:hover
{text-decoration:underline!important;color:#e1b234!important;}

/* Ник в посте над аватаром */
a.m:link b, a.m:visited b, a.m:active b {
	color: #FAB1B3!important;
}
a.m:hover b {
	color: #f99!important;
}

.sh1 a,.sh2 a, .tit a {
	font-weight: bold
!important}

/* текст "Страницы форума", "Сортировать по", "Фильтр по", Member */
table[bgcolor="#FFFFFF"] td.dats{
	color: #ABA180!important;
}
/* чтобы подсветить Member, как и в чётных постах*/
table[bgcolor="#EEEEEE"] td.dats{
	color: #ABA180!important;
}
/* Фон активной части ссылок таблицы в "Профиль" */
table[bgcolor="#999999"] tr.dats[bgcolor="#EEEEEE"] {
	background: #25292A!important;
	border: 1px solid #555!important;
}
/* панель сверху тёмно-синеватый */
td.tit, td.sh1 {
	background: #25292A!important;
}
/* Заголовок таблицы голосования */
td.tit[bgcolor="#FFFFFF"] {
	background: #25292A!important;
	border: 1px solid #555!important;
}
/* Фон таблицы голосования, включая .dats */
tr[bgcolor="#dddddd"] td {
	background: #2b3a4d!important;
	border: 1px solid #555!important;
}
tr[bgcolor="#FFFFFF"] td.dats {
	border: 1px solid #555!important;
}
/* 
tr[bgcolor="#dddddd"] td.dats {
	background: #25292A;
	border: 1px solid #555;
}
*/
/* Голосование, стиль td внутри указанного table */
/*
td.tit {
	border: 1px solid #25292A;
}
.tit td {
	border: 1px solid #25292A;
}
 */
/* там где текст "Новости" на верху */
td.sh1 {
	background: #25292A!important;
	color: #999!important;
	font-weight: bold
!important}
/*
.sh1 a,.sh2 a  {
	color: #8888dd;
	font-family: georgia;
	font-size: 14px;
	background: #25292A;
}

.sh1 a:hover, .sh2 a:hover, .tit a:hover { */
	/* color: #f74 */
/* } */

table.tb{
	border: 0!important;
}

/* Подсвечивает кнопки в светлых постах */
input[type=submit], td a.tpc:visited, td a.tpc:link, input.button {
	background: rgba(66, 66, 66, 1)!important;
	color: #ABA180!important;
	/* border: 0; */
	border: 1px solid #555!important;
	cursor: pointer!important;
	border-radius: 2px!important;
	outline: none!important;
	margin: 0 .5px!important;
}

/* Подсвечивает кнопки в тёмных постах */
td[bgcolor="#EEEEEE"] input[type=submit], td[bgcolor="#EEEEEE"] a.tpc:visited, td[bgcolor="#EEEEEE"] a.tpc:link, td[bgcolor="#EEEEEE"] input.button {
	background: #333!important;
	color: #ABA180!important;
	border: 1px solid #555!important;
}
/* Подсвечивает наведение на кнопки в светлых постах */
input[type=submit]:hover, td a.tpc:hover, input.button:hover, #panel :hover {
	background: #505050!important;
	color: #DBC784!important;
	border: 1px solid #666!important;
}
/* Подсвечивает наведение на кнопки в тёмных постах */
td[bgcolor="#EEEEEE"] input[type=submit]:hover, td[bgcolor="#EEEEEE"]  a.tpc:hover, td[bgcolor="#EEEEEE"]  input.button:hover {
	background: #444!important;
	color: #DBC784!important;
	border: 1px solid #666!important;
}
/* Активное нажатие кнопки в светлых постах */
input[type=submit]:active, td a.tpc:active {
	background: #333!important;
	color: #8A8267!important;
	border: 1px solid #555!important;
	box-shadow: none
!important}
/* Активное нажатие кнопки в тёмных постах */
td[bgcolor="#EEEEEE"] input[type=submit]:active, td[bgcolor="#EEEEEE"]  a.tpc:active, td[bgcolor="#EEEEEE"]  input.button:active {
	background: #222!important;
	color: #8A8267!important;
	border: 1px solid #555!important;
}
/* Голосование, стиль td внутри указанного table */
table[bordercolor="#EEEEEE"] td {
	background: #333!important;
	color: #999!important;
	border: 1px solid #555!important;
}
/* Ячейка с картинкой логотипом
table[bgcolor="#FFFFFF"] td {
	background: #25292A;
}
td[valign=top] {
	background: #25292A;
}
 */
/* Таблица список форумов */
tr[bgcolor="#FFFFFF"] td {
	border: 1px solid #555!important;
}
td[bgcolor="#FFFFFF"] {
	background: #333333!important;
	color: #999!important;
}
td[bgcolor="#FFFFFF"] .blp, .bottomline[bgcolor="#FFFFFF"] {
	background: #333333
!important}
td[bgcolor="#EEEEEE"] {
	background: #262626!important;
	color: #999!important;
}
td[bgcolor="#EEEEEE"] .blp, .bottomline[bgcolor="#EEEEEE"] {
	background: #262626
!important}
/* заголовки таблиц в профиле, в списке тем, в голосовании */
tr td.big {
	background: #246!important;
	color: #bbb!important;
	border: 1px solid #555!important;
}
/* Жирный текст в заголовках таблиц */
tr.tit b, td.tit b, td.big b {
	color: #aaa!important;
}
/* Подпись
table.sing tr{
	background: #333;
}
td[bgcolor="#FFFFFF"] table.sing {
	background: #333333;
	color: #999;
}
td[bgcolor="#EEEEEE"] table.sing {
	background: #262626;
	color: #999;
}
*/

td[bgcolor="#FFFFFF"] .lgf {
	background-color: #444!important;
	color: #999!important;
}
.hlu2 {
	background: #265696
!important}
td {
	padding: 5px
!important}
#panel:hover, #qmenu, #nbpanel0 {
	background: rgba(55, 55, 55, 0.9)
!important}
/* Задаёт цвет для чётных и нечётных элементов таблиц */
tr:nth-child(odd) {
	background-color: #343434!important;
	color: #999!important;
}
tr:nth-child(even) {
	background-color: #303030!important;
	color: #999!important;
}
table {
	/* background-color: #25292A; */
	/* background-color: #333; */
	color: #999!important;
}
*[name]:focus:not(.tpc) {
	border: 1px solid #313131!important;
}
input[type=checkbox], input[type=radio] {
	height: 16px!important;
	width: 16px!important;
	border: 1px solid #555!important;
	border-radius: 4px!important;
	outline: none!important;
	cursor: pointer
!important}
form {
	margin-bottom: -1px
!important}
input[type=number]  {
	height: 24px!important;
	padding: 0 0 0 5px
!important}
div.blp {
	padding: 6px!important;
	margin: -5px -5px 5px -5px!important;
	/* color: #999; */
}
/* tr[bgcolor="#FFFFFF"] td.dats {
tr[bgcolor="#FFFFFF"] td[bgcolor=#EEEEEE] {
	background-color: #444;
}
 */
/* текст описания в списке форумов под ссылками */
td.poster span.small {
	background-color: transparent!important;
	/* color: #B29552; */
	color: #999!important;
}
/* не работает, нижняя граница голосования, работает без td.dats, но не то
form[name=mt] td.dats {
	border-bottom: 1px solid #555;
}
 */
form[name=mt] td > img {
	margin: -5px!important;
}
td {
	color: #999!important;
}
/* Пост
.post, .poster, .tpc {
	color: #999;
}
 */
span.post, span.poster {
	color: #999!important;
}
/* статистика под постом */
span.tpc {
	color: #ABA180!important;
}

/* статистика под постом
table td.bottomline {
	background: #222;
}
*/

/* Текст "Ты можешь отредактировать шапку" */
.mtext * {
	color: #f99!important;
}
/* Фон таблицы */
.lgf td {
	border: solid 0px #666!important;
}
td.lgf  {
	border: solid 1px #333!important;
}

/* Полоса с 3-мя кнопками "Создать тему" */
td[bgcolor="#DDDDDD"] {
	background: #25292B!important;
	color: #999!important;
}


/* там где текст "Выход", "Модерирует" */
.dats {
	background: #25292A!important;
	color: #999!important;
}

/* Поле ввода без фокуса, блекло */
textarea, input[type=text], input[type=password], input[type=number] {
	background: #3d3d3d!important;
	border: solid 1px #555!important;
	margin: 2px 0!important;
	outline: none!important;
	color: #999!important;
}

input[type=number] {
	width: 39px!important;
	padding: 2px 3px 0!important;
	font: 13px/20px sans-serif!important;
}
/* Поле ввода с фокусом, контрастно */
textarea:focus, input[type=number]:focus, input[type=text]:focus, input[type=password]:focus {
	background: #3c3c3c!important;
	color: #999!important;
	border: solid 1px #555!important;
}
/* Поле ввода при нажатии мыши, кайма контрастно */
textarea:active, input[type=number]:active, input[type=text]:active, input[type=password]:active {
	border: solid 1px #0073E6!important;
}
/* Область текста в профиль-настройка */
textarea[name="newsignature"]:focus, textarea[name="newinterests"]:focus, textarea[name="post"]:focus {
	background: #3c3c3c!important;
	color: #999!important;
	border: solid 1px #555!important;
}
textarea[name="newsignature"]:active, textarea[name="newinterests"]:active, textarea[name="post"]:active {
	border: solid 1px #0073E6!important;
}

/* Поле ввода добавляемого поста */
#post, #message {
	border: solid 1px #555!important;
}
#post:active, #message:active {
	border: solid 1px #0073E6!important;
}
/*
#banner34er45tg56block {
	border: solid 4px #f00;
}
option td {
	background: #25292A;
	color: #999;
}
*/

/* выбор форума для прыжка, раскрывающийся список внизу */
form[name="forumjump"] {
	/* background: #25292A; */
	border: 0!important;
	color: #999!important;
}

/* фон раскрывающегося списка */
input[type="hidden"] {
	color: #999!important;
}
select:active, select:hover {
	background: #246!important;
	color: #999!important;
}
option:hover, option:focus, option:active {
	background: #246!important;
	color: #999!important;
}

select[name="jump"], select[name="filterby"], select[name="sort"], select[name="sortby"], select[name="aboock"], option {
	background: #3c3c3c!important;
	color: #999!important;
	outline: none!important;
	border: 1px solid #555!important;
}
option[style*="dddddd"] {
	background: #3c3c3c!important;
	color: #999!important;
}
/*
td::selection, p::selection {
	background: #111;
	color: #999;
}
option[style="background-color: #dddddd"] {
	background: #555;
	color: #aaa;
}

чекбоксы "Добавить свою подпись" и т.д. не сработало
#postOptionsTD {
	background: #3c3c3c;
	color: #f00;
}
 */

/* Горизонтальная линия в том числе под кнопкой "Редактировать" */
hr{
	color:#3d3d3d!important;
}

/* номера страниц форума, текст внизу */
.small {
	color: #D6B976!important;
	background: #25292A!important;
}
table {
	border-collapse: collapse!important;
}
/* полоска прогресса в голосовании */
form[name=mt] td > img {
	background: none!important;
	background: #389AD8!important;
	background-size: 3px 3px, 100% 100%, 100% 100%!important;
	border: 0!important;
}

/* всплывающее [?] */
.content div {
	background: #393939!important;
	color: #aaa!important;
}
.content table, .content td {
	margin: 2px!important;
	border: solid 1px #555!important;
}
.obertka {
	box-shadow: 0 0 20px -1px #000!important;
	padding: 8px!important;
}
.shadow {
	display: none!important;
}

/* Встроенный код использующий стиль */
.flhead {
	background: #2b3a4d!important;
	color: #ccc!important;
	border: 1px solid #555!important;
}
/* кто онлайн, на главной */
.onl {
	background: #363636!important;
	color: #999!important;
	border: 1px solid #555!important;
}
/* Текущий номер страницы */
td.small b {
	color: #EBC854!important;
}

/* Немного коррекции цвета (3 режима)
1. реальная подмена с коррекцией
2. инвертированное, чтобы инвертировалось дважды в правильное
3. инвертированное со сдвигом, чтобы инвертировалось со сдвигом в правильное
*/

font[color="red"], font[color="red"] b, font[color="#FF0000"] {
	color: #f99!important;
	/* color: #066; */
	/* color: #F00; */
}
font[color="darkred"], font[color="brown"] {
	color: #a55!important;
	/* color: #5AA; */
}
font[color="#0000FF"], font[color="#003366"] {
	color: #08F!important;
	/* color: #F70; */
}
font[color="#FFFFFF"] {
	color: #ccc!important;
	/* color: #333; */
}
/* Дата поста возле вставленного ника */
font[color="#007777"] {
	color: #4EBF92!important;
	/* color: #B1406D; */
	/* color: #094; */
}
/* Оставшиеся цвета инвертируем, но кроме тех что с заданным цветом и если в связке с жирным "b" */
b>font:not(:matches([color="#007777"], [color="#FFFFFF"], [color="#0000FF"], [color="darkred"], [color="brown"], [color="red"], [color="#FF0000"]))[ color],
font:not(:matches([color="#007777"], [color="#FFFFFF"], [color="#0000FF"], [color="darkred"], [color="brown"], [color="red"], [color="#FF0000"]))[ color],
font:not(:matches([color="#007777"], [color="#FFFFFF"], [color="#0000FF"], [color="darkred"], [color="brown"], [color="red"], [color="#FF0000"]))[ color] b {
/* font[color], font[color] b { */
	-webkit-filter: hue-rotate(180deg)invert(100%)!important;
	filter: hue-rotate(180deg)invert(100%)!important;
}
/* Поиск встроенный объект Google */
#cse-search-results {
	-webkit-filter: hue-rotate(180deg)invert(80%)!important;
}
/* Выделенный текст для FF */
::-moz-selection {
	/* background-color: #555; */
	/* color: #FFF; */
	background-color: #999!important;
	color: #000!important;
}
/* Выделенный текст для Google */
::selection {
	background-color: #fff!important;
	color: #000!important;
}
/* 
Фон кнопки всплывающей панель тегов
#put_tag_panel {
	background-color: #373;
}
Загрузить виртуальную клавиатуру
#dywl {
	background-color: #373;
}
#tag_autoc #output #trans_load
*/
/* Делает серой и инвертированной панель вставки тегов */
img[style*="tags.gif"] {
	/* -webkit-filter: grayscale(1)invert(.77); */
	/* filter: grayscale(1)invert(.77); */
	-webkit-filter: hue-rotate(180deg)invert(77%)!important;
	filter: hue-rotate(180deg)invert(.77)!important;
}

/* Делает серой и инвертированной кнопку-шарик со всплывающей панелью */
img[src*="icon.gif"] {
	/* -webkit-filter: grayscale(1)invert(.77); */
	/* filter: grayscale(1)invert(.77); */
	-webkit-filter: hue-rotate(180deg)invert(77%)!important;
	filter: hue-rotate(180deg)invert(.77)!important;
}
/* Инвертировать все картинки
img {
	-webkit-filter: hue-rotate(180deg)invert(77%);
	filter: hue-rotate(180deg)invert(.77);
}
*/

/* Всплывающая надпись "Вставить цитату" при выделении */
#insert_window *{
	background: #bbb!important;
	color: #0a1d93!important;
	padding:5px 2px!important;
}
/* a1a1a1  ff3b31 */
#insert_window font[color="red"] {
	/* background: #444; */
	/* color: #00C4CE; */
	background: #bbb!important;
	color: #f00!important;
	padding:5px 2px!important;
}
/* Ошибка закрытия тегов */
#tags_er {
	background: #333!important;
	color: #999!important;
}
#tags_er span{
	background: #333!important;
	color: #999!important;
}
#tags_er span font b{
	background: #333!important;
	color: #f77!important;
}
#tag_er_mess {
	background: #25292A!important;
	/* border: solid 1px #555!important; */
	color: #999!important;
}
/* #tag_er_mess font{ */
	/* -webkit-filter: hue-rotate(180deg)invert(77%); */
	/* filter: hue-rotate(180deg)invert(.77); */
	/* } */
#tag_er_mess font[color="red"] {
	color: #f77!important;
}
#tag_er_mess font[color="blue"] {
	color: #0AF!important;
}
form[name="mlist"] .pusto {
	opacity: .7
!important}
`
];
