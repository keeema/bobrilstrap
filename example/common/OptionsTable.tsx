import * as b from "bobril";
import { Table } from "../../index";

export function OptionsTable({ children }: { children: b.IBobrilNode<IOptionRowData> | b.IBobrilNode<IOptionRowData>[] }): b.IBobrilNode {
    return (
        <Table bordered striped>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </Table>
    );
}

export interface IOptionRowData {
    children: {
        name: b.IBobrilChildren;
        type: b.IBobrilChildren;
        defaultValue: b.IBobrilChildren;
        description: b.IBobrilChildren;
    };
}

export function OptionsRow({ children }: IOptionRowData): b.IBobrilNode<IOptionRowData> {
    return (
        <tr>
            <td>{children.name}</td>
            <td>{children.type}</td>
            <td>{children.defaultValue}</td>
            <td>{children.description}</td>
        </tr>
    );
}
