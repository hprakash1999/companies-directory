import { Company } from "../models/company.model.js";

export class CompanyRepo {
  constructor(model = Company) {
    this.model = model;
  }

  // Methods
  async insert(data) {
    return await this.model.create(data);
  }

  async insertMany(data) {
    return await this.model.insertMany(data);
  }

  async findAll() {
    return await this.model.find();
  }

  async findById(id) {
    return await this.model.findById(id);
  }
}

export const companyRepo = new CompanyRepo();
