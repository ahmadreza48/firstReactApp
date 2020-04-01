import React from 'react';
import { Alert, Badge } from 'react-bootstrap';
import SimpleContext from '../../context/SimpleContext';

const Header = ({ personsLenght }) => {
    let badgeStyle = "";
    if (personsLenght >= 3) badgeStyle = "success";
    if (personsLenght <= 2) badgeStyle = "warning";
    if (personsLenght <= 1) badgeStyle = "danger";

    return (
        <SimpleContext.Consumer>
            {context => (
                <div>
                    <Alert variant="info">
                        <h2>{context.state.appTitle}</h2>
                    </Alert>

                    <Alert variant="light">
                        .تعداد اشخاص{" "}
                        {/* <span className={`badge badge-pill ${badgeStyle.join(" ")}`}>
                    {persons.length}
                     </span>{" "} */}
                        <Badge pill variant={badgeStyle}>
                            {context.state.persons.lenght}
                        </Badge>
                    نفر میباشد
                        </Alert>
                </div>

            )}

        </SimpleContext.Consumer>
    );
}

export default Header;