import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { IIpoInvestorRepository } from 'src/core/abstracts/repositories/ipo-investor.abstract';
import { Repository } from 'typeorm';
import { IpoInvestorsEntity } from '../entities/ipo-investor.entity';
import { PgGenericRepository } from '../pg-generic-repository';

export class PgIpoInvestorRepository
  extends PgGenericRepository<IpoInvestorsEntity>
  implements IIpoInvestorRepository<IpoInvestorsEntity>
{
  protected _repository: Repository<IpoInvestorsEntity>;
  protected cls: IClsStore<AppClsStore>;
  constructor(cls: IClsStore<AppClsStore>, repository: Repository<IpoInvestorsEntity>) {
    super(cls, repository);
  }
}
