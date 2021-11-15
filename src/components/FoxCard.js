import '../App.css';
import { useState, useEffect } from 'react';


function FoxCard(props) {

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);

    const [trust, setTrust] = useState(props.trust);
    const [untrust, setUntrust] = useState(props.untrust);

    // const usePrevious = (value) => {
    //     const ref = useRef();
    //     useEffect(() => {
    //         ref.current = value
    //     })
    //     return ref.current
    // }

    // const prevCount = usePrevious(props.trust);

    // const { db } = useEasybase();
    // const countTrust = async(db) => {
    //     await db('POLAR-VIEWS').set({
    //         trust: 1,
    //         untrust: 2
    //     }).one()
    // }

    // useEffect(() => {
    //     countTrust(props.db);
    // }, [])

    // const handleClick = (state) => {
    //     if(!toggle) {
        
    //     }
    // }

    // const usePrevious = (value) => {
    //     const ref = useRef()
    //     useEffect(() => {
    //         ref.current = value
    //     })
    //     return ref.current
    // }

    // const prevTrust = usePrevious(trust);
    // const prevUntrust = usePrevious(untrust)

    var counter1 = trust;
    var counter2 = untrust;
    
    const handleTrustClick = () => {
        if (!toggle1) {
            counter1 = counter1 + 1
            setToggle1(true)
            // postTrust()
        } else {
            counter1 = counter1 - 1
            setToggle1(false)
            // postTrust()
        }
        setTrust(counter1)
    }
    const handleUntrustClick = () => {
        if (!toggle2) {
            counter2 = counter2 + 1
            setToggle2(true)
            // postUntrust()
        } else {
            counter2 = counter2 - 1
            setToggle2(false)
            // postUntrust()
        }
        setUntrust(counter2)
    }

    // const postTrust = async() => {
    //     try {
    //         handleTrustToggle()
    //         await props.db('POLAR-VIEWS').set({
    //             'trust': `${trust}`
    //         }).where({'mediaoutlet': 'fox'}).one()
    //     } catch(e) {
    //         alert('soy wn')
    //         console.log('soy wn')
    //     }
    // }

    const postTrust = () => {
        props.db('POLAR-VIEWS').set({
            'trust': `${trust}`
        }).where({
            'mediaoutlet': 'fox',
            'caption': `${props.caption}`
        }).one()

    }
    const postUntrust = () => {
        props.db('POLAR-VIEWS').set({
            'untrust': `${untrust}`
        }).where({
            'mediaoutlet': 'fox',
            'caption': `${props.caption}`
        }).one()
    }

    useEffect(() => {
        postTrust()
        postUntrust()
    }, [trust, untrust])

    return (
        <div className='card-fox'>
            <img className='post-img' alt='post' src={props.image} />
            <div>
                <button onClick={handleTrustClick}>trust {trust}</button>
                <button onClick={handleUntrustClick}>dont trust {untrust}</button>
            </div>
            <p className='caption-container'>{props.caption}</p>
        </div>
    )
}

export default FoxCard;