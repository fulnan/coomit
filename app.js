    const $year = document.getElementById('year');
    const $month = document.getElementById('month');
    const $day = document.getElementById('day');
    const body = document.getElementById('result-div')                                                                                                                
    // const result = document.getElementById('result')
    // result.innerHTML = 'let us se'

    let _year = "";
    let _month ="";
    let _day = "";

    $year.addEventListener('change', function name(event) {
        _year = event.target.value;
        console.log(_year);
        // return _year
    });

    $month.addEventListener('change', function name(event) {
        _month = event.target.value;
        // return _month
    });

const submit = document.getElementById('submit');

submit.addEventListener('click', function () {
    myFunction()
    $year.value = "";
    $month.value = "";
    $day.value = "";
 const result = document.createElement('p')
 body.appendChild(result)
 result.innerHTML = `Your age is ${ new Date().getFullYear()- _year} years old`;
    console.log('huh');
});

 function myFunction() {
    event.preventDefault();
 }
