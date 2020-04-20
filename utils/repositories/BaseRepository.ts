import { getManager, EntityManager } from "typeorm";

export abstract class BaseRepository {

    protected get EntityManager(): EntityManager {

        return getManager();

    }

}
