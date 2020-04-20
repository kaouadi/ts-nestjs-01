import { EntitySchema } from "typeorm";
import {User} from "../domain/User";

export const UserSchema = new EntitySchema({
    name: "user",
    target: User,
    tableName: "user",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String

        },
        age: {
            type: Number
        }
    }
});