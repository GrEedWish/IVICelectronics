var products_data_url = 'data/VI.json';

$.getJSON(products_data_url , function(data) {
  var tbl_body = document.createElement('tbody');
  var odd_even = false;
  $.each(data, function() {
    var tbl_row = tbl_body.insertRow();
    var legal = true;
    tbl_row.className = odd_even ? 'odd' : 'even';
    $.each(this, function(k , v) {
    	if (k == 'link') {
        if (v){
          var a = document.createElement('a');
          a.title = '点击查看详情';
          a.href = v.toString();
          a.target = '_blank';
          a.innerHTML = tbl_row.firstChild.innerHTML;
          tbl_row.firstChild.innerHTML = ''
          tbl_row.firstChild.appendChild(a);
        }
    	}
    	else {
    		var cell = tbl_row.insertCell();
      	cell.appendChild(document.createTextNode(v.toString()));
    	}

      if (k == 'Cap' && window.location.href.split('-')[1]) {
        
        
      }
    })
    odd_even = !odd_even;  
    if (window.location.href.split('-')[1]){
      var cate_Class = window.location.href.split('-')[1].split('.')[0]
      switch(cate_Class){
        case '1':
          if (tbl_row.firstChild.innerText.substring(0,3) != 'ZMD') {
            tbl_row.remove()
          }
          break;
        case '2':
          if (tbl_row.firstChild.innerText.substring(0,3) != 'ZMF') {
            tbl_row.remove()
          }
          break;
        case '3':
          if (tbl_row.firstChild.innerText.substring(0,3) != 'ZKJ') {
            tbl_row.remove()
          }
          break;
        default:
          break;
      }
    }          
  })
  

  $(tbl_body).appendTo("#ivic-products");
});

$(document).ready(function () {
  var jsTable = $('#ivic-products').DataTable( {
  });
});