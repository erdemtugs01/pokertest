const cardLen = 5;
const cardColorCnt = parseInt(cardColors.length);
const cardNumberCnt = parseInt(cardNumbers.length);
// var request = [];
// var cardsPicked = request.trim().split(' ');
var cardsPicked = ['H3', 'D3', 'S3', 'H6', 'H5'];
var pickedNumbers = [];
var pickedColors = [];
var result = '';
for (let i = 0; i < cardLen; i++){
    pickedNumbers[i] = parseInt(cardsPicked[i].match(/\d+/g));
    pickedColors[i] = String(cardsPicked[i].match(/[a-z]/gi));
}
console.log(pickedNumbers);
// console.log(pickedColors);
function sortNumbers(){
    // var cardsSorting;
    
    for (let i = 0; i < cardLen; i++){
        for (let j = i+1; j < cardLen; j++){
            if (pickedNumbers[j] < pickedNumbers[i]){
                let tmp = pickedNumbers[i];
                pickedNumbers[i] = pickedNumbers[j];
                pickedNumbers[j] = tmp;
            }
        }
    }
    console.log('sortedArray = \n' + pickedNumbers);
}

sortNumbers();

function check(){
    var cntIfFlush=0;
    var cntIfStraight = 0;
    for (let i = 0; i < cardLen-1; i++){
        if (pickedNumbers[i] === pickedNumbers[i+1]){
            if (pickedNumbers[i+1] === pickedNumbers[i+2]){
                if (pickedNumbers[i+2] === pickedNumbers[i+3]){
                    result += 'Four Of A Kind';
                }
                else if (pickedNumbers[i+1] !== pickedNumbers[i+3] && pickedNumbers[i+3] === pickedNumbers[i+4]){
                    // console.log('FullHouse');
                    result += 'FullHouse';
                }
                    // console.log('ThreeOfAKind');
                    result += 'Three Of A Kind';
            }
            if (pickedNumbers[i+2] === pickedNumbers[i+3] && pickedNumbers[i+1] !== pickedNumbers[i+2]){
                console.log('TwoPair');
                result += 'Two Pair';
            }
            else
                console.log('Pair');
                result += 'Pair';
        }
        
        if (pickedNumbers[i] - pickedNumbers[i+1] === -1){
            cntIfStraight++;
        }
        if (cntIfStraight === 4){
            result += 'Straight';
            // console.log('Straight');
        }
        if (pickedColors[i] === pickedColors[i+1]){
            cntIfFlush++;
        }
        if (cntIfFlush === 4){
            result += 'Flush'
            // console.log('Flush');
        }
        // else 
        // result += 'High Card';
    }
    console.log(cntIfStraight);
    console.log(result);
}
check();