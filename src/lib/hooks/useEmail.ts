import axios from "axios";
import { url } from "../../../weburl";

type Props = {
  to: string[];
  from: string
  templateId: string;
  templateData: Record<string, unknown>;
  emailName? :string
};


function useEmail() {
  const sendEmail = async ({ to, from, templateId, templateData, emailName = "ForemanGh" }: Props) => {
    try {
      const res = await axios.post(`${url}api/emails/general-email`, {
        to,
        from: {
          email: from,
          name: emailName
        },
        templateId,
        dynamicTemplateData: templateData,
      });
      return res.data; // Return response data if needed
    } catch (err) {
      throw err; // Rethrow error to handle it in the component
    }
  };

  return {
    sendEmail,
  };
}

export default useEmail;
