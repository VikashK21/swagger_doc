const CusServT = new (require("../services/customer.service"))();

class CusCtrler {
    allData = async (req, res) => {
        try {
            const result = await CusServT.allCustomers();
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json(err.message)            
        }
    }

    DataById = async (req, res) => {
        try {
            const result = await CusServT.customerDetail(Number(req.params.id));
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json(err.message)            
        }
    }

    CreateData = async (req, res) => {
        try {
            console.log(req.body);
            const result = await CusServT.createCust(req.body)
            res.status(201).json(result);
        } catch (err) {
            res.status(400).json(err.message);
        }
    }
}

module.exports = CusCtrler;