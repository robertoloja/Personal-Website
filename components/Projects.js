import React from 'react'
// import {resetIdCounter, Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import SmartHive from './Projects/SmartHive'
import BookInventory from './Projects/BookInventory'
import Other from './Projects/Other'
import Website from './Projects/Website'
import Tabs from './Tabs/Tabs'
import Tab from './Tabs/Tab'

const Projects = () => {
    const tabStyle = {
        borderTop: 'solid 1px',
        borderRight: 'solid 1px',
        float: 'left',
        textAlign: 'center',
        padding: '10px',
        marginBottom: '-20px',
        cursor: 'pointer',
        transition: 'color .2s ease-in-out, background-color .2s ease-in-out,border-bottom-color .2s ease-in-out',
    }

    const firstTabStyle = (() => {
        let firstStyle = Object.assign({}, tabStyle)
        firstStyle['borderRadius'] = '3px 0 0 0'
        firstStyle['borderLeft'] = 'solid 1px'
        return firstStyle
    })()

    const lastTabStyle = (() => {
        let lastStyle = Object.assign({}, tabStyle)
        lastStyle['borderRadius'] = '0 3px 0 0'
        return lastStyle
    })()

    return (
            <Tabs>
                <div label="SmartHive">
                    <SmartHive/>
                </div>

                <div label="Book Inventory">
                    <BookInventory/>
                </div>

                <div label="This Website">
                    <Website />
                </div>

                <div label="Other">
                    <Other />
                </div>
            </Tabs>
    )
}

export default Projects
