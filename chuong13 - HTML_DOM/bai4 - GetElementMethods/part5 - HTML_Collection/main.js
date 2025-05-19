//Get element methods: HTML Collection
console.log(document.forms);
// HTMLCollection(2) [form#form1, form#form-2, form1: form#form1, form-2: form#form-2]
// 0:form#form1
// 1:form#form-2
// form1: form#form1
// form-2: form#form-2
// length: 2
// [[Prototype]]: HTMLCollection

console.log(document.forms[0]);
//<form action="" id="form1"></form>

console.log(document.forms[1]);
//<form action="" id="form-2"></form>

console.log(document.forms['form1']);
//<form action="" id="form1"></form>

console.log(document.forms['form-khong-co']);
//undefined (do không có form nào tên form-khong-ten)

console.log(document.forms.form1);
//form#form1

console.log(document.forms.form-2);
//NaN (do lỗi ghi sai và lỗi logic "-", và không hỗ trợ đặt tên biến của Javascript)
console.log(document.forms['form-2']);
//form#form-2

//Truy tìm thẻ <a>
console.log(document.anchors);
//HTMLCollection [a, hi: a]
// 0: a
// hi: a
// length: 1
// [[Prototype]]: HTMLCollection
