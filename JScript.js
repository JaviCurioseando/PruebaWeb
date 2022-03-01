function CreateTableFromJFROG() { 
    
      async function loadNames() {
    
          let url = 'https://edxpruebagit.jfrog.io/ui/repos/tree/General/default-edx-prueba-generic-local/PruebaJSON.json';
          let username = 'cursomledx1@gmail.com';
          let password = 'AKCp8kr11zTa6iJnAZwvT1ZraiEHnngi8X6g9bHkXYHrPS1eBbLSm4LtgKcRLTWP9Hwgmenui';
    
          let headers = new Headers();
    
          //headers.append('Content-Type', 'text/json');
          headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    
          const request = new Request(url, {
            method: 'GET',
            headers: headers,
          });
    
          const response = await fetch(request);
          const myBooks = await response.json();
    
          console.log(myBooks); 
          
        
    
          // EXTRACT VALUE FOR HTML HEADER. 
          // ('Book ID', 'Book Name', 'Category' and 'Price')
          var col = [];
          for (var i = 0; i < myBooks.length; i++) {
              for (var key in myBooks[i]) {
                  if (col.indexOf(key) === -1) {
                      col.push(key);
                  }
              }
          }
    
          // CREATE DYNAMIC TABLE.
          var table = document.createElement("table");
    
          // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    
          var tr = table.insertRow(-1);                   // TABLE ROW.
    
          for (var i = 0; i < col.length; i++) {
              var th = document.createElement("th");      // TABLE HEADER.
              th.innerHTML = col[i];
              tr.appendChild(th);
          }
    
          // ADD JSON DATA TO THE TABLE AS ROWS.
          for (var i = 0; i < myBooks.length; i++) {
    
              tr = table.insertRow(-1);
    
              for (var j = 0; j < col.length; j++) {
                  var tabCell = tr.insertCell(-1);
                  tabCell.innerHTML = myBooks[i][col[j]];
              }
          }
    
          // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
          var divContainer = document.getElementById("showData");
          divContainer.innerHTML = "";
          divContainer.appendChild(table);
    
    
      }
      
      loadNames();
    
    
    
    
    
}
    









// -----------------



function CreateTableFromDomainJSON() {

    async function loadNames() {
      const request = new Request('./TestsNOK_testing3.json', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
    
      const response = await fetch(request);
      const myBooks = await response.json();

      console.log(myBooks); 
      
     

      // EXTRACT VALUE FOR HTML HEADER. 
      // ('Book ID', 'Book Name', 'Category' and 'Price')
      var col = [];
      for (var i = 0; i < myBooks.length; i++) {
          for (var key in myBooks[i]) {
              if (col.indexOf(key) === -1) {
                  col.push(key);
              }
          }
      }

      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");

      // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

      var tr = table.insertRow(-1);                   // TABLE ROW.

      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }

      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (var i = 0; i < myBooks.length; i++) {

          tr = table.insertRow(-1);

          for (var j = 0; j < col.length; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = myBooks[i][col[j]];
          }
      }

      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("showData3");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);


    }
    loadNames();

}





