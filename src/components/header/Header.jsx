import React,{useState} from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi } from '@fortawesome/free-solid-svg-icons'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css"
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
  const[openDate ,setOpenDate] =useState(false)
  const[destination ,setDestination] =useState('')
  const[openOptions ,setOpenOptions] =useState(false)
  const[Options ,setOptions]=useState({
    adult:1,
    children:0,
    room:1
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  
  const navigate=useNavigate()
  const handleOption =(name ,operation) =>{
    setOptions((prev) => {

     return {
        ...prev , [name]:operation === "i" ? Options[name]+1:Options[name] -1,
      }});
    }
    const handleSearch = ()=>{
      navigate("/hotels" , {state :{destination , date,Options}})
    }

  return (
    <div className='header'>
      {/* important section  */}
     <div className={type === "list" ? "headerContainer listMode":"headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active ">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

{ type !=="list" &&
<>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="hederDesc">Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account</p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  />
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>
            {`${format(date[0].startDate , 
            "MM/dd/yyy")} to 
            ${format(date[0].endDate , "MM/dd/yyy")} `}
          </span>
          {openDate  &&
          <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          className='date'
          ranges={date}
          minDate={new Date()}
          />
        }

          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span 
          onClick={()=>setOpenOptions(!openOptions)}
          className='headerSearchText'>{`${Options.adult} adult . ${Options.children} children . ${Options.room} Room`}</span>
          {openOptions && 
          <div className="options">
            <div className="optionItem">
            <div className="optionText">Adult</div>
            <div className="optionCounter">
            <button className="optionCounterButton" onClick={()=>handleOption("adult" , "d")}
            disabled={Options.adult<=1}
            >-</button>
            <span className="optionCounterNumber">1</span>
            <button className="optionCounterButton" onClick={()=>handleOption("adult" , "i")}>+</button>
            </div>
            </div>
            <div className="optionItem">
            <div className="optionText">Children</div>
            <div className="optionCounter">
            <button className="optionCounterButton"onClick={()=>handleOption("children" , "d")
          }
          disabled={Options.children<=0}
          >-</button>
            <span className="optionCounterNumber">0</span>
            <button className="optionCounterButton"onClick={()=>handleOption("children" , "i")}>+</button>
            </div>
            </div>
            <div className="optionItem">
            <div className="optionText">Room</div>
            <div className="optionCounter">

            <button className="optionCounterButton"onClick={()=>handleOption("room" , "d")}            disabled={Options.room<=1}>-</button>
            <span className="optionCounterNumber">1</span>
            <button className="optionCounterButton"onClick={()=>handleOption("room" , "i")}>+</button>
            </div>
            </div>
          </div>
          }
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>}
     </div>
     
    </div>
  )
}

export default Header