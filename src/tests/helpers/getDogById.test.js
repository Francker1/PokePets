import { getDogById } from "../../helpers/getDogById";

describe("Test in function getDogById", () => {

    const dogId = 3;
    

    test("Should get one element", async () => {

        const dog = await getDogById(dogId);
        const dogResponse = Object.keys(dog);

        expect(dogResponse.length).toBe(10);

    });

    test("The element has img on https protocol", async () => {

      const dog = await getDogById(dogId);

      expect(dog.img.includes("https")).toBe(true);

    });
    
})
