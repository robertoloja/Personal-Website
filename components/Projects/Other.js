import React from 'react'
import ReactPlayer from "react-player";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

const Other = () => {
    return (
        <div style={style}>
            <h3>Book Inventory
                <a href="https://www.github.com/robertoloja/bookInventory" style={{marginLeft: '10px'}}>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </h3>
            <p>
                This was a piece of bespoke home software for an elderly friend beset by an overlarge book collection.
                The running application is hosted <a href='https://rholoj.pythonanywhere.com/'>here</a>. It is a Django
                CRUD app intended to run on a Raspberry Pi plugged into a residential router. The sole use case is to
                answer which book is in which room or shelf, while having as few UI elements as possible, and being
                legible on an original iPad. Being an early project of mine, it has a number of problems.
            </p>
            <p>
                First, the (lack of) documentation makes it almost impossible to actually run. I had to reverse engineer
                my own project to figure out how to run it again after all this time. The answer was to use Python 2.7,
                and host with Nginx using WSGI. Note to my past self: use virtual environments.
            </p>
            <p>
                Second, though this might be a virtue, the app is not actually responsive. It naively adapts to
                different screen sizes by using screen percentages and small, fixed-size UI elements, rather than using
                any of the CSS techniques available at the time (such as media queries or flexbox). The positive spin on
                this flaw is that, regardless of not being responsive, the app was perfectly usable on all intended
                devices, as well as simpler, and easier to support.
            </p>
            <p>
                Finally, it's hideous and unpolished. Today, I'd call this app about 80% finished. At the same time,
                if it fits its purpose and solves the original problem, it is likely good enough to call done.
            </p>

            <h3 style={{marginTop: '60px'}}>
                Fito
                <a href="https://github.com/robertoloja/fito/blob/master/index.js" style={{marginLeft: '10px'}}>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </h3>
            <p>
                This is a Discord bot for my Meetup group, Formula 1 in Toronto, which has
                become online only in the age of COVID. It is mostly a simple interface for
                the fantastic <a href="http://ergast.com/mrd/">Ergast API</a>, intended to
                facilitate discussion and minimize time spent arguing about facts. As with
                everyone else, we're trying to maintain the sociability of our group, given
                the limitations of our times, which has increased our reliance on software.
            </p>
            <p>
                Though this is a tiny project, I've included it here as an accurate representation of the type
                of code I tend to write nowadays, which leans more towards functions than objects.
            </p>
            <h3 style={{marginTop: '60px'}}>Music</h3>
            <p>
                I occasionally make music. In this one, I played keyboard, bass, and guitar,
                and programmed the drums in GarageBand, as well as handling the recording, editing, and mixing.
                It's an original song, but will probably not have an end any time soon.
            </p>
            <ReactPlayer
                url='https://soundcloud.com/roberto-loja-488022066/riff1-2020-07-08-1017-am'
                width='50%'
                height='100px'
                style={{margin: 'auto', marginBottom: '30px'}}
            />
            <p>
                Unlike with software, I don't feel an especially strong compunction to finish pieces of music.
                There comes a point where continuing to work on a song is exhausting, unrewarding, and best left to
                professionals.
            </p>
        </div>
    )
}

const style = {
    padding: '40px',
    textAlign: 'justify'
}

export default Other
