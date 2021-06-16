import React from 'react'
import {shallow} from 'enzyme';
import { GifGrid } from '../../Components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
//Lo que haremos con este jest.mock, es fingir cualquier llamada al path que pasamos entre paréntesis, y suponer o controlar la
//información que nos retornaría
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el componente correctamente', () => {
        //Mock estado inicial de useFetchGifs
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        //usaremos un mock simulando que tenemos data que nos haya regresado nuestro custom hook
        const gifs = [{
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        //Es necesario el snapshot para evaluar los elementos que contiene
        expect(wrapper).toMatchSnapshot();
        //La prueba evalua que no exista el elemento parrafo (p) ya que no debería estar porque estamos simulando con el mock que ya renderizamos
        //resultados de gifs y el parrafo solo aparece cuando se esta realizando la consulta a la API
        expect(wrapper.find('p').exists()).toBe(false);
        //Evaluo que los elementos renderizados sean los mismos que contiene la data:gifs en el mock
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
    

});