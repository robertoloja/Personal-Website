import React from 'react'
import SmartHive from '../Projects/SmartHive'
import BookInventory from '../Projects/BookInventory'
import Other from '../Projects/Other'
import Website from '../Projects/Website'
import Tabs from '../Tabs/Tabs'

const Projects = () =>
    <Tabs>
        <div label="SmartHive">
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
