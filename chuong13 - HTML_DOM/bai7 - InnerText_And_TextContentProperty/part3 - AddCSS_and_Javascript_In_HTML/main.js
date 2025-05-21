//Inner Text & Text Content Property
var headingElement = document.querySelector('.heading');
console.log(headingElement);
{/* <h1 class="heading">

      <span>Heading</span>
      <span style="display: none">(No display)</span>
      <span>text</span>

      <style>
      .box{
            width: 100px;
            height: 100px;
      }
      </style>
      
      <script>
      console.log('Test');
      </script>

</h1> */}

//InnerText
console.log(headingElement.innerText);
//Heading text

//TextContent
console.log(headingElement.textContent);


      //   Heading
      //   (No display)
      //   text

        
      //       .box{
      //           width: 100px;
      //           height: 100px;
      //       }
        
        
        
      //       console.log('Test');
        

    
//TextContent sẽ xuất ra những text trong các thẻ Element và cả khoảng cách (từ dòng 29-46)
