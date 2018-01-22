/**判断是否是回文 */
function checkContext (str){
    return str === str.split("").reverse().join('');
}
/**去掉重复数组
比如[1,3,3,2,4,5]  => [1,3,2,4,5]
利用object中的key*/
function arr (arr){
    var tempArr = new Array();
    var obj = {};
    for(var i =0 ; i<arr.length;i++){
        if(!obj[arr[i]]) {
            obj[arr[i]] = true;
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
/*统计字母出现最多
比如afaaafhgjuekkkeaaa*/
function maxDisplay (str) {
    if(str.length === 1) {
        return str;
    }
    var tempObj = {};
    for(var i=0;i<str.length;i++){
        if(!tempObj[str.charAt(i)]){
            tempObj[str.charAt(i)] = 1;
        } else {
            tempObj[str.charAt(i)] += 1;
        }
    }
    var maxchar = '';
    maxValue = 1;
    for(var key in tempObj){
        if(tempObj[key] > maxValue){
            maxchar = key;
            maxValue = tempObj[key];
        }
    }
    return maxchar;
}
/*排序*/
function sortMaopao (arr){
    for(var i =0;i<arr.length;i++){
        for(var j = i+1;j<arr.length;j++){
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
function sortDigui (arr){
    if (arr.length === 1){
        return arr;
    }
    var leftArr = [];
    var rightArr = [];
    var line = arr[0];
    for (var i = 0,l=arr.length;i<l;i++){
        if(arr[i] < q) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return [].concat(sortDigui(leftArr),[line],sortDigui(rightArr));
}
/*黄金分割  0，1，1，2，3，5，8，13*/
function goldLine (length){
    var fibArr = [];
    var i = 0;
    while(i < length) {
        if(i <= 1) {
            fibArr.push(i);
        } else {
            fibArr.push(fibArr[i-1] + fibArr[i-2]);
        }
        i++;
    }
    return fibArr.join(',');
}
