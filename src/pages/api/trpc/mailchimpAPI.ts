const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API,
    server: process.env.MAILCHIMP_REGION
})

const GetMailChimpList = async () => {
    const response = await mailchimp.lists.getAllLists();
    console.log(response);
}

export const GetMembersFromList = async () => {
    const response = await mailchimp.lists.getListMembersInfo("d38305ae72");
    console.log(response.members[0].email_address);
}

export default GetMailChimpList;