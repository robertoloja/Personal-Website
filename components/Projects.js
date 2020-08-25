import React from 'react'
import SmartHive from './Projects/SmartHive'
import BookInventory from './Projects/BookInventory'
import Other from './Projects/Other'
import Website from './Projects/Website'
import Tabs from './Tabs/Tabs'

const Projects = () =>
    <Tabs style={{transitionProperty: 'width height', transitionDuration: '0.5s'}}>
        <div label="SmartHive" style={{
            transitionProperty: 'width height',
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease-in-out'
        }}>
            <SmartHive/>
        </div>

        <div label="Book Inventory">
            <BookInventory/>
        </div>

        <div label="This Website">
            <Website/>
        </div>

        <div label="Other">
            <Other/>
        </div>
    </Tabs>

export default Projects
