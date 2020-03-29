import React from 'react';
import TeamRegistration from './product/forms/registrationTeam';
import CommentsField from './product/forms/comments';

const ProductFields = ({prodID}) => {
    switch (prodID) {
        case '1af54c9c-3d05-5d48-9983-f177d5bcd5d8':
            return (
                <React.Fragment>
                    <TeamRegistration />
                    <CommentsField />
                </React.Fragment>
            );
        default:
            return null;
    }
};

export default ProductFields;