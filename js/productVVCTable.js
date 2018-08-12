var products_data_url = 'data/VVC.json'
var category_1 = ['VC3W-650F', 'VC3W-1000JB', 'CKTBS1200/35/750', 'VC3W-1300FB', 'VC3W-1600E']

$(document).ready(function() {
  $.getJSON(products_data_url , function(dataSource) {
    dataSource = dataSource.filter(function (value, index){
      try {
        var pfClass = window.location.href.split('-')[1].split('.')[0]
        var pf = parseInt(value['Cap'].split('-')[1])
        switch(pfClass){
          case '1':
            if (category_1.indexOf(value['Model']) != -1)
              return true
            break
          case '2':
            if (pf < 400)
              return true
            break 
          case '3':
            if (pf >= 400 && pf < 750)
              return true
            break 
          case '4':
            if (pf >= 1000 && pf < 1500)
              return true
            break 
          case '5':
            if (pf > 1500)
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
      ]
    })
  })
})