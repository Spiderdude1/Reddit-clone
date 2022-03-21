import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    Posts(
        @Ctx() {em}: MyContext
    )
    {
        return em.find(Post, {});
    }


    @Mutation(() => Post)
    async CreatePost(
        @Arg("title") name: string,
        @Ctx() {em}: MyContext
    )
    {
        const post = em.create(Post, {name});
        await em.persistAndFlush(post);
        return post;
    }

    @Mutation(() => Post, {nullable: true})
    async UpdatePost(
        @Arg("title", () => String, {nullable: true}) name: string,
        @Arg("id") id: number,
        @Ctx() {em}: MyContext
    )
    {
        const post = await em.findOne(Post, {id});
        if (!post) {
            return null;
        }
        if(typeof name !== 'undefined')
        {
            post.name = name;
            await em.persistAndFlush(post);
        }
        return post;
    }
};