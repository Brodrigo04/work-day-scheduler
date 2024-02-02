var now = new Date();

var hour=now.getHours();
var today=now.getDay();
let days={
  0:"Sunday",
  1:"Monday",
  2:"Tuesday",
  3:"Wednesday",
  4:"Thursday",
  5:"Friday",
  6:"Saturday"
}

$("#currentDay").text(days[today]);


var workDay = {
  "0":{ time: 9,id:9, 
      event: "" },
  "1":{ time: 10, id:10,
      event: "" },
  "2":{ time: 11, id:11,
      event: "" },
  "3":{ time: 12, id:12,
      event: "" },
  "4":{ time: 13, id:1,
      event: "" },
  "5":{ time: 14, id:2,
      event: "" },
  "6":{ time: 15, id:3,
      event: "" },
  "7":{ time: 16, id:4,
      event: "" },
  "8":{ time: 17, id:5,
      event: "" },
};
let loadData=window.localStorage.getItem("saving")
if(loadData){
  let parsedData=JSON.parse(loadData);
  workDay =parsedData;

}



for(let key in workDay){
  let block=workDay[key]
  let elId="#hour-"+block.id+" textarea"
  let btnId="#hour-"+block.id+" button"
  if(hour>block.time){ ///block in the past
    $(elId).removeClass("future").removeClass("present").addClass("past");
  }
  if(hour==block.time){ ///block in the past
    $(elId).removeClass("future").removeClass("past").addClass("present");
  }
   if(hour<block.time){ ///block in the past
    $(elId).removeClass("past").removeClass("present").addClass("future");
  }

  $(elId).val(block.event)
  $(btnId).click(function(){
    workDay[key].event=$(elId).val()
    window.localStorage.setItem("saving",JSON.stringify(workDay))
  })
}

$(function () {
  });