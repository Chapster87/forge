import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const ProductTabs = ({ tabs }) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    if (!tabs.length) {
        return null;
    }

    return (
        <div>
            <Nav tabs>
                {tabs.map((tab, index) => (
                    <NavItem key={tab.id} role="presentation">
                        <NavLink
                        className={classnames({ active: activeTab === index })}
                        onClick={() => { toggle(index); }}
                        >
                            {tab.title}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
            <TabContent activeTab={activeTab}>
                {tabs.map((tab, index) => (
                    <TabPane tabId={index}>
                        <Row>
                            <Col sm="12"
                                dangerouslySetInnerHTML={{ __html: tab.content }}
                            />
                        </Row>
                    </TabPane>
                ))}
            </TabContent>
        </div>
    );
};

ProductTabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.any.isRequired,
        }).isRequired,
    ),
};

export default ProductTabs;