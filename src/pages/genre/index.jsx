import React, { useState, useEffect } from "react"
import "./styles.css"
import StickyNav from "../../components/common/StickyNav"
import Hero from "../../components/genre/Hero"
import MoviesItem from "../../components/common/MoviesItem"

function Genre() {
    const [screenWidth, setScreenWidth] = useState(getCurrentWidth())
    const [itemsNumber, setItemNumber] = useState(4)
    const [activeIndex, setActiveIndex] = useState(0)
    const maxItems = 12

    function getCurrentWidth() {
        return window.innerWidth
    }

    useEffect(() => {
        const updateWidth = () => {
            setScreenWidth(getCurrentWidth())
        }
        window.addEventListener("resize", updateWidth)
        if (screenWidth < 1000) {
            setItemNumber(3)
        } else if (screenWidth < 500) {
            setItemNumber(2)
        }
        return () => {
            window.removeEventListener("resize", updateWidth)
        }
    }, [screenWidth])

    const handlePrevClick = () => {
        let newIndex = activeIndex - 1
        if (newIndex < 0) {
            newIndex = maxItems / itemsNumber - 1
        }
        console.log(newIndex)
        setActiveIndex(newIndex)
    }
    const handleNextClick = () => {
        let newIndex = activeIndex + 1
        if (newIndex >= maxItems / itemsNumber) {
            newIndex = 0
        }
        console.log(newIndex)
        setActiveIndex(newIndex)
    }

    return (
        <div className='genre-page'>
            <StickyNav />
            <Hero />
            <div className='row'>
                <div className='header'>
                    <h3 className='title'>Title</h3>
                </div>
                <div className='container'>
                    <button
                        className='handle left-handle'
                        onClick={handlePrevClick}>
                        <div className='text'>&#8249;</div>
                    </button>
                    <div
                        className='slider'
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}>
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                        <MoviesItem />
                    </div>
                    <button
                        className='handle right-handle'
                        onClick={handleNextClick}>
                        <div className='text'>&#8250;</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Genre
