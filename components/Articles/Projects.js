import React from 'react'
import SmartHive from '../Projects/SmartHive'
import Other from '../Projects/Other'
import Website from '../Projects/Website'
import Tabs from '../Tabs/Tabs'

const Projects = () =>
    <Tabs style={{
        margin: '-2rem',
        padding: 0,
    }}>
        <div label="SmartHive">
            <SmartHive />
        </div>

        <div label="This Website">
            <Website />
        </div>

        <div label="Other">
            <Other />
        </div>
    </Tabs>

export default Projects
