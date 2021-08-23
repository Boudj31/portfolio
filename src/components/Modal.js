import React from "react";
import ReactDOM from "react-dom";
import {
    Popover,
    OverlayTrigger,
    Button
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

const Modal = () => {
    let ref = React.useRef(null);

    const popover = (
        <Popover id="popover-basic">
            {/* <Popover.Title as="h3">Popover right</Popover.Title> */}
            <Popover.Content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex laborum necessitatibus perferendis quae quos sapiente sequi, ut. Delectus illo iure nulla porro reprehenderit repudiandae sapiente sunt tempora ut voluptatem?
                <div className="mt-3 mb-1">
                    <Button
                        onClick={() => ref.handleHide()}
                        size="sm"
                        variant="outline-dark"
                        className="pt-0 pb-0"
                    >
                        X
                    </Button>
                </div>
            </Popover.Content>
        </Popover>
    );

    return (
        <OverlayTrigger
            ref={r => (ref = r)}
            container={ref.current}
            trigger="click"
            placement="auto"
            overlay={popover}
            rootClose
        >
            <Button variant="dark">Show popover</Button>
        </OverlayTrigger>
    );
};
export default Modal;