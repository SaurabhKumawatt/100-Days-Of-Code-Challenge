const insert = document.getElementById('insert')

window.addEventListener('keydown', function (e) {
    insert.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>key</th>
    <th>key Code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? "space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})