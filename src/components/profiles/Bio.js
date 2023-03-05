import React from 'react'

const Bio = ({FullName,Age,Interests}) => {
  return (
    <div className='bio'>
           <img src="https://scontent.ftun5-1.fna.fbcdn.net/v/t39.30808-6/273433117_1311475522649968_6236058947222754529_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=VnwSMcNE6ioAX_vg_N-&_nc_ht=scontent.ftun5-1.fna&oh=00_AfAl1G7Rpn6OEDXydfK5PtfmJ0MesXzqiPcKg7BIBIFitw&oe=640A51FA"  alt="Biophoto"  style={{width:"400px"}} />
            
           <h5> {FullName}</h5>
        
            <span >Bio:</span>My name is {FullName} i'm {Age} years old, I like {Interests}
            </div>
       
      
   
  )
}

export default Bio