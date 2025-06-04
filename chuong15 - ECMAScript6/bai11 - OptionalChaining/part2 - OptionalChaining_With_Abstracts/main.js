//Optional chaining (?.)
//Optional chaining with Abstrcts
const obj1 = {
   name: 'Ben1',
   catF0: {
      name: 'Tom1',
      catF1: {
         name: 'Mike1',
         catF2: {
            name: 'Jerry1',
         }
      }
   },
   anotherCat: {
      name: 'Jack1',
   },
};
if (obj1?.catF0?.catF1?.catF2 && obj1?.anotherCat){
   console.log(obj1.catF0.name);
   //Tom1
   console.log(obj1.catF0.catF1.name);
   //Mike1
   console.log(obj1.catF0.catF1.catF2.name);
   //Jerry1

   console.log(obj1.anotherCat.name);
   //Jack1
}

//Optional chaining (?.) trong trường hợp không có abstract mình cần tìm
const obj2 = {
   name: 'Ben2',
   catF0: {
      name: 'Tom2',
      // catF1: {
      //    name: 'Mike2',
      //    catF2: {
      //       name: 'Jerry2',
      //    }
      // }
   },
   anotherCat: {
      name: 'Jack2',
   },
};
if (obj2?.catF0?.catF1?.catF2 && obj2?.anotherCat){
   console.log(obj2.catF0.name);
   //(Not result, nhưng nếu đổi dấu '&&' thành '||' thì sẽ hiện Tom2)
   console.log(obj2.catF0.catF1.name);
   //(Not result, nhưng nếu đổi dấu '&&' thành '||' thì sẽ báo lỗi ERROR)
   console.log(obj2.catF0.catF1.catF2.name);
   //(Not result, nhưng nếu đổi dấu '&&' thành '||' thì sẽ báo lỗi ERROR)

   console.log(obj2.anotherCat.name);
   //(Not result, nhưng nếu đổi dấu '&&' thành '||' thì sẽ báo lỗi ERROR)
}

//Optional chaining (?.), syntax style
obj2['catF0']?.['catF1']
