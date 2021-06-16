import React from 'react'
import {shallow} from 'enzyme';
import { GifGridItem } from '../../Components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('debe de mostrar el componente correctamente', () => {
        // const wrapper = shallow(<GifGridItem title={title} url={url}/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props())
        // console.log(img.props().src)
        // console.log(img.props().alt)
        // console.log(img.prop('src'))
        // console.log(img.prop('alt'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        console.log(div.hasClass('animate__fadeIn'));

        //una forma
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);

        //otra forma
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    })
    
    
    
})