let final = 0
let hour = 0
let hourMin = 0
let min = 0
let d = 0
let hourstest = [ 24, 25, 26, 27];
document.querySelector('.btn').addEventListener('click', () => {
    let date = document.querySelector('.inp').value;
    let date2 = document.querySelector('.inp2').value;

    // let gg =Number(date.substring(0, 2));
    let g = Number(date.substring(0, 2));
    let g2 =Number(date.substring(3, 5));
    let g3 = (g*60) + g2



    let q =Number(date2.substring(0, 2));
    let q2 =Number(date2.substring(3, 5));
    let q3 = (q*60) + q2

    if (q <g) {
        q=hourstest[q]
        let q3 = (q*60) + q2
        let final = q3 - g3
        d = d+final
            if (d >= 60) {
                hour = Math.trunc(d/60);
                hourMin = hour*60
                min = d-hourMin
            }
            else {
                min = d
            }
    }
    else {
    let final = q3 - g3
    d = d+final
        if (d >= 60) {
            hour = Math.trunc(d/60);
            hourMin = hour*60
            min = d-hourMin
        }
        else {
            min = d
        }
}
    document.querySelector('.res').innerHTML =('ты отработал ' + hour +' часов ' + min + ' минут');

})
document.querySelector('.btn2').addEventListener('click', () => {
    final = 0
    hour = 0
    hourMin = 0
    min = 0
    d = 0
    document.querySelector('.res').innerHTML =('ты отработал ' + hour +' часов ' + min + ' минут');
})

localStorage.setItem('test', 55);
console.log(localStorage.getItem('test'));
