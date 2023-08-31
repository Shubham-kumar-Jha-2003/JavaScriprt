const insert = document.querySelector("#insert");

window.addEventListener('keyup', (e) => {

    insert.innerHTML = `
    <div class='key'> 

    <table>
      <tr>
        <th>Key </th>
        <th>keyCode </th>
        <th>code</th>
        
      </tr>

    <tr>
      <td> ${e.key === " " ? "space" : e.key }</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
     
    </tr>

    
</table>

    </div>`;
})

   