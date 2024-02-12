import { isPasswordAllowed } from "../src/utils/auth";

test('isPasswordAllover only allows some password', ()=>{
    expect(isPasswordAllowed('')).toBe(false)
    expect(isPasswordAllowed('ffasfasfasf')).toBe(false)
    expect(isPasswordAllowed('124124124')).toBe(false)
    expect(isPasswordAllowed('fasf.tetas.s')).toBe(false)
})

test ('userToJSON excludes secure properties',()=>{
 
})