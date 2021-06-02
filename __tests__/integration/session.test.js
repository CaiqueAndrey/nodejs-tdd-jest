const {User} = require('../../src/app/models')

describe("Authentication",()=>{
    // it('should receive JWT token when authenticated with valid credentials', () => {
    
    // });
    it("should sum two numbers", async ()=>{
        const user = await User.create({name: "Caique test", email:"caiqteste@test.com", password_hash: "1234567"});

        console.log(user);

        expect(user.email).toBe("caiqteste@test.com");
    })
})