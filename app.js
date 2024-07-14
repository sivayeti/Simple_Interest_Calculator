const calcBtn = document.getElementById('calcBtn')
calcBtn.addEventListener('click', function(event){
    event.preventDefault()

    let p = document.getElementById('princpal').value
    let t = document.getElementById('timespan').value
    let r = document.getElementById('rateOfInt').value

    p = Number(p)
    t = Number(t)
    r = Number(r)

    if(p > 0 && t > 0 && r > 0){
        let result = getSimpleInterest(p, t, r);
        let amount = p + result

        document.getElementById('resultBox').classList.add('show')
        document.getElementById('p').innerHTML = 'Rs. '+  p
        document.getElementById('t').innerHTML = t + ' years'
        document.getElementById('r').innerHTML = r + '%'
        document.getElementById('result').innerHTML = 'Rs. '+ result
        document.getElementById('amount').innerHTML = 'Rs. '+ amount

        document.getElementById('princpal').value = ''
        document.getElementById('timespan').value = ''
        document.getElementById('rateOfInt').value = ''

    }else {
        alert('Please enter all fields.')
    }
    
})

function getSimpleInterest(p, t, r){
    let si = (p * t * r)/100;
    return si;
}