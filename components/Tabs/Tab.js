import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const {label, onClick} = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        function changeBackground(e) {
            e.target.style.background = 'linear-gradient(180deg,' +
                'rgba(100, 100, 100, 0.1) 30%,' +
                'rgba(20, 20, 20, 0.4) 100%)'
        }

        function restoreBackground(e) {
            e.target.style.background = e.target.style.background = ''
        }

        return (
            <li
                className={className}
                onClick={onClick}
                onMouseOver={changeBackground}
                onMouseLeave={restoreBackground}
                style={{
                    borderRadius: '5px',
                    float: 'left',
                    textAlign: 'center',
                    padding: '10px',
                    marginBottom: '-7px',
                    marginLeft: '4px',
                    marginRight: '4px',
                    cursor: 'pointer',
                    transition: 'color .2s ease-in-out, background-color .2s ease-in-out,border-bottom-color .2s ease-in-out',
                }}
            >
                {label}
                {/*
                This is an experiment. Trying to inline as much CSS as possible, if not in the
                components that will use them, then as close as possible.
                */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                      .tab-list-active { 
                        cursor: default;
                        color: '#fff';
                        box-shadow: 2px 2px rgba(0.5, 0.5, 0.5, 0.2);
                        background: rgb(20, 20, 20, 0.2);
                        background: linear-gradient(180deg, 
                                    rgba(100, 100, 100, 0.1) 30%, 
                                    rgba(20, 20, 20, 0.4) 100%);
                        font-weight: 500;
                        text-shadow: 1px 1px rgba(0.5, 0.5, 0.5, 0.5);
                      }
                `
                }}/>
            </li>
        );
    }
}

export default Tab;