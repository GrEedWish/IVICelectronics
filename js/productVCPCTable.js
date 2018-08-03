var products_data_url = 'data/VCPC.json';

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
        var pfClass = window.location.href.split('-')[1].split('.')[0]
        console.log(pfClass)
        var pf = parseInt(v.split('±')[0])
        switch(pfClass){
          case '1':
            if (pf >= 100) {
              tbl_row.remove()
            }
            break;
          case '2':
            if (pf < 100 || pf >= 400) {
              console.log(pf)
              tbl_row.remove()
            }
            break;
          case '3':
            if (pf < 400 || pf >= 1000) {
              tbl_row.remove()
            }
            break;
          case '4':
            if (pf < 1000) {
              tbl_row.remove()
            }
            break;
          default:
            break;
        }
        
      }
    })
    odd_even = !odd_even;            
  })
  $(tbl_body).appendTo("#ivic-products");
});

$(document).ready(function () {
  var jsTable = $('#ivic-products').DataTable( {
  });
});