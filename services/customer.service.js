const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CusServ {
  async allCustomers() {
    try {
      const result = await prisma.customer.findMany();
      return result;
    } catch (err) {
      return err.message;
    }
  }

  async customerDetail(id) {
    try {
      const result = await prisma.customer.findUnique({ where: { id } });
      return result;
    } catch (err) {
      return err.message;
    }
  }

  async createCust(data) {
    try {
      const result = await prisma.customer.create({ data });
      return result;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = CusServ;
