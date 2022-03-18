import { Migration } from '@mikro-orm/migrations';

export class Migration20220309094945 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "name" text not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "post" cascade;');
  }

}
