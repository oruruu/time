let final
let local
let saveLocal
let hour = 0
let hourMin = 0 
let min = 0
let hoursAdd = [ 24, 25, 26, 27];
document.querySelector('.btn').addEventListener('click', () => {
    if (local !==0 ) {
        let localNum = localStorage.getItem('test')
        saveLocal = Number(localNum) 
        // console.log(saveLocal)
    }
    let date = document.querySelector('.inp').value;
    let date2 = document.querySelector('.inp2').value;
    // получаем время начала работы 
    let hourS = Number(date.substring(0, 2));
    let minS =Number(date.substring(3, 5));
    let generalS = (hourS*60) + minS
    // получаем время конца работы 
    let hourF =Number(date2.substring(0, 2));
    let minF =Number(date2.substring(3, 5));
    let generalF = (hourF*60) + minF

    // если конечное время меньше начального то
    if (generalF < generalS) {
        hourF = hoursAdd[hourF];
        generalF = (hourF*60) + minF
        // переменная с кол-во отработанных минут
        final = generalF - generalS + saveLocal
        local = +localStorage.setItem('test',final);

        if (final >= 60) {
            hour = Math.trunc(final/60);
            hourMin = hour*60
            min = final-hourMin
            console.log(hour)
            console.log(min)
        }
        else {
            min = final
            console.log(min)
        }
    }
    else {
        final = generalF - generalS + saveLocal
        local = +localStorage.setItem('test',final);
        if (final >= 60) {
            hour = Math.trunc(final/60);
            hourMin = hour*60
            min = final-hourMin
            console.log(hour)
            console.log(min)
        }
        else {
            min = final
            console.log(min)
        }
    }
    document.querySelector('.res').innerHTML =('ты отработал ' + hour +' часов ' + min + ' минут');

})

document.querySelector('.btn2').addEventListener('click', () => {
    localStorage.removeItem('test')
    final = 0
    hour = 0
    min = 0
    document.querySelector('.res').innerHTML =('ты отработал ' + hour +' часов ' + min + ' минут');
})
