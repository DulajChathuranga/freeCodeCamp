
function rot13(str)
{
  // LBH QVQ VG!
  
  var charCode;
  var decodeNums = [];
  var decodeArr = [];
  
  //Get Char Code
  for(i = 0; i < str.length; i++)
    { 
      charCode = str.charCodeAt(i); //Turn str's chars to ASCII codes
      
      if ((charCode > 64) && (charCode < 78))
        {
          charCode = charCode += 13; //A-M codes turn to N-Z codes
        }
      else if ((charCode > 77 ) && (charCode < 91))
        {
          charCode = charCode -= 13;  //N-Z codes turn to A-M codes
        }
      else
        {
          charCode = charCode; //Non-alphebetical chars keep as it is.
        }
      
      decodeNums.push(charCode); //Push every decoded charCode to an array
    }
  
  for ( i = 0; i < decodeNums.length; i++)
    {
      var decodeChar = String.fromCharCode(decodeNums[i]); //Decode one by one
      decodeArr.push(decodeChar);                          
    }
   
  var decode = decodeArr.join('');
  
  return decode;
}

// Change the inputs below to test
rot13("FREE LOVE?.");
