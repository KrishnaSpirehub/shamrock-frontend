/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "newHomePage",
  title: "Homepage",
  type: "document",
  fields: [
    //=================| Hero Section | ===============================
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    },
    {
      name: "heroSubTitle",
      title: "Hero Sub Title",
      type: "string",
    },
    {
      name: "heroBody",
      title: "Hero Body",
      type: "text",
    },
    {
      name: "heroButton",
      title: "Hero Button",
      type: "string",
    },
    {
      name: "heroButton1",
      title: "Hero Button",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
    },
    //=================| End Hero Section | ===============================
    //=================| Achieve Net Section | ===============================
    {
      name: "achieveMediaTitle",
      title: "Achieve Media Title",
      type: "string",
    },
    {
      name: "achievemediaBody",
      title: "Achieve Media Body",
      type: "text",
    },
    {
      name: "achieveImage",
      title: "Achieve Media Image",
      type: "image",
    },
    //=================| End Achieve Net Section | ===============================
    //=================| Features Section | ===============================
    {
      name: "featuresTitle",
      title: "Features Title",
      type: "string",
    },
    {
      name: "featuresBody",
      title: "Features Body",
      type: "text",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "featuresSubTitle",
              title: "Features Sub Title",
              type: "string",
            },
            {
              name: "featuresSubBody",
              title: "Features Sub Body",
              type: "text",
            },
          ]
        }
      ]
    },
    //=================| End Features Section | ===============================
    //=================| Analytics Section | ===============================
    {
      name: "analyticsTitle",
      title: "Analytics Title",
      type: "string",
    },
    {
      name: "analyticsBody",
      title: "Analytics Body",
      type: "text",
    },
    {
      name: "analyticsBody1",
      title: "Analytics Body 2",
      type: "text",
    },
    {
      name: "analyticsImage",
      title: "Analytics Section Media Image",
      type: "image",
    },
    //=================| End Analytics Section | ===============================
    //=================| FAQ Section | ===============================
    {
      name: "faqTitle",
      title: "Faq Title",
      type: "string",
    },
    {
      name: "faqBody",
      title: "Faq Body",
      type: "text",
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
          preview: {
            select: {
              title: "question",
              subtitle: "answer",
            }
          }
        },
      ],
    },
    //=================| End Faq Section | ===============================
    //=================| Contactus Section | ===============================
    {
      name: "footerContactusTitle",
      title: "Footer Contactus Title",
      type: "string",
    },
    {
      name: "getinTitle",
      title: "Get in Title",
      type: "string",
    },
    {
      name: "getinDescription",
      title: "Getin Description",
      type: "text",
    },
    {
      name: "contactUsTitle",
      title: "Contactus Card Title",
      type: "string",
    },
    {
      name: "contactUsDescription",
      title: "Contactus Card Description",
      type: "text",
    },
    {
      name: "contactusTime",
      title: "Contactus Card Time",
      type: "string",
    },
    {
      name: "contactusEmail",
      title: "Contactus Card Email",
      type: "string",
    },
    {
      name: "contactusNumber",
      title: "Contactus Card Number",
      type: "string",
    },
    {
      name: "addressTitle",
      title: "Address Card Title",
      type: "string",
    },
    {
      name: "addressDescription",
      title: "Contactus Card Description",
      type: "string",
    },
    {
      name: "addressDetails",
      title: "Contactus Card Details",
      type: "text",
    },
    //=================| End Contactus Section | ===============================
    //=================| Footer Section | ===============================
    {
      name: "footerTitle",
      title: "Footer Title",
      type: "string",
    },
    //=================| End Footer Section | ===============================
  ],
};
