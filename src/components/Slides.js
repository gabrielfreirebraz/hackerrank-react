import React, { useEffect, useState } from 'react';


function Slides({slides}) {
    const [activeBanner, setActiveBanner] = useState(slides[0] ?? {});

    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);


    useEffect(() => {
        const indexActive = lastIndexBanner()
        const total_slides = slides.length-1
   
        setPrevDisabled(indexActive === 0)
        setNextDisabled(indexActive === total_slides)

    }, [activeBanner])


    function onRestart() {
        setActiveBanner(slides[0])
    }
    
    function lastIndexBanner() {
        return slides.findIndex((currValCheck) => currValCheck === activeBanner)
    }
    
    function onClick(type) {
        const indexActive = lastIndexBanner()

        if (type === 'next') setActiveBanner(() => slides[indexActive+1])
        else if (type === 'prev') setActiveBanner(() =>  slides[indexActive-1])
    }
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={onRestart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={() => onClick('prev')} disabled={prevDisabled}>Prev</button>
                <button data-testid="button-next" className="small" onClick={() => onClick('next')} disabled={nextDisabled}>Next</button>
            </div>

            <Slide content={activeBanner} />
        </div>
    );
}

function Slide({content} = content) {
    return content && (
        <div id="slide" className="card text-center">
            <h1 data-testid="title">{content.title}</h1>
            <p data-testid="text">{content.text}</p>
        </div>
    )
}

export default Slides;
