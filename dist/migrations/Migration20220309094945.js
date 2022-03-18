"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220309094945 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220309094945 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "name" text not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20220309094945 = Migration20220309094945;
//# sourceMappingURL=Migration20220309094945.js.map