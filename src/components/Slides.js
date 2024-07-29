import React, { useState } from 'react';







function Slides({slides}) {
    const [activeBanner, setActiveBanner] = useState(slides[0] ?? {});

    function onRestart() {
        setActiveBanner(slides[0])
    }
    
    
    function onClick(type) {
        const indexActive = slides.findIndex((currValCheck) => currValCheck === activeBanner)

        setActiveBanner(() => type === 'next' ? slides[indexActive+1] : slides[indexActive-1])
    }
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={onRestart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={() => onClick('prev')}>Prev</button>
                <button data-testid="button-next" className="small" onClick={() => onClick('next')}>Next</button>
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
