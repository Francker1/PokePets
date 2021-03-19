import React from "react";
import { shallow } from "enzyme";
import DogCard from "../../components/dogs/DogCard";


describe('Test in <DogCard /> component', () => {

    const id = 1;
    const name = "Mastín";
    const src="http://example.img";

    const wrapper = shallow(<DogCard id={id} name={name} img={src} />);
    
    test("Should render component correctly", () => {

        expect(wrapper).toMatchSnapshot();
    });

    test("Should have an h2 element with name", () => {

        const h2 = wrapper.find("h2");
        expect(h2.text().trim()).toBe(name);
    });

    test("Should have an img with src and name props", () => {

        const img = wrapper.find("img");

        expect( img.prop("src") ).toBe(src);
        expect( img.prop("alt") ).toBe(name);
    });

    test("Html element <dl> should have class card__dog-content", () => {

        const dl = wrapper.find("dl");
        const className = dl.prop("className");

        expect(className.includes("card__dog-content")).toBe(true);
    });
});
