var products_data_url = 'data/VFC.json' 

$(document).ready(function() {
  $.getJSON(products_data_url , function(dataSource) {
    dataSource = dataSource.filter(function (value, index){
      try {
        var pfClass = window.location.href.split('-')[1].split('.')[0]
        var pf = parseInt(value['Cap'].split('±')[0])
        switch(pfClass){
          case '1':
            if (pf < 100)
              return true
            break 
          case '2':
            if (pf >= 100 && pf < 400)
              return true
            break 
          case '3':
            if (pf >= 400 && pf < 1000)
              return true
            break 
          case '4':
            if (pf > 1000)
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
          { data : "CometReferenceModel" },
          { data : "JenningsReferenceModel" },
          { data : "Cap" },
          { data : "PeakTestVoltage" },
          { data : "RFPeakWorkingVoltage" },
          { data : "MaxRFCurrent" },
          { data : "DimensionsDiam" },
          { data : "DimensionsLength" },
          { data : "MaximumWeight" }
      ],
      // drawCallback: function( settings ){
      //   var api = this.api() 

      //   api.columns().every( function () {
      //     var data = this.data() 
      //     console.log( api.rows( {page:'current'} ).data() )
      //     // if($.inArray('O', data) !== -1){
      //     //    $(this.nodes()).addClass('highlight') 
      //     // } else {
      //     //    $(this.nodes()).removeClass('highlight') 
      //     // }
      //  }) 
      // }

    })
  })
})