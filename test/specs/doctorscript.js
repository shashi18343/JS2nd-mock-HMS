import Login from '../pageobjects/loginpage.js'
import adminDashboardpage from '../pageobjects/admin.js'



describe("creating new doctor details",async()=>{
    it("login to the application as an admin", async()=>{

        await Login.loginAsAdmin("admin","Test@12345");
    })
    it("add a doctor detail",async() =>{
        await adminDashboardpage.addDoctor();
    })
})