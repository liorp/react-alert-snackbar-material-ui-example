import React from 'react';
import {useAlert} from 'react-alert';
import Button from "@material-ui/core/Button";

function SampleAlert() {
    const alert = useAlert()

    return (
        <Button
            onClick={() => {
                alert.show('Oh look, an alert!')
            }}
        >
            Show Alert
        </Button>
    );
}

export default SampleAlert;
