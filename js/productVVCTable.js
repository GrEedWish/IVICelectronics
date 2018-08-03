var products_data_url = 'data/VVC.json';
var category_1 = ['VC3W-650F', 'VC3W-1000JB', 'CKTBS1200/35/750', 'VC3W-1300FB', 'VC3W-1600E']

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
        var pf = parseInt(v.split('-')[1])
        switch(pfClass){
          case '1':
            if (category_1.indexOf(tbl_row.firstChild.innerText) == -1)
              tbl_row.remove()
            break;
          case '2':
            if (pf >= 400) {
              tbl_row.remove()
            }
            break;
          case '3':
            if (pf < 400 || pf >= 750) {
              tbl_row.remove()
            }
            break;
          case '4':
            if (pf < 1000 || pf >= 1500) {
              tbl_row.remove()
            }
            break;
          case '4':
            if (pf < 1500) {
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