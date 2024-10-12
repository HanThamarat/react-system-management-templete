const DecryptToken = require('../hooks/decryptJWT');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createBoatPackage = async (req, res) => {
    try {
        const { packageName } = req.body;

        console.log(packageName);
    } catch (error) {
        return res.status(500).json({
            message: "Create Boat Package Failed",
            error: error,
        });
    }
};