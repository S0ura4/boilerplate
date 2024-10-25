import { AdminModel } from '../models';
import { FileModel } from '../models/file.model';
import { UserModel } from '../models/ipo-investor.model';
import { IGenericRepository } from './generic-repository.abstract';
import { IAdminRepository } from './repositories/admin.abstract';
import { IIpoInvestorRepository } from './repositories/ipo-investor.abstract';

export abstract class IDataServices {
  abstract admin: IAdminRepository<AdminModel>;
  abstract user: IIpoInvestorRepository<UserModel>;
  abstract file: IGenericRepository<FileModel>;
}
