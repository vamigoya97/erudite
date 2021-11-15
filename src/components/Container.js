import CnnCard from './CnnCard'
import FoxCard from './FoxCard'
import '../App.css'
// import { useEffect } from 'react';


function Container(props) {

    // const sortData = props => props.data.sort((a,b) => b.dateposted > a.dateposted ? 1 : -1)
    // const sortedData = sortData(props);

    const addDates = date => {
        var months = [ "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December" ];
        var arr = date.split('-');
        var index = parseInt(arr[1], 10) - 1;
        var day = arr[2].split('T');

        return <section>{months[index]} {day[0]}, {arr[0]}</section>
    }

    const addFoxCards = data => {
        return data.map((elem, key = 0) => elem.mediaoutlet === 'fox' ? <FoxCard key={key++} image={elem.post} caption={elem.caption} date={addDates(elem.dateposted)} db={props.db} e={props.e} trust={elem.trust} untrust={elem.untrust} /> : null )
    }
    const addCnnCards = data => {
        return data.map((elem, key = 0) => elem.mediaoutlet === 'cnn' ? <CnnCard key={key++} image={elem.post} caption={elem.caption} date={addDates(elem.dateposted)} db={props.db} e={props.e} trust={elem.trust} untrust={elem.untrust} /> : null )
    }


    return(
        <div className="container">
            <div className='fox-container'>
                {addFoxCards(props.data)}
            </div>
            <div className='cnn-container'>
                {addCnnCards(props.data)}
            </div>
        </div>
    )
}

export default Container;