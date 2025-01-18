


    const funTime=()=>{
        const curTime = new Date();
        const time = `${curTime.getHours()}:${curTime.getMinutes()}:${curTime.getSeconds()}`;
        const getTime = document.getElementById("get-time");
        return getTime.innerText = time;
    }
    funTime();

    const stopT= setInterval(funTime,1000)
    const stoptime = document.getElementById("stop-time");

    stoptime.addEventListener('click', function(){
        clearInterval(stopT);
    })

