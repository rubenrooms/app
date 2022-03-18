/* functie voor get request van de counter */
const getCounter = (req, res) => {
    res.json({
        "status": "succes",
        "data": {
            "counter": "counter"
        }
    })
}

module.exports.getCounter = getCounter;