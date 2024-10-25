import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import InjectableString from 'src/common/injectable.string';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { IAdminRepository } from 'src/core/abstracts/repositories/admin.abstract';
import { IIpoInvestorRepository } from 'src/core/abstracts/repositories/ipo-investor.abstract';
import { AdminModel } from 'src/core/models';
import { FileModel } from 'src/core/models/file.model';
import { UserModel } from 'src/core/models/ipo-investor.model';
import { DataSource, Repository } from 'typeorm';
import { AdminEntity } from './entities';
import { FileEntity } from './entities/file.entity';
import { IpoInvestorsEntity } from './entities/ipo-investor.entity';
import { PgGenericRepository } from './pg-generic-repository';
import { PgAdminRepository } from './repositories/admin.repository';
import { PgIpoInvestorRepository } from './repositories/ipo-investor.repository';

@Injectable()
export class PgDataServices implements IDataServices, OnApplicationBootstrap {
  admin: IAdminRepository<AdminModel>;
  user: IIpoInvestorRepository<UserModel>;
  file: PgGenericRepository<FileModel>;

  constructor(
    @Inject(AdminEntity.REPOSITORY)
    private adminRepository: Repository<AdminEntity>,

    @Inject(IpoInvestorsEntity.REPOSITORY)
    private ipoInvestorRepository: Repository<IpoInvestorsEntity>,

    @Inject(FileEntity.REPOSITORY)
    private fileRepository: Repository<FileEntity>,

    private readonly cls: IClsStore<AppClsStore>,

    @Inject(InjectableString.APP_DATA_SOURCE)
    private dataSource: DataSource,
  ) {}

  onApplicationBootstrap() {
    // admin
    this.admin = new PgAdminRepository(this.cls, this.adminRepository);
    // user
    this.user = new PgIpoInvestorRepository(this.cls, this.ipoInvestorRepository);
    // file
    this.file = new PgGenericRepository(this.cls, this.fileRepository);
  }
}
