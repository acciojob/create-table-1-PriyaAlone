function insert_Row() {
    //Write your code here
  function insert_Row() {
    // Get the reference to the table using its ID
    const table = document.getElementById("sampleTable");
    
    // Insert a new row at the top (index 0)
    const newRow = table.insertRow(0);
    
    // Insert two new cells into the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    // Set the content for the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}

  
}
