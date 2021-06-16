import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import {AddCategory} from '../../Components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    // let wrapper; puede quedar así para no inicializar dos veces el wrapper, pero se pierde el intellisense
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    //Se reinician los moks si es que tuvieramos y ademas el wrapper para que no afecte a otras pruebas, ya que al tener mas de una
    //prueba en este archivo, wrapper es utilizado por cada prueba y queda con valores que a lo mejor nos estorbaran para otras pruebas
    beforeEach(()  => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        // input.simulate('change', {target: {value: value}});
        input.simulate('change', {target: {value}});

        //Agregue un parrafo dentro del form del componente para poder evaluar
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('no debe de hacer submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';

        //simula inputChange pasando el string para el input
        wrapper.find('input').simulate('change', {target: {value}});
        //simula el submit
        wrapper.find('form').simulate('submit', {preventDefault(){} });
        //verificar setCategories se llamo al menos una vez
        expect(setCategories).toHaveBeenCalled();//--> verifica que haya sido llamdo
        expect(setCategories).toHaveBeenCalledTimes(1);//--> verifica que al menos fue llamado una vez, podemos verificar mas veces
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));//-->verifica que setCategories haya ssido llamado con al nemos una funcion

        //verificar si el valor del input esta vacio
        expect(wrapper.find('input').prop('value')).toBe('');
        
    })
    
    
    
})