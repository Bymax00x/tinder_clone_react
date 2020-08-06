import React,{useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
import database from '../../firebase'

function TinderCards() {
    const [people, setPeople] = useState([
        // {
        //     name: 'Batman',
        //     url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fdownload%2Fbat-minion-6n-1920x1080.jpg&f=1&nofb=1',
        // },
        // {
        //     name: 'Superman',
        //     url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2Fimages2%2FBackgrounds-Superman-Images-Hd.jpg&f=1&nofb=1',
        // }
    ]);

    useEffect(() => {
        // database.collection("people").onSnapshot((snapshot) => (
        //     setPeople(snapshot.docs.map(doc => doc.data()))
        // ))

       const unsubscribe= database.collection("people").onSnapshot((snapshot) => (
            setPeople(snapshot.docs.map(doc => doc.data()))
       ))
        
        return () => {
            unsubscribe();
        }

    }, []);
    return (
        <div>
            <div className='tinderCards__cardContainer'>
            {people.map(person => (
                <TinderCard className='swipe' key={person.name} preventSwipe={['up','down']}  >
                    <div style={{backgroundImage:`url(${person.url})`}} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>

            ))}
            </div>
           
        </div>
    )
}

export default TinderCards