// -------------





 function AddValueAndUploadJFROG() {
    
    // var myBooks;
  
    // let url = 'https://ra-artifacts-t.siemens.net:443/artifactory/javascript-test-alberto/TestsNOK_testing.json';
    let username = 'alberto.andres@siemens.com';
    let password = 'AKCp8kqqozYVPFZaWTDWVEdUEifko3ncWJNaarR6c82kwJ5yaS6YgMzomUcFS5kLPYk3wQW2b';
    // let headers = new Headers();
    // //headers.append('Content-Type', 'text/json');
    // headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
  
  
    // async function loadNames() {
  
    //   const request = new Request(url, {
    //     method: 'GET',
    //     headers: headers,
    //   });
  
    //   const response = await fetch(request);
    //   myBooks = await response.json();
  
    //   console.log('Despues del GET:', myBooks); 
      
      
    //   myBooks.push({TestID : 'CPL996A', State:'Opened', CFX:'CFX00654321'})
      
    //   console.log('Despues del push:', myBooks); 
  
    //   // EXTRACT VALUE FOR HTML HEADER. 
    //   // ('Book ID', 'Book Name', 'Category' and 'Price')
    //   var col = [];
    //   for (var i = 0; i < myBooks.length; i++) {
    //       for (var key in myBooks[i]) {
    //           if (col.indexOf(key) === -1) {
    //               col.push(key);
    //           }
    //       }
    //   }
  
    //   // CREATE DYNAMIC TABLE.
    //   var table = document.createElement("table");
  
    //   // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
  
    //   var tr = table.insertRow(-1);                   // TABLE ROW.
  
    //   for (var i = 0; i < col.length; i++) {
    //       var th = document.createElement("th");      // TABLE HEADER.
    //       th.innerHTML = col[i];
    //       tr.appendChild(th);
    //   }
  
    //   // ADD JSON DATA TO THE TABLE AS ROWS.
    //   for (var i = 0; i < myBooks.length; i++) {
  
    //       tr = table.insertRow(-1);
  
    //       for (var j = 0; j < col.length; j++) {
    //           var tabCell = tr.insertCell(-1);
    //           tabCell.innerHTML = myBooks[i][col[j]];
    //       }
    //   }
  
    //   // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    //   var divContainer = document.getElementById("showData5");
    //   divContainer.innerHTML = "";
    //   divContainer.appendChild(table);
  
    // }
  
    // loadNames();
  
    var myBooks = [
      {
          "Book ID": "1",
          "Book Name": "Computer Architecture",
          "Category": "Computers",
          "Price": "125.60"
      },
      {
          "Book ID": "2",
          "Book Name": "Asp.Net 4 Blue Book",
          "Category": "Programming",
          "Price": "56.00"
      },
      {
          "Book ID": "3",
          "Book Name": "Popular Science",
          "Category": "Science",
          "Price": "210.40"
      }
    ]
  
    // https://stackoverflow.com/questions/39842013/fetch-post-with-body-data-not-working-params-empty
    // https://github.com/github/fetch/issues/505
    // https://developer.mozilla.org/en-US/docs/Web/API/fetch
  
    let url2 = 'https://ra-artifacts-t.siemens.net:443/artifactory/javascript-test-alberto/TestsNOK_testing3.json';
    //let url2 = './TestsNOK_testing3.json';
    let headers2 = new Headers();
    //headers.append('Content-Type', 'text/json');
    headers2.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    headers2.append("Content-Type", "application/json");
  
    async function loadNames() {
      
      fetch(url2, {
        method: 'PUT', // or 'POST'
        body: JSON.stringify(myBooks), // data can be `string` or {object}!
        headers: headers2,
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  
  
      // ----
  
    
      // const requestOptions = {
      //     method: 'PUT',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify( [
      //       {
      //           "Book ID": "1",
      //           "Book Name": "Computer Architecture",
      //           "Category": "Computers",
      //           "Price": "125.60"
      //       },
      //       {
      //           "Book ID": "2",
      //           "Book Name": "Asp.Net 4 Blue Book",
      //           "Category": "Programming",
      //           "Price": "56.00"
      //       },
      //       {
      //           "Book ID": "3",
      //           "Book Name": "Popular Science",
      //           "Category": "Science",
      //           "Price": "210.40"
      //       }
      //     ])
      //   };
      //   const response = await fetch('./TestsNOK_testing3.json', requestOptions);
      //   const data = await response.json();
      
      //   console.log(data); 
  
        /// ------
        // const request = new Request(url2, {
        //   method: 'PUT',
        //   body: JSON.stringify(myBooks),
        //   headers: headers2
        // });
      
        // const response = await fetch(request);
        // const myBooks = await response.json();
  
        // console.log(myBooks); 
        
      }
  
    console.log('stringify:', JSON.stringify(myBooks));
    
    loadNames();
  
  }