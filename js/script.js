
/*
This code creates pagination for displaying the list of students.
*/

/* These are the global variables for referencing the list of students and 
the number of students to be displayed on each page.
*/

const studentList = document.getElementsByClassName('student-item cf');
const pageItems = 10;

/*
   This function hides all of the students on the list except for the 10
   that is to be shown.
*/

function showPage(list, page) {
  const startIndex = (page * pageItems) - pageItems;
  const endIndex = page * pageItems; 
   for (let i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
      } else {
      list[i].style.display = 'none';
   }
 }
 
}

/*** 
   This function creates the page buttons and add functionality to them.
***/
function appendPageLinks(list) {
   const pageNumber = Math.ceil(list.length / pageItems);
   const pageDiv = document.createElement('div');
   pageDiv.className = 'pagination';
   const div = document.querySelector('.page');
   div.appendChild(pageDiv);
   const ul = document.createElement('ul');
   pageDiv.appendChild(ul);
   for (let i = 0; i < pageNumber; i += 1) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = i + 1;
      li.appendChild(a);
      if (i === 0) {
         a.className = 'active';
      }
      a.addEventListener('click', (e) => {
            e.target.className = 'active';
            a.classList.remove("active");
            showPage(list, e.target.textContent);
      });
   }
}
showPage(studentList, 1); 
appendPageLinks(studentList);

