import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.jpg'
import Expert from '../Expert/Expert';

const experts = [
     { id: 1, name: "Rasel", img: expert1 },
     { id: 2, name: "Rakib", img: expert2 },
     { id: 3, name: "Rashed", img: expert3 },
     { id: 4, name: "Azad", img: expert4 },
     { id: 5, name: "Jhangkar", img: expert5 },
     { id: 6, name: "Mir", img: expert6 },
]
const Experts = () => {
     return (

          <div id='experts' className='container'>
               <h2 className='text-primary text-center my-5'>Our Experts</h2>
               <div className="row">
                    {
                         experts.map(expert => <Expert key={expert.id} expert={expert} />)
                    }
               </div>
          </div>



     );
};


// start from module 7

export default Experts;