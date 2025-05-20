var headings= document.getElementsByTagName('h1');
console.log(headings);
// HTMLCollection(2) [h1#heading.heading, h1#heading-1.heading, heading: h1#heading.heading, heading-1: h1#heading-1.heading]
// 0:h1#heading.heading
// 1:h1#heading-1.heading
// heading: h1#heading.heading
// heading-1: h1#heading-1.heading
// length: 2
// [[Prototype]]: HTMLCollection

console.log(headings[0]);
//<h1 id="heading" class="heading">Javascript1.1</h1>

var headings= document.getElementsByClassName('heading');
console.log(headings)
// HTMLCollection(3) [h1#heading.heading, h1#heading-1.heading, h2#heading-2.heading, heading: h1#heading.heading, heading-1: h1#heading-1.heading, heading-2: h2#heading-2.heading]
// 0:h1#heading.heading
// 1: h1#heading-1.heading
// 2: h2#heading-2.heading
// heading: h1#heading.heading
// heading-1: h1#heading-1.heading
// heading-2: h2#heading-2.heading
// length: 3
// [[Prototype]]: HTMLCollection

var headings = document.querySelectorAll('.heading');
for (var i=0; i < headings.length; i++){
   console.log(headings[i])
}
// h1#heading.heading
// h1#heading-1.heading
// h2#heading-2.heading

console.log(document.forms);
// HTMLCollection(2) [form#form-1, form#form-2, form-1: form#form-1, form-2: form#form-2]
// 0: form#form-1
// 1: form#form-2
// form-1: form#form-1
// form-2: form#form-2
// length: 2
// [[Prototype]]: HTMLCollection

console.log(document.forms[1]);
//<form action="" id="form-2"></form>
