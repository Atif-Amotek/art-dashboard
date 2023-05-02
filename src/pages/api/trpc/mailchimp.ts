const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: "124e1852c6649fd1f71b82678696ea28-us9",
    server: "us9"
})

const MailChimp = async () => {
    const response = await mailchimp.ping.get();
    console.log(response);
    console.log("gelope");
}

export default MailChimp;