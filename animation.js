let valuedisplay=document.querySelectorAll(".num")
let intervel=2000;
valuedisplay.forEach((valuedisplay)=>
{
    let startvalue=0;
    let endvlaue=parseInt(valuedisplay.getAttribute("data-val"));
    let duration=Math.floor(intervel/endvlaue);
    let counter=setInterval(function()
    {
        startvalue+=1;
        valuedisplay.textContent=startvalue+"%";
        if(startvalue===endvlaue)
        {
            clearInterval(counter);
        }
    },duration)
})