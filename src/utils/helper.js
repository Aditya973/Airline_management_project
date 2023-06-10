function compareTime(timeString1,timeString2){
    x = new Date(timeString1);
    y = new Date(timeString2);
    if(x.getTime() > y.getTime()){
        return false;
    }
    return true;
}

module.exports = {
    compareTime
};