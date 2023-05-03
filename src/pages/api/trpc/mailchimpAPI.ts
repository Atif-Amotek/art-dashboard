const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API,
    server: process.env.MAILCHIMP_REGION
})

const GetMailChimpList = async () => {
    const response = await mailchimp.lists.getAllLists();
    console.log(response);
}

export default GetMailChimpList;