//Optional chaining (?.)
//Get Values Abstract in Object
const obj1 = {
   name: 'Ben1',
   cat: {
      name: 'Tom1',
   }
};
if (obj1.cat){
   console.log(obj1.cat.name);
   //Tom1
}

const obj2 = {
   name: 'Ben2',
   catF0: {
      name: 'Tom2',
      catF1: {
         name: 'Mike2',
         catF2: {
            name: 'Jerry2',
         }
      }
   },
   anotherCat: {
      name: 'Jack2',
   },
};
if (obj2.catF0 && obj2.catF0.catF1 && obj2.catF0.catF1.catF2 && obj2.anotherCat.name){
   console.log(obj2.catF0.name);
   //Tom2
   console.log(obj2.catF0.catF1.name);
   //Mike2
   console.log(obj2.catF0.catF1.catF2.name);
   //Jerry2
   
   console.log(obj2.anotherCat.name);
   //Jack2
}
//(Nhưng trong trường hợp catF1 không có (hoặc comment '//') thì catF2 sẽ không có (hay tạm thời biến mất),
//    nên nếu chạy dòng lệnh "console.log(obj2.catF0.catF1.catF2.name);" này sẽ lập tức thông báo ERROR)
