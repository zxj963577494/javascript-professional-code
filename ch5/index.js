/*//Object类型声明
 var person = new Object();
 person.name = "zxj";
 person.age = 25;*/

/*

 //对象字面量
 var person = {
 name: "zxj",
 age: 25
 }*/

/*

 //对象访问属性
 alert(person["name"]) //zxj
 alert(person.name) //zxj

 var propertyName = "name";
 alert(person[propertyName]); //zxj

 person['first name'] = "zxj";
 */


//数组

/*// 检测数组
 if(value instanceof Array){
 // 执行操作
 }

 if(Array.isArray(value)){
 // 执行操作
 }*/

/*//转化方法
 var colors = ['red', 'blue', 'green'];
 alert(colors.toString());   //red,blue,green
 alert(colors.valueOf());    //red,blue,green
 alert(colors)               //red,blue,green

 var colors = ['red', 'blue', 'green'];
 alert(colors.join(','));    //red,blue,green
 alert(colors.join('|'));    //red|blue|green*/

/*
 //栈方法

 var colors = new Array();                   //定义数组
 var count = colors.push("red", "blue");     //压入两项
 alert(count);                               //2
 count = colors.push("black");               //压入另一项
 alert(count);                               //3
 var item = colors.pop();                    //弹出最后一项
 alert(item);                                //"black"
 alert(colors.length);                       //2
 */

/*//队列方法
 var colors = new Array();
 var count = colors.push("red", "blue");
 count = colors.push("black");
 alert(count);
 var item = colors.shift();              //取得第一项
 alert(item);                            //"red"
 alert(color.length);                    //2

 var colors = new Array();
 var count = colors.push("red", "green");
 alert(count);                           //2
 count = colors.unshift("black");          //推入另一项
 alert(count);                           //3
 var item = colors.pop();                  //取得最后一项
 alert(item)                             //green
 alert(colors.length)                    //2*/

/*//重排序方法
 var values = [2, 1, 3, 4, 5];
 values.reverse();
 alert(values);          //5,4,3,2,1

 var values = [12, 11, 3, 4, 5];
 values.sort();
 alert(values);    //12,11,3,4,5

 function compare(value1, value2) {
 if (value1 < value2) {
 return -1
 } else if (value1 > value2) {
 return 1
 } else {
 return 0
 }
 }
 var values = [0, 1, 5, 10, 15];
 values.sort(compare);
 alert(values);    //0,1,5,10,15*/

/*//操作方法
 var colors = ["red", "green", "blue"];
 var colors2 = colors.concat("yellow", ["black", "brown"]);
 alert(colors);  //red,green,blue
 alert(colors2); //red,green,blue,yellow,black,brown

 var colors=["red","green","blue","black","brown"];
 var colors2=colors.slice(1);
 var colors3=colors.slice(1,4);
 alert(colors2);                 //green,blue,black,brown
 alert(colors3);                 //green,blue,black

 var colors = ["red", "green", "blue"];
 //删除
 var removed = colors.slice(0, 1);  //删除第1项
 var colors3 = colors.slice(1, 4);
 alert(colors);                     //green,blue
 alert(removed);                    //red
 //插入
 removed = colors.slice(1, 0，"yellow","orange");  //从位置1开始插入
 alert(colors);                     //green,yellow,orange,blue
 alert(removed);                    //空数组
 //替换
 removed = colors.slice(1, 1,"red","purple");  //从位置1开始插入
 alert(colors);                     //green,"red","purple",orange,blue
 alert(removed);                    //"yellow"*/


/*//位置方法
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
alert(numbers.indexOf(4))        //3
alert(numbers.lastIndexOf(4))    //5
alert(numbers.indexOf(4, 4))     //5
alert(numbers.lastIndexOf(4, 4)) //3*/

/*
//迭代方法
var num = [1,2,3,4,5,6,7,8,9];
var everyResult = num.every(function(item, index, array) {
    if(item > 2) {
        return true;
    }
});
alert(everyResult);

var someResult = num.some(function(item) {
    if(item > 2) {
        return true;
    }
});
alert(someResult);

var filterResult = num.filter(function(item) {
    if(item > 2) {
        return true;
    }
});
alert(filterResult);

var mapResult = num.map(function(item) {
    if(item > 2) {
        return true;
    }
});
alert(mapResult);
var forEachResult = num.forEach(function(item) {
    if(item > 2) {
        return true;
    }
});
alert(forEachResult);*/

//归并方法
var nums = [1,2,3,4,5,6,7];

var sum = nums.reduce(function(prev, cur, index, array) {
    alert(prev + '------' + cur);
    return prev + cur;
},8);
alert(sum);