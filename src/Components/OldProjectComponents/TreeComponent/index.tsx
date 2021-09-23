import React, {useEffect, useState} from "react";
import classes from "./tree.module.scss";
import {Organization} from "../../../types/OldProjectTypes/organization";
import {Employee} from "../../../types/OldProjectTypes/employee";
import {api} from "../../../service/api.service";
import {Container} from "@material-ui/core";


export const TreeComponent = () => {
    const [tree, setTree] = useState<[] | Organization[]>([]);

    const getTree = async () => {
        const response = await api["tree"].getList();
        setTree(response);
    };

    useEffect(() => {
        getTree();
    }, []);

    const GenerateUser = ({id, name, surname, patronymic, org_name,}: Employee) => {
        return (
            <ul>
                <li className={classes.userNames}>
                    <span className={classes.userName}>{surname} {name} {patronymic}</span>
                    <p className={classes.userDep}>{org_name}</p>
                </li>
            </ul>
        );
    };

    const userChecker = (item: any) => {
        const arrOfUsers = item.users;
        if (arrOfUsers !== undefined && arrOfUsers.length !== 0) {
            return (
                <div>
                    {arrOfUsers.map((item: Employee) => (
                        <GenerateUser id={item.id}
                                      name={item.name}
                                      surname={item.surname}
                                      patronymic={item.patronymic}
                                      org_name={item.org_name}
                                      key={item.id}
                        />
                    ))}
                </div>
            );
        }
    };

    const TreeNode = ({node}: any) => {
        const [childVisible, setChildVisibility] = useState(false);
        const hasChild = !!node.organizations;

        return (
            <li key={node.id} onClick={(event) => setChildVisibility((v) => !v)}>
                <span className={classes.department}>{node.name}</span>
                {hasChild && childVisible && (
                    <div key={node.id} onClick={(event) => setChildVisibility((v) => !v)}>
                        {userChecker(node)}
                        {<SubTree data={node.organizations}/>}
                    </div>
                )}
            </li>
        );
    };

    const SubTree = ({data}: any) => (
        <ul className={classes.treeSection}>
            {data && data.map((item: any) => <TreeNode key={item.id} node={item}/>)}
        </ul>
    );

    return (
        <Container maxWidth="sm">
            <div className={classes.tree}>
                <SubTree data={tree}/>
            </div>
        </Container>
    )
}