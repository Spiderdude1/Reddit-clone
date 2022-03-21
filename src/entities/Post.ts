import { Entity, PrimaryKey, Property, } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";


@Entity()
@ObjectType()
export class Post {

  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({type: 'text'})
  name!: string;


}