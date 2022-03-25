
/* functie voor get request van de counter */
const getCounter = (req, res) => {
    var count =req.body.counter;
    res.json({
        "status": "succes",
        data: {
            count
        }
    })
    console.log(count);
}





module.exports.getCounter = getCounter;
