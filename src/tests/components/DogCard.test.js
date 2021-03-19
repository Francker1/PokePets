import React from "react";
import { shallow } from "enzyme";
import DogCard from "../../components/dogs/DogCard";


describe('Test in <DogCard /> component', () => {
    
    test('Should render component correctly', () => {

        const wrapper = shallow( <DogCard id={1} name={"Mastín"} /> );

        expect(wrapper).toMatchSnapshot();
    });
});
