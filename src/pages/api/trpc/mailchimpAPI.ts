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
    const memberEmails = new Set();
    const memberName = new Set()
    const memberLastName = new Set()
    const response = await mailchimp.lists.getListMembersInfo("d38305ae72");
    for (let i = 0; i < response.member.length; i++) {
        memberEmails.add(response.member[i].email_address);
        memberName.add(response.member[i].email_address);
        memberLastName.add(response.member[i].email_address)
    }

    return {
        memberEmails,
        memberName,
        memberLastName
    }
}