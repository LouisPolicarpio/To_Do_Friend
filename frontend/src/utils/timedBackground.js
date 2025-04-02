
// Gets the gradient color class based on the current hour
// (Note: You still need to implement a method to refresh the background periodically, 
// such as using an interval to call this function every hour to update the background.)
export function updateBackground () {
    const hour = new Date().getHours();
    if (hour >= 8 && hour < 10){
        return "to-amber-100";
    } else if (hour >= 10 && hour < 15){
        return "to-cyan-100"
    } else if (hour >= 15 && hour < 18){
        return "to-indigo-100"
    }else{
        return "to-purple-100";
    }
}