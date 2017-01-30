//make a scientific calculator? sqrt, x^2, x^3, x^n, x!, ln, log, e^x
//keypress events?

$(document).ready(function(){
  
  var addMe = "";
  var operationChain = "";
  var answer, someNum;
  var arr;
  
  function adder(num){
    addMe = document.getElementById('currentChain').innerHTML;
    addMe = addMe.substring(0, addMe.length - 35);
    $('#currentChain').html(addMe + num + '<span class="blinking">_</span></p>');
  }
  
  function clearer(){
    $('#currentChain').html('<p><span class="blinking">_</span></p>');
    $('#outputArea').html('');
  }
  
  function clearLast(){
    addMe = document.getElementById('currentChain').innerHTML;
    if(addMe.length > 38){
      addMe = addMe.substring(0, addMe.length - 36);
      $('#currentChain').html(addMe + '<span class="blinking">_</span></p>');
    }
  }
  
  function equals(){
    operationChain = document.getElementById('currentChain').innerHTML;
    if(operationChain.length > 38){
      $('#currentChain').html(operationChain.substring(0, operationChain.length - 35));
      operationChain = operationChain.substring(3, operationChain.length - 35);
      operationChain = operationChain.replace(/x{1,}/gi, '*').replace(/\.{2,}/g, '.').replace(/\/{2,}/g, '/').replace(/-{2,}/g, '-').replace(/\+{2,}/g, '+');
      answer = math.eval(operationChain);
      $('#outputArea').html('<p>' + answer + '</p>');
      
      //post equal operations
      $('.operations').bind('click', postEqualsOp);
      //post equal nums
      $('.nums').bind('click', postEqualsNum);
      //post equal all clear
      $('#allClear').bind('click', postEqualsAC);
    }
    
  }
  
  /***************post equals functions*************/
  function postEqualsOp(){
    answer = document.getElementById('outputArea').innerHTML;
    answer = answer.substring(3, answer.length - 4);
    someNum = document.getElementById('currentChain').innerHTML;
    someNum = someNum.charAt(someNum.length - 39);
    clearer();
    adder(answer);
    adder(someNum);
    $('.operations').unbind('click', postEqualsOp);
    $('.nums').unbind('click', postEqualsNum);
    $('#allClear').unbind('click', postEqualsAC);
  }
  
  function postEqualsNum(){
    someNum = document.getElementById('currentChain').innerHTML;
    someNum = someNum.charAt(someNum.length - 39);
    clearer();
    adder(someNum);
    $('.operations').unbind('click', postEqualsOp);
    $('.nums').unbind('click', postEqualsNum);
    $('#allClear').unbind('click', postEqualsAC);
  }
  
  function postEqualsAC(){
    $('.operations').unbind('click', postEqualsOp);
    $('.nums').unbind('click', postEqualsNum);
    $('#allClear').unbind('click', postEqualsAC);
  }
  
  /********* calculator buttons ***********/
  
  $('#rightParenthesis').click(function(){
    adder(')');
  });
  
  $('#leftParenthesis').click(function(){
    adder('(');
  });
  
  $('#allClear').click(function(){
    clearer();
  });
  
  $('#clearLast').click(function(){
    clearLast();
  });
  
  $('#numSeven').click(function(){
    adder(7);
  });
  
  $('#numEight').click(function(){
    adder(8);
  });
  
  $('#numNine').click(function(){
    adder(9);
  });
  
  $('#division').click(function(){
    adder('/');
  });
  
  $('#numFour').click(function(){
    adder(4);
  });
  
  $('#numFive').click(function(){
    adder(5);
  });
  
  $('#numSix').click(function(){
    adder(6);
  });
  
  $('#multiply').click(function(){
    adder('x');
  });
  
  $('#numOne').click(function(){
    adder(1);
  });
  
  $('#numTwo').click(function(){
    adder(2);
  });
  
  $('#numThree').click(function(){
    adder(3);
  });
  
  $('#minus').click(function(){
    adder('-');
  });
  
  $('#numZero').click(function(){
    adder(0);
  });
  
  $('#decimal').click(function(){
    adder('.');
  });
  
  $('#equals').click(function(){
    equals();
  });
  
  $('#addition').click(function(){
    adder('+');
  });
  
  //keys?
  
  //about slider
  $('#aboutSlider').click(function(){
    $('#aboutFrame').slideToggle('slow');
  });
  
  //options slider
  $('#optionsSlider').click(function(){
    $('#optionsFrame').slideToggle('slow');
  });
  
  //color choice
  //color change function
  function colorChange(color, calcColor, btnsColor){
    $('#aboutFrame, #aboutSlider, #optionsFrame, #optionsSlider').css({
      'background-color': color,
      'border-color': color
    });
    $('#calcFrame').css({
      'background-color': calcColor,
      'background-image': 'linear-gradient(to bottom right,' + color + ',' + calcColor + ')'
    });
  }
  
  //red
  $('#redTheme').click(function(){
    colorChange('#ff5c33', '#ff8989', '#ff3333');
  });
  
  //blue
  $('#blueTheme').click(function(){
    colorChange('#3370ff', '#4da6ff', '#3399ff');
  });
  
  //green
  $('#greenTheme').click(function(){
    colorChange('#33ff5c', '#4dffa6', '#33ff99');
  });
    
  //funkyOne
  $('#funkyOneTheme').click(function(){
    colorChange('#a52a2a', '#008b8b', '#33ff99');
  });  
    
  //funkyTwo
  $('#funkyTwoTheme').click(function(){
    colorChange('#8fbc8f', '#ffa812', '#33ff99');
  }); 
  
});