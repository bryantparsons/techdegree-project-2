/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
const studentList = document.getElementsByClassName('student-item cf');
const pageItems = 10;

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

function showPage(list, page) {
  const startIndex = (page * pageItems) - pageItems;
  const endIndex = page * pageItems; 
   for (i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
      } else {
      list[i].style.display = 'none';
   }
 }
 
}

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function appendPageLinks(list) {
   pageNumber = Math.ceil(list.length / pageItems);
   const pageDiv = document.createElement('div');
   pageDiv.className = 'pagination';
   div = document.querySelector('.page');
   div.appendChild(pageDiv);
   const ul = document.createElement('ul');
   pageDiv.appendChild(ul);
   for (i = 0; i < pageNumber.length; i += 1) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = pageNumber;
      li.appendChild(a);
      i[0].className = 'active';
      a.addEventListener('click', (e) => {
         for (i = 0; i < a.length; i += 1) {
            a.classList.remove("active");
            e.target.className = 'active';
            showPage(studentList, a.textContent);
         }  
      });
   }
}
 
appendPageLinks(studentList);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.