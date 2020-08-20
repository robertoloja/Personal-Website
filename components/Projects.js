import React from 'react'
import {resetIdCounter, Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import SmartHive from './Projects/SmartHive'
import BookInventory from './Projects/BookInventory'
import Other from './Projects/Other'
import Website from './Projects/Website'

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

    resetIdCounter()

    return (
        <Tabs style={{
            margin: 0,
            padding: 0,
        }}
              selectedTabClassName="selected_tab">
            <TabList style={{
                listStyleType: 'none',
                margin: 0,
                padding: 0,
                paddingLeft: '40px',
                overflow: 'hidden'
            }}>
                <Tab style={firstTabStyle}><h3>SmartHive</h3></Tab>
                <Tab style={tabStyle}><h3>Book Inventory</h3></Tab>
                <Tab style={tabStyle}><h3>This Website</h3></Tab>
                <Tab style={lastTabStyle}><h3>Other</h3></Tab>
            </TabList>

            <TabPanel style={{paddingTop: '1rem'}}>
                <SmartHive/>
            </TabPanel>

            <TabPanel>
                <BookInventory/>
            </TabPanel>

            <TabPanel>
                <Website />
            </TabPanel>

            <TabPanel>
                <Other />
            </TabPanel>
        </Tabs>
    )
}

export default Projects
