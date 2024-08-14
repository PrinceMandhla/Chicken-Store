import React from 'react'
import TopPicksSlider from './TopPicksSlider'
import CategoryCards from './CategoryCards';

function Home(){
    return (
        <div>
            <h2>Welcome to the Poultry Project</h2>
            <p>Elevate your poultry experience with our scientifically perfected solutions using the latest advancements in farming techniques and Biotech.</p>
            <TopPicksSlider/>
            <CategoryCards/>
        </div>

        
    )
}

export default Home;