/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const values={
      'I'     :        1,
      'V'      :       5,
      'X'          :   10,
      'L'         :    50,
      'C'         :    100,
      'D'        :     500,
      'M'         :    1000  
    }
    
    let output = 0;
    
    for(let i=0;i<s.length;i++){
      let  value =values[s.charAt(i)];
        
      let  isNegative = false;
        if(i<s.length - 1){
         isNegative = values[s.charAt(i+1)] > value;
        }
        output = isNegative ? output -  value : output + value; 
    }
    
    return output;
};