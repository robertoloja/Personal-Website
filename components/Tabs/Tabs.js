import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <ol className="tab-list" style={{
                    listStyleType: 'none',
                    margin: 0,
                    padding: 0,
                    paddingLeft: '40px',
                    overflow: 'hidden'}}>

                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content" style={{
                    background: 'rgba(20,20,20,0.2)',
                    borderRadius: '5px',
                    boxShadow: '2px 2px rgba(0.5, 0.5, 0.5, 0.2)',
                }}>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;