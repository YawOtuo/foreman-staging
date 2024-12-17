type TemplateIds = {
  [key: string]: string;
};

type GeneralEmailRecipients = {
  [key: string]: string[];
};

export const templateIds: TemplateIds = {
  "order-unpaid": "d-ed6705d039204faca879967c368e977b",
  signup: "d-e9abdb83e815415b9330067e7656fb71",
  "order-paid": "d-2fb4ddb59dc244a38609592b6c448cc5",
};

export const generalEmailRecipients: GeneralEmailRecipients = {
  signup: ["foreman.developers@gmail.com"],
};

export const fromEmail: string = "info@foremangh.com";
