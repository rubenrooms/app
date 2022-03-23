const { count } = require("rxjs");

/* functie voor get request van de counter */
const getCounter = (req, res) => {
    let count =req.body.counter;
    res.json({
        "status": "succes",
        body: {
            counter: count
        }
    })
}





module.exports.getCounter = getCounter;
