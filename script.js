let timeLinks = document.getElementsByClassName("nav-link");

let dataArray = [];

function dateFilter(keyword) {
  let key = keyword.toLowerCase();
     for (data of dataArray){

        if(data.title === "Work"){
          document.getElementById("work").innerText = data.timeframes[key].current;
          document.getElementById("workPre").innerText = data.timeframes[key].previous;
        }

        if(data.title === "Play"){
          document.getElementById("play").innerText = data.timeframes[key].current;
          document.getElementById("playPre").innerText = data.timeframes[key].previous;
        }

        if(data.title === "Study"){
          document.getElementById("study").innerText = data.timeframes[key].current;
          document.getElementById("studyPre").innerText = data.timeframes[key].previous;
        }

        if(data.title === "Exercise"){
          document.getElementById("exercise").innerText = data.timeframes[key].current;
          document.getElementById("exercisePre").innerText = data.timeframes[key].previous;
        }

        if(data.title === "Social"){
          document.getElementById("social").innerText = data.timeframes[key].current;
          document.getElementById("socialPre").innerText = data.timeframes[key].previous;
        }

        if(data.title === "Self Care"){
          document.getElementById("self care").innerText = data.timeframes[key].current;
          document.getElementById("selfPre").innerText = data.timeframes[key].previous;
        }
     
     }
}

Array.from(timeLinks).forEach(link => {
      link.addEventListener('click', (e) => {
        dateFilter(e.target.innerText);
      })
})



fetch("./data.json")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      dataArray.push(element)
    })
  );
