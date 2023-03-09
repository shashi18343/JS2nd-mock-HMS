import { expect } from "chai";

class Login{
    get clickOnAdmin()
    {
        return $("//h3[text()='Admin Login']/..//a[text()='Click Here']")
    }
    get clickOnDoctor()
    {
        return $("//h3[text()='Doctors Login']/..//a[text()='Click Here']")
    }
    get username()
    {
        return $("//input[@name='username']")
    }
    get password()
    {
        return $("//input[@name='password']")
    }
    get loginBtn()
    {
        return $("//button[@name='submit']")
    }


   async loginAsAdmin(userName,passWord)
    {
      await  browser.maximizeWindow()
      
    await  browser.url('http://testingserver/domain/Hospital_Management_System/');
    let title1=await browser.getTitle();
    console.log(title1);
    expect(title1).to.equal("Hospital Management System");
    await this.clickOnAdmin.click();
    let title2=await browser.getTitle();
    console.log(title2);
    expect(title2).to.equal("Admin-Login");
    await this.username.setValue(userName);
    await this.password.setValue(passWord);
    await this.loginBtn.click();
    let title= await browser.getTitle();
    console.log( title);
    expect(title).to.equal("Admin | Dashboard");
    
    
    }
    async loginAsDoctor(userName,passWord)
    {
      await  browser.maximizeWindow()
      
    await  browser.url('http://testingserver/domain/Hospital_Management_System/');
    let title1=await browser.getTitle();
    console.log(title1);
    expect(title1).to.equal("Hospital Management System");
    await this.clickOnDoctor.click();
    let title2=await browser.getTitle();
    console.log(title2);
    expect(title2).to.equal("Doctor Login");
    await this.username.setValue(userName);
    await this.password.setValue(passWord);
    await this.loginBtn.click();
    let title= await browser.getTitle();
    console.log( title);
    expect(title).to.equal("Doctor  | Dashboard");
    
    
    }

}

export default new Login();