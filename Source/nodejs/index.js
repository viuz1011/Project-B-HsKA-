/**
 * This is the script that handles the click events
 * 
 * */
jQuery( function (  ){
 vue = new Vue ({
    el: "#myDiv",
    data: {
        wiki: "Wikipedia",
        sbt:"https://www.scala-sbt.org/",
        isScrollDown: false,
        menuIsClicked: false
    },
    methods: {
        display: function ( img ) {
            return "<img src = '"+img+"' class = 'play-starter-img tutorial-img' >"
        },

        links: function ( link )
        {
            return link;
        }    
    }

})

    var protoCount = 0;
    var outputCount = 0;
    var str = "";
    var h2IsClicked = false;
   $( ".expand" ).on ( "click", function () {
       var div = $( ".output-flex-div" ); 
      
       if ( this.id==="prototypeH2" )
       {
           if ( protoCount%2===0 )
           {
               div[0].style.borderTop="none";
               $( this ).attr( "data-click", "yes" )
                this.innerHTML = "Collapse"
                expandDiv(div[0])
           }else{
                shrinkDiv( div[0] )
                $( this ).attr( "data-click", "" )
                this.innerHTML = "Expand"
                setTimeout( function () {
                    div[0].style.borderTop="solid thin #dcdcdc";
                }, 900 )
                
           }
           protoCount++;
       } 
        else if ( this.id==="outputH2" )
       {
            if ( outputCount%2===0 )
            {
               $( this ).attr( "data-click", "yes" )
                div[1].style.borderTop="none";
                expandDiv(div[1])
                this.innerHTML = "Collapse"
            }else{
                shrinkDiv( div[1] )
               $( this ).attr( "data-click", "" )
                setTimeout( function () {
                    div[1].style.borderTop="solid thin #dcdcdc";
                }, 900 )
                this.innerHTML = "Expand"

            }
            outputCount++;
       }

   } ).on( "mouseenter", function (  ) {
        str = this.innerHTML;
        var data = this.getAttribute( "data-click" );

        if ( data==="yes" )
        {
            this.innerHTML = "Collapse"
        } else 
            this.innerHTML = "Expand"

   } ).on ( "mouseleave", function () {
        this.innerHTML = str;
   } )

   function expandDiv( divElem )
   {
       $( divElem ).animate({
           height: "100%"
       }, 1000 )
      

   }
   function shrinkDiv( divElem )
   {
       $( divElem ).animate({
           height: "0em"
       }, 500 )
      

   }

} )