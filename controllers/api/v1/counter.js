
/* functie voor get request van de counter */
const getCounter = (req, res) => {
    let count =req.body;
    res.json({
        "status": "succes",
        data: {
            "counter": count
        }
    })
    console.log(count);
}





module.exports.getCounter = getCounter;
