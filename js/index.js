jQuery(function(){vue=new Vue({el:"#myDiv",data:{wiki:"Wikipedia",sbt:"https://www.scala-sbt.org/",isScrollDown:!1,menuIsClicked:!1},methods:{display:function(t){return"<img src = '"+t+"' class = 'play-starter-img tutorial-img' >"},links:function(t){return t}}});var i=0,e=0,n="";function s(t){$(t).animate({height:"100%"},1e3)}function o(t){$(t).animate({height:"0em"},500)}$(".expand").on("click",function(){var t=$(".output-flex-div");"prototypeH2"===this.id?(i%2==0?(t[0].style.borderTop="none",$(this).attr("data-click","yes"),this.innerHTML="Collapse",s(t[0])):(o(t[0]),$(this).attr("data-click",""),this.innerHTML="Expand",setTimeout(function(){t[0].style.borderTop="solid thin #dcdcdc"},900)),i++):"outputH2"===this.id&&(e%2==0?($(this).attr("data-click","yes"),t[1].style.borderTop="none",s(t[1]),this.innerHTML="Collapse"):(o(t[1]),$(this).attr("data-click",""),setTimeout(function(){t[1].style.borderTop="solid thin #dcdcdc"},900),this.innerHTML="Expand"),e++)}).on("mouseenter",function(){n=this.innerHTML;var t=this.getAttribute("data-click");this.innerHTML="yes"===t?"Collapse":"Expand"}).on("mouseleave",function(){this.innerHTML=n})});