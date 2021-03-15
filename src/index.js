module.exports = function check(str, bracketsConfig) {
  let str1 = str.split(''),
        stack = [],
        open = ['{', '(', '[',],
        close = ['}', ')', ']',],
        closeIndex,
        openIndex;

    for (let i = 0, len = str1.length; i < len; i++) {
       openIndex = open.indexOf(str1[i]);
       if (openIndex !== -1) {
           stack.push(openIndex);
           continue;
       }

       closeIndex = close.indexOf(str1[i]);
       if (closeIndex !== -1) {
           openIndex = stack.pop();
           if (closeIndex !== openIndex) {
               return false;
           }
       }
    }
    if (stack.length !== 0) {
        return false;
    }

    return true;
}
