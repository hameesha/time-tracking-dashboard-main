let timeLinks = document.getElementsByClassName("nav-link");

let dataArray = [];

window.onload = function() {
  dateFilter(keyword = "weekly");
};

function dateFilter(keyword = "weekly") {
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
          document.getElementById("self").innerText = data.timeframes[key].current;
          document.getElementById("selfPre").innerText = data.timeframes[key].previous;
        }
     
     }
}

Array.from(timeLinks).forEach(link => {
      link.addEventListener('click', (e) => {
        if (document.querySelector('#navList span.active') !== null) {
          document.querySelector('#navList span.active').classList.remove('active');
        }
        e.target.className = "active";

        if(e.target.innerText === "Daily"){
          document.getElementById("selfDuration").innerText = "Day";
          document.getElementById("workDuration").innerText = "Day";
          document.getElementById("playDuration").innerText = "Day";
          document.getElementById("socialDuration").innerText = "Day";
          document.getElementById("studyDuration").innerText = "Day"; 
          document.getElementById("exerciseDuration").innerText = "Day";    
        }

        if(e.target.innerText === "Weekly"){
          document.getElementById("selfDuration").innerText = "Week";
          document.getElementById("workDuration").innerText = "Week";
          document.getElementById("playDuration").innerText = "Week";
          document.getElementById("socialDuration").innerText = "Week";
          document.getElementById("studyDuration").innerText = "Week"; 
          document.getElementById("exerciseDuration").innerText = "Week"; 
        }

        if(e.target.innerText === "Monthly"){
          document.getElementById("selfDuration").innerText = "Month";
          document.getElementById("workDuration").innerText = "Month";
          document.getElementById("playDuration").innerText = "Month";
          document.getElementById("socialDuration").innerText = "Month";
          document.getElementById("studyDuration").innerText = "Month"; 
          document.getElementById("exerciseDuration").innerText = "Month"; 
        }

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
