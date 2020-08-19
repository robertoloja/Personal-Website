import React from 'react'
import ThumbnailGallery from '../ThumbnailGallery/ThumbnailGallery'

const SmartHive = () => {
    return (
        <div style={{ padding: '40px' }}>
            <p>
                Bee populations have been in decline since the late 1990's
                (citation needed) and, since pollination by bees accounts
                for as much as 40% of global agricultural production (citation
                needed), the decline in bee populations has direct consequences
                to humans.
            </p>

            <p>
                Counter-intuitively, urban bee populations have declined slower
                than non-urban bees, a fact explained by the higher number of
                beekeepers residing in cities (e.g.
                <a href='http://torontobeekeeping.ca/'> The Toronto Beekepers
                    Collective</a>). Thus, urban hives are generally more well tended.
            </p>

            <p>
                But as the global decline of bee populations accelerates, and the time
                investment of training beekepers remains constant, it becomes important
                to increase existing beekeepers' reach. SmartHive was designed as a tool
                for remote monitoring of beehives' key health indicators.
            </p>
            <ThumbnailGallery
                images={[
                    {
                        image_filename: 'housing-render',
                        image_caption: [
                            'A laser-cut acryllic housing was designed for the weight sensors and chosen computing platform, ' +
                            'a Raspberry Pi. This would support the weight of a standard Langstroth hive, allowing for ' +
                            'remote measurement of a hive\'s weight.',
                            'As bees do not hibernate, but do stop making honey, they rely on existing honey stores ' +
                            'to survive until Spring. Tracking hive weight over winter allows for early identification ' +
                            'of hives at-risk of starving, which can be rescued in greenhouses.'
                        ]
                    },
                    {
                        image_filename: 'smarthive',
                        image_caption: [
                            'The finished prototype included ingress/egress sensors for estimating hive population changes, ' +
                            'as well as temperature and humidity sensors.',
                            'Temperature sensors were located along four of the hive\'s eight corners. By measuring temperature ' +
                            'differences along the axes defined by these sensor locations, we could estimate the position of a hive ' +
                            'cluster during Winter. The closer to an outter wall the cluster, the more at-risk the hive.'
                        ]
                    },
                    {
                        image_filename: 'HiveInfo',
                        image_caption: ['The Android app provided near real-time information on individual hives.']
                    },
                    {
                        image_filename: 'HiveList',
                        image_caption: [
                            'Multiple hives could be monitored remotely through the Android app, whether by the same beekeeper, or ' +
                            'groups of beekepers sharing access permissions.',
                            'All authentication was handled through Google\'s Firebase services.'
                        ]
                    },
                ]}
            />
        </div>
    )
}

export default SmartHive
