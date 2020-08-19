import React from 'react'
import ThumbnailGallery from './ThumbnailGallery'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from "react-player"

const MenuTabs = () => {
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

  return(
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
              <Tab style={lastTabStyle}><h3>Non-Software</h3></Tab>
            </TabList>

            <TabPanel style={{ paddingTop: '1rem' }}>
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
                But as the global decline of bee populations accelerates, and the time investment of training beekepers remains constant,
                it becomes important to increase existing beekeepers' reach. SmartHive was designed as a tool for remote monitoring of 
                beehives' key health indicators.
              </p>
              <ThumbnailGallery 
                images={[
                  {
                    image_filename: 'housing-render', 
                    image_caption: ['A laser-cut acryllic housing was designed for the weight sensors and chosen computing platform, ' + 
                                    'a Raspberry Pi. This would support the weight of a standard Langstroth hive, allowing for ' +
                                    'remote measurement of a hive\'s weight.',
                                    'As bees do not hibernate, but do stop making honey, they rely on existing honey stores ' +
                                    'to survive until Spring. Tracking hive weight over winter allows for early identification ' +
                                    'of hives at-risk of starving, which can be rescued in greenhouses.']
                  },
                  {
                    image_filename: 'smarthive', 
                    image_caption: ['The finished prototype included ingress/egress sensors for estimating hive population changes, ' +
                                    'as well as temperature and humidity sensors.',
                                    'Temperature sensors were located along four of the hive\'s eight corners. By measuring temperature ' +
                                    'differences along the axes defined by these sensor locations, we could estimate the position of a hive ' +
                                    'cluster during Winter. The closer to an outter wall the cluster, the more at-risk the hive.']
                  },
                  {
                    image_filename: 'HiveInfo', 
                    image_caption: ['The Android app provided near real-time information on individual hives.']
                  },
                  {
                    image_filename: 'HiveList', 
                    image_caption: ['Multiple hives could be monitored remotely through the Android app, whether by the same beekeeper, or ' +
                                    'groups of beekepers sharing access permissions.',
                                    'All authentication was handled through Google\'s Firebase services.']
                  },
                ]} 
              />
              </TabPanel>
              <TabPanel>
                <p>Book Inventory</p>
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
                  height='100px'
                  />

                <p>
                  I've also made some art. Lately, I seem to be interested in voxels:
                </p>

                <p>
                  It also appears that I have written the beginnings of a science-fiction short story or novella.
                </p>

              </TabPanel>
            </Tabs>
  )}

export default MenuTabs
