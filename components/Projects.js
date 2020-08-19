import React from 'react'
import {resetIdCounter, Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import ReactPlayer from "react-player"
import SmartHive from './Projects/SmartHive'
import BookInventory from './Projects/BookInventory'

const Projects = () => {
    const tabStyle = {
        borderTop: 'solid 1px',
        borderRight: 'solid 1px',
        float: 'left',
        textAlign: 'center',
        padding: '10px',
        marginBottom: '-20px',
        cursor: 'pointer',
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
              disabledTabClassName='disabled_project_tab'>
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
                <p>This website</p>
            </TabPanel>
            <TabPanel>
                <p>
                    I've been known to make music. Here's a piece of one:
                </p>
                <ReactPlayer
                    url='https://soundcloud.com/roberto-loja-488022066/riff1-2020-07-08-1017-am'
                    width='25%'
                    height='80px'
                />

                <p>
                    I've also made some art. Lately, I seem to be interested in voxels:
                </p>

                <p>
                    It also appears that I have written the beginnings of a science-fiction short story or novella.
                </p>

            </TabPanel>
        </Tabs>
    )
}

export default Projects
