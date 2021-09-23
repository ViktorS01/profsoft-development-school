import {Employee} from "./employee";

export type Organization = {
    id: number,
    name: string,
    organizations: Array<Organization>,
    users?: Array<Employee>
}