// AlenPaulVarghese

var aText = new Array(
    "Thanks For Visiting Here",
    );
    var iSpeed = 100; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }

// Second one
// https://github.com/ronv/Typewriter.js
// Got an shorter solution ??

    var aText1 = new Array(
        "-AlenPaulVarghese",
        );
        var iSpeed1 = 100; 
        var iIndex1 = 0; 
        var iArrLength1 = aText1[0].length; 
        var iScrollAt1 = 20; 
        var iTextPos1 = 0; 
        var sContents1 = ''; 
        var iRow1; 
        // start the shit
        function typewriter2()
        {
         sContents1 =  ' ';
         iRow1 = Math.max(0, iIndex1-iScrollAt1);
         var destination1 = document.getElementById("typedtext1");
         
         while ( iRow1 < iIndex1 ) {
          sContents1 += aText1[iRow1++] + '<br />';
         }
         destination1.innerHTML = sContents1 + aText1[iIndex1].substring(0, iTextPos1) ;
         if ( iTextPos1++ == iArrLength1 ) {
          iTextPos1 = 0;
          iIndex1++;
          if ( iIndex1 != aText1.length ) {
           iArrLength1 = aText1[iIndex1].length;
           setTimeout("typewriter2()", 100);
          }
         } else {
          setTimeout("typewriter2()", iSpeed1);
         }
        }
