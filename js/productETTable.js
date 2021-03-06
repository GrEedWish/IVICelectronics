var products_data_url = 'data/ET.json';

$(document).ready(function() {
  $.getJSON(products_data_url , function(dataSource) {
    dataSource = dataSource.filter(function (value, index){
      try {
        var pfClass = window.location.href.split('-')[1].split('.')[0]
        console.log(value['Model'][0])
        switch(pfClass){
          case '1':
            if (value['Model'][0] != '4' && value['Model'][0] != '5')
              return true
            break
          case '2':
            if (value['Model'][0] === '4')
              return true
            break 
          case '3':
            if (value['Model'][0] === '5')
              return true
            break 
          default:
            return false 
            break 
        }
      } catch(e) {
        return true
      }
      return false
    })
    var table = $('#ivic-products').DataTable({
      // orderCellsTop: true,
      // fixedHeader: true,
      data: dataSource,
      columns: [
          { data : "Model",
            render: function ( data, type, row ) {
              if (row['link'] && row['link'].trim().length)
                return data = '<a href="' + row['link'] + '">' + data + '</a>' 
              else
                return data 
            }
          },
          { data : "ReferenceModel" },
          { data : "Filament" },
          { data : "Cooling" },
          { data : "Frequency" },
          { data : "PlateVoltage" },
          { data : "PlateCurrent" },
          { data : "OutputPower" }
      ]
    })
  })
})

// $.getJSON(products_data_url , function(data) {
//   var tbl_body = document.createElement('tbody');
//   var odd_even = false;
//   $.each(data, function() {
//     var tbl_row = tbl_body.insertRow();
//     var legal = true;
//     tbl_row.className = odd_even ? 'odd' : 'even';
//     $.each(this, function(k , v) {
//     	if (k == 'link') {
//         if (v){
//           var a = document.createElement('a');
//           a.title = '点击查看详情';
//           a.href = v.toString();
//           a.target = '_blank';
//           a.innerHTML = tbl_row.firstChild.innerHTML;
//           tbl_row.firstChild.innerHTML = ''
//           tbl_row.firstChild.appendChild(a);
//         }
//     	}
//     	else {
//     		var cell = tbl_row.insertCell();
//       	cell.appendChild(document.createTextNode(v.toString()));
//     	}

//       if (k == 'Cap' && window.location.href.split('-')[1]) {
        
        
//       }
//     })
//     odd_even = !odd_even;  
//     if (window.location.href.split('-')[1]){
//       var cate_Class = window.location.href.split('-')[1].split('.')[0]
//       console.log(tbl_row.firstChild.innerText[0])
//       switch(cate_Class){
//         case '1':
//           if (tbl_row.firstChild.innerText[0] == '4' ||
//             tbl_row.firstChild.innerText[0] == '5') {
//             tbl_row.remove()
//           }
//           break;
//         case '2':
//           if (tbl_row.firstChild.innerText[0] != '4') {
//             console.log(tbl_row.firstChild.innerText[0])
//             tbl_row.remove()
//           }
//           break;
//         case '3':
//           if (tbl_row.firstChild.innerText[0] != '5') {
//             tbl_row.remove()
//           }
//           break;
//         default:
//           break;
//       }
//     }          
//   })
  

//   $(tbl_body).appendTo("#ivic-products");
// });

// $(document).ready(function () {
//   var jsTable = $('#ivic-products').DataTable( {
//   });
// });