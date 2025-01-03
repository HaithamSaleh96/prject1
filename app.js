let mystudents = ["ahmad","anas","ali","widad","layan","esraa"]; 


//-----  .at() تستخدم للوصول إلى عنصر في المصفوفة عن طريق موقعه في المصفوفة
console.log(mystudents.at(1))

//-----  .pop() تقوم بارجاع العنصر الاخير في المصفوفة
console.log(mystudents.pop())

//-----  .shift() تقوم بارجاع العنصر الاول في المصفوفة
console.log(mystudents.pop())

//----  .push() تقوم باضافة عنصر جديد للمصفوفة بالقيمة التي تعطى لها 
mystudents.push("ammar")
console.log(mystudents)

//--- .fill() تستخدم لتعبئة جميع العناصر في المصفوفة بالقيمة التي تعطى لها
console.log(mystudents.fill("No one"))