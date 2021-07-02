import React from 'react'
import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en componente <GifExpertApp />', () => {
    
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['one punch', 'dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
    
})