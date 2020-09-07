import React from 'react'
import ReactPlayer from "react-player";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

const Other = () => {
    return (
        <div style={style}>
            <h3>Book Inventory<a href="https://www.github.com/robertoloja/bookInventory"><FontAwesomeIcon icon={faGithub}/></a></h3>
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

            <h3>Fito<a href="https://www.github.com/robertoloja/fito"><FontAwesomeIcon icon={faGithub}/></a></h3>
            <p>
                This is a Discord bot for my Meetup group, Formula 1 in Toronto, which has
                become online only in the age of COVID. It is mostly a simple interface for
                the fantastic <a href="http://ergast.com/mrd/">Ergast API</a>, intended to
                facilitate discussion and minimize time spent arguing about facts.
            </p>
            <h3>Music</h3>
            <p>
                I occasionally make music. In this one, I played keyboard, bass, and guitar,
                and programmed the drums in GarageBand. It's an original song, but will probably not have
                an end any time soon.
            </p>
            <ReactPlayer
                url='https://soundcloud.com/roberto-loja-488022066/riff1-2020-07-08-1017-am'
                width='25%'
                height='80px'
            />
        </div>
    )
}

const style = {
    padding: '40px',
}

export default Other
