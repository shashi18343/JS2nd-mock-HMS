
class adminDashboardpage
{
    get clickOnDoctors()
    {
        $("//span[text()=' Doctors ']")
    }
    get clickOnAddDoctor()
    {
        $("//span[text()=' Add Doctor']")
    }
    get specialization()
    {
        $("//select[@name='Doctorspecialization']")
    }
    get docName()
    {
        $("//input[@name='docname']")
    }
   get docAdd()
   {
    $("//textarea[@name='clinicaddress']")
   }
   get docEmail()
   {
    $("//input[@name='docemail']")
   }
   get docPass()
   {
    $("//input[@name='npass']")
   }
   get docConfPass()
   {
    $("//input[@name='cfpass']")
   }
   get submitButton()
   {
    $("//button[@name='submit']")
   }


    async addDoctor()
    {
            await this.clickOnDoctors.click();
            await this.clickOnAddDoctor.click();
            // let selectSpec= this.specialization;
            // await selectSpec.click();
            // await selectSpec.("");
    await this.specialization.selectByVisibleText("Ayurveda")
        await this.docName.setValue("rohit roy")
        await this.docAdd.setValue("BTM");
        await this.docEmail.setValue("rohit@gmail.com")
        await this.docPass.setValue("5722526")
        await this.docConfPass.setValue("5722526")
        await this.submitButton.click();
    }
}

export default new adminDashboardpage();