const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: "",
    server: "us9"
})

const MailChimp = async () => {
    const response = await mailchimp.ping.get();
    console.log(response);
    console.log("gelope");
}

export default MailChimp;