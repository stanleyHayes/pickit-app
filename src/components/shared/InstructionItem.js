import React from "react";
import {ListItemText, ListItem} from "@material-ui/core";

function InstructionItem(props) {
    return (
        <ListItem divider={true}>
            <ListItemText
                primary={props.instruction.title}
                secondary={props.instruction.description}
            />
        </ListItem>
    )
}

export default InstructionItem;
