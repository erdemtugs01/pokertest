const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(8081)
console.log('listening on 8081\n')

var model = require('./model')

app.get('/', function(req, res){
    res.send(200);
})

app.post('/home', function(req, res){
    var request = req.body;
    console.log(request);
    var result = a(request);
    console.log(result);
    res.send({"request": request, "result": result});
})

function a(request){
    const cardLen = 5;
    const cardColorCnt = 4;
    const cardNumberCnt = 13;
    // var request = [];
    // var cardsPicked = request.trim().split(' ');
    var pickedNumbers = [];
    var pickedColors = [];
    var result = '';
    for (let i = 0; i < cardLen; i++){
        pickedNumbers[i] = parseInt(request[i].match(/\d+/g));
        pickedColors[i] = String(request[i].match(/[a-z]/gi));
    }
    // console.log(pickedNumbers);
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
        
    }
    check();
    console.log('result' + result);
    return result;
}