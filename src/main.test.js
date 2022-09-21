import { getName } from "./main";

it("expect to return Lior Aytegev",()=>{
  expect(getName()).toBe("Lior Aytegev")
})
it("expect return anything but Lior Aytegev",()=>{
  expect(getName()).not.toBe("Lior")
})