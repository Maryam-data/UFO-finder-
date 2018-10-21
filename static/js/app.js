// from data.js
var tableData = data;
// function create table 
function createtable(data){
    var tbody = d3.select("tbody");
    tbody.text("");
    data.forEach(function(info){
            var row=tbody.append("tr");
            row.append("td").text(info.datetime);
            row.append("td").text(info.city);
            row.append("td").text(info.state);
            row.append("td").text(info.country);
            row.append("td").text(info.shape);
            row.append("td").text(info.durationMinutes);
            row.append("td").text(info.comments);

    });
} 
var Erorr= [{
    datetime: "null",
    city: "null",
    state: "null",
    country: "null",
    shape: "null",
    durationMinutes: "null",
    comments: "null"
  }];


// filter table by date 

var filter=d3.select("#filter-btn");
filter.on("click",function(){
    d3.event.preventDefault();
    var seachBy  = d3.select("#datetime")
    var inputValue  = seachBy.property("value");
    var filterdata=tableData.filter(function(info){
        return info.datetime===inputValue
    })
    if(filterdata && filterdata.length >=1)
        createtable(filterdata);
    else
        createtable(Erorr);
})   

// filter table by city


// 























createtable(tableData)
