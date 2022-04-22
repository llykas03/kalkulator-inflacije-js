function inflationCalculator() {

    //varijable kojima upravljamo

    let inflationRate = document.querySelector('#inflationRate').value;
    let money = document.querySelector('#money').value;
    let years = document.querySelector('#years').value;

    console.log(inflationRate);
    //pretvaramo ih u brojeve

    inflationRate = parseFloat(inflationRate);
    money = parseFloat(money);
    years = parseFloat(years);
    let worth = 0;


    //formula za racunicu samo za prvu godinu

    worth = money + (money * (inflationRate / 100));

    // petlja koja vrti dobijen rezultat dok ne dodje do datih godina

    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);

    }
    worth = worth.toFixed(2);

    // kreiranje novog elementa gde smestamo broj

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerHTML = `Danasnjih ${money} € vredi isto kao ${worth} € za ${years} godina.`;
    document.querySelector('.container').appendChild(newElement);

}
function refresh() {
    window.location.reload("Refresh")
}
