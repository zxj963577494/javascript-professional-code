/**
 * Created by xvjiang on 2015/3/22.
 */

/*
 //4.1.1 动态属性
 var person = new Object();
 person.name = "zxj";
 alert(person.name);
 */

/*
 //4.1.2 复制变量值
 var num1 = 5;
 var num2 = num1; //5

 var obj1 = new Object();
 var obj2 = obj1;
 obj1.name = "zxj";
 alert(obj2.name);  //"zxj"
 */

/*
 // 4.1.3 传递参数
 function addTen(num) {
 num += 10;
 return num;
 }
 var count = 20;
 var result = addTen(count);
 alert(count);  // 20,没有变化
 alert(result); // 30

 function setName(obj) {
 obj.name = "zxj";
 }
 var person = new Object();
 setName(person);
 alert(person.name); //"zxj"


 function setName(obj) {
 obj.name = "zxj";
 obj = new Object();
 obj.name = "sdf";
 }
 var person = new Object();
 setName(person);
 alert(person.name);
 */
