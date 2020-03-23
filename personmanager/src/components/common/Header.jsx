import React from 'react';
import { Alert, Badge } from 'react-bootstrap';

const Header = ({ personsLenght, appTitle }) => {
    let badgeStyle = "";
    if (personsLenght >= 3) badgeStyle = "success";
    if (personsLenght <= 2) badgeStyle = "warning";
    if (personsLenght <= 1) badgeStyle = "danger";

    return (
        <div>
            <Alert variant="info">
                <h2>{appTitle}</h2>
            </Alert>

            {/* <div className="alert alert-info">
        <h2>مدیریت کننده اشخاص</h2>
      </div> */}

            <Alert variant="light">
                .تعداد اشخاص{" "}
                {/* <span className={`badge badge-pill ${badgeStyle.join(" ")}`}>
          {persons.length}
        </span>{" "} */}
                <Badge pill variant={badgeStyle}>
                    {personsLenght}
                </Badge>
        نفر میباشد
      </Alert>
        </div>

    );
}

export default Header;