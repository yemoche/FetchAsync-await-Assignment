//getting the base URL

const baseUrl = 'https://api.spacexdata.com'
const contentDiv = document.querySelector('.content')
const getData = async () => {
    try{
        const response = await fetch(`${baseUrl}/v2/launches`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener('load', async ()=> {
    const launchesData = await getData();
    const firstLaunchData = launchesData[0];
    const secondLaunchData = launchesData[1];

    console.log(firstLaunchData);
    
    contentDiv.innerHTML = `
      <h2>${firstLaunchData.mission_name}</h3>
      <p>${firstLaunchData.launch_site.site_name_long}</p>
      <p>LAUNCH YEAR : ${firstLaunchData.launch_year}</p>
      <p>${secondLaunchData.details}</p>
      <img src= "${firstLaunchData.links.mission_patch}" height = 700px, width =500px>
      
    `
})

function myMove() {
    let el = document.getElementById("animate");
    let locationPosition = 0;
    let frameSetting = setInterval(frame, 9);
    function frame() {
        if (locationPosition == 2000) {
            clearInterval(frameSetting);
        } else {
            locationPosition++;
            el.style.bottom.centre = locationPosition + 'px';
            el.style.left= locationPosition + 'px';
        }
    }
}







