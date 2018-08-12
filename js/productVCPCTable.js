var products_data_url = 'data/VCPC.json';

$(document).ready(function() {
  $.getJSON(products_data_url , function(dataSource) {
    // dataSource = dataSource.filter(function (value, index){
    //   try {
    //     var pfClass = window.location.href.split('-')[1].split('.')[0]
    //     switch(pfClass){
    //       case '1':
    //         if (category_2.indexOf(value['Model']) === -1)
    //           return true
    //         break
    //       case '2':
    //         if (category_2.indexOf(value['Model']) != -1)
    //           return true
    //         break 
    //       default:
    //         return false 
    //         break 
    //     }
    //   } catch(e) {
    //     return true
    //   }
    //   return false
    // })
    var table = $('#ivic-products').DataTable({
      // orderCellsTop: true,
      // fixedHeader: true,
      data: dataSource,
      columns: [
          { data : "1",
            render: function ( data, type, row ) {
              if (row['link'] && row['link'].trim().length)
                return data = '<a href="' + row['link'] + '">' + data + '</a>' 
              else
                return data 
            }
          },
          { data : "2" },
          { data : "3" },
          { data : "4" },
          { data : "5" },
          { data : "6" },
          { data : "7" },
          { data : "8" },
          { data : "9" }
      ]
    })
  })
})
