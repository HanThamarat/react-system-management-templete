const DecryptToken = require('../hooks/decryptJWT');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.currentagentcy = async (req, res) => {
    try {
        const userData = DecryptToken(req);

        return res.status(200).json({
            message: "Current agentcy retrieved successfully",
            body: userData,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get current agentcy",
            error: error,
        });
    }
};

exports.personalinfomation = async (req, res) => {
    try {
        const { name } = req.body;

        console.log('test');
    } catch (error) {
        return res.status(500).json({
            message: ""
        });
    }
}