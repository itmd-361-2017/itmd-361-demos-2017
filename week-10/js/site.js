(function(){
  var double = multiplier(2);
  var triple = multiplier(3);

  console.log(double(14)); // 28
  console.log(triple(7)); // 21
  console.log(typeof(multiplier)) // ?

  function multiplier(factor) {
    return function(number) {
      return number * factor;
    }
  }
  
})();
