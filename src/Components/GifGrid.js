import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //Usar mi Custom Hook
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {/* {loading? 'Cargando...' : 'Cargado...'} */}
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        <div className="card-grid">
            {
                // images.map(img => (
                //     <li key={img.id}>{img.title}</li>
                // ))
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        // img={img}
                        {...img}
                    />
                ))
            }
        </div>
        </>
    )
}
