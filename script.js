function getPoints(value) {
    switch (value) {
        case 'nice':
            return 1
        case 'Naughty':
            return -1
    }

}

function checkNaughtyOrNice() {
    const q1 = document.getElementById('q1').value
    const q2 = document.getElementById('q2').value
    const q3 = document.getElementById('q3').value
    const q4 = document.getElementById('q4').value
    const q5 = document.getElementById('q5').value

    const score = getPoints(q1) + getPoints(q2) + getPoints(q3) + getPoints(q4) + getPoints(q5)

if (score > 2.5) {
    alert('Ho Ho Ho on the Nice list you go!')

} else {
    alert( ' Slow your role here is some cole!')
}




}