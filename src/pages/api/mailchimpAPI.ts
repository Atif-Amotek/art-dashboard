import { useState } from "react";

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API,
    server: process.env.MAILCHIMP_REGION
})

export const GetMailChimpList = async () => {
    const response = await mailchimp.lists.getAllLists();
    console.log(response);
}

export const GetMembersFromList = async () => {
    const memberList = new Set();
    const response = await mailchimp.lists.getListMembersInfo("d38305ae72");

    for (let i = 0; i < response.members.length; i++) {
        memberList.add({ email: response.members[i].email_address, name: response.members[i].full_name })
    }

    const memberListArray = Array.from(memberList);

    return {
        memberListArray
    }
}