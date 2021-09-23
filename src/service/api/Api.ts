import {ApiAbstract} from "./abstract";
import {User, UserCreate} from "../../types/OldProjectTypes/user";
import {Tree} from "../../types/OldProjectTypes/tree";
import {Organization} from "../../types/OldProjectTypes/organization";

export class ApiUsers extends ApiAbstract<User, UserCreate>{};
export class ApiTree extends ApiAbstract<Organization, any>{};