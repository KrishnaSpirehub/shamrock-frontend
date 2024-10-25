/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "pricingPage",
  title: "Pricing Page",
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
    //=================| End Hero Section | ===============================
    //=================| Card Section | ===============================
    {
      name: "cardButton",
      title: "Monthly Button Label",
      type: "string",
    },
    {
      name: "cardButton1",
      title: "Yearly Button Label",
      type: "string",
    },
    {
      name: "cardsMonthly",
      title: "Cards Monthly",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "cardTitle",
              title: "Card Title",
              type: "string",
            },
            {
              name: "cardPrice",
              title: "Card Price",
              type: "string",
            },
            {
              name: "cardDescription",
              title: "Card Description",
              type: "text",
            },
            {
              name: "cardPoints",
              title: "Card Points",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "pointsDescription",
                      title: "Points Description",
                      type: "text",
                    },
                  ],
                  preview: {
                    select: {
                      title: "pointsDescription",
                    },
                  }
                },
              ],
            },
            {
              name: "cardButton",
              title: "Card Button",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "cardsYearly",
      title: "Cards Yearly",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "cardTitle",
              title: "Card Title",
              type: "string",
            },
            {
              name: "cardPrice",
              title: "Card Price",
              type: "string",
            },
            {
              name: "cardDescription",
              title: "Card Description",
              type: "text",
            },
            {
              name: "cardPoints",
              title: "Card Points",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "pointsDescription",
                      title: "Points Description",
                      type: "text",
                    },
                  ],
                  preview: {
                    select: {
                      title: "pointsDescription",
                    },
                  }
                },
              ],
            },
            {
              name: "cardButton",
              title: "Card Button",
              type: "string",
            },
          ],
        },
      ],
    },
    //=================| End Card Section | ===============================
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
