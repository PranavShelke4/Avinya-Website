import React from 'react'
import './perfectlySection.css'
import perfectly from '../../assets/perfectly.png'
function PerfectlySection() {
    return (
      <div className='PerSection'>
        <h1>how to use the app perfectly</h1>
        <div className='perbody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus.</div>
        <img src={perfectly} alt='Tada' width={700}/> 
        {/* <img src={vIcon} className='vIcon' width={50}/> */}
        </div>
        )
}

export default PerfectlySection